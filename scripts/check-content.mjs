// Crawls a running site (default http://localhost:3000) from the sitemap and checks:
// internal links + #anchors resolve, images load, Amazon links carry our tag,
// non-Amazon links never carry it, and banned claims/leftovers are absent.
// Usage: npm run build && npm start, then: BASE=http://localhost:3000 npm run check:content
const BASE = process.env.BASE || "http://localhost:3000";
const TAG = "adulttricyclespro-20";
const BANNED = /\b(we tested|we tried|in our lab|medically reviewed by|danny|campsite)\b/i;

const errors = [];
const pages = new Map();
async function get(path) {
  if (!pages.has(path)) {
    const r = await fetch(BASE + path, { redirect: "manual" });
    pages.set(path, { status: r.status, html: r.status === 200 ? await r.text() : "" });
  }
  return pages.get(path);
}

const sitemap = await (await fetch(`${BASE}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);

for (const path of urls) {
  const { status, html } = await get(path);
  if (status !== 200) { errors.push(`${path}: HTTP ${status}`); continue; }
  const text = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<[^>]+>/g, " ");
  const bad = text.match(BANNED);
  // "not medically reviewed" is the honest status line, not a claim
  if (bad && !/not medically reviewed/i.test(text.slice(Math.max(0, bad.index - 20), bad.index + 30))) errors.push(`${path}: banned phrase "${bad[0]}"`);

  for (const [, href] of html.matchAll(/<a[^>]+href="([^"]+)"/g)) {
    const h = href.replace(/&amp;/g, "&");
    if (h.startsWith("http")) {
      const u = new URL(h);
      const isAmazon = /(^|\.)amazon\.[a-z.]+$/.test(u.hostname);
      if (isAmazon && u.searchParams.get("tag") !== TAG) errors.push(`${path}: Amazon link without our tag ${h}`);
      if (!isAmazon && h.includes(TAG)) errors.push(`${path}: Amazon tag on non-Amazon link ${h}`);
      continue;
    }
    if (h.startsWith("mailto:")) continue;
    const [p, anchor] = h.split("#");
    const target = p || path;
    if (!target.endsWith("/")) errors.push(`${path}: internal link without trailing slash ${h}`);
    const t = await get(target);
    if (t.status !== 200) errors.push(`${path}: broken link ${h} (${t.status})`);
    else if (anchor && !t.html.includes(`id="${anchor}"`)) errors.push(`${path}: missing anchor ${h}`);
  }
  for (const [, src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
    if (src.startsWith("data:")) continue;
    const r = await fetch(src.startsWith("http") ? src : BASE + src.replace(/&amp;/g, "&"));
    if (!r.ok) errors.push(`${path}: image ${src} (${r.status})`);
  }
  for (const [, alt] of html.matchAll(/<img[^>]*alt="([^"]*)"/g)) if (!alt.trim()) errors.push(`${path}: empty alt`);
}

console.log(`Checked ${urls.length} sitemap URLs, ${pages.size} pages fetched.`);
if (errors.length) { console.log(errors.join("\n")); process.exit(1); }
console.log("All checks passed.");
