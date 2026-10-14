import Image from "next/image";
import Link from "next/link";
import type { ReviewArticle } from "@/data/types";
import { ArticleHeader, authorOf, RelatedArticles } from "@/components/article";
import { AuthorBox } from "@/components/Author";
import { Notice } from "@/components/ui";
import { ProsCons, SpecTable, BuyButtons } from "@/components/product";
import { renderInline } from "@/lib/content";
import { articles } from "@/data/articles";

export function ReviewPage({ a }: { a: ReviewArticle }) {
  const p = a.product;
  const words = [a.shortAnswer, p.summary, ...a.sectionsBody.map((s) => s.body), ...a.faq.map((f) => `${f.q} ${f.a}`), ...p.pros, ...p.cons, ...(a.alternatives ?? []).map((x) => x.why)].join(" ").split(/\s+/).length;
  return (
    <article className="mx-auto max-w-[860px] px-4 pb-16 pt-8 sm:px-6">
      <ArticleHeader a={a} dek={a.dek} readMinutes={Math.max(1, Math.round(words / 230))}>
        {a.availabilityNote && <Notice tone="warn"><strong>Availability:</strong> {a.availabilityNote}</Notice>}
        {a.historyNote && <Notice><strong>About this page:</strong> {a.historyNote}</Notice>}
      </ArticleHeader>

      <section aria-labelledby="short-answer" className="mt-8 border-l-4 border-cta bg-surface p-5">
        <h2 id="short-answer" className="kicker">Short answer</h2>
        <p className="mt-2 text-[1.125rem] leading-relaxed">{a.shortAnswer}</p>
      </section>

      <section aria-label={p.name} className="mt-10 grid gap-6 border-y border-line py-8 md:grid-cols-[38fr_62fr] md:gap-x-10">
        {p.image && (
          <div className="relative aspect-square overflow-hidden bg-[#efe9df]">
            <Image src={p.image.src} alt={p.image.alt} fill priority sizes="(max-width: 768px) 100vw, 320px" className="object-contain p-8 mix-blend-multiply" />
          </div>
        )}
        <div>
          {p.label && <p className="kicker">{p.label}</p>}
          <h2 className="mt-2 text-[1.7rem] font-semibold leading-tight">{p.name}</h2>
          {p.verdict && <p className="mt-4 border-l-2 border-ink pl-4 font-display text-[1.25rem] leading-snug">{p.verdict}</p>}
          {p.bestFor && (
            <div className="mt-5 border-y border-line py-4">
              <h3 className="font-sans text-[0.875rem] font-semibold uppercase tracking-[0.1em]">Best for</h3>
              <p className="mt-1.5 text-ink-2">{p.bestFor}</p>
            </div>
          )}
          <div className="mt-5"><BuyButtons p={p} /></div>
        </div>
      </section>

      <div className="article mt-8">{p.summary.split("\n\n").map((t) => <p key={t}>{t}</p>)}</div>

      <section aria-labelledby="specs-h" className="mt-10 space-y-5">
        <h2 id="specs-h" className="text-[1.9rem] font-semibold">Specifications</h2>
        <SpecTable p={p} />
        <ProsCons p={p} />
      </section>

      {a.sectionsBody.map((s) => (
        <section key={s.heading} className="article mt-6">
          <h2>{s.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: renderInline(s.body) }} />
        </section>
      ))}

      {a.alternatives && a.alternatives.length > 0 && (
        <section aria-labelledby="alt-h" className="mt-12">
          <h2 id="alt-h" className="border-b border-ink pb-3 text-[1.6rem] font-semibold">Alternatives to Consider</h2>
          <ul className="divide-y divide-line">
            {a.alternatives.map((alt) => (
              <li key={alt.path} className="py-4">
                <Link href={alt.path} prefetch={false} className="font-display text-[1.15rem] font-semibold text-ink no-underline hover:text-cta">{alt.name}</Link>
                <p className="mt-1 text-ink-2">{alt.why}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {a.faq.length > 0 && (
        <section aria-labelledby="faq" className="mt-12">
          <h2 id="faq" className="text-[1.9rem] font-semibold">Frequently Asked Questions</h2>
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

      <AuthorBox a={authorOf(a)} />
      <RelatedArticles current={a} pool={articles} />
    </article>
  );
}
