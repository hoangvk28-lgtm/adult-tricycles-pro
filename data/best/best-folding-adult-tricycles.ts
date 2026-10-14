import type { BestArticle } from "@/data/types";
import { RESEARCH_STATEMENT } from "@/lib/site";

// Selection (2026-10-14): non-electric folding adult trikes with at least 4.2 stars
// and 20+ ratings on Amazon. Only two models cleared that bar.
export const bestFoldingAdultTricycles: BestArticle = {
  type: "best",
  slug: "best-folding-adult-tricycles",
  path: "/folding-tricycles/best-folding-adult-tricycles/",
  sections: ["folding-tricycles"],
  noun: { plural: "Folding Adult Tricycles", singular: "Folding Adult Tricycle" },
  title: "The Best Folding Adult Tricycles: Two Worth Considering",
  metaTitle: "Best Folding Adult Tricycles",
  description:
    "Only two non-electric folding adult tricycles earned a place here. See how they compare on sizing, gears, load limits and what folding really saves you.",
  dek: "Folding trikes are rare and often disappointing. Two clear our bar, and both are close cousins, so the choice comes down to details.",
  published: "2026-10-14",
  updated: "2026-10-14",
  methodology: `${RESEARCH_STATEMENT} Editorial review.`,
  heroImage: { src: "https://m.media-amazon.com/images/I/510iA0WHhZL._SL500_.jpg", alt: "Slsy adult folding tricycle with rear basket", width: 500, height: 500 },
  intro: [
    "This is a short roundup on purpose. Most non-electric folding adult trikes are lightly built, poorly documented or have almost no real owner feedback, and a folding hinge is the one place on a trike where a weak build matters most. A trike that folds has a joint carrying the rider's weight, and a joint can loosen over time in a way a solid frame never will.",
    "We only shortlisted trikes with a solid record from real owners: at least 4.2 stars across 20 or more Amazon ratings. Only two folding models passed. They are similar machines with the same wheel sizes, 7 speeds and 350 lb capacity, so read the fit and storage advice below carefully before choosing.",
  ],
  shortAnswer:
    "If you need a trike that folds, the Slsy is the better-documented pick, with a basket rated for up to 110 lb and the longer owner record of the two. The MOPHOTO is nearly identical on paper, so buy whichever is available in your size. Either way, measure your storage and car space against the folded size before you order, and do not expect a fold to fit a small sedan trunk.",
  products: [
    {
      id: "slsy-folding",
      name: "Slsy Adult Folding Tricycle (7-speed, 20/24/26-inch)",
      brand: "Slsy",
      asin: "B0DJ8YCS9Z",
      selectionNote: "4.3 stars, 80 ratings (2026-10-14)",
      label: "Best Overall",
      verdict: "A 7-speed folder with three sizes, a big basket and the longer owner record of the two.",
      bestFor: "Apartment storage and riders from 4'8\" to 6'2\"",
      keySpec: "7-speed, 350 lb capacity, 110 lb basket",
      image: { src: "https://m.media-amazon.com/images/I/510iA0WHhZL._SL500_.jpg", alt: "Slsy adult folding tricycle with rear basket" },
      summary:
        "The Slsy is a high-carbon steel trike with a quick-fold frame, a low step-through, a 7-speed drivetrain and a rear basket rated for up to 110 lb. What matters is that it gives you gears on a folding frame, which most folders lack. A single-speed folder is a flat-ground machine; a 7-speed one can handle a gentle rise on the way to the shops.\n\nAgainst the MOPHOTO, the two are close siblings: the same three wheel sizes, the same 4'8\" to 6'2\" fit range and the same 350 lb capacity. The Slsy pulls ahead on its longer owner record and on its specified basket capacity, which gives a buyer something firm to plan around. Double-wall rims and a rust-resistant coating suit a trike that may live in a garage or an RV bay.\n\nThe caveat is the fold itself. Measure the folded trike yourself the day it arrives, and do not plan a car or closet around a number until you have, since fold dimensions vary by wheel size. And remember that a folded steel trike is still heavy, so ask who will lift it.",
      specs: {
        wheelSize: "20, 24 or 26 in",
        riderHeightRange: "4'8\" to 6'2\"",
        totalPayload: "350 lb",
        cargoLimit: "110 lb (rear basket)",
        gearing: "7-speed",
        folding: "Quick-fold frame",
        features: "High-carbon steel frame, double-wall rims, rust-resistant coating",
      },
      pros: ["7 speeds on a folding frame", "Three wheel sizes, 4'8\" to 6'2\"", "Basket rated for 110 lb", "Double-wall rims for loaded riding"],
      cons: ["Steel frame is heavy to lift folded", "Fold dimensions vary by size", "Brakes need checking on arrival"],
      goodFor: ["Apartment, RV or garage storage", "Light hills on a folding frame", "Riders between sizes"],
      notFor: ["Anyone who must lift it often", "Small sedan trunks"],
    },
    {
      id: "mophoto-folding",
      name: "MOPHOTO Adult Folding Tricycle (7-speed, 20/24/26-inch)",
      brand: "MOPHOTO",
      asin: "B0DLGTGDM4",
      selectionNote: "4.4 stars, 39 ratings (2026-10-14)",
      label: "Best Alternative",
      verdict: "Nearly the same trike as the Slsy, with a shorter owner record and a less certain basket rating.",
      bestFor: "Buyers who find it easier to source or prefer its look",
      keySpec: "7-speed, 350 lb capacity, quick-fold frame",
      image: { src: "https://m.media-amazon.com/images/I/510QcuD02aL._SL500_.jpg", alt: "MOPHOTO adult folding tricycle with large rear basket" },
      summary:
        "The MOPHOTO folding trike matches the Slsy on every main point: a high-carbon steel frame, a quick-fold design, 7 speeds, a low step-through and a 350 lb capacity. It comes in 20, 24 and 26-inch wheel sizes and fits riders from about 4'8\" to 6'2\", with an adjustable seat. If you were hoping the two would differ in some dramatic way, they do not.\n\nThat is useful in itself. Because the two look like siblings, the practical decision is not about frame design. It rests on which one is in stock in your size, which has the color you prefer, and how comfortable you are with a shorter owner record. The MOPHOTO has fewer owners behind it, so we weigh the Slsy's longer record more.\n\nOne thing to settle early is the basket: assume it carries less than the Slsy's 110 lb and keep loads modest until you have checked the rating for your size. As with any folder, check the hinge and locking mechanism on arrival and again after the first few rides.",
      specs: {
        wheelSize: "20, 24 or 26 in",
        riderHeightRange: "About 4'8\" to 6'2\"",
        totalPayload: "350 lb",
        gearing: "7-speed",
        folding: "Quick-fold frame",
        features: "High-carbon steel frame, adjustable seat, large rear basket",
      },
      pros: ["7 speeds on a folding frame", "Three wheel sizes, about 4'8\" to 6'2\"", "350 lb total capacity", "Large rear basket"],
      cons: ["Shorter owner record than the Slsy", "Steel frame is heavy folded", "Basket rating is lower-confidence"],
      goodFor: ["Folding storage with gears", "Neighborhood shopping runs", "Buyers who find it in stock first"],
      notFor: ["Heavy cargo until the basket rating is checked", "Frequent lifting"],
    },
  ],
  howWeChose: [
    { title: "Owner record", body: "We required at least 4.2 stars across 20 or more Amazon ratings. A folding hinge is the part most likely to loosen, so we wanted evidence from real owners." },
    { title: "Non-electric only", body: "Electric folders are a different category with different weight, battery and range questions. They are covered in our folding electric tricycle guide." },
    { title: "What folds, and how far", body: "We looked for trikes whose whole frame folds, rather than just a stem or a basket, since only a real frame fold changes storage." },
    { title: "Fit, gearing and load", body: "We favored models with a documented size range, gears and a clear weight capacity, because those decide whether a folder suits your body and route." },
  ],
  whatToLookFor: [
    {
      title: "What actually folds",
      paragraphs: [
        "Some trikes fold the frame, some only fold the handlebar stem and some only drop the basket. Only a frame fold meaningfully reduces the footprint. A stem fold alone leaves you with a trike still about as long and wide as a standard one.",
        "Before buying, ask which parts fold and what the folded length, width and height are. Then measure your closet, trunk or RV bay against those numbers, allowing room to lift it.",
      ],
    },
    {
      title: "The weight you will lift",
      paragraphs: [
        "A folding trike is a steel trike that has been made smaller, not lighter. The hinge adds weight, and a folded trike still has to be lifted by the frame or the wheels. For many riders the weight, not the folded size, decides whether the trike gets used.",
        "If you plan to lift it into a car, ask for the total weight and practice the lift with someone similar. If it is too heavy, consider leaving it folded in a garage or choosing a smaller wheel size.",
      ],
    },
    {
      title: "Hinge security",
      paragraphs: [
        "The folding joint takes the rider's weight and the shock of every bump. A hinge with a positive lock should snap shut and show no wiggle when you rock the frame. Play in a hinge gets worse with use, not better.",
        "On arrival, check the lock, tighten every fastener and look at the hinge again after your first few rides. If you notice play that you cannot tighten out, stop riding and have a bike shop inspect it.",
      ],
    },
    {
      title: "Gears on a folder",
      paragraphs: [
        "Many folders are single speed because that keeps the folding mechanism simple. A single speed is fine for flat ground, but a seated trike rider cannot stand on the pedals to climb, so even a modest hill is hard work.",
        "Both picks here have 7 speeds. Shift down before a rise, not on it, and keep the pedals turning lightly. If your route has a steady climb, gears matter more than any other feature.",
      ],
    },
    {
      title: "Size, wheels and fit",
      paragraphs: [
        "These trikes come in 20, 24 and 26-inch sizes with overlapping height ranges. A rider between sizes should usually choose the smaller frame for an easier step-through, or the larger one for fuller leg extension.",
        "Whichever you pick, set the seat low and check that you can sit with both feet flat on the ground. Smaller wheels are easier to store but feel bumps more and have less common replacement tires.",
      ],
    },
  ],
  howToChoose: [
    {
      heading: "By Where It Will Live",
      intro: "Match the trike to the space, then confirm the folded size before ordering.",
      table: {
        headers: ["Storage situation", "Our pick", "Why"],
        rows: [
          ["Apartment closet or hallway", "Slsy 20-inch", "Smallest wheel size and a quick-fold frame"],
          ["RV bay or garage corner", "Slsy or MOPHOTO", "Either folds to save floor space"],
          ["Back of an SUV or hatchback", "MOPHOTO 20-inch or Slsy 20-inch", "Smaller wheels give the smallest folded package"],
          ["Small sedan trunk", "Neither", "Folded steel trikes rarely fit a small trunk"],
        ],
      },
    },
    {
      heading: "By Rider Height",
      intro: "Both trikes share the same wheel sizes and a fit range of about 4'8\" to 6'2\". Confirm with the feet-flat test.",
      table: {
        headers: ["Rider height", "Our pick", "Size"],
        rows: [
          ["4'8\" to 5'3\"", "Slsy", "20-inch for an easy step-through"],
          ["5'3\" to 5'9\"", "Slsy or MOPHOTO", "24-inch, sized for a wide middle range"],
          ["5'9\" to 6'2\"", "MOPHOTO or Slsy", "26-inch for fuller leg extension"],
        ],
      },
    },
    {
      heading: "Folding vs Non-Folding",
      cards: [
        { label: "Folding", text: "Saves floor space and lets you store the trike in a closet or an RV. The price is a hinge to check, extra weight and a build that is often lighter-duty. In this guide: Slsy and MOPHOTO." },
        { label: "Non-folding", text: "A solid frame has no joint to wear and usually a more established track record. The price is size: it will not fit a trunk or small closet. See our best adult tricycles guide." },
      ],
      note: "If you have room, a non-folding trike is the safer long-term buy. Choose the Slsy or MOPHOTO only if the fold solves a real storage or transport problem.",
    },
    {
      heading: "When to Look Beyond These Two",
      cards: [
        { label: "Look elsewhere if", text: "You need a proven frame for years of daily use, you have no storage problem or you want motor assist for hills. A non-folding trike or a folding electric model will serve you better than the Slsy or MOPHOTO." },
        { label: "Choose these if", text: "Storage is the main constraint and your routes are flat or gently rolling. The Slsy is the first choice for its longer owner record and firm basket rating; the MOPHOTO is a fair substitute when it is easier to get." },
      ],
    },
  ],
  faq: [
    { q: "Why are there only two folding trikes here?", a: "Few non-electric folding adult trikes clear our bar of at least 4.2 stars across 20 or more Amazon ratings. We would rather show two honest picks than pad the list." },
    { q: "Do these trikes fit in a car trunk?", a: "Probably not in a small sedan. A folded steel trike is still bulky and heavy, so plan on a larger vehicle and measure first." },
    { q: "Is a folding trike as sturdy as a regular one?", a: "A hinge adds a place for play to develop, so check it on arrival and after the first rides. Both picks are rated for 350 lb of rider and cargo." },
    { q: "Which is better, the Slsy or MOPHOTO?", a: "They are very similar. The Slsy has the longer owner record and a firm 110 lb basket rating, so it is our first choice. Buy the MOPHOTO if it is in stock in your size." },
    { q: "Do I need gears on a folding trike?", a: "If your route has any steady slope, yes. A seated trike rider cannot stand to climb. Both picks here have 7 speeds." },
  ],
  needs: [
    {
      "heading": "Best 3-Speed Folding Adult Tricycles",
      "text": "Neither folding pick is a 3-speed. Both the [Slsy](#slsy-folding) and [MOPHOTO](#mophoto-folding) are 7-speed. If you specifically want 3 speeds, check the hub and shifter details before buying, since few folding trikes use them."
    },
    {
      "heading": "Best 7-Speed Folding Adult Tricycles",
      "productId": "slsy-folding",
      "text": "The [Slsy](#slsy-folding) is the top 7-speed folder, with a quick-fold frame, 350 lb capacity and a high-carbon steel frame. Check that the fold fits your storage space before ordering. The [MOPHOTO](#mophoto-folding) is a close alternative with the same speed count."
    },
    {
      "heading": "Best 20-Inch Folding Adult Tricycles",
      "productId": "slsy-folding",
      "text": "The [Slsy](#slsy-folding) comes in a 20-inch size and a quick-fold frame for apartment storage. Check your height against the size range, which runs from 4'8\" to 6'2\" across sizes. See /folding-adult-tricycle-real-world-fit/ for how folding trikes fit in real spaces."
    },
    {
      "heading": "Best 24-Inch Folding Adult Tricycles",
      "productId": "slsy-folding",
      "text": "The [Slsy](#slsy-folding) offers a 24-inch size with 7 speeds and a 350 lb total capacity. The one thing to check is the seat height against your inseam. The [MOPHOTO](#mophoto-folding) also comes in 24-inch with an adjustable seat."
    },
    {
      "heading": "Best 26-Inch Folding Adult Tricycles",
      "productId": "slsy-folding",
      "text": "The [Slsy](#slsy-folding) is available in 26-inch for taller riders, up to about 6'2\". Check that the folded size still fits your trunk or closet, since larger wheels fold bulkier. The [MOPHOTO](#mophoto-folding) is the other 26-inch option."
    },
    {
      "heading": "Best Folding Adult Tricycles With Baskets",
      "productId": "slsy-folding",
      "text": "The [Slsy](#slsy-folding) has a rear basket rated for 110 lb, the higher figure of the two. The [MOPHOTO](#mophoto-folding) has a large rear basket as well. Check that total payload, rider plus cargo, stays under 350 lb. See /how-to-store-and-transport-an-adult-tricycle/ for storage tips."
    }
  ],
  bottomLine:
    "Only two folding adult trikes earned a place here, and that scarcity is the honest message: folders cost you weight, a hinge to maintain and often a thinner build. If you need one, the Slsy is our first choice for its longer owner record and firm basket rating, and the MOPHOTO is a close alternative. Measure your space first, check the hinge on arrival and plan flat or gently rolling routes.",
  amazonSearch: "folding adult tricycle",
  relatedPaths: [
    "/mantis-tri-rad-folding-adult-tricycle-review/",
    "/folding-adult-tricycle-real-world-fit/",
    "/adult-tricycles/best-adult-tricycles/",
    "/how-to-store-and-transport-an-adult-tricycle/",
  ],
};
