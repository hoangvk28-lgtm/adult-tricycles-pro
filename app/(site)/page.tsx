import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { DEFAULT_TITLE, RESEARCH_STATEMENT, SECTIONS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";
import { articles, articlesInSection } from "@/data/articles";
import { ArticleCard } from "@/components/article";
import { JsonLd } from "@/components/ui";

export const metadata = buildMetadata({ title: DEFAULT_TITLE, description: SITE_DESCRIPTION, path: "/", absoluteTitle: true });

const FIRST = "/how-to-shop-for-your-first-adult-three-wheel-bike/";

// Needs-based entry points link to the sections of existing guides that answer them,
// rather than spinning up thin "for seniors / for tall riders" pages.
const NEEDS = [
  { need: "Buying for a parent or older rider", href: `${FIRST}#buying-for-someone-else` },
  { need: "Rider height and getting on and off", href: `${FIRST}#measure-the-rider-and-the-vehicle` },
  { need: "Weight limits and carrying cargo", href: `${FIRST}#read-weight-limits-carefully` },
  { need: "Setting a realistic budget", href: `${FIRST}#budget-for-ownership-not-just-the-checkout-price` },
  { need: "Hills, fatigue and motor assistance", href: "/electric-tricycle-for-adults/#identify-what-you-want-the-motor-to-do" },
  { need: "Storage and transport", href: `${FIRST}#check-portability-before-paying-for-folding` },
];

export default function HomePage() {
  const latest = [...articles].sort((a, b) => b.updated.localeCompare(a.updated)).slice(0, 6);
  return (
    <>
      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-[1.3fr_1fr] md:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-cta">Adult tricycle buying guides</p>
            <h1 className="mt-3 text-[2.4rem] font-bold sm:text-[3.25rem]">Find a three-wheel bike that fits the rider, the route and the garage.</h1>
            <p className="mt-5 max-w-2xl text-[1.2rem] leading-relaxed text-ink-2">
              Clear, research-based advice on adult tricycles, e-trikes, folding and recumbent trikes, for riders and for the family members helping them choose.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href={FIRST} prefetch={false} className="btn btn-cta">Start with the first-trike guide</Link>
              <Link href="/electric-tricycles/" prefetch={false} className="btn btn-outline">Electric tricycles</Link>
            </div>
          </div>
          <aside className="rounded-md border border-line bg-paper p-6">
            <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-ink-2">How we work</h2>
            <ul className="mt-3 space-y-3 text-[1.0625rem]">
              <li><strong>{RESEARCH_STATEMENT}</strong></li>
              <li>We compare published specs, manuals and safety guidance. We do not invent ratings, test results or prices.</li>
              <li>Three wheels are not tip-proof, and a trike is not right for every balance or mobility condition.</li>
            </ul>
            <Link href="/how-we-research/" prefetch={false} className="mt-4 inline-block font-semibold">How we research</Link>
          </aside>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4">
        <section aria-labelledby="needs-h" className="mt-14">
          <h2 id="needs-h" className="text-[2rem] font-bold">Shop by need</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {NEEDS.map((n) => (
              <li key={n.need}>
                <Link href={n.href} prefetch={false} className="flex min-h-16 items-center justify-between gap-3 rounded-md border border-line bg-surface px-5 py-4 text-[1.0625rem] font-semibold text-ink no-underline hover:border-brand hover:bg-brand-soft">
                  {n.need}<span aria-hidden="true" className="text-brand">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="sections-h" className="mt-14">
          <h2 id="sections-h" className="text-[2rem] font-bold">Browse by type</h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SECTIONS.map((s) => {
              const n = articlesInSection(s.slug).length;
              return (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} prefetch={false} className="block h-full rounded-md border border-line bg-surface p-5 no-underline hover:border-brand">
                    <span className="font-display text-[1.35rem] font-bold text-ink">{s.name}</span>
                    <span className="mt-1 block text-[1rem] text-ink-2">{s.short}</span>
                    <span className="mt-3 block text-sm font-semibold text-brand">{n ? `${n} article${n > 1 ? "s" : ""}` : "Coverage in progress"}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="latest-h" className="mt-14">
          <h2 id="latest-h" className="text-[2rem] font-bold">Latest guides</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&_article]:relative">
            {latest.map((a) => <ArticleCard key={a.path} a={a} />)}
          </div>
        </section>
      </div>

      <JsonLd
        data={[
          { "@context": "https://schema.org", "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/`, logo: `${SITE_URL}/icon.svg` },
          { "@context": "https://schema.org", "@type": "WebSite", name: SITE_NAME, url: `${SITE_URL}/`, inLanguage: "en-US" },
        ]}
      />
    </>
  );
}
