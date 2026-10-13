# Adult Tricycles Pro

Next.js 16 + Tailwind 4 affiliate site for https://adulttricyclespro.com (Amazon tag `adulttricyclespro-20`).
Independent copy built from the Danny Camping codebase; it shares no config, data or services with it.

## Content model
- `data/articles.ts`: guides. The 4 restored historical URLs live at the root (`/<slug>/`). Never move or rename them.
- `content/guides/*.md`: guide bodies. Image + italic caption paragraph renders as `<figure>`; captions, credits and licenses must stay intact.
- `data/best.ts`: "Best" roundups at `/<section>/<slug>/`. `data/reviews.ts`: single-model reviews. Both are empty: add an entry only with full content, verified specs and real ASINs.
- Products (`data/types.ts`): store specs exactly as the manufacturer publishes them. Missing specs render as "Not listed". `asin` must be real; the Amazon button appears only for a valid ASIN. `merchantUrl` never gets the Amazon tag.
- Section hubs stay `noindex` and out of the sitemap until they have 2+ articles.
- `/import/` (gitignored) holds the original restoration ZIP contents.

## Commands
npm run dev | npm run build | npm run lint | npx tsc --noEmit
Content check: `npm run build && npm start`, then `BASE=http://localhost:3000 npm run check:content`

## Environment variables
NEXT_PUBLIC_SITE_URL=https://adulttricyclespro.com
NEXT_PUBLIC_GA_ID=            # GA4 ID; nothing loads until set
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=
NEXT_PUBLIC_CONTACT_EMAIL=
