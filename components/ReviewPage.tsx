import Link from "next/link";
import type { ReviewArticle } from "@/data/types";
import { ArticleHeader, authorOf, RelatedArticles } from "@/components/article";
import { AuthorBox } from "@/components/Author";
import { AffiliateNote } from "@/components/ui";
import { ProductIntro, ProsCons, SpecTable } from "@/components/product";
import { renderInline } from "@/lib/content";
import { articles } from "@/data/articles";

export function ReviewPage({ a }: { a: ReviewArticle }) {
  const p = a.product;
  return (
    <div className="mx-auto max-w-4xl px-4 pt-8">
      <ArticleHeader a={a}>
        <AffiliateNote />
      </ArticleHeader>
      <section aria-labelledby="answer-h" className="mt-8 rounded-md border-l-4 border-cta bg-surface p-5">
        <h2 id="answer-h" className="font-sans kicker">Short answer</h2>
        <p className="mt-2 text-[1.15rem] leading-relaxed">{a.shortAnswer}</p>
      </section>
      <div className="mt-8"><ProductIntro p={p} priority /></div>
      <section aria-labelledby="specs-h" className="mt-12 space-y-5">
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
        <section className="article mt-6">
          <h2>Alternatives to consider</h2>
          <ul>
            {a.alternatives.map((alt) => (
              <li key={alt.path}><Link href={alt.path} prefetch={false}>{alt.name}</Link>: {alt.why}</li>
            ))}
          </ul>
        </section>
      )}
      {a.faq.length > 0 && (
        <section className="article mt-6">
          <h2>Frequently asked questions</h2>
          {a.faq.map((f) => (
            <div key={f.q}><h3>{f.q}</h3><p>{f.a}</p></div>
          ))}
        </section>
      )}
      <AuthorBox a={authorOf(a)} />
      <RelatedArticles current={a} pool={articles} />
    </div>
  );
}
