import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

/** All routes use trailing slashes (`trailingSlash: true`), matching the historical WordPress URLs. */
export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  let p = path.startsWith("/") ? path : `/${path}`;
  if (!p.endsWith("/") && !/\.[a-z0-9]+$/i.test(p)) p += "/";
  return `${SITE_URL}${p}`;
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex = false,
  type = "website",
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  type?: "website" | "article";
  /** Use the title verbatim (homepage). */
  absoluteTitle?: boolean;
}): Metadata {
  const fullTitle = absoluteTitle || title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = absoluteUrl(path);
  const ogImage = image ? absoluteUrl(image) : absoluteUrl("/opengraph-image");
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [{ url: ogImage, alt: fullTitle }],
      type,
      locale: "en_US",
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage] },
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  };
}
