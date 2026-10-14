# Best-article prose brief (compact). Output JSON only; a script builds the page.

For each slug, read `.work/p2/facts/<slug>.json` (section, noun, angle, products with asin,
brand, title, features, rating or unverified) and write `.work/p2/prose/<slug>.json`:

{
 "slug": "...", "title": "H1, natural", "metaTitle": "<=38 chars", "description": "120-160 chars",
 "dek": "1 sentence", "intro": ["para", "para"], "shortAnswer": "3-4 sentences naming picks",
 "products": [{ "asin": "B0...", "name": "clean model name", "label": "Best Overall",
   "verdict": "1 sentence", "bestFor": "short", "keySpec": "short",
   "summary": ["what it is + why it matters in use", "how it compares with named picks here + who it suits + one caveat"],
   "specs": {"dimensions": "...", "cargoLimit": "...", "mount": "...", "features": "..."},
   "pros": ["4-12 words", "x3-4"], "cons": ["real trade-off", "x2-3"], "goodFor": ["x2"], "notFor": ["x1-2"] }],
 "howWeChose": [{"title": "...", "body": "1-2 sentences"}] (4),
 "whatToLookFor": [{"title": "...", "paragraphs": ["mechanism", "consequence + how to check"]}] (4),
 "howToChoose": [ (4 sections; every row/card names a product from this article)
   {"heading": "By <main attribute>", "table": {"headers": ["Situation","Our pick","Why"], "rows": [["..","..",".."]]}},
   {"heading": "<A> vs <B>", "cards": [{"label":"A","text":"..."},{"label":"B","text":"..."}], "note": "default advice"},
   {"heading": "For <use case> Specifically", "cards": [{"label":"Look for","text":".."},{"label":"In this comparison","text":".."}]},
   {"heading": "When to Spend More", "cards": [{"label":"Spend more if","text":".."},{"label":"Save if","text":".."}]} ],
 "faq": [{"q": "...", "a": "2-3 sentences"}] (5),
 "bottomLine": "2-3 sentences", "relatedPaths": ["2-3 paths from the list below"]
}

Spec keys allowed: dimensions, overallWidth, bikeWeight, riderLimit, cargoLimit, totalPayload,
wheelSize, riderHeightRange, stepThroughHeight, gearing, brakes, folding (real folds only), motor,
battery, assistModes, throttle, chargeTime, mount, storage, features. Give 2-4 per product, only
facts from the features text.

## Voice (hard rules)
Experienced specialist explaining how the product behaves on an adult trike in real use:
mechanism, then consequence, then decision. Concrete numbers from the features only, named
picks, real situations (narrow gate, older hands, hills, apartment, wide rear basket).
NEVER: invent numbers; claim testing; show any product's star rating or ratings count or price;
write "listing", "listed", "seller", "Amazon lists", "not stated", "product page", "in the description", "according to the maker"; use em or en
dashes; repeat marketing claims such as "eliminates tipping" or "tip-proof" (correct them).
Products with "unverified": true must not be called well reviewed or proven. Turn unknown specs
into a buyer check ("measure the basket before ordering"). Keep sibling articles distinct.

## relatedPaths options
/adult-tricycles/best-adult-tricycles/ /accessories/best-baskets-for-adult-tricycles/
/accessories/best-mirrors-for-adult-tricycles/ /accessories/best-seats-for-adult-tricycles/
/electric-tricycles/best-folding-electric-tricycles-for-adults/ /folding-tricycles/best-folding-adult-tricycles/
/accessories/best-bike-storage-tents-for-adult-tricycles/ /how-to-shop-for-your-first-adult-three-wheel-bike/
/adult-tricycle-sizing-and-fit-guide/ /adult-tricycle-weight-capacity-and-payload/
/adult-tricycle-wheel-sizes-20-24-26-inch/ /electric-tricycle-for-adults/ /adult-tricycle-basket-bags-and-liners/
/adult-tricycle-grocery-shopping-and-cargo-guide/ /adult-tricycle-helmet-fit-and-replacement/
/adult-tricycle-mirrors-setup-guide/ /how-to-store-and-transport-an-adult-tricycle/
/fat-tire-vs-standard-tire-adult-tricycles/ /adult-tricycle-gears-and-hill-riding/
plus any /<section>/<slug>/ in this batch (slugs listed in .work/p2/slugs.txt; section is in each facts file).

## prior
A product with "prior" was already covered in another article (specs, pros, cons). Reuse its facts and specs, rewrite pros/cons wording for this article's angle, and do not re-derive what is already there.
