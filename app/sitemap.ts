import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { SECTIONS } from "@/lib/site";
import { articles, articlesInSection, MIN_ARTICLES_FOR_INDEXED_HUB } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about/", "/how-we-research/", "/affiliate-disclosure/", "/privacy-policy/", "/contact/"];
  // Hubs below the content threshold are noindex, so they stay out of the sitemap.
  const hubs = SECTIONS.filter((s) => articlesInSection(s.slug).length >= MIN_ARTICLES_FOR_INDEXED_HUB).map((s) => `/${s.slug}/`);
  return [
    ...staticPages.map((p) => ({ url: absoluteUrl(p) })),
    ...hubs.map((p) => ({ url: absoluteUrl(p) })),
    ...articles.map((a) => ({
      url: absoluteUrl(a.path),
      lastModified: a.updated,
      ...(a.heroImage ? { images: [absoluteUrl(a.heroImage.src)] } : {}),
    })),
  ];
}
