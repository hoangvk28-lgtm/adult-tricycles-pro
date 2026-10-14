// Import an informational-guide batch (folder with article-index.csv, articles/*.md, images/).
// Usage: node scripts/import-guides.mjs <batch-dir> <sections.json> [YYYY-MM-DD]
//   sections.json: { "<slug>": ["guides", "<secondary-section>"], ... }
// - converts new images to /public/images/guides/*.webp (1400px max, no crop) and refreshes image-sizes.json
// - copies markdown with image paths rewritten; captions/credits are kept verbatim
// - appends registry entries to data/articles.ts, choosing a hero image not already used as a hero
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const [dir, sectionsFile, date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2);
const SECTIONS = JSON.parse(fs.readFileSync(sectionsFile, "utf8"));
const PUB = "public/images/guides";

function parseCsv(text) {
  const rows = []; let row = [], cur = "", q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) { if (c === '"' && text[i + 1] === '"') { cur += '"'; i++; } else if (c === '"') q = false; else cur += c; }
    else if (c === '"') q = true;
    else if (c === ",") { row.push(cur); cur = ""; }
    else if (c === "\n") { row.push(cur); rows.push(row); row = []; cur = ""; }
    else if (c !== "\r") cur += c;
  }
  if (cur || row.length) { row.push(cur); rows.push(row); }
  const [h, ...body] = rows;
  return body.filter((r) => r.length > 1).map((r) => Object.fromEntries(h.map((k, i) => [k.replace(/^﻿/, ""), r[i]])));
}

// 1. Images
for (const f of fs.readdirSync(path.join(dir, "images"))) {
  const out = path.join(PUB, f.replace(/\.(jpe?g|png)$/i, ".webp"));
  if (fs.existsSync(out)) continue;
  const info = await sharp(path.join(dir, "images", f)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
  console.log("image", out, info.width, info.height);
}
const sizes = {};
for (const f of fs.readdirSync(PUB)) {
  const m = await sharp(path.join(PUB, f)).metadata();
  sizes[f.replace(/\.webp$/, "")] = [m.width, m.height];
}
fs.writeFileSync("content/guides/image-sizes.json", JSON.stringify(sizes, null, 1));

// 2. Articles
let registry = fs.readFileSync("data/articles.ts", "utf8");
const usedHeroes = {};
for (const m of registry.matchAll(/heroImage: \{ src: "\/images\/guides\/([a-z0-9-]+)\.webp"/g)) usedHeroes[m[1]] = (usedHeroes[m[1]] ?? 0) + 1;
const entries = [];
for (const r of parseCsv(fs.readFileSync(path.join(dir, "article-index.csv"), "utf8"))) {
  const slug = r.slug;
  if (registry.includes(`slug: "${slug}"`)) { console.log("skip existing", slug); continue; }
  if (!SECTIONS[slug]) throw new Error(`no sections for ${slug}`);
  let md = fs.readFileSync(path.join(dir, "articles", `${slug}.md`), "utf8");
  md = md.replace(/\]\(\.\.\/images\/([a-z0-9-]+)\.(jpe?g|png)\)/gi, "](/images/guides/$1.webp)");
  fs.writeFileSync(`content/guides/${slug}.md`, md);
  const imgs = [...md.matchAll(/!\[([^\]]*)\]\(\/images\/guides\/([a-z0-9-]+)\.webp\)/g)].map((m) => ({ alt: m[1], key: m[2] }));
  const hero = [...imgs].sort((a, b) => (usedHeroes[a.key] ?? 0) - (usedHeroes[b.key] ?? 0))[0];
  usedHeroes[hero.key] = (usedHeroes[hero.key] ?? 0) + 1;
  const [w, h] = sizes[hero.key];
  let metaTitle = r.title.split(":")[0].trim();
  entries.push(`  {
    type: "guide",
    slug: "${slug}",
    path: "/${slug}/",
    sections: ${JSON.stringify(SECTIONS[slug])},
    title: ${JSON.stringify(r.title)},
    metaTitle: ${JSON.stringify(metaTitle)},
    description: ${JSON.stringify(r.meta_description)},
    published: "${date}",
    updated: "${date}",
    contentFile: "${slug}.md",
    heroImage: { src: "/images/guides/${hero.key}.webp", alt: ${JSON.stringify(hero.alt)}, width: ${w}, height: ${h} },
    methodology: RESEARCH,
  },`);
  console.log(`${(metaTitle.length + 22).toString().padStart(3)} ${metaTitle} | desc ${r.meta_description.length} | hero ${hero.key}`);
}
const i = registry.indexOf("];\n\nexport const articles");
registry = registry.slice(0, i) + `  // Imported from ${path.basename(dir)}.\n` + entries.join("\n") + "\n" + registry.slice(i);
fs.writeFileSync("data/articles.ts", registry);
console.log(entries.length, "articles added");
