import type { Article } from "@/data/types";
import { bestFoldingAdultTricycles } from "@/data/best/best-folding-adult-tricycles";
import { bestAdultTricycles } from "@/data/best/best-adult-tricycles";
import { bestAdultTricycleCovers } from "@/data/best/best-adult-tricycle-covers";
import { bestMirrorsForAdultTricycles } from "@/data/best/best-mirrors-for-adult-tricycles";
import { bestSeatsForAdultTricycles } from "@/data/best/best-seats-for-adult-tricycles";
import { bestBasketsForAdultTricycles } from "@/data/best/best-baskets-for-adult-tricycles";
import { bestSafetyFlagsForTricycles } from "@/data/best/best-safety-flags-for-tricycles";
import { bestBicycleSeatsWithBackrestsForAdultTricycles } from "@/data/best/best-bicycle-seats-with-backrests-for-adult-tricycles";
import { bestBikeStorageTentsForAdultTricycles } from "@/data/best/best-bike-storage-tents-for-adult-tricycles";
import { bestFoldingElectricTricyclesForAdults } from "@/data/best/best-folding-electric-tricycles-for-adults";
import { bestWideBicycleSeatsForTricycles } from "@/data/best/best-wide-bicycle-seats-for-tricycles";

/**
 * "Best" roundups, served at /<section>/<slug>/.
 * Add an entry only with verified listing specs and real ASINs.
 */
export const bestArticles: Article[] = [
  bestFoldingAdultTricycles,
  bestAdultTricycles,
  bestAdultTricycleCovers,
  bestMirrorsForAdultTricycles,
  bestSeatsForAdultTricycles,
  bestBasketsForAdultTricycles,
  bestSafetyFlagsForTricycles,
  bestBicycleSeatsWithBackrestsForAdultTricycles,
  bestBikeStorageTentsForAdultTricycles,
  bestFoldingElectricTricyclesForAdults,
  bestWideBicycleSeatsForTricycles,
];
