// Stage A (zero LLM tokens), adapted from HardcastlesRV.
// Usage: node scripts/stage-a.mjs <config.json> <pool.json> <out-dir> [ratings.txt]
// config: { "<slug>": { section, noun:[plural,singular], angle, must, ban, also?, req?, minPrice?, maxPrice?, maxRank?, n?, allowReuse? } }
//   req: regex that must match title or features (e.g. a capacity or speed count)
//   must/ban/also are regex source strings (case-insensitive) tested against the product title.
// Picks on-topic products with images and features, drops weak sellers (Amazon site-wide sales
// rank above maxRank, default 250000), dedupes near-identical variants, caps 2 per brand, never
// reuses an ASIN already in data/best/*.ts or picked for another slug, and spreads picks across
// the price range. If a ratings file (scripts/amazon-ratings.sh output) is given, products under
// 4.2 stars or 20 ratings are dropped. Default is rank mode: no ratings file, every pick is a
// strong site-wide seller flagged "unverified" (selectionNote = sales rank).
import fs from "node:fs";
import path from "node:path";

const [cfgFile, poolFile, outDir, ratingsFile] = process.argv.slice(2);
const cfg = JSON.parse(fs.readFileSync(cfgFile, "utf8"));
const pool = JSON.parse(fs.readFileSync(poolFile, "utf8"));
fs.mkdirSync(outDir, { recursive: true });

const used = new Set();
// prior: specs/pros/cons already written for an ASIN in another article, so the writer can adapt
// them to the new angle instead of analysing the product from scratch (saves writer tokens).
const prior = {};
for (const f of fs.readdirSync("data/best")) {
  const src = fs.readFileSync(`data/best/${f}`, "utf8");
  for (const m of src.matchAll(/"?asin"?: "([A-Z0-9]{10})"/g)) used.add(m[1]);
  for (const m of src.matchAll(/"asin": "([A-Z0-9]{10})"[\s\S]*?"specs": (\{[\s\S]*?\}),\s*"pros": (\[[\s\S]*?\]),\s*"cons": (\[[\s\S]*?\])/g)) {
    try { prior[m[1]] ??= { from: f.replace(/\.ts$/, ""), specs: JSON.parse(m[2]), pros: JSON.parse(m[3]), cons: JSON.parse(m[4]) }; } catch {}
  }
}

const ratings = {};
if (ratingsFile && fs.existsSync(ratingsFile))
  for (const l of fs.readFileSync(ratingsFile, "utf8").trim().split("\n")) {
    const [a, r, c] = l.split("|").map((s) => s.trim());
    if (r && r !== "?") ratings[a] = { rating: parseFloat(r), count: parseInt(c.replace(/[^0-9]/g, "")) || 0 };
  }

const all = {};
for (const items of Object.values(pool)) for (const i of items) if (!all[i.asin] || (i.salesRank && !all[i.asin].salesRank)) all[i.asin] = i;

for (const [slug, c] of Object.entries(cfg)) {
  const must = new RegExp(c.must, "i"), ban = new RegExp(c.ban, "i"), also = c.also ? new RegExp(c.also, "i") : null;
  const maxRank = c.maxRank ?? 250000, n = c.n ?? 6;
  const source = [...(pool[slug] ?? []), ...Object.values(all)];
  const seenAsin = new Set(), seenKey = new Set(), cand = [];
  let reused = 0; // allowReuse: max products shared with other articles (cluster siblings)
  for (const i of source) {
    const t = i.title || "";
    if (seenAsin.has(i.asin)) continue;
    seenAsin.add(i.asin);
    if (!must.test(t) || ban.test(t) || (also && !also.test(t))) continue;
    if (!i.img || !i.features?.length) continue;
    if (used.has(i.asin) && !(c.allowReuse && reused < c.allowReuse)) continue;
    if (!i.salesRank || i.salesRank > maxRank) continue;
    if (c.minPrice && !(i.price >= c.minPrice)) continue;
    if (c.maxPrice && !(i.price && i.price <= c.maxPrice)) continue;
    if (c.req && !new RegExp(c.req, "i").test(t + " " + (i.features || []).join(" "))) continue;
    const rt = ratings[i.asin];
    if (rt && (rt.rating < 4.2 || rt.count < 20)) continue;
    // Rank mode (default since 2026-10-15): no rating scraping. Accept only strong site-wide
    // sellers (never category/sub-category rank): trikes <= 200000, accessories <= 70000, or
    // c.sellerMaxRank for a niche. A readable rating, when a ratings file is given, still vetoes.
    if (!rt && i.salesRank > (c.sellerMaxRank ?? (c.section === "accessories" ? 70000 : 200000))) continue;
    const key = `${(i.brand || "").toLowerCase()}|${t.toLowerCase().replace(/[^a-z ]/g, "").split(" ").slice(0, 5).join(" ")}`;
    if (seenKey.has(key)) continue;
    seenKey.add(key);
    if (used.has(i.asin)) reused++;
    cand.push(i);
  }
  cand.sort((a, b) => a.salesRank - b.salesRank);
  // spread: for price-tier articles, keep the better-selling half, then pick evenly across the
  // price range up to the ceiling so tiers do not all repeat the same cheapest products.
  if (c.spread && cand.length > n) {
    const pool2 = cand.slice(0, Math.max(n * 2, Math.ceil(cand.length / 2))).sort((a, b) => a.price - b.price);
    const step = (pool2.length - 1) / (n - 1);
    const spreadPick = [...new Set(Array.from({ length: n }, (_, k) => pool2[Math.round(k * step)]))];
    cand.splice(0, cand.length, ...spreadPick, ...cand.filter((x) => !spreadPick.includes(x)));
  }
  // best sellers first, then spread by price, max 2 per brand
  const brand = {}, picks = [];
  for (const i of cand) {
    if (picks.length >= n) break;
    const b = (i.brand || "x").toLowerCase();
    if ((brand[b] ?? 0) >= 2) continue;
    brand[b] = (brand[b] ?? 0) + 1;
    picks.push(i);
  }
  picks.forEach((p) => used.add(p.asin));
  const out = {
    slug, section: c.section, noun: { plural: c.noun[0], singular: c.noun[1] }, angle: c.angle,
    status: picks.length >= (c.minAccept ?? 4) ? "ok" : "THIN",
    products: picks.map((p) => ({
      asin: p.asin, brand: p.brand, title: p.title, image: p.img, price: p.price, salesRank: p.salesRank,
      ...(ratings[p.asin] ? { rating: ratings[p.asin].rating, ratingCount: ratings[p.asin].count } : { unverified: true }),
      ...(prior[p.asin] ? { prior: prior[p.asin], features: p.features.slice(0, 5).map((f) => f.replace(/\s+/g, " ").slice(0, 300)) } : { features: p.features.slice(0, 5).map((f) => f.replace(/\s+/g, " ").slice(0, 300)) }),
    })),
  };
  fs.writeFileSync(path.join(outDir, `${slug}.json`), JSON.stringify(out, null, 1));
  console.log(`${out.status.padEnd(5)} ${slug.padEnd(54)} picks=${picks.length} candidates=${cand.length}`);
}
