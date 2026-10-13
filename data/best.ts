import type { Article } from "@/data/types";
import { bestAdultTricycles } from "@/data/best/best-adult-tricycles";

/**
 * "Best" roundups, served at /<section>/<slug>/.
 * Add an entry only with verified listing specs and real ASINs.
 */
export const bestArticles: Article[] = [bestAdultTricycles];
