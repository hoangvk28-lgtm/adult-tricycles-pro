import type { BestArticle } from "@/data/types";
import { ArticleHeader, authorOf, RelatedArticles } from "@/components/article";
import { AuthorBox } from "@/components/Author";
import { AffiliateNote, JsonLd } from "@/components/ui";
import { BuyButtons, ComparisonTable, ProductIntro, ProsCons, SpecTable } from "@/components/product";
import { renderInline } from "@/lib/content";
import { absoluteUrl } from "@/lib/seo";
import { articles } from "@/data/articles";

export function BestPage({ a }: { a: BestArticle }) {
  const byId = new Map(a.products.map((p) => [p.id, p]));
  return (
    <div className="mx-auto max-w-4xl px-4 pt-8">
      <ArticleHeader a={a}>
        <AffiliateNote />
      </ArticleHeader>

      <section aria-labelledby="answer-h" className="mt-8 rounded-md border-l-4 border-cta bg-surface p-5">
        <h2 id="answer-h" className="font-sans kicker">Short answer</h2>
        <p className="mt-2 text-[1.15rem] leading-relaxed">{a.shortAnswer}</p>
      </section>

      <div className="mt-8 space-y-6">
        {a.products.map((p, i) => <ProductIntro key={p.id} p={p} rank={i + 1} priority={i === 0} />)}
      </div>

      <section aria-labelledby="compare-h" className="mt-12">
        <h2 id="compare-h" className="text-[1.9rem] font-semibold">Comparison table</h2>
        <div className="mt-4"><ComparisonTable products={a.products} /></div>
      </section>

      {a.byNeed.length > 0 && (
        <section aria-labelledby="need-h" className="mt-12">
          <h2 id="need-h" className="text-[1.9rem] font-semibold">Which one fits your needs</h2>
          <ul className="mt-4 divide-y divide-line rounded-md border border-line bg-surface">
            {a.byNeed.map((n) => (
              <li key={n.need} className="p-4">
                <p className="font-semibold">{n.need}: <a href={`#${n.productId}`}>{byId.get(n.productId)?.name}</a></p>
                <p className="mt-1 text-[1rem] text-ink-2">{n.why}</p>
              </li>
            ))}
          </ul>
        </section>
      )}

      {a.products.map((p) => (
        <section key={p.id} id={p.id} aria-label={p.name} className="mt-14 space-y-5 border-t-2 border-ink pt-6">
          <h2 className="text-[1.9rem] font-semibold">{p.name}</h2>
          <div className="article">{p.summary.split("\n\n").map((t) => <p key={t}>{t}</p>)}</div>
          <BuyButtons p={p} />
          <SpecTable p={p} />
          <ProsCons p={p} />
        </section>
      ))}

      {a.howToChoose.map((s) => (
        <section key={s.heading} className="article mt-6">
          <h2>{s.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: renderInline(s.body) }} />
        </section>
      ))}

      {a.faq.length > 0 && (
        <section className="article mt-6">
          <h2>Frequently asked questions</h2>
          {a.faq.map((f) => (
            <div key={f.q}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </section>
      )}

      <AuthorBox a={authorOf(a)} />
      <RelatedArticles current={a} pool={articles} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: a.products.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: p.name,
            url: `${absoluteUrl(a.path)}#${p.id}`,
          })),
        }}
      />
    </div>
  );
}
