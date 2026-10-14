// Insert/replace `needs` (plan secondary keywords answered inside a pillar) in data/best/<slug>.ts.
// Usage: node scripts/add-needs.mjs <needs.json>   ({ slug: [{heading, productId?, text}] })
import fs from "node:fs";
const LEAK = /\b(the listing|listings?|not listed|seller|amazon lists|not stated|features we have|in the features|the data)\b/i;
const RATED = /\b\d\.\d stars?\b|\b\d[\d,]* (amazon )?ratings\b|(?<!under )\$\d/i;
const all = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
for (const [slug, needs] of Object.entries(all)) {
  const file = `data/best/${slug}.ts`;
  let src = fs.readFileSync(file, "utf8");
  const text = JSON.stringify(needs);
  const bad = text.match(LEAK) || text.match(RATED) || text.match(/[–—]/);
  if (bad) { console.log(`FAIL ${slug}: ${bad[0]}`); continue; }
  const ids = [...src.matchAll(/"?id"?: "([a-z0-9-]+)"/g)].map((m) => m[1]);
  for (const n of needs) if (n.productId && !ids.includes(n.productId)) { console.log(`warn ${slug}: unknown productId ${n.productId}, dropped`); delete n.productId; }
  src = src.replace(/\n\s*"?needs"?: \[[\s\S]*?\n\s*\],(?=\n\s*"?bottomLine"?)/, "");
  const block = JSON.stringify(needs, null, 2).split("\n").map((l, i) => (i ? "  " + l : l)).join("\n");
  src = src.replace(/(\n(\s*))("?bottomLine"?:)/, (_, nl, ind, key) => `${nl}needs: ${block},${nl}${key}`);
  fs.writeFileSync(file, src);
  console.log(`ok   ${slug}: ${needs.length} needs`);
}
