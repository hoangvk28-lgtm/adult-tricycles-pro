import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo";
import { DEFAULT_TITLE, SECTIONS, SITE_DESCRIPTION, SITE_NAME, SITE_URL, RESEARCH_STATEMENT } from "@/lib/site";
import { articles, articlesInSection, getArticleByPath } from "@/data/articles";
import { ArticleCard, authorOf } from "@/components/article";
import { formatDate, JsonLd } from "@/components/ui";
import { SectionIcon } from "@/components/SectionIcon";

export const metadata = buildMetadata({ title: DEFAULT_TITLE, description: SITE_DESCRIPTION, path: "/", absoluteTitle: true });

const FIRST = "/how-to-shop-for-your-first-adult-three-wheel-bike/";

// Needs link to the guide sections that answer them instead of thin per-need pages.
const NEEDS = [
  { need: "Buying for a parent or older rider", href: `${FIRST}#buying-for-someone-else` },
  { need: "Rider height and getting on and off", href: `${FIRST}#measure-the-rider-and-the-vehicle` },
  { need: "Weight limits and carrying cargo", href: `${FIRST}#read-weight-limits-carefully` },
  { need: "Setting a realistic budget", href: `${FIRST}#budget-for-ownership-not-just-the-checkout-price` },
  { need: "Hills, fatigue and motor assistance", href: "/electric-tricycle-for-adults/#identify-what-you-want-the-motor-to-do" },
  { need: "Storage and transport", href: `${FIRST}#check-portability-before-paying-for-folding` },
];

function SectionHeading({ title, href }: { title: string; href?: string }) {
  return (
    <div className="flex items-end justify-between border-b border-ink pb-3">
      <h2 className="text-[1.9rem] font-semibold sm:text-[2.1rem]">{title}</h2>
      {href && <Link href={href} prefetch={false} className="pb-1 text-[0.975rem] font-semibold text-cta no-underline hover:underline">View all →</Link>}
    </div>
  );
}

export default function HomePage() {
  const featured = getArticleByPath(FIRST)!;
  const fa = authorOf(featured);
  const latest = [...articles].filter((a) => a.path !== FIRST).sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 3);
  const startHere = articles.slice(0, 4);
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
      {/* Featured guide */}
      <section className="grid gap-8 py-8 lg:grid-cols-[1.35fr_1fr] lg:items-center lg:gap-12 lg:py-10">
        {featured.heroImage && (
          <Link href={featured.path} prefetch={false} className="relative block aspect-[3/2] overflow-hidden bg-line">
            <Image src={featured.heroImage.src} alt={featured.heroImage.alt} fill priority sizes="(max-width: 1024px) 100vw, 720px" className="object-cover" />
          </Link>
        )}
        <div>
          <p className="kicker">Featured guide</p>
          <h1 className="mt-3 text-[2.4rem] font-semibold leading-[1.1] sm:text-[3.2rem]">
            <Link href={featured.path} prefetch={false} className="text-ink no-underline hover:underline">{featured.title}</Link>
          </h1>
          <p className="mt-4 text-[1.2rem] leading-relaxed text-ink-2">{featured.description}</p>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-5">
            <p className="text-[0.975rem] text-ink-3">
              By <Link href={`/author/${fa.slug}/`} prefetch={false} className="text-ink-2 no-underline hover:underline">{fa.name}</Link> · Updated {formatDate(featured.updated)}
            </p>
            <Link href={featured.path} prefetch={false} className="btn btn-cta">Read the guide →</Link>
          </div>
        </div>
      </section>

      {/* What are you shopping for? */}
      <section aria-labelledby="shop-h" className="grid gap-5 border-y border-line py-6 lg:grid-cols-[11rem_1fr] lg:items-center">
        <h2 id="shop-h" className="text-[1.5rem] font-semibold leading-tight">What are you shopping for?</h2>
        <ul className="grid grid-cols-2 gap-y-2 sm:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-line">
          {SECTIONS.map((s) => (
            <li key={s.slug}>
              <Link href={`/${s.slug}/`} prefetch={false} className="flex min-h-14 items-start gap-3 px-3 py-2 no-underline hover:bg-brand-soft">
                <SectionIcon slug={s.slug} />
                <span>
                  <span className="block text-[1rem] font-semibold leading-tight text-ink">{s.name}</span>
                  <span className="mt-0.5 block text-[0.875rem] leading-snug text-ink-3">
                    {(() => { const n = articlesInSection(s.slug).length; return n ? `${n} article${n > 1 ? "s" : ""}` : "Coming soon"; })()}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Latest + Start here */}
      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-10">
        <section aria-label="Latest guides">
          <SectionHeading title="Latest Guides" href="/guides/" />
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [&_article]:relative">
            {latest.map((a) => <ArticleCard key={a.path} a={a} />)}
          </div>
        </section>
        <aside aria-label="Start here" className="lg:border-l lg:border-line lg:pl-10">
          <h2 className="border-b border-ink pb-3 text-[1.75rem] font-semibold">Start Here</h2>
          <ol>
            {startHere.map((a, i) => (
              <li key={a.path} className="flex gap-4 border-b border-line py-4">
                <span className="font-display text-[1.6rem] leading-none text-ink-3">{i + 1}</span>
                <Link href={a.path} prefetch={false} className="font-display text-[1.1rem] font-semibold leading-snug text-ink no-underline hover:underline">
                  {a.metaTitle ?? a.title}
                </Link>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      {/* Shop by need */}
      <section aria-label="Shop by need" className="mt-16">
        <SectionHeading title="Shop by Need" />
        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {NEEDS.map((n) => (
            <li key={n.need} className="border-b border-line">
              <Link href={n.href} prefetch={false} className="flex min-h-16 items-center justify-between gap-3 py-4 font-display text-[1.2rem] font-semibold text-ink no-underline hover:text-cta">
                {n.need}<span aria-hidden="true" className="text-cta">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Methodology band */}
      <section className="mt-16 grid gap-6 bg-brand-soft p-7 sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="kicker">How we work</p>
          <p className="mt-2 font-display text-[1.6rem] font-semibold leading-snug">{RESEARCH_STATEMENT}</p>
          <p className="mt-2 max-w-3xl text-[1.0625rem] text-ink-2">
            We compare published specs, manuals and safety guidance, and we never invent ratings, test results or prices. Three wheels are not tip-proof, and a trike is not right for every balance condition.
          </p>
        </div>
        <Link href="/how-we-research/" prefetch={false} className="btn btn-outline">How we research</Link>
      </section>

      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/`, logo: `${SITE_URL}/icon.svg` },
          { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/`, inLanguage: "en-US" },
        ]}
      />
    </div>
  );
}
