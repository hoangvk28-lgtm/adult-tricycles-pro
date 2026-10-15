// Build data/best/<slug>.ts from Stage A facts + writer prose (hybrid, like HardcastlesRV).
// Usage: node scripts/build-best.mjs <facts-dir> <prose-dir> [date] [--register]
// The writer only produces prose JSON; ids, paths, images, ASINs and selection notes come from facts.
import fs from "node:fs";
import path from "node:path";

const [factsDir, proseDir, date = new Date().toISOString().slice(0, 10)] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const register = process.argv.includes("--register");
const camel = (s) => s.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const kebab = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 50);
const LEAK = /\b(the listing|listings?|not listed|as listed|the seller|amazon lists|not stated|product page|facts file|features we have|in the features|not in the features|the facts|the data we|we have on|according to the (maker|manufacturer|brand|spec|specs)|the description|according to the listing)\b/i;
const RATED = /\b\d\.\d stars?\b|\b(?!20\b)\d[\d,]* (amazon )?ratings\b/i;
const built = [];

for (const f of fs.readdirSync(proseDir).filter((x) => x.endsWith(".json"))) {
  const prose = JSON.parse(fs.readFileSync(path.join(proseDir, f), "utf8"));
  const facts = JSON.parse(fs.readFileSync(path.join(factsDir, `${prose.slug}.json`), "utf8"));
  const byAsin = Object.fromEntries(facts.products.map((p) => [p.asin, p]));
  const problems = [];
  const products = prose.products.map((w) => {
    const fp = byAsin[w.asin];
    if (!fp) { problems.push(`unknown asin ${w.asin}`); return null; }
    return {
      id: kebab(w.name), name: w.name, brand: fp.brand || w.name.split(" ")[0], asin: fp.asin,
      selectionNote: fp.unverified ? `Strong seller (sales rank ${fp.salesRank}), rating not verified (${date})` : `${fp.rating} stars, ${fp.ratingCount} ratings (${date})`,
      ...(facts.section === "electric-tricycles" || w.electric ? { electric: true } : {}),
      label: w.label, verdict: w.verdict, bestFor: w.bestFor, keySpec: w.keySpec,
      image: { src: fp.image, alt: w.name },
      summary: Array.isArray(w.summary) ? w.summary.join("\n\n") : w.summary,
      specs: w.specs || {}, pros: w.pros, cons: w.cons, goodFor: w.goodFor || [], notFor: w.notFor || [],
    };
  }).filter(Boolean);
  const text = JSON.stringify(prose);
  if (LEAK.test(text)) problems.push(`leak: ${text.match(LEAK)[0]}`);
  if (RATED.test(text)) problems.push(`rating shown: ${text.match(RATED)[0]}`);
  if (/[–—]/.test(text)) problems.push("dash");
  if ((prose.metaTitle || "").length > 38) problems.push(`metaTitle ${prose.metaTitle.length}`);
  const dl = (prose.description || "").length;
  if (dl < 120 || dl > 160) problems.push(`description ${dl}`);
  if (problems.length) { console.log(`FAIL ${prose.slug}: ${problems.join("; ")}`); continue; }
  const article = {
    type: "best", slug: prose.slug, path: `/${facts.section}/${prose.slug}/`, sections: [facts.section], noun: facts.noun,
    title: prose.title, metaTitle: prose.metaTitle, description: prose.description, dek: prose.dek,
    published: date, updated: date, methodology: "__METHOD__",
    heroImage: { src: products[0].image.src, alt: products[0].name, width: 500, height: 500 },
    intro: prose.intro, shortAnswer: prose.shortAnswer, products,
    howWeChose: prose.howWeChose, whatToLookFor: prose.whatToLookFor, howToChoose: prose.howToChoose,
    faq: prose.faq, bottomLine: prose.bottomLine, amazonSearch: prose.amazonSearch || facts.noun.plural.toLowerCase(),
    relatedPaths: prose.relatedPaths || [],
  };
  const name = camel(prose.slug);
  const ts = `import type { BestArticle } from "@/data/types";\nimport { RESEARCH_STATEMENT } from "@/lib/site";\n\n// Built by scripts/build-best.mjs from Stage A facts + writer prose.\nexport const ${name}: BestArticle = ${JSON.stringify(article, null, 2).replace('"__METHOD__"', "`${RESEARCH_STATEMENT} Editorial review.`")};\n`;
  fs.writeFileSync(`data/best/${prose.slug}.ts`, ts);
  built.push([prose.slug, name]);
  console.log(`ok   ${prose.slug} (${products.length} products)`);
}

if (register && built.length) {
  let reg = fs.readFileSync("data/best.ts", "utf8");
  for (const [slug, name] of built) {
    if (reg.includes(`"@/data/best/${slug}"`)) continue;
    reg = reg.replace('import type { Article } from "@/data/types";\n', `import type { Article } from "@/data/types";\nimport { ${name} } from "@/data/best/${slug}";\n`);
    reg = reg.replace("export const bestArticles: Article[] = [\n", `export const bestArticles: Article[] = [\n  ${name},\n`);
  }
  fs.writeFileSync("data/best.ts", reg);
  console.log("registered", built.length);
}
