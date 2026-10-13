import type { Article } from "@/data/types";
import { bestAdultTricycles } from "@/data/best/best-adult-tricycles";
import { bestAdultTricycleCovers } from "@/data/best/best-adult-tricycle-covers";
import { bestMirrorsForAdultTricycles } from "@/data/best/best-mirrors-for-adult-tricycles";
import { bestSeatsForAdultTricycles } from "@/data/best/best-seats-for-adult-tricycles";
import { bestWideBicycleSeatsForTricycles } from "@/data/best/best-wide-bicycle-seats-for-tricycles";

/**
 * "Best" roundups, served at /<section>/<slug>/.
 * Add an entry only with verified listing specs and real ASINs.
 */
export const bestArticles: Article[] = [
  bestAdultTricycles,
  bestAdultTricycleCovers,
  bestMirrorsForAdultTricycles,
  bestSeatsForAdultTricycles,
  bestWideBicycleSeatsForTricycles,
];
