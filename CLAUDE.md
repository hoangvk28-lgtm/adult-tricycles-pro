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

1. Build the pool: `node scripts/rank-pool.mjs queries.json out.json` (several queries, three sort orders, sales rank per ASIN). Add brand-name queries for established models.
2. Get real ratings: `scripts/amazon-ratings.sh <ASIN...>` (reads the public product page; for internal selection only, never displayed).
3. Minimum bar: **4.2 stars and 20+ ratings**. Below that, a product is not eligible, however good its listing reads.
4. Variants share reviews unevenly. Use the ASIN of the listing with the most ratings for that model (Schwinn Meridian B08239YG6M has 3,345; its sibling B08YFKB3HM shows 210).
5. Exclude kids' trikes, drift trikes and anything outside the article's scope (folding and electric have their own articles).
6. Record evidence in `selectionNote` on each product (rating, count, date). Never render ratings, review counts or prices on the site.
7. If fewer than 4 products clear the bar, say so to the user instead of padding the list.

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

## 5. Checks before saying a batch is done
`npx tsc --noEmit`, `npx eslint .`, `npm run build`, then `npm start` and `BASE=http://localhost:3000 npm run check:content`. Screenshot the new page (desktop and 390px mobile) with headless Chrome and look at it.

## 6. Config still needed from the owner
NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION, NEXT_PUBLIC_CONTACT_EMAIL, Vercel project and GitHub repo.
