export const SITE_NAME = "Adult Tricycles Pro";
// `||` rather than `??`: Vercel can define the variable with an empty value.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://adulttricyclespro.com";
export const SITE_DESCRIPTION =
  "Research-based buying guides for adult tricycles, electric trikes, folding and recumbent trikes, written for riders, seniors and the family members shopping with them.";
export const DEFAULT_TITLE = "Adult Tricycles Pro | Adult Tricycle Buying Guides";

/** Methodology statement shown wherever we compare or describe products. */
export const RESEARCH_STATEMENT =
  "Research-based, not hands-on tested unless explicitly stated.";

export type SectionSlug =
  | "adult-tricycles"
  | "electric-tricycles"
  | "folding-tricycles"
  | "recumbent-tricycles"
  | "accessories"
  | "guides";

export interface Section {
  slug: SectionSlug;
  name: string;
  short: string;
  intro: string;
}

export const SECTIONS: Section[] = [
  {
    slug: "adult-tricycles",
    name: "Adult Tricycles",
    short: "Upright pedal trikes for errands, exercise and relaxed rides.",
    intro:
      "Upright adult tricycles put the rider in a familiar seated position over three wheels. Our coverage focuses on fit, step-through height, rider and cargo limits, gearing and brakes rather than headline claims.",
  },
  {
    slug: "electric-tricycles",
    name: "Electric Tricycles",
    short: "Pedal-assist and throttle e-trikes: motors, batteries, range and control.",
    intro:
      "Electric tricycles add a motor and battery to a three-wheel frame. We explain how assistance, braking, battery capacity and charging affect everyday use, and we do not repeat manufacturer range claims as fact.",
  },
  {
    slug: "folding-tricycles",
    name: "Folding Tricycles",
    short: "Trikes that fold or split for storage and transport.",
    intro:
      "Folding tricycles trade some simplicity for easier storage. The questions that matter are the folded dimensions, the weight of the heaviest piece and whether you can actually lift it.",
  },
  {
    slug: "recumbent-tricycles",
    name: "Recumbent Tricycles",
    short: "Low, reclined seating with the pedals out front.",
    intro:
      "Recumbent trikes seat the rider low and reclined. They change getting on and off, visibility in traffic and how the legs work, so fit and transfer height come first.",
  },
  {
    slug: "accessories",
    name: "Accessories",
    short: "Baskets, lights, mirrors, locks, flags and covers.",
    intro:
      "Accessories that make a tricycle safer and easier to live with, checked for fit with the specific frame and load limits.",
  },
  {
    slug: "guides",
    name: "Guides",
    short: "How to choose, ride and maintain a three-wheel bike.",
    intro:
      "Plain-English guides to choosing, riding and looking after an adult tricycle. Health topics are general information, not medical advice.",
  },
];

export const SECTION_SLUGS = SECTIONS.map((s) => s.slug);

export function getSection(slug: string): Section | undefined {
  return SECTIONS.find((s) => s.slug === slug);
}
