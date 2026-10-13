import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SECTIONS, getSection, SITE_NAME } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";
import { articles, articlesInSection, getArticleByPath, MIN_ARTICLES_FOR_INDEXED_HUB } from "@/data/articles";
import { ArticlePage } from "@/components/ArticlePage";
import { ArticleCard } from "@/components/article";
import { Breadcrumbs } from "@/components/ui";

// One segment serves both section hubs (/electric-tricycles/) and the restored
// root-level articles (/electric-tricycle-for-adults/). Unknown slugs 404.
export const dynamicParams = false;

export function generateStaticParams() {
  const rootArticles = articles.filter((a) => a.path.split("/").filter(Boolean).length === 1);
  return [...SECTIONS.map((s) => ({ slug: s.slug })), ...rootArticles.map((a) => ({ slug: a.slug }))];
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const section = getSection(slug);
  if (section) {
    const n = articlesInSection(slug).length;
    return buildMetadata({
      title: `${section.name}: Buying Guides and Advice`,
      description: `${section.short} ${section.intro}`.slice(0, 158).replace(/\s\S*$/, "") + ".",
      path: `/${slug}/`,
      noIndex: n < MIN_ARTICLES_FOR_INDEXED_HUB,
    });
  }
  const a = getArticleByPath(`/${slug}/`);
  if (!a) return {};
  return buildMetadata({ title: a.metaTitle ?? a.title, description: a.description, path: a.path, type: "article", image: a.heroImage?.src });
}

export default async function SlugPage({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  const section = getSection(slug);
  if (!section) {
    const a = getArticleByPath(`/${slug}/`);
    if (!a) notFound();
    return <ArticlePage a={a} />;
  }
  const list = articlesInSection(slug);
  return (
    <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-8">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: section.name, path: `/${slug}/` }]} />
      <h1 className="mt-5 text-[2.3rem] font-semibold sm:text-[2.9rem]">{section.name}</h1>
      <p className="mt-4 max-w-3xl text-[1.2rem] leading-relaxed text-ink-2">{section.intro}</p>
      {list.length ? (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 [&_article]:relative">
          {list.map((a) => <ArticleCard key={a.path} a={a} />)}
        </div>
      ) : (
        <p className="mt-10 rounded-md border border-line bg-surface p-6 text-[1.0625rem]">
          {SITE_NAME} is still researching this category. In the meantime, our{" "}
          <Link href="/how-to-shop-for-your-first-adult-three-wheel-bike/" prefetch={false}>guide to buying your first adult tricycle</Link> covers fit, weight limits, gearing and brakes for every type.
        </p>
      )}
    </div>
  );
}
