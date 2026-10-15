# Thicken brief: rewrite thin guide sections of an existing Best article (Adult Tricycles Pro)

Input `.work/thick/in/<slug>.json`: title, noun, section, products (name, label, keySpec, bestFor,
verdict, specs, pros, cons) and the current howWeChose, whatToLookFor, howToChoose, faq, bottomLine.
Output `.work/thick/out/<slug>.json`: {"slug", "howWeChose", "whatToLookFor", "howToChoose", "faq",
"bottomLine"} in exactly the same shapes as the input. Products are fixed: do not add, drop or
rename any. Keep the current ideas where they are right; expand them into real advice.

## Required depth (the import script rejects anything thinner)
- howWeChose: 4-5 items, each body 2 sentences, 18-35 words: what we weighed and why it matters on a trike.
- whatToLookFor: 4-6 items, each with 2 paragraphs of 2-3 sentences (25-50 words each):
  paragraph 1 = the mechanism in plain words; paragraph 2 = the consequence for a trike rider and
  exactly how to check it before buying (measure, look for a number, test a fit).
- howToChoose: keep 4 sections (By <main attribute> table, A vs B cards + note, For <use case>
  Specifically cards, When to Spend More cards). Table rows: situation, our pick (exact product
  name from products), why (6-15 words). Cards: 2-3 sentences (18-45 words) naming products.
- faq: 5-6 questions a real buyer asks; answers 2-4 sentences, 35-70 words, concrete.
- bottomLine: 3 sentences, 40-70 words, naming the top pick and who should pick which alternative.

## Voice and hard rules
Experienced specialist: mechanism, then consequence, then decision. Upright posture, older hands,
wide rear baskets, narrow gates, hills, apartment storage. Use only numbers present in the input;
never invent specs. Never claim testing. Never show star ratings, ratings counts or prices (a
price-tier band like "under $150" in the title is fine). Products have unverified ratings: never
call them well reviewed, proven, popular or highly rated. NEVER write: features, listing, listed,
lists, seller, not stated, product page, the description, according to the maker/spec, the facts,
campsite; no em or en dashes. Turn unknowns into buyer checks ("measure the rear platform").
Validate each file with JSON.parse before finishing.
