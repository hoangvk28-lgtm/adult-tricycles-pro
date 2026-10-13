import Image from "next/image";
import Link from "next/link";
import type { BestArticle, Product } from "@/data/types";
import { ArticleHeader, authorOf } from "@/components/article";
import { AuthorBox } from "@/components/Author";
import { JsonLd } from "@/components/ui";
import { ProsCons, SpecTable, ComparisonTable } from "@/components/product";
import { buildAmazonUrl, AMAZON_TAG } from "@/lib/affiliate";
import { absoluteUrl } from "@/lib/seo";
import { articles } from "@/data/articles";

const SPONSORED = "nofollow sponsored noopener noreferrer";

function Thumb({ p, size }: { p: Product; size: string }) {
  if (!p.image) return null;
  return (
    <div className={`relative shrink-0 overflow-hidden bg-[#efe9df] ${size}`}>
      <Image src={p.image.src} alt={p.name} fill sizes="96px" className="object-contain p-1.5 mix-blend-multiply" />
    </div>
  );
}

function AmazonButton({ p, filled }: { p: Product; filled?: boolean }) {
  const url = buildAmazonUrl(p.asin);
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel={SPONSORED}
      className={`inline-flex min-h-12 items-center gap-2 px-5 text-[1rem] font-semibold no-underline transition-colors ${
        filled ? "bg-cta text-white hover:bg-cta-dark" : "border border-cta text-cta hover:bg-cta-soft"
      }`}
    >
      Check price on Amazon<span className="sr-only"> for {p.name} (opens in a new tab)</span>
      <span aria-hidden="true">→</span>
    </a>
  );
}

function H4({ children }: { children: React.ReactNode }) {
  return <h4 className="font-sans text-[0.875rem] font-semibold uppercase tracking-[0.1em] text-ink">{children}</h4>;
}

