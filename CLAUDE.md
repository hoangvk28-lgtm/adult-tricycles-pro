# Adult Tricycles Pro: CLAUDE.md

@AGENTS.md

## 0. Communication
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

## 3. Product selection (MANDATORY)
The Creators API does NOT return star ratings or review counts for any of our credentials. Do not treat missing ratings as neutral, and do not use category Best Sellers Rank alone: a "#4 in Road Bikes" listing turned out to have 2 ratings at 3.0 stars.

1. Build the pool with a Stage A script (port HardcastlesRV `scripts/stage-a.mjs`: per-cluster q/must/ban/req config, cached queries, one compact fact file per slug). Until it is ported, `node scripts/rank-pool.mjs queries.json out.json` (several queries, three sort orders, sales rank per ASIN). Add brand-name queries for established models.
2. Get real ratings: `scripts/amazon-ratings.sh <ASIN...>` (reads the public product page; for internal selection only, never displayed).
3. Minimum bar: **4.2 stars and 20+ ratings**. Below that, a product is not eligible, however good its listing reads.
4. Variants share reviews unevenly. Use the ASIN of the listing with the most ratings for that model (Schwinn Meridian B08239YG6M has 3,345; its sibling B08YFKB3HM shows 210).
5. Exclude kids' trikes, drift trikes and anything outside the article's scope (folding and electric have their own articles).
6. Record evidence in `selectionNote` on each product (rating, count, date). Never render ratings, review counts or prices on the site.
7. If fewer than 4 products clear the bar, say so to the user instead of padding the list.

## 3b. Writer agent
One Sonnet subagent (`model: "sonnet"`) at a time, briefed with `scripts/best-brief.md`. Never parallel writers.

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
`npx tsc --noEmit`, `npx eslint .`, `npm run build`, then `npm start` and `BASE=http://localhost:3000 npm run check:content`. Screenshot the new page (desktop and 390px mobile) with headless Chrome and look at it.

## 6. Config still needed from the owner
NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, NEXT_PUBLIC_CONTACT_EMAIL, Vercel project and GitHub repo.
