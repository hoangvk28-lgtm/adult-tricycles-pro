import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AUTHORS, getAuthor, hasPhoto } from "@/data/authors";
import { articles } from "@/data/articles";
import { buildMetadata, absoluteUrl } from "@/lib/seo";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Breadcrumbs, JsonLd } from "@/components/ui";
import { Avatar } from "@/components/Author";
import { ArticleCard, authorOf } from "@/components/article";

export const dynamicParams = false;

export function generateStaticParams() {
  return AUTHORS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/author/[slug]">): Promise<Metadata> {
  const a = getAuthor((await params).slug);
  if (!a) return {};
  return buildMetadata({
    title: `${a.name}, ${a.role.split(",")[0]}`,
    description: `${a.name} writes research-based adult tricycle buying guides for ${SITE_NAME}. Read his articles on trike fit, electric trikes and buying for older riders.`,
    path: `/author/${a.slug}/`,
    type: "website",
    image: hasPhoto(a) ? a.photo : undefined,
  });
}

export default async function AuthorPage({ params }: PageProps<"/author/[slug]">) {
  const a = getAuthor((await params).slug);
  if (!a) notFound();
  const list = articles.filter((x) => authorOf(x).slug === a.slug);
  return (
    <div className="mx-auto max-w-[1280px] px-4 pt-8 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: a.name, path: `/author/${a.slug}/` }]} />
      <div className="mt-8 grid gap-8 border-b border-line-2 pb-10 md:grid-cols-[auto_1fr]">
        <Avatar a={a} size={160} />
        <div className="max-w-3xl">
          <p className="kicker">{a.role}</p>
          <h1 className="mt-2 text-[2.5rem] font-semibold sm:text-[3.25rem]">{a.name}</h1>
          {a.bio.map((p) => <p key={p} className="mt-4 text-[1.15rem] leading-relaxed text-ink-2">{p}</p>)}
          <h2 className="mt-6 font-sans text-[0.95rem] font-semibold uppercase tracking-wider text-ink">Covers</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {a.focus.map((f) => <li key={f} className="border border-line-2 bg-surface px-3 py-1.5 text-[0.975rem]">{f}</li>)}
          </ul>
        </div>
      </div>
      <h2 className="mt-12 text-[2rem] font-semibold">Articles by {a.name}</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 [&_article]:relative">
        {list.map((x) => <ArticleCard key={x.path} a={x} />)}
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfilePage",
          mainEntity: {
            "@type": "Person",
            name: a.name,
            jobTitle: a.role,
            url: absoluteUrl(`/author/${a.slug}/`),
            ...(hasPhoto(a) ? { image: absoluteUrl(a.photo) } : {}),
            worksFor: { "@type": "Organization", name: SITE_NAME, url: `${SITE_URL}/` },
          },
        }}
      />
    </div>
  );
}
