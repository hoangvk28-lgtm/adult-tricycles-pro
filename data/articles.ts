import type { Article } from "@/data/types";
import { RESEARCH_STATEMENT } from "@/lib/site";
import { bestArticles } from "@/data/best";
import { reviewArticles } from "@/data/reviews";

const RESEARCH = `${RESEARCH_STATEMENT} Editorial review.`;

/**
 * Restored historical URLs. Slugs and root-level paths must not change:
 * they are the site's original WordPress URLs.
 */
export const guideArticles: Article[] = [
  {
    type: "guide",
    slug: "how-to-shop-for-your-first-adult-three-wheel-bike",
    path: "/how-to-shop-for-your-first-adult-three-wheel-bike/",
    sections: ["guides", "adult-tricycles"],
    title: "How to Shop for Your First Adult Three-Wheel Bike",
    metaTitle: "How to Shop for Your First Adult Tricycle",
    description:
      "Choose your first adult tricycle by checking rider fit, storage, weight limits, gears, brakes, assembly, and service before buying.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "how-to-shop-for-your-first-adult-three-wheel-bike.md",
    heroImage: { src: "/images/guides/first-adult-tricycle-hero.webp", alt: "A dark green adult tricycle with a rear wire basket parked on a lakeside path.", width: 1536, height: 1024 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "electric-tricycle-for-adults",
    path: "/electric-tricycle-for-adults/",
    sections: ["guides", "electric-tricycles"],
    title: "Electric Tricycles for Adults: How to Choose an E-Trike That Fits Your Life",
    metaTitle: "Electric Tricycles for Adults: How to Choose",
    description:
      "Learn how to compare adult electric tricycles for control, fit, batteries, braking, transport, and ownership support.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "electric-tricycle-for-adults.md",
    heroImage: { src: "/images/guides/electric-trike.webp", alt: "An Addmotor electric adult tricycle with front and rear baskets.", width: 1400, height: 1050 },
    methodology: RESEARCH,
    historyNote:
      "This URL previously hosted a review of a single EWheels model. That review is no longer current, so the page is now a general guide to choosing an electric tricycle and does not recommend a specific model.",
  },
  {
    type: "guide",
    slug: "which-muscles-does-a-3-wheel-bike-work",
    path: "/which-muscles-does-a-3-wheel-bike-work/",
    sections: ["guides"],
    title: "Which Muscles Does a Three-Wheel Bike Work?",
    description:
      "Understand the leg and hip muscles used when pedaling a tricycle, plus how fit, resistance, and electric assistance change the effort.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "which-muscles-does-a-3-wheel-bike-work.md",
    heroImage: { src: "/images/guides/recumbent-modern.webp", alt: "A rider seated on a recumbent tricycle with pedals ahead of the body.", width: 1400, height: 788 },
    methodology: RESEARCH,
    healthTopic: true,
    reviewStatus: "Not medically reviewed. General information, not medical advice.",
  },
  {
    type: "guide",
    slug: "why-cycling-is-one-of-the-best-knee-rehab-exercises",
    path: "/why-cycling-is-one-of-the-best-knee-rehab-exercises/",
    sections: ["guides"],
    title: "Cycling During Knee Rehabilitation: Benefits, Limits, and Safe Questions to Ask",
    metaTitle: "Cycling During Knee Rehab: Benefits and Limits",
    description:
      "Understand cycling during knee rehabilitation, including stationary bike fit, outdoor tricycle limits, symptoms, and questions for your therapist.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "why-cycling-is-one-of-the-best-knee-rehab-exercises.md",
    heroImage: { src: "/images/guides/exercise-bike.webp", alt: "A stationary exercise bicycle positioned indoors.", width: 1400, height: 1050 },
    methodology: RESEARCH,
    healthTopic: true,
    reviewStatus:
      "Not medically reviewed. General information, not medical advice: follow the plan agreed with your surgeon or physical therapist.",
  },
];

export const articles: Article[] = [...guideArticles, ...bestArticles, ...reviewArticles];

export function getArticleByPath(path: string): Article | undefined {
  return articles.find((a) => a.path === path);
}

export function articlesInSection(section: string): Article[] {
  return articles.filter((a) => (a.sections as string[]).includes(section));
}

/** A hub is indexable only when it has enough real content to not be a thin page. */
export const MIN_ARTICLES_FOR_INDEXED_HUB = 2;
