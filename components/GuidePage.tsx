import type { GuideArticle } from "@/data/types";
import { renderGuide } from "@/lib/content";
import { ArticleHeader, authorOf, RelatedArticles, Toc } from "@/components/article";
import { AuthorBox } from "@/components/Author";
import { Notice } from "@/components/ui";
import { articles } from "@/data/articles";

export function GuidePage({ a }: { a: GuideArticle }) {
  const g = renderGuide(a.contentFile);
  return (
    <div className="mx-auto max-w-3xl px-4 pt-8">
      <ArticleHeader a={a} readMinutes={Math.max(1, Math.round(g.wordCount / 230))}>
        {a.historyNote && <Notice><strong>About this page:</strong> {a.historyNote}</Notice>}
      </ArticleHeader>
      <div className="article mt-8" dangerouslySetInnerHTML={{ __html: g.intro }} />
      <div className="my-8"><Toc items={g.toc} /></div>
      <div className="article" dangerouslySetInnerHTML={{ __html: g.body }} />
      {g.credits.length > 0 && (
        <details className="mt-10 border-t border-line pt-4 text-[0.875rem] text-ink-3">
          <summary className="cursor-pointer select-none font-semibold">Image credits</summary>
          <ul className="mt-2 list-disc space-y-1 pl-5 [&_a]:text-ink-3 [&_a]:underline">
            {g.credits.map((c) => <li key={c} dangerouslySetInnerHTML={{ __html: c }} />)}
          </ul>
        </details>
      )}
      <AuthorBox a={authorOf(a)} />
      <RelatedArticles current={a} pool={articles} />
    </div>
  );
}
