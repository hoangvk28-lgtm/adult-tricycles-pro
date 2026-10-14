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
  // Accessories
  mount?: string; // fit / clamp range / mounting
  storage?: string; // how it packs away
  features?: string; // key construction details
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
  label?: string; // e.g. "Best Overall"
  /** One-line verdict shown as the pull quote. */
  verdict?: string;
  /** Short "best for" phrase for Quick Picks. */
  bestFor?: string;
  /** Single headline spec for Quick Picks. */
  keySpec?: string;
  /** "Why we like it": paragraphs separated by blank lines. */
  summary: string;
  specs: TrikeSpecs;
  specSource?: string; // URL of the manual/spec sheet used
  /** Internal selection evidence (e.g. Amazon Best Sellers Rank on pull date). Never rendered. */
  selectionNote?: string;
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
  /** Author slug from data/authors.ts; defaults to the site editor. */
  author?: string;
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

export interface ChooseSection {
  heading: string;
  intro?: string;
  table?: { headers: string[]; rows: string[][] };
  cards?: { label: string; text: string }[];
  note?: string;
}

export interface BestArticle extends ArticleBase {
  type: "best";
  /** Product noun for section headings, e.g. { plural: "Tricycle Baskets", singular: "Tricycle Basket" }. */
  noun?: { plural: string; singular: string };
  /** Dek under the H1. */
  dek: string;
  intro: string[];
  shortAnswer: string;
  products: Product[];
  howWeChose: { title: string; body: string }[];
  whatToLookFor: { title: string; paragraphs: string[] }[];
  howToChoose: ChooseSection[];
  faq: { q: string; a: string }[];
  bottomLine: string;
  /** Amazon search phrase for the "Browse all" link. */
  amazonSearch?: string;
  relatedPaths?: string[];
}

export interface ReviewArticle extends ArticleBase {
  type: "review";
  dek?: string;
  shortAnswer: string;
  /** Shown as a notice when the model is discontinued or hard to find. Omit when it is on sale. */
  availabilityNote?: string;
  /** Context when an old URL was rewritten. */
  historyNote?: string;
  product: Product;
  sectionsBody: { heading: string; body: string }[];
  alternatives?: { name: string; path: string; why: string }[];
  faq: { q: string; a: string }[];
}

export type Article = GuideArticle | BestArticle | ReviewArticle;
