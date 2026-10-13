import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/types";
import { getSection, SITE_NAME, SITE_URL } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { Breadcrumbs, formatDate, JsonLd, Notice } from "@/components/ui";
import type { TocItem } from "@/lib/content";

const TYPE_LABEL = { guide: "Guide", best: "Best", review: "Review" } as const;

export function crumbsFor(a: Article) {
  const section = getSection(a.sections[0])!;
  return [
    { name: "Home", path: "/" },
    { name: section.name, path: `/${section.slug}/` },
    { name: a.metaTitle ?? a.title, path: a.path },
  ];
}

export function articleSchema(a: Article) {
  const org = { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title.slice(0, 110),
    description: a.description,
    datePublished: a.published,
    dateModified: a.updated,
    author: org,
    publisher: org,
    mainEntityOfPage: absoluteUrl(a.path),
    ...(a.heroImage ? { image: absoluteUrl(a.heroImage.src) } : {}),
  };
}

export function ArticleHeader({ a, children }: { a: Article; children?: React.ReactNode }) {
  return (
    <header className="space-y-5">
      <Breadcrumbs items={crumbsFor(a)} />
      <p className="text-sm font-bold uppercase tracking-wider text-cta">{TYPE_LABEL[a.type]}</p>
      <h1 className="text-[2.1rem] font-bold sm:text-[2.75rem]">{a.title}</h1>
      <p className="text-[1.2rem] leading-relaxed text-ink-2">{a.description}</p>
      <div className="flex flex-wrap gap-x-5 gap-y-1 border-y border-line py-3 text-[0.95rem] text-ink-3">
        <span>By the {SITE_NAME} editorial team</span>
        <span>Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time></span>
        <Link href="/how-we-research/" prefetch={false} className="text-ink-2 underline underline-offset-2">
          {a.methodology}
        </Link>
      </div>
      {a.reviewStatus && <Notice tone="warn">{a.reviewStatus}</Notice>}
      {children}
      <JsonLd data={articleSchema(a)} />
    </header>
  );
}

export function Toc({ items }: { items: TocItem[] }) {
  if (items.length < 3) return null;
  return (
    <nav aria-labelledby="toc-h" className="rounded-md border border-line bg-surface p-5">
      <h2 id="toc-h" className="font-sans text-sm font-bold uppercase tracking-wider text-ink-2">In this guide</h2>
      <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[1rem] marker:text-ink-3">
        {items.map((t) => (
          <li key={t.id}>
            <a href={`#${t.id}`} className="text-ink underline-offset-2 hover:text-brand hover:underline">{t.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ArticleCard({ a }: { a: Article }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-line bg-surface">
      {a.heroImage && (
        <div className="relative aspect-[3/2] bg-line">
          <Image src={a.heroImage.src} alt={a.heroImage.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-cta">{TYPE_LABEL[a.type]}</p>
        <h3 className="text-[1.3rem] font-bold">
          <Link href={a.path} prefetch={false} className="text-ink no-underline after:absolute after:inset-0 group-hover:underline">
            {a.metaTitle ?? a.title}
          </Link>
        </h3>
        <p className="text-[1rem] leading-relaxed text-ink-2">{a.description}</p>
      </div>
    </article>
  );
}

export function RelatedArticles({ current, pool }: { current: Article; pool: Article[] }) {
  const related = pool.filter((a) => a.path !== current.path).slice(0, 3);
  if (!related.length) return null;
  return (
    <section aria-labelledby="related-h" className="mt-16">
      <h2 id="related-h" className="text-2xl font-bold">Keep reading</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&_article]:relative">
        {related.map((a) => <ArticleCard key={a.path} a={a} />)}
      </div>
    </section>
  );
}
