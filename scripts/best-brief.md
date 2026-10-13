# Best-article writer brief (Adult Tricycles Pro)

You write `data/best/<slug>.ts` files. Read these first, fully:
1. `CLAUDE.md` sections 4 and 4b (voice and banned phrasing). They are hard rules.
2. `data/types.ts` (`BestArticle`, `Product`, `TrikeSpecs`, `ChooseSection`).
3. `data/best/best-adult-tricycles.ts`: the reference article. Match its shape, depth and voice.

## Input
`.work/p1/facts/<slug>.json` gives, per slug: section, title idea, angle, and the chosen products
(asin, brand, title, image, rating, ratingCount, features). Products are already selected and
verified (4.2+ stars, 20+ ratings). Use ONLY these products, in the given order unless the facts
file says otherwise. Do not run web searches or API calls.

## Output per slug
- `data/best/<slug>.ts` exporting `const <camelCase>: BestArticle`.
- Fields: noun { plural, singular } (e.g. "Tricycle Baskets"/"Tricycle Basket"; used in two section headings), type "best", slug, path `/<section>/<slug>/`, sections [section], title (H1, natural,
  not stuffed), metaTitle (<= 38 chars so "<metaTitle> | Adult Tricycles Pro" <= 60), description
  (120-160 chars), dek, published/updated "2026-10-13",
  methodology `${RESEARCH_STATEMENT} Editorial review.`, heroImage = first product image
  (width/height 500), intro (2 paragraphs), shortAnswer, products, howWeChose (4-5),
  whatToLookFor (5-6, each 2-3 paragraphs), howToChoose (5-6 sections: a primary-attribute table,
  a budget/value or size table, one binary "A vs B" cards section, a second axis table, a
  "For X Specifically" cards section, "When to Spend More" cards), faq (5-6), bottomLine,
  amazonSearch (plain phrase), relatedPaths (2-4 existing paths, see list below).
- Each product: id (kebab), name (clean model name, not the Amazon title), brand, asin,
  selectionNote "<rating> stars, <count> ratings (2026-10-13)", label (e.g. "Best Overall"),
  verdict (one sentence), bestFor (short), keySpec (short), image {src, alt}, summary (3
  paragraphs separated by \n\n: what it is and why it matters in use; how it compares with named
  siblings in this article; who it suits plus one honest caveat), specs (TrikeSpecs keys only,
  only values you actually have; for non-trike products use the closest keys, e.g. dimensions,
  cargoLimit, totalPayload, bikeWeight (item weight), folding; give at least 2-3 specs per
  product so the comparison table has columns; omit unknowns), pros (3-4, 4-12 words), cons (2-3, real
  trade-offs, never "X not listed"), goodFor (2-3), notFor (1-2).
- Every howToChoose table row and card must name a product from this article.
- For electric products set `electric: true` and include motor/battery when known.

## Voice (summary of CLAUDE.md 4/4b)
Experienced specialist who knows how these machines and accessories behave in use and where
buyers go wrong. Mechanism -> consequence -> decision. Concrete numbers from the facts, named
products, real scenarios (narrow gate, older hands, hilly route, apartment storage). No hype, no
em dashes, no "we tested/rode", no invented numbers. NEVER mention listings, sellers, "not
listed", "publishes", "Amazon lists", product pages, or the facts file. Turn unknowns into buyer
actions. Do not repeat marketing claims like "eliminates tipping"; correct them. Never imply a
trike cannot tip or suits every balance condition. Accessories: be honest about fit on trikes
specifically (trike rear baskets, wide axles, upright posture, low recumbent seats).

## Existing paths for relatedPaths
/adult-tricycles/best-adult-tricycles/ (and any new best paths in this batch)
/how-to-shop-for-your-first-adult-three-wheel-bike/
/electric-tricycle-for-adults/
/adult-tricycle-sizing-and-fit-guide/
/how-to-ride-an-adult-tricycle-safely/
/how-to-store-and-transport-an-adult-tricycle/
/adult-tricycle-gears-and-hill-riding/
/adult-tricycle-maintenance-checklist/
/adult-tricycle-brakes-and-parking-brakes/
/adult-tricycle-grocery-shopping-and-cargo-guide/
/adult-tricycle-tires-pressure-and-punctures/
/electric-tricycle-range-and-route-planning/
/upright-vs-recumbent-adult-tricycles/

## When done
Run `npx tsc --noEmit` once at the end. Do not register files in data/best.ts (the orchestrator
does). Report: files written, any product you think does not fit its slug and why.
