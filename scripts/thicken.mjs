// Rewrite thin guide sections of existing Best articles without touching products.
// export: node scripts/thicken.mjs export <slugs.json> <in-dir>
// import: node scripts/thicken.mjs import <out-dir>   (validates depth + leaks, then patches data/best/<slug>.ts)
import fs from "node:fs";
import path from "node:path";
import { depthProblems } from "./depth-check.mjs";
const LEAK = /\b(the listing|listings?|not listed|as listed|the seller|amazon lists|not stated|product page|facts file|features we have|in the features|the facts|according to the (maker|manufacturer|brand|spec|specs)|the description|campsites?)\b/i;
const RATED = /\b\d\.\d stars?\b|\b(?!20\b)\d[\d,]* (amazon )?ratings\b/i;
const KEYS = ["howWeChose", "whatToLookFor", "howToChoose", "faq", "bottomLine"];
const read = (slug) => {
  const src = fs.readFileSync(`data/best/${slug}.ts`, "utf8");
  const i = src.indexOf("= {") + 2, j = src.lastIndexOf("};") + 1;
  // Files are JSON from build-best, but some carry hand-written or add-needs JS, so evaluate.
  const obj = new Function("RESEARCH_STATEMENT", `return (${src.slice(i, j)});`)("__RS__");
  return { src, i, j, obj };
};
const [mode, a, b] = process.argv.slice(2);
if (mode === "export") {
  fs.mkdirSync(b, { recursive: true });
  for (const slug of JSON.parse(fs.readFileSync(a, "utf8"))) {
    const { obj } = read(slug);
    const products = obj.products.map((p) => ({ name: p.name, label: p.label, keySpec: p.keySpec, bestFor: p.bestFor, verdict: p.verdict, specs: p.specs, pros: p.pros, cons: p.cons }));
    fs.writeFileSync(path.join(b, `${slug}.json`), JSON.stringify({ slug, title: obj.title, noun: obj.noun, section: obj.sections[0], products, ...Object.fromEntries(KEYS.map((k) => [k, obj[k]])) }, null, 1));
  }
} else if (mode === "import") {
  let ok = 0;
  for (const f of fs.readdirSync(a).filter((x) => x.endsWith(".json"))) {
    const p = JSON.parse(fs.readFileSync(path.join(a, f), "utf8"));
    const { src, i, j, obj } = read(p.slug);
    const names = obj.products.map((x) => x.name);
    const probs = depthProblems(p);
    const text = JSON.stringify(KEYS.map((k) => p[k]));
    if (LEAK.test(text)) probs.push(`leak: ${text.match(LEAK)[0]}`);
    if (RATED.test(text)) probs.push(`rating: ${text.match(RATED)[0]}`);
    if (/[–—]/.test(text)) probs.push("dash");
    const rows = (p.howToChoose || []).flatMap((s) => [...(s.table?.rows || []).map((r) => r.join(" ")), ...(s.cards || []).map((c) => c.text)]);
    const orphan = rows.filter((r) => !names.some((n) => r.includes(n.split(" ")[0])));
    if (orphan.length > rows.length / 2) probs.push(`howToChoose rows rarely name a product (${orphan.length}/${rows.length})`);
    if (probs.length) { console.log(`FAIL ${p.slug}: ${probs.join("; ")}`); continue; }
    for (const k of KEYS) obj[k] = p[k];
    const ts = src.slice(0, i) + JSON.stringify(obj, null, 2).replace(/"__RS__([^"]*)"/, "`${RESEARCH_STATEMENT}$1`") + src.slice(j);
    fs.writeFileSync(`data/best/${p.slug}.ts`, ts);
    ok++;
  }
  console.log(`patched ${ok}`);
}
