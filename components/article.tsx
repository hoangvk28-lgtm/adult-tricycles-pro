import Link from "next/link";
import Image from "next/image";
import type { Article } from "@/data/types";
import { getSection, SITE_NAME, SITE_URL } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";
import { Breadcrumbs, formatDate, JsonLd, Notice } from "@/components/ui";
import type { TocItem } from "@/lib/content";
import { DEFAULT_AUTHOR, getAuthor } from "@/data/authors";
import { Avatar } from "@/components/Author";

export function authorOf(a: Article) {
  return getAuthor(a.author ?? "") ?? DEFAULT_AUTHOR;
}

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
  const au = authorOf(a);
  const person = { "@type": "Person", name: au.name, url: absoluteUrl(`/author/${au.slug}/`) };
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title.slice(0, 110),
    description: a.description,
    datePublished: a.published,
    dateModified: a.updated,
    author: person,
    publisher: org,
    mainEntityOfPage: absoluteUrl(a.path),
    ...(a.heroImage ? { image: absoluteUrl(a.heroImage.src) } : {}),
  };
}

export function ArticleHeader({ a, children, readMinutes }: { a: Article; children?: React.ReactNode; readMinutes?: number }) {
  const au = authorOf(a);
  return (
    <header className="space-y-5">
      <Breadcrumbs items={crumbsFor(a)} />
      <p className="kicker">{TYPE_LABEL[a.type]}</p>
      <h1 className="text-[2.25rem] font-semibold leading-[1.12] sm:text-[3rem]">{a.title}</h1>
      <p className="text-[1.2rem] leading-relaxed text-ink-2">{a.description}</p>
      <div className="flex items-center gap-3.5 border-y border-line py-4">
        <Avatar a={au} size={52} />
        <div className="text-[0.975rem] leading-snug text-ink-3">
          <p>
            By{" "}
            <Link href={`/author/${au.slug}/`} prefetch={false} className="font-semibold text-ink no-underline hover:underline">{au.name}</Link>
          </p>
          <p>
            Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time>
            {readMinutes ? <> · {readMinutes} min read</> : null}
          </p>
        </div>
      </div>
      <p className="text-[0.95rem] text-ink-3">
        <Link href="/how-we-research/" prefetch={false} className="text-ink-2 underline decoration-line-2 underline-offset-2">{a.methodology}</Link>
      </p>
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
      <h2 id="toc-h" className="font-sans text-sm font-semibold uppercase tracking-wider text-ink-2">In this guide</h2>
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
    <article className="group flex h-full flex-col">
      {a.heroImage && (
        <div className="relative aspect-[3/2] overflow-hidden bg-line">
          <Image src={a.heroImage.src} alt={a.heroImage.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-2 pt-4">
        <p className="kicker !text-[0.75rem]">{TYPE_LABEL[a.type]}</p>
        <h3 className="text-[1.35rem] font-semibold leading-snug">
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
      <h2 id="related-h" className="text-2xl font-semibold">Keep reading</h2>
      <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&_article]:relative">
        {related.map((a) => <ArticleCard key={a.path} a={a} />)}
      </div>
    </section>
  );
}
