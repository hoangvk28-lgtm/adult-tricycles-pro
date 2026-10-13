import type { Article } from "@/data/types";
import { GuidePage } from "@/components/GuidePage";
import { BestPage } from "@/components/BestPage";
import { ReviewPage } from "@/components/ReviewPage";

export function ArticlePage({ a }: { a: Article }) {
  if (a.type === "best") return <BestPage a={a} />;
  if (a.type === "review") return <ReviewPage a={a} />;
  return <GuidePage a={a} />;
}
