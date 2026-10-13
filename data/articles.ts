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
  // Batches 2 and 3 (new informational URLs, 2026-10-13).
  {
    type: "guide",
    slug: "adult-tricycle-gears-and-hill-riding",
    path: "/adult-tricycle-gears-and-hill-riding/",
    sections: ["guides", "adult-tricycles"],
    title: "Adult Tricycle Gears and Hills: Shifting, Pedal Effort, and Electric Assistance",
    metaTitle: "Adult Tricycle Gears and Hill Riding",
    description: "Understand adult tricycle gears, shifting, hill planning, cargo, and electric assistance without confusing motor settings with gear ratios.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "adult-tricycle-gears-and-hill-riding.md",
    heroImage: { src: "/images/guides/gears.webp", alt: "A close view of a bicycle chain and rear gear cluster.", width: 1400, height: 1050 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "adult-tricycle-maintenance-checklist",
    path: "/adult-tricycle-maintenance-checklist/",
    sections: ["guides"],
    title: "Adult Tricycle Maintenance Checklist: Owner Checks, Cleaning, and Service Decisions",
    metaTitle: "Adult Tricycle Maintenance Checklist",
    description: "Use an adult tricycle maintenance checklist for tires, brakes, steering, chains, batteries, service records, and safe repair decisions.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "adult-tricycle-maintenance-checklist.md",
    heroImage: { src: "/images/guides/repair-kit.webp", alt: "A compact emergency kit containing a tube, inflation equipment, and tire tools.", width: 1400, height: 1050 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "adult-tricycle-sizing-and-fit-guide",
    path: "/adult-tricycle-sizing-and-fit-guide/",
    sections: ["guides", "adult-tricycles"],
    title: "Adult Tricycle Sizing and Fit: More Than a 20-, 24-, or 26-Inch Wheel",
    metaTitle: "Adult Tricycle Sizing and Fit",
    description: "Check adult tricycle fit using pedal reach, entry, seat adjustment, control access, payload limits, and real vehicle measurements.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "adult-tricycle-sizing-and-fit-guide.md",
    heroImage: { src: "/images/guides/adult-tricycle.webp", alt: "An upright tricycle with a low frame and rear basket.", width: 1400, height: 930 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "how-to-ride-an-adult-tricycle-safely",
    path: "/how-to-ride-an-adult-tricycle-safely/",
    sections: ["guides", "adult-tricycles"],
    title: "How to Ride an Adult Tricycle Safely: Starts, Stops, Turns, and Everyday Routes",
    metaTitle: "How to Ride an Adult Tricycle Safely",
    description: "Learn adult tricycle starts, stops, turning, cargo handling, and route planning, with model-specific precautions and beginner practice guidance.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "how-to-ride-an-adult-tricycle-safely.md",
    heroImage: { src: "/images/guides/helmet.webp", alt: "A bicycle helmet shown on its own.", width: 1400, height: 933 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "how-to-store-and-transport-an-adult-tricycle",
    path: "/how-to-store-and-transport-an-adult-tricycle/",
    sections: ["guides"],
    title: "How to Store and Transport an Adult Tricycle: Measurements, Security, and Loading",
    metaTitle: "Store and Transport an Adult Tricycle",
    description: "Plan adult tricycle storage and transport by checking access, folded dimensions, security, battery care, loading, and carrier compatibility.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "how-to-store-and-transport-an-adult-tricycle.md",
    heroImage: { src: "/images/guides/parked-bike.webp", alt: "A two-wheel folding bicycle parked with a U-lock at its front wheel.", width: 1400, height: 1050 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "adult-tricycle-brakes-and-parking-brakes",
    path: "/adult-tricycle-brakes-and-parking-brakes/",
    sections: ["guides"],
    title: "Adult Tricycle Brakes: Rim, Disc, Hydraulic, and Parking Systems Explained",
    metaTitle: "Adult Tricycle Brakes Explained",
    description: "Understand adult tricycle rim, disc, hydraulic, parking, and motor cut-off systems, plus control fit and component-specific service needs.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "adult-tricycle-brakes-and-parking-brakes.md",
    heroImage: { src: "/images/guides/disc-brake.webp", alt: "A bicycle disc brake with a caliper and rotor.", width: 1400, height: 1055 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "adult-tricycle-grocery-shopping-and-cargo-guide",
    path: "/adult-tricycle-grocery-shopping-and-cargo-guide/",
    sections: ["guides", "accessories"],
    title: "Grocery Shopping on an Adult Tricycle: Cargo Limits, Packing, and the Trip Home",
    metaTitle: "Grocery Shopping on an Adult Tricycle",
    description: "Plan grocery trips on an adult tricycle with clear cargo limits, compatible baskets, secure packing, parking, and a manageable ride home.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "adult-tricycle-grocery-shopping-and-cargo-guide.md",
    heroImage: { src: "/images/guides/basket.webp", alt: "A front basket on a two-wheel bicycle.", width: 1400, height: 834 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "adult-tricycle-tires-pressure-and-punctures",
    path: "/adult-tricycle-tires-pressure-and-punctures/",
    sections: ["guides", "accessories"],
    title: "Adult Tricycle Tires: Pressure, Compatibility, and What to Do About Punctures",
    metaTitle: "Adult Tricycle Tires and Punctures",
    description: "Understand adult tricycle tire pressure, tube compatibility, puncture protection, inspections, and safe repair and recovery decisions.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "adult-tricycle-tires-pressure-and-punctures.md",
    heroImage: { src: "/images/guides/schrader-valve.webp", alt: "A Schrader valve on a bicycle wheel.", width: 1400, height: 1057 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "electric-tricycle-range-and-route-planning",
    path: "/electric-tricycle-range-and-route-planning/",
    sections: ["guides", "electric-tricycles"],
    title: "Electric Tricycle Range: How to Plan a Route Without Trusting the Maximum Claim",
    metaTitle: "Electric Tricycle Range Planning",
    description: "Plan electric tricycle routes using battery energy, real conditions, trip logs, return margins, and a practical recovery option.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "electric-tricycle-range-and-route-planning.md",
    heroImage: { src: "/images/guides/electric-trike.webp", alt: "An electric adult tricycle with cargo baskets and a handlebar display.", width: 1400, height: 1050 },
    methodology: RESEARCH,
  },
  {
    type: "guide",
    slug: "upright-vs-recumbent-adult-tricycles",
    path: "/upright-vs-recumbent-adult-tricycles/",
    sections: ["guides", "recumbent-tricycles"],
    title: "Upright vs. Recumbent Adult Tricycles: How to Compare the Real Trade-Offs",
    metaTitle: "Upright vs. Recumbent Adult Tricycles",
    description: "Compare upright and recumbent adult tricycles by entry, support, pedal reach, handling, cargo, storage, and real ownership needs.",
    published: "2026-10-13",
    updated: "2026-10-13",
    contentFile: "upright-vs-recumbent-adult-tricycles.md",
    heroImage: { src: "/images/guides/recumbent-classic.webp", alt: "A recumbent tadpole tricycle with two front wheels and a long seat-to-pedal layout.", width: 1400, height: 1050 },
    methodology: RESEARCH,
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
