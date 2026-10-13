import type { SectionSlug } from "@/lib/site";

/**
 * Specs are stored as text exactly as the manufacturer states them. Leave a field
 * undefined when the spec is not published; the page then shows "Not listed"
 * instead of a guess.
 */
export interface TrikeSpecs {
  dimensions?: string; // assembled L x W x H
  overallWidth?: string; // widest point, incl. basket/fenders
  bikeWeight?: string;
  riderLimit?: string;
  cargoLimit?: string;
  totalPayload?: string;
  wheelSize?: string;
  stepThroughHeight?: string;
  riderHeightRange?: string;
  gearing?: string;
  brakes?: string;
  folding?: string;
  // Electric models only
  motor?: string;
  battery?: string;
  assistModes?: string;
  throttle?: string;
  chargeTime?: string;
}

export interface Product {
  id: string;
  name: string; // exact model name incl. generation/year
  brand: string;
  /** Real Amazon ASIN, verified on the product page. Omit if not sold on Amazon. */
  asin?: string;
  /** Non-Amazon merchant link (never gets an Amazon tag). */
  merchantUrl?: string;
  merchantName?: string;
  image?: { src: string; alt: string; credit?: string };
  electric?: boolean;
  label?: string; // e.g. "Best for narrow gates"
  summary: string;
  specs: TrikeSpecs;
  specSource?: string; // URL of the manual/spec sheet used
  pros: string[];
  cons: string[];
  goodFor: string[];
  notFor: string[];
}

interface ArticleBase {
  slug: string;
  /** Public path with trailing slash. Restored historical URLs live at the root. */
  path: string;
  sections: SectionSlug[]; // first entry is the primary section (breadcrumb)
  title: string;
  metaTitle?: string;
  description: string;
  published: string; // ISO date
  updated: string;
  /** Used for cards and social previews. Guide bodies already contain their own figures. */
  heroImage?: { src: string; alt: string; width: number; height: number };
  methodology: string;
  /** Shown as-is. Never claim a medical review that did not happen. */
  reviewStatus?: string;
  healthTopic?: boolean;
}

export interface GuideArticle extends ArticleBase {
  type: "guide";
  contentFile: string; // content/guides/<file>.md
  /** Context for readers when an old URL's intent changed. */
  historyNote?: string;
}

export interface BestArticle extends ArticleBase {
  type: "best";
  shortAnswer: string;
  products: Product[];
  byNeed: { need: string; productId: string; why: string }[];
  howToChoose: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
}

export interface ReviewArticle extends ArticleBase {
  type: "review";
  shortAnswer: string;
  product: Product;
  sectionsBody: { heading: string; body: string }[];
  alternatives?: { name: string; path: string; why: string }[];
  faq: { q: string; a: string }[];
}

export type Article = GuideArticle | BestArticle | ReviewArticle;