export function BestPage({ a }: { a: BestArticle }) {
  const toc = [
    { id: "quick-picks", label: "Quick Picks" },
    { id: "our-picks", label: "Our Picks" },
    { id: "comparison", label: "Spec Comparison" },
    { id: "how-we-chose", label: "How We Chose" },
    { id: "what-to-look-for", label: "What to Look For" },
    { id: "how-to-choose", label: "How to Choose" },
    ...(a.faq.length ? [{ id: "faq", label: "FAQ" }] : []),
    { id: "bottom-line", label: "Bottom Line" },
  ];
  const words = [a.intro.join(" "), a.shortAnswer, ...a.products.map((p) => p.summary), ...a.whatToLookFor.flatMap((w) => w.paragraphs)].join(" ").split(/\s+/).length;
  const related = (a.relatedPaths ?? []).map((p) => articles.find((x) => x.path === p)).filter((x) => !!x);
  const n = a.products.length;

  return (
    <article className="mx-auto max-w-[1120px] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="max-w-[760px]">
        <ArticleHeader a={a} dek={a.dek} readMinutes={Math.max(1, Math.round(words / 230))} extraMeta={`${n} products evaluated`} />
      </div>

      <div className="mt-6 lg:mt-8 lg:grid lg:grid-cols-[minmax(0,760px)_220px] lg:justify-between lg:gap-12">
        <div className="min-w-0">
          {/* Mobile jump menu */}
          <details className="group sticky top-16 z-30 -mx-4 border-y border-line bg-paper/95 backdrop-blur-sm sm:-mx-6 lg:hidden">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 text-[1rem] font-semibold sm:px-6 [&::-webkit-details-marker]:hidden">
              Jump to <span aria-hidden="true" className="transition-transform group-open:rotate-180">⌄</span>
            </summary>
            <ol className="border-t border-line px-4 pb-2 sm:px-6">
              {toc.map((t) => (
                <li key={t.id} className="border-b border-line last:border-0">
                  <a href={`#${t.id}`} className="block py-3 text-ink no-underline">{t.label}</a>
                </li>
              ))}
            </ol>
          </details>

          <div className="article mt-6 lg:mt-0">{a.intro.map((t) => <p key={t}>{t}</p>)}</div>

          <section aria-labelledby="short-answer" className="mt-8 border-l-4 border-cta bg-surface p-5">
            <h2 id="short-answer" className="kicker">Short answer</h2>
            <p className="mt-2 text-[1.125rem] leading-relaxed">{a.shortAnswer}</p>
          </section>

          {/* Quick Picks */}
          <section aria-labelledby="quick-picks" className="mt-12">
            <h2 id="quick-picks" className="text-[1.9rem] font-semibold sm:text-[2.1rem]">Quick Picks</h2>
            <p className="mt-2 text-ink-2">Our {n} recommendations at a glance. Tap a pick for the full verdict.</p>
            <ol className="mt-5 divide-y divide-line border-y border-line lg:hidden">
              {a.products.map((p) => (
                <li key={p.id} className="flex gap-4 py-5">
                  <Thumb p={p} size="h-20 w-20" />
                  <div className="min-w-0 flex-1">
                    {p.label && <p className="kicker !text-[0.75rem]">{p.label}</p>}
                    <p className="mt-1 font-display text-[1.15rem] font-semibold leading-snug">{p.name}</p>
                    {p.bestFor && <p className="mt-1 text-[0.975rem] leading-snug text-ink-2">{p.bestFor}</p>}
                    <p className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1 text-[0.975rem] font-semibold">
                      <a href={`#${p.id}`} className="text-ink">Our take ↓</a>
                      {buildAmazonUrl(p.asin) && <a href={buildAmazonUrl(p.asin)} target="_blank" rel={SPONSORED} className="text-cta">Check price</a>}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <table className="mt-5 hidden w-full border-collapse text-left lg:table">
              <thead>
                <tr className="border-b border-ink text-[0.8125rem] uppercase tracking-[0.08em] text-ink-2">
                  <th scope="col" className="py-3 pr-4 font-semibold">Pick</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Best for</th>
                  <th scope="col" className="py-3 pr-4 font-semibold">Key spec</th>
                  <th scope="col" className="py-3"><span className="sr-only">Price</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {a.products.map((p) => (
                  <tr key={p.id} className="align-top">
                    <th scope="row" className="py-4 pr-4 font-normal">
                      <a href={`#${p.id}`} className="group flex items-start gap-4 no-underline">
                        <Thumb p={p} size="h-16 w-16" />
                        <span>
                          {p.label && <span className="kicker block !text-[0.75rem]">{p.label}</span>}
                          <span className="mt-1 block font-display text-[1.075rem] font-semibold leading-snug text-ink group-hover:underline">{p.name}</span>
                        </span>
                      </a>
                    </th>
                    <td className="py-4 pr-4 text-[0.975rem] leading-snug text-ink-2">{p.bestFor}</td>
                    <td className="py-4 pr-4 text-[0.975rem] leading-snug text-ink-2">{p.keySpec}</td>
                    <td className="py-4 text-right">
                      {buildAmazonUrl(p.asin) && (
                        <a href={buildAmazonUrl(p.asin)} target="_blank" rel={SPONSORED} className="whitespace-nowrap text-[0.975rem] font-semibold text-ink underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                          Check price<span className="sr-only"> for {p.name}</span>
                        </a>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Our Picks */}
          <section aria-labelledby="our-picks" className="mt-14">
            <h2 id="our-picks" className="border-b border-ink pb-3 text-[1.9rem] font-semibold sm:text-[2.1rem]">Our Picks</h2>
            {a.products.map((p, i) => (
              <article key={p.id} id={p.id} className="border-t border-line py-10 first:border-t-0 first:pt-6">
                <div className="grid gap-6 md:grid-cols-[38fr_62fr] md:gap-x-10">
                  <div className="md:row-span-2">
                    <div className="md:sticky md:top-28">
                      {p.image && buildAmazonUrl(p.asin) && (
                        <a href={buildAmazonUrl(p.asin)} target="_blank" rel={SPONSORED} aria-label={`${p.name} on Amazon (opens in a new tab)`} className="relative block aspect-square overflow-hidden bg-[#efe9df]">
                          <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 768px) 100vw, 300px" className="object-contain p-8 mix-blend-multiply" />
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="min-w-0">
                    <p className="kicker">{p.label}<span className="ml-2 font-medium normal-case tracking-normal text-ink-3">{i + 1} of {n}</span></p>
                    <h3 className="mt-2 text-[1.7rem] font-semibold leading-tight sm:text-[1.9rem]">{p.name}</h3>
                    {p.verdict && <p className="mt-4 border-l-2 border-ink pl-4 font-display text-[1.25rem] leading-snug">{p.verdict}</p>}
                    {p.bestFor && (
                      <div className="mt-5 border-y border-line py-4">
                        <H4>Best for</H4>
                        <p className="mt-1.5 text-ink-2">{p.bestFor}</p>
                      </div>
                    )}
                    <div className="mt-5"><AmazonButton p={p} /></div>
                  </div>
                  <div className="min-w-0 md:col-start-2 md:mt-6">
                    <H4>Why we like it</H4>
                    <div className="article mt-2 !text-[1.0625rem]">{p.summary.split("\n\n").map((t) => <p key={t}>{t}</p>)}</div>
                    <div className="mt-6">
                      <H4>Key specs</H4>
                      <div className="mt-2"><SpecTable p={p} /></div>
                    </div>
                    <div className="mt-6"><ProsCons p={p} /></div>
                    <div className="mt-8"><AmazonButton p={p} filled /></div>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section aria-labelledby="comparison" className="mt-14">
            <h2 id="comparison" className="text-[1.9rem] font-semibold sm:text-[2.1rem]">Spec Comparison</h2>
            <p className="mt-2 text-ink-2">Figures as stated in each listing. &quot;Not listed&quot; means the seller does not publish it.</p>
            <div className="mt-5"><ComparisonTable products={a.products} /></div>
          </section>

          <section aria-labelledby="how-we-chose" className="mt-14">
            <h2 id="how-we-chose" className="text-[1.9rem] font-semibold sm:text-[2.1rem]">How We Chose These Tricycles</h2>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {a.howWeChose.map((c) => (
                <div key={c.title} className="py-5 sm:grid sm:grid-cols-[200px_1fr] sm:gap-8">
                  <dt className="font-display text-[1.2rem] font-semibold leading-snug">{c.title}</dt>
                  <dd className="mt-1.5 leading-relaxed text-ink-2 sm:mt-0">{c.body}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="what-to-look-for" className="mt-14">
            <h2 id="what-to-look-for" className="text-[1.9rem] font-semibold sm:text-[2.1rem]">What to Look for in an Adult Tricycle</h2>
            <ol className="mt-6 divide-y divide-line border-y border-line">
              {a.whatToLookFor.map((w, i) => (
                <li key={w.title} className="py-6">
                  <h3 className="flex gap-3 text-[1.3rem] font-semibold leading-snug">
                    <span aria-hidden="true" className="text-cta">{String(i + 1).padStart(2, "0")}</span>
                    {w.title}
                  </h3>
                  <div className="article mt-3 !text-[1.0625rem]">{w.paragraphs.map((t) => <p key={t}>{t}</p>)}</div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="how-to-choose" className="mt-14">
            <h2 id="how-to-choose" className="text-[1.9rem] font-semibold sm:text-[2.1rem]">How to Choose</h2>
            <div className="mt-6 space-y-10">
              {a.howToChoose.map((s) => (
                <div key={s.heading}>
                  <h3 className="text-[1.3rem] font-semibold leading-snug">{s.heading}</h3>
                  {s.intro && <p className="mt-2 text-ink-2">{s.intro}</p>}
                  {s.table && (
                    <div role="region" aria-label={`${s.heading} (table)`} tabIndex={0} className="mt-4 overflow-x-auto">
                      <table className="w-full min-w-[30rem] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-ink">
                            {s.table.headers.map((h) => <th key={h} scope="col" className="py-3 pr-5 text-[0.8125rem] font-semibold uppercase tracking-[0.08em] text-ink-2">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-line">
                          {s.table.rows.map((r) => (
                            <tr key={r.join("|")} className="align-top">
                              <th scope="row" className="py-3 pr-5 text-[0.975rem] font-semibold leading-snug">{r[0]}</th>
                              {r.slice(1).map((c) => <td key={c} className="py-3 pr-5 text-[0.975rem] leading-snug text-ink-2">{c}</td>)}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {s.cards && (
                    <dl className="mt-4 divide-y divide-line border-y border-line">
                      {s.cards.map((c) => (
                        <div key={c.label} className="py-4 sm:grid sm:grid-cols-[200px_1fr] sm:gap-8">
                          <dt className="font-semibold">{c.label}</dt>
                          <dd className="mt-1 leading-relaxed text-ink-2 sm:mt-0">{c.text}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                  {s.note && <p className="mt-3 text-[0.975rem] leading-relaxed text-ink-2">{s.note}</p>}
                </div>
              ))}
            </div>
          </section>

          {a.faq.length > 0 && (
            <section aria-labelledby="faq" className="mt-14">
              <h2 id="faq" className="text-[1.9rem] font-semibold sm:text-[2.1rem]">Frequently Asked Questions</h2>
              <div className="mt-6 divide-y divide-line border-y border-line">
                {a.faq.map((f) => (
                  <div key={f.q} className="py-5">
                    <h3 className="text-[1.2rem] font-semibold leading-snug">{f.q}</h3>
                    <p className="mt-2 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section aria-labelledby="bottom-line" className="mt-14 border-t border-ink pt-6">
            <h2 id="bottom-line" className="text-[1.6rem] font-semibold">Bottom Line</h2>
            <p className="mt-3 text-[1.0625rem] leading-relaxed">{a.bottomLine}</p>
            {a.amazonSearch && (
              <p className="mt-4 text-[0.975rem]">
                <a href={`https://www.amazon.com/s?k=${encodeURIComponent(a.amazonSearch)}&tag=${AMAZON_TAG}`} target="_blank" rel="noopener noreferrer sponsored" className="text-ink underline decoration-line-2 underline-offset-4 hover:decoration-ink">
                  Browse all {a.amazonSearch} on Amazon
                </a>
              </p>
            )}
          </section>

          <AuthorBox a={authorOf(a)} />

          {related.length > 0 && (
            <section aria-labelledby="related" className="mt-14">
              <h2 id="related" className="border-b border-ink pb-3 text-[1.6rem] font-semibold">Related Guides</h2>
              <ul className="divide-y divide-line">
                {related.map((r) => (
                  <li key={r!.path}>
                    <Link href={r!.path} prefetch={false} className="flex items-baseline justify-between gap-4 py-4 font-display text-[1.15rem] leading-snug text-ink no-underline hover:text-cta">
                      {r!.metaTitle ?? r!.title}<span aria-hidden="true" className="font-sans text-ink-3">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="hidden lg:block">
          <nav aria-labelledby="toc-heading" className="sticky top-28">
            <h2 id="toc-heading" className="kicker !text-ink-2">On This Page</h2>
            <ol className="mt-3 border-l border-line">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[0.975rem] leading-snug text-ink-2 no-underline hover:border-ink hover:text-ink">{t.label}</a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>
      </div>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: a.title,
          numberOfItems: n,
          itemListElement: a.products.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: `${absoluteUrl(a.path)}#${p.id}` })),
        }}
      />
    </article>
  );
}
