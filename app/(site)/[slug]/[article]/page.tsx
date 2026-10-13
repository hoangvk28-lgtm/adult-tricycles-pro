import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { articles, getArticleByPath } from "@/data/articles";
import { ArticlePage } from "@/components/ArticlePage";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles
    .map((a) => a.path.split("/").filter(Boolean))
    .filter((parts) => parts.length === 2)
    .map(([slug, article]) => ({ slug, article }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]/[article]">): Promise<Metadata> {
  const { slug, article } = await params;
  const a = getArticleByPath(`/${slug}/${article}/`);
  if (!a) return {};
  return buildMetadata({ title: a.metaTitle ?? a.title, description: a.description, path: a.path, type: "article", image: a.heroImage?.src });
}

export default async function Page({ params }: PageProps<"/[slug]/[article]">) {
  const { slug, article } = await params;
  const a = getArticleByPath(`/${slug}/${article}/`);
  if (!a) notFound();
  return <ArticlePage a={a} />;
}
