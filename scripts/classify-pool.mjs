// Tag each pool item with a product category from its title, so Stage A can require the right
// category (added 2026-10-15: keyword regexes let tires into helmet articles, Bell-brand tubes
// into bell articles, etc.). Earliest accessory noun wins; a trike is only a trike when no
// accessory noun appears. Usage: node scripts/classify-pool.mjs pool.json out.json
import fs from "node:fs";
const CATS = [
  ["tube", /\binner tubes?\b|\btubes?\b(?! sealant)/i], ["tire", /\btires?\b|\btyres?\b/i],
  ["helmet", /\bhelmets?\b/i], ["lock", /\blocks?\b|u-lock/i], ["bell", /\bbells?\b/i], ["horn", /\bhorns?\b/i],
  ["mirror", /\bmirrors?\b/i], ["light", /\blights?\b|\blamps?\b|headlight|taillight/i], ["pump", /\bpumps?\b|inflator/i],
  ["gauge", /\bgauges?\b/i], ["torque", /torque/i], ["brakepad", /brake pads?|\bpads?\b/i], ["cable", /\bcables?\b|housing|cable cutter|end caps?/i],
  ["lube", /\blube\b|lubricant/i], ["cleaner", /clean/i], ["repair", /repair kit|patch/i], ["lever", /tire levers?|tyre levers?|\blevers?\b/i],
  ["multitool", /multi.?tool|tool kit|ratchet/i], ["reflect", /reflective tape|reflectors?|stickers?|rim tape/i], ["vest", /\bvests?\b/i],
  ["jacket", /\bjackets?\b|raincoat/i], ["seat", /\bseats?\b|saddle/i], ["tent", /\btents?\b|\bsheds?\b/i], ["cover", /\bcovers?\b/i],
  ["basket", /\bbaskets?\b/i], ["alarm", /\balarms?\b/i], ["rack", /\bracks?\b|carrier/i], ["chain", /\bchains?\b|master link|quick link|missing link/i],
  ["bag", /\bbags?\b|pannier/i], ["grip", /\bgrips?\b/i], ["wheel", /wheelset|\bwheels?\b(?! bike)/i],
];
// "Adult Tricycle Cover" is a cover; "Adult Tricycle, 7 Speed ... with Basket" is a trike.
const TRIKE_ACC = /(tricycle|trike)s?\s+(\w+\s+)?(cover|basket|seat|rack|carrier|bag|mirror|light|tire|tube|wheelset|flag|lock|bell|horn|pedal|grip|cushion)/i;
const TRIKE = /tricycle|\btrikes?\b|3 wheel|three wheel/i;
export function classify(title) {
  let t = title.replace(/^(Bell|Bell Sports)\b/i, "");          // brand, not the product
  let best = null;
  for (const [cat, re] of CATS) { const m = re.exec(t); if (m && (!best || m.index < best.i)) best = { cat, i: m.index }; }
  if (best?.cat === "chain" && /\block\b/i.test(t)) best.cat = "lock";
  const tm = TRIKE.exec(t);
  if (tm && (!best || tm.index < best.i) && !TRIKE_ACC.test(t)) return "trike";
  if (best) return best.cat;
  return tm ? "trike" : "other";
}
if ((process.argv[1] || "").endsWith("classify-pool.mjs")) {
  const [inF, outF] = process.argv.slice(2);
  const pool = JSON.parse(fs.readFileSync(inF, "utf8"));
  for (const items of Object.values(pool)) for (const i of items) i.title = `[${classify(i.title || "")}] ${i.title}`;
  fs.writeFileSync(outF, JSON.stringify(pool));
}
