// Minimum depth for Best-article guide sections (added 2026-10-15 after many articles shipped
// with one-word FAQ answers. Calibrated to ~70% of best-bike-storage-tents-for-adult-tricycles,
// which the user confirmed as the right depth, and 4-word "What to Look For" paragraphs). Each section must reach
// an average word count and no single item may fall under a hard floor. Used by build-best.mjs
// and thicken.mjs, so a writer that compresses these sections fails the build.
const words = (s) => String(s || "").split(/\s+/).filter(Boolean).length;
const RULES = [
  ["howWeChose body", (p) => (p.howWeChose || []).map((x) => x.body), 14, 7],
  ["whatToLookFor paragraph", (p) => (p.whatToLookFor || []).flatMap((x) => x.paragraphs || []), 18, 9],
  ["howToChoose table why", (p) => (p.howToChoose || []).flatMap((s) => (s.table?.rows || []).map((r) => r[r.length - 1])), 4, 2],
  ["howToChoose card", (p) => (p.howToChoose || []).flatMap((s) => (s.cards || []).map((c) => c.text)), 16, 8],
  ["faq answer", (p) => (p.faq || []).map((x) => x.a), 22, 12],
];
export function depthProblems(p) {
  const out = [];
  for (const [label, get, avgMin, floor] of RULES) {
    const n = get(p).map(words);
    if (!n.length) continue;
    const avg = n.reduce((a, b) => a + b, 0) / n.length;
    if (avg < avgMin) out.push(`${label} avg ${avg.toFixed(1)} < ${avgMin}`);
    const low = n.filter((x) => x < floor).length;
    if (low) out.push(`${label}: ${low} under ${floor} words`);
  }
  if ((p.howWeChose || []).length < 4) out.push("howWeChose < 4");
  if ((p.whatToLookFor || []).length < 4) out.push("whatToLookFor < 4");
  if ((p.howToChoose || []).length < 4) out.push("howToChoose < 4");
  if ((p.faq || []).length < 5) out.push("faq < 5");
  if (words(p.bottomLine) < 30) out.push(`bottomLine ${words(p.bottomLine)} words < 30`);
  return out;
}
