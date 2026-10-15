# Adult Tricycles Pro: CLAUDE.md

@AGENTS.md

## 0. Communication
- **Do not push to GitHub until the user says "push"** (user, 2026-10-15). Work continuously and commit locally; push once when asked. Vercel deploys on every push, so frequent pushes are unwanted.
- Always address the user as "cậu".
- Every internal `<Link>` uses `prefetch={false}`.

## 1. Project
- Domain: https://adulttricyclespro.com (apex is canonical; www 301s to apex). `trailingSlash: true` everywhere.
- Brand: Adult Tricycles Pro. Amazon tag on every site link: `adulttricyclespro-20` (`lib/affiliate.ts`).
- Audience: adults buying a tricycle, seniors, and family members buying for them. English, US.
- Author: Henry Clement (`data/authors.ts`, `/author/henry-clement/`). Do not add credentials, riding history or qualifications he has not confirmed.
- Stack: Next.js 16.2.6 (read `node_modules/next/dist/docs/` first), React 19, Tailwind 4. No Supabase, no admin.

## 2. Content model
- Sections: adult-tricycles, electric-tricycles, folding-tricycles, recumbent-tricycles, accessories, guides (`lib/site.ts`).
- Best: `data/best/<slug>.ts` registered in `data/best.ts`, path `/<section>/<slug>/`, rendered by `components/BestPage.tsx` (layout mapped from The Office Journal best template: Short answer, Quick Picks, Our Picks, Spec Comparison, How We Chose, What to Look For, How to Choose, FAQ, Bottom Line, Related).
- Review: `data/reviews.ts`. Never publish an empty or placeholder review.
- Guide: markdown in `content/guides/`, registered in `data/articles.ts`.
- The 4 restored historical URLs live at the root (`/<slug>/`). Never move, rename or redirect them.
- Keyword plan: `adulttricyclespro_best_keyword_plan.csv`. Done: ATP-BEST-001 best-adult-tricycles.

## 3. Product selection (MANDATORY, rank mode since 2026-10-15)
The Creators API does NOT return star ratings or review counts. Scraping product pages for ratings (`scripts/amazon-ratings.sh`) is mostly blocked by Amazon, so since 2026-10-15 the user chose **rank mode**: select on strong site-wide sales rank and do not scrape ratings.

1. Pool: `SORTS=Relevance,AvgCustomerReviews node scripts/rank-pool.mjs queries.json pool.json` (best sellers plus top-reviewed order; site-wide sales rank per ASIN). Add brand-name queries for established models.
2. Bar: **site-wide** sales rank (`websiteSalesRank`) at or under 200,000 for trikes and e-trikes, 70,000 for accessories (loosened 2026-10-15 so more articles qualify; the user accepted that some picks may rate under 4.2). Override per slug with `sellerMaxRank` only for a thin niche, and tell the user when you do. NEVER use category or sub-category rank: a "#4 in Road Bikes" listing (BODIOO) had 2 ratings at 3.0 stars.
3. Ratings are optional: always pass the merged known-ratings file (`.work/all-ratings.txt`) so, a readable rating under 4.2 stars or 20 ratings still vetoes the product. Do not spend time collecting ratings by default.
4. Variants: prefer the best-ranked ASIN for a model.
5. Exclude kids' trikes, drift trikes and anything outside the article's scope.
6. `selectionNote` records the evidence (sales rank and date). Products have no verified rating, so copy never calls them well reviewed, proven or highly rated; judge on design and specs. Never render ratings, review counts or prices on the site.
7. If fewer than 3 products clear the bar (2 for price-tier articles), skip the article and tell the user instead of padding.

## 3b. Best pipeline (~14k Sonnet tokens per article)
1. `node scripts/rank-pool.mjs queries.json pool.json` (API pool with sales rank).
2. `node scripts/stage-a.mjs config.json pool.json facts-dir` (on-topic regex, req/minPrice/maxPrice, site-wide rank bar, brand cap, no reuse beyond allowReuse; zero LLM tokens). No rating scraping.
3. Two Sonnet agents in parallel (user, 2026-10-15), ~10 slugs each per run, each on its own slug list; they read only `scripts/best-prose-brief.md` + facts and write prose JSON.
4. `node scripts/build-best.mjs facts-dir prose-dir YYYY-MM-DD --register` builds `data/best/*.ts` and rejects leaks, rating numbers, dashes, bad title/description lengths, and thin guide sections (`scripts/depth-check.mjs`, see 3c).
5. Build, `npm run check:content`, commit locally. Push only when the user says push.
Never more than two writers; never let the writer read CLAUDE.md or full reference articles.

**Freshness rule (user, 2026-10-14):** every new batch calls the API with fresh, angle-specific
queries (brand, feature, price) so articles get new products. Reuse at most 2-3 products per
article that already appear in other articles (`allowReuse: 2` or 3 in the Stage A config; the
used-ASIN scan reads both `asin:` and `"asin":`). The `prior` copy is only for those reused picks.

## 3c. Guide-section depth (MANDATORY, lesson of 2026-10-15)
**What went wrong:** the compact brief said only "1-2 sentences" with no minimum, so writer agents
compressed further each batch. 130 of 212 Best articles shipped with guide sections like
"Do these need anchors? Yes." and "Steel resists wind. Look for anchors."
(e.g. /accessories/best-storage-sheds-for-tricycles-under-150/). Nothing in the build checked depth, and
a passing build and check:content were treated as "done". Fixing it cost ~1.3M tokens.

