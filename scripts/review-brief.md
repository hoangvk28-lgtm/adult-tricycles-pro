# Review writer brief (Adult Tricycles Pro): restoring old review URLs

You write `data/reviews/<slug>.ts`, each exporting `const <camelCase>: ReviewArticle` (see
`data/types.ts`). Read first: `CLAUDE.md` sections 4 and 4b, `data/types.ts`,
`components/ReviewPage.tsx` (what renders), and `data/best/best-adult-tricycles.ts` for voice.

## Input per slug (.work/reviews/)
- `<slug>.json`: path (keep EXACTLY, root level), section, oldTitle, availability, amazon (asin,
  selectionNote, image) or null, apiFeatures, apiImage.
- `<slug>.old.md`: the old article from the Wayback Machine. Use it as research notes for specs
  and model history only. Do NOT copy its prose. It contains false claims ("our testing",
  "tested in Boulder", scores): never carry these over.

## Rules
- Research-based review in the voice of an experienced specialist (CLAUDE.md 4). Never claim
  hands-on testing. No ratings, review counts or prices in visible copy. No em dashes. Never
  mention listings, sellers, "Amazon lists", product pages or the source files.
- Specs: only figures that appear in the old article or apiFeatures; treat old-article specs as
  the model's original specification. Never invent numbers. Omit unknowns.
- Fields: type "review", slug, path, sections [section], title (natural, e.g. "Schwinn Meridian
  Review: ..."), metaTitle (<= 38 chars), description (120-160 chars), dek, published
  "2026-10-14", updated "2026-10-14", methodology `${RESEARCH_STATEMENT} Editorial review.`,
  heroImage only if an image exists (width/height 500), shortAnswer, product, sectionsBody (5-7
  sections, markdown bodies, 2-4 paragraphs each: how it rides/fits in practice, who it suits,
  comfort and controls, assembly and ownership, what to watch for), alternatives (2-4, paths must
  be existing site pages listed below, each with a one-line why), faq (4-5).
- product: id, name, brand, asin ONLY when `amazon` is not null (use that asin and
  selectionNote), image only when amazon.image or apiImage exists ({src, alt}), label (e.g.
  "Single-speed cruiser trike"), verdict, bestFor, keySpec, summary (3 paragraphs), specs,
  pros (3-4), cons (2-3), goodFor, notFor. Set electric: true for e-trikes.
- availability: when it is not "available", set `availabilityNote` (one or two plain
  sentences: the model is discontinued or hard to find new; consider the alternatives below; if
  buying used, check X). Also set `historyNote`: "This review was rewritten in 2026 from our
  original article. It is research-based and does not report hands-on testing." For the
  available Schwinn, set only historyNote.
- Discontinued models still get a genuinely useful review: what the design got right or wrong,
  who it suited, and what a buyer looking for the same thing should choose now (link the
  alternatives).

## Existing site paths for alternatives
/adult-tricycles/best-adult-tricycles/ · /electric-tricycles/best-folding-electric-tricycles-for-adults/
/folding-tricycles/best-folding-adult-tricycles/ (being written in this batch) ·
/upright-vs-recumbent-adult-tricycles/ · /folding-adult-tricycle-real-world-fit/ ·
/buying-used-adult-tricycle-inspection/ · /electric-tricycle-for-adults/ ·
/adult-tricycle-gears-and-hill-riding/ · /how-to-shop-for-your-first-adult-three-wheel-bike/ ·
/recumbent-tricycle-pedals-and-foot-retention/ · /schwinn-meridian-adult-tricycle-review/ and the
other four review paths in this batch.
