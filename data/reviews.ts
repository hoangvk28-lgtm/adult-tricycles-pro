import type { Article } from "@/data/types";
import { schwinnMeridianAdultTricycleReview } from "@/data/reviews/schwinn-meridian-adult-tricycle-review";
import { barbella7SpeedAdultTricycleReview } from "@/data/reviews/barbella-7-speed-adult-tricycle-review";
import { mantisTriRadFoldingAdultTricycleReview } from "@/data/reviews/mantis-tri-rad-folding-adult-tricycle-review";
import { moboTritonProRecumbentTricycleReview } from "@/data/reviews/mobo-triton-pro-recumbent-tricycle-review";
import { addmotorMotanHeavyDutyElectricTricycle } from "@/data/reviews/addmotor-motan-heavy-duty-electric-tricycle";

/**
 * Single-model reviews. Restored historical URLs live at the root.
 * Do not add a review until its full content exists: no placeholder pages.
 */
export const reviewArticles: Article[] = [
  schwinnMeridianAdultTricycleReview,
  barbella7SpeedAdultTricycleReview,
  mantisTriRadFoldingAdultTricycleReview,
  moboTritonProRecumbentTricycleReview,
  addmotorMotanHeavyDutyElectricTricycle,
];