**Reference depth:** /accessories/best-bike-storage-tents-for-adult-tricycles/ (user-approved).
`scripts/depth-check.mjs` enforces ~70% of it, as an average per section plus a floor per item:
howWeChose body avg 14 words (floor 7); whatToLookFor paragraph avg 18 (floor 9); howToChoose
table "why" avg 4 (floor 2); cards avg 16 (floor 8); faq answer avg 22 (floor 12); bottomLine 30+;
at least 4 howWeChose, 4 whatToLookFor, 4 howToChoose sections and 5 FAQs.

**Rules:**
1. `build-best.mjs` and `thicken.mjs` fail on these thresholds. Never lower them or bypass the
   check to make a batch pass; send the prose back to the writer.
2. The writer brief (`scripts/best-prose-brief.md`, Depth section) states word ranges per section.
   Keep them when editing the brief; "compact" means no padding, not one-line answers.
3. Before saying a batch is done, open one new page per batch on localhost and read the lower half
   (What to Look For, How to Choose, FAQ), not just the products.
4. To repair existing thin articles: `node scripts/thicken.mjs export <slugs.json> <in-dir>`,
   writers follow `scripts/thicken-brief.md`, then `node scripts/thicken.mjs import <out-dir>`
   (rewrites only guide sections; products untouched; validates depth, leaks, dashes).
5. Calibrate any new threshold against the reference article first; a bar that fails the
   user-approved reference is wrong.

## 4. Writing voice (MANDATORY)
Write as a specialist who has spent years around adult tricycles, their buyers and their failure points. The reader should finish each section knowing something they could not get from the Amazon listing.

- **Never paraphrase listing bullets.** Read the features, then close them and write about what they mean in use: how a single-speed 26-inch trike feels on a slope, why a rear-mounted basket changes cornering, what a 350 lb limit that includes cargo leaves for the rider, why an aluminum frame matters when the trike lives in a shed with a step.
- **Explain the mechanism, then the consequence, then the decision.** "Most budget trikes drive only the right rear wheel. On loose gravel with nothing in the basket, that wheel can spin on a climb. If your route has a gravel path, keep some weight in the basket or look for a differential."
- **Be honest about what listings hide or contradict.** If two brands publish identical size charts, say they look like siblings and tell the reader how to choose between them. If a listing claims the trike "eliminates tipping", say plainly that it does not.
- **Talk to the buyer's real situation:** a parent with weaker knees, a narrow side gate, a garage step, a hilly retirement community, a rider between sizes.
- **Concrete, not generic.** Numbers from the listing, named products, specific scenarios. Cut every sentence that could appear in any trike article ("perfect for errands", "smooth and enjoyable ride").
- **No hands-on claims.** Never "we tested/rode/measured". Expertise comes from knowing how these machines work and where buyers go wrong, not from pretending to have ridden them. Methodology stays "research-based, not hands-on tested unless explicitly stated".
- **No invented numbers.** If a spec is not published, say it is not listed and tell the reader how to check it.
- Plain, warm English for an older reader: short paragraphs, no jargon without a one-line explanation, no hype, no em dashes.
- Pros/cons: short scannable phrases (4 to 12 words), each a real fact.
- Never state or imply a tricycle cannot tip over, or that it suits every balance or mobility condition. Health content is not medically reviewed unless a real reviewer is named.

## 4b. Never expose the research process in visible copy (MANDATORY)
A review must read as the judgment of someone who knows these machines, not as a summary of a product page. Phrases that point at where the information came from make the article look copied and give the reader nothing.

**Banned in any visible text** (body, pros/cons, specs, tables, FAQ, captions):
"the listing", "listings", "listed", "not listed", "as listed", "the seller says/lists", "the manufacturer states", "publishes/published (a spec)", "not stated", "Amazon lists", "according to the product page", "the description says", "spec sheet says", "we could find on Amazon", "the data/features show".

**Rewrite the point instead of citing the source:**
- Unknown spec -> turn it into a buyer action. Not: "The listing gives no height chart for its three sizes." Write: "With three wheel sizes to choose from, size it by seat height, not wheel number: with the seat at its lowest, the rider should sit with both feet flat."
- Unknown brakes -> "Check the brakes before the first ride: the levers should be within easy reach and firm when squeezed. Trikes in this class often arrive needing a quick adjustment."
- A number you have -> state it as fact: "It weighs about 35 lb", "Schwinn sizes the 26-inch Meridian for riders 5'0\" to 6'1\"" (naming the brand's own fit range is fine).
- A dubious claim -> give your judgment: "A 24-inch frame for a 4'1\" rider is optimistic; expect most riders under 4'9\" to find it tall."
- A missing spec is never a pro/con by itself. Use a real trade-off ("Heavier steel frame", "7 gears need more upkeep") or leave it out.
- Spec tables only show values we have; empty rows are hidden, never shown as "Not listed".

`npm run check:content` fails on these phrases. Do not weaken the regex to pass; rewrite the sentence.

## 5. Checks before saying a batch is done
`npx tsc --noEmit`, `npx eslint .`, `rm -rf .next && npm run build` (a stale `.next` once served cached 404s for new pages), restart `npm start`, then `BASE=http://localhost:3000 npm run check:content`. Run the depth check over all Best articles (section 3c) and read the guide half of one new page. Screenshot the new page (desktop and 390px mobile) with headless Chrome and look at it.

## 6. Config still needed from the owner
NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, NEXT_PUBLIC_CONTACT_EMAIL, Vercel project and GitHub repo.
