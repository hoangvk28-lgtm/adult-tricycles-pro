import type { BestArticle } from "@/data/types";
import { RESEARCH_STATEMENT } from "@/lib/site";

// Selection (2026-10-13): non-electric, non-folding adult trikes with at least
// 4.2 stars and 20+ ratings on Amazon (scripts/amazon-ratings.sh), using the
// listing with the most ratings for each model. Specs come only from listings.
export const bestAdultTricycles: BestArticle = {
  type: "best",
  slug: "best-adult-tricycles",
  path: "/adult-tricycles/best-adult-tricycles/",
  sections: ["adult-tricycles"],
  title: "The Best Adult Tricycles for Errands, Exercise and Easy Rides",
  metaTitle: "Best Adult Tricycles",
  description:
    "Six well-reviewed adult tricycles compared on rider height, gearing, brakes, weight limits and storage, with clear advice on which one fits the rider.",
  dek: "Six well-reviewed upright trikes, compared on the things that decide whether a rider keeps using one: fit, gears, brakes, weight limits and where it will live.",
  published: "2026-10-13",
  updated: "2026-10-13",
  methodology: `${RESEARCH_STATEMENT} Editorial review.`,
  heroImage: { src: "https://m.media-amazon.com/images/I/51oIQh6LL-L._SL500_.jpg", alt: "Schwinn Meridian adult tricycle in periwinkle with rear basket", width: 500, height: 500 },
  intro: [
    "Most adult tricycles sold online come from a handful of factories and look almost identical in photos: a step-through steel frame, a big cruiser seat, a wire basket over the rear axle. The differences that matter are quieter. Whether the frame actually fits the rider. Whether there are gears for the one hill between the house and the shops. Whether the brakes can be squeezed by hands that are not as strong as they were. Whether the trike will fit through the side gate.",
    "We started from every upright, non-electric adult trike we could find on Amazon and kept only models with a solid record from owners: at least 4.2 stars across 20 or more ratings. That cut out a surprising number of polished listings with almost no real buyers behind them. The six below are what remained, sorted by who each one suits.",
  ],
  shortAnswer:
    "If the riding is mostly flat, buy the Schwinn Meridian: it has by far the longest owner record of any adult trike on Amazon, a published 5'0\" to 6'1\" fit range and an aluminum frame that is easier to move around than steel. If there are hills, get a 7-speed: the MOONCOOL adds a seat backrest, while the Slsy and MOPHOTO come in three frame sizes. Riders under about 5'1\" should look at the 24-inch Brightpeak. And whichever you choose, slow down before every turn: a trike will not fall over at a stop sign, but it can tip in a fast corner.",
  products: [
    {
      id: "schwinn-meridian",
      name: "Schwinn Meridian Adult Tricycle (26-inch, single speed)",
      brand: "Schwinn",
      asin: "B08239YG6M",
      selectionNote: "4.3 stars, 3,345 ratings (2026-10-13)",
      label: "Best Overall",
      verdict: "The safe default for flat towns: years of owner feedback, honest fit guidance and a lighter aluminum frame.",
      bestFor: "Riders 5'0\" to 6'1\" on flat or gently rolling routes",
      keySpec: "Aluminum frame, single speed, 26-inch wheels",
      image: { src: "https://m.media-amazon.com/images/I/51oIQh6LL-L._SL500_.jpg", alt: "Schwinn Meridian adult tricycle in periwinkle with rear basket" },
      summary:
        "The Meridian has been the reference adult trike on Amazon for years, and it has the owner record to show for it: thousands of ratings, where most rivals have dozens. That matters more than any spec. A long record means the common problems (spokes that loosen in the first month, brakes that need a turn of the barrel adjuster, a seat that creeps down) are well known and easy to fix, and Schwinn bikes are familiar to almost every bike shop.\n\nThe aluminum frame is the detail people underrate. Amazon lists the trike at roughly 35 lb, noticeably lighter than the steel trikes here. You feel that every time you back it out of a shed, lift the front over a curb or push it up a garage step. The brakes suit older hands too: a front linear-pull brake for stopping power, and an enclosed rear drum brake that keeps working in the wet and needs almost no adjustment.\n\nThe one real limitation is the single gear. On flat ground it is relaxing and simple. On a steady climb, a seated rider on a 26-inch single-speed trike runs out of leverage quickly, and you cannot stand and rock a trike the way you would a bicycle. If there is a hill you have to ride every day, look at the MOONCOOL or Slsy instead.",
      specs: {
        wheelSize: "26 in",
        riderHeightRange: "5'0\" to 6'1\"",
        bikeWeight: "About 35 lb (Amazon item weight)",
        cargoLimit: "44 lb (rear basket)",
        gearing: "Single speed",
        brakes: "Front linear pull, rear drum",
      },
      pros: ["Longest owner record of any adult trike here", "Aluminum frame, lighter to move", "Enclosed rear drum brake, low upkeep", "Published 5'0\" to 6'1\" fit range"],
      cons: ["No gears for steady hills", "Rider weight limit not listed", "Basket rated for only 44 lb"],
      goodFor: ["Flat neighborhoods, beach paths, park loops", "Riders who want the simplest drivetrain", "Anyone storing it up a step or in a tight shed"],
      notFor: ["Daily climbs", "Riders under 5'0\""],
    },
    {
      id: "mooncool-7-speed",
      name: "MOONCOOL 7-Speed Adult Tricycle with Backrest Seat",
      brand: "MOONCOOL",
      asin: "B0H5JLSYB8",
      selectionNote: "4.5 stars, 136 ratings (2026-10-13)",
      label: "Best for Hills and Back Support",
      verdict: "Gears for the climbs and a seat you can lean back into, with the best owner rating in this group.",
      bestFor: "Rolling routes and riders who tire or want back support",
      keySpec: "7-speed, backrest seat, 20/24/26-inch sizes",
      image: { src: "https://m.media-amazon.com/images/I/516M-5uojHL._SL500_.jpg", alt: "MOONCOOL 7-speed adult tricycle with backrest seat and basket" },
      summary:
        "Two things set the MOONCOOL apart: it is the only trike here with a backrest on the seat, and it has the highest owner rating of the group. The backrest is not a gimmick. On an upright trike you spend the whole ride seated, and a rider with a stiff lower back or a weaker core will relax into it on a longer ride instead of hunching over the bars.\n\nThe 7-speed drivetrain turns rolling routes from a chore into something manageable. Shift down before the hill, not on it, and keep the pedals turning lightly. The brakes pair a front linear pull with a rear expander brake, an enclosed hub brake that, like the Schwinn's drum, shrugs off rain and rarely needs adjusting.\n\nRead the weight figure carefully. The 350 lb limit covers rider and cargo together, and the basket is rated for 50 lb on its own, so a 300 lb rider has only 50 lb left for shopping. The listing also gives no height chart for its three wheel sizes, so check seat height against the rider (see How to Choose below) before picking 20, 24 or 26 inches.",
      specs: {
        wheelSize: "20, 24 or 26 in",
        totalPayload: "350 lb (rider plus cargo)",
        cargoLimit: "50 lb (rear basket)",
        gearing: "7-speed",
        brakes: "Front linear pull, rear expander",
      },
      pros: ["Seat backrest, unique in this group", "7 speeds for rolling terrain", "Enclosed rear brake works in the wet", "Highest owner rating here"],
      cons: ["350 lb limit includes cargo", "No height chart for the three sizes", "Steel frame, weight not listed"],
      goodFor: ["Riders with a stiff back or weaker core", "Hilly retirement communities", "Longer leisure rides"],
      notFor: ["Heavier riders who also carry heavy shopping", "Buyers who want clear size guidance"],
    },
    {
      id: "slsy-7-speed",
      name: "Slsy Adult Tricycle (7-speed, 20/24/26-inch)",
      brand: "Slsy",
      asin: "B0DMFFRZC9",
      selectionNote: "4.3 stars, 131 ratings (2026-10-13)",
      label: "Best Size Range",
      verdict: "Clear fit charts for three frame sizes make it the easiest 7-speed to buy for someone you cannot measure in person.",
      bestFor: "Buying for a parent, or a rider between sizes",
      keySpec: "7-speed, 350 lb capacity, height chart for 3 sizes",
      image: { src: "https://m.media-amazon.com/images/I/51W6hxQgUxL._SL500_.jpg", alt: "Slsy adult tricycle with step-through frame and rear basket" },
      summary:
        "Fit is where most online trike purchases go wrong, and Slsy is the most helpful brand here on that front. It publishes a height range for every size: 20-inch for 4'8\" to 5'6\", 24-inch for 4'11\" to 5'10\", and 26-inch for 5'3\" to 6'2\". The overlap is useful. A 5'4\" rider with stiff knees can choose the 24-inch frame for an easier step-through and a lower seat, while a 5'4\" rider who likes a fuller leg extension can go 26.\n\nBeyond fit, it covers the basics well: 7 speeds for light hills, a 350 lb capacity, a rear basket and a bottle cage, a small sign that someone thought about longer rides. The listing does not name the brake type, so check what is fitted when it arrives and make sure the levers are within easy reach before the first ride.\n\nIf you are comparing it with the MOPHOTO, know that the two listings publish identical size charts and the same 350 lb rating. They look like close siblings. Choose between them on color, availability and the small extras, not on imagined differences in the frame.",
      specs: {
        wheelSize: "20, 24 or 26 in",
        riderHeightRange: "20 in: 4'8\"-5'6\"; 24 in: 4'11\"-5'10\"; 26 in: 5'3\"-6'2\"",
        totalPayload: "350 lb",
        gearing: "7-speed",
      },
      pros: ["Height chart for all three sizes", "7 speeds for light hills", "350 lb stated capacity", "Bottle cage included"],
      cons: ["Brake type not stated", "Basket limit not listed", "Near-twin of the MOPHOTO"],
      goodFor: ["Buying for someone you cannot measure", "Riders between two sizes", "Light hills"],
      notFor: ["Buyers who want brake details before ordering"],
    },
    {
      id: "mophoto-7-speed",
      name: "MOPHOTO 7-Speed Adult Tricycle (20/24/26-inch)",
      brand: "MOPHOTO",
      asin: "B0HC6CF416",
      selectionNote: "4.3 stars, 71 ratings (2026-10-13)",
      label: "Best Everyday Details",
      verdict: "The Slsy formula plus a chain cover, reflectors and reinforced rims: the small things that matter on daily rides.",
      bestFor: "Daily riders in everyday clothes",
      keySpec: "7-speed, chain cover, double-layer rims",
      image: { src: "https://m.media-amazon.com/images/I/51hoqkiAxbL._SL500_.jpg", alt: "MOPHOTO 7-speed adult tricycle in blush pink with rear basket" },
      summary:
        "The MOPHOTO shares the Slsy's size chart and 350 lb capacity, so the fit advice is the same. Where it earns its own place is in the everyday details. A chain cover keeps trouser legs and skirts out of the chain, which matters more on a trike, where people ride in normal clothes rather than cycling gear. Reflectors come fitted front and rear, and the rims are double-walled, which helps when a loaded basket meets a pothole.\n\nThe wide padded saddle and low step-through frame are standard for the category, and the 7-speed drivetrain handles light inclines. The seller lists US-based support, which is worth having for something that arrives in a box and has to be assembled.\n\nAs with the Slsy, the listing does not name the brakes. If the rider's hands are weak, check lever reach and pull on arrival, and have a bike shop adjust them if they feel heavy.",
      specs: {
        wheelSize: "20, 24 or 26 in",
        riderHeightRange: "20 in: 4'8\"-5'6\"; 24 in: 4'11\"-5'10\"; 26 in: 5'3\"-6'2\"",
        totalPayload: "350 lb",
        gearing: "7-speed",
      },
      pros: ["Chain cover protects clothing", "Reflectors fitted front and rear", "Double-layer rims for loaded riding", "Same clear size chart as Slsy"],
      cons: ["Brake type not stated", "Basket limit not listed", "Shorter owner record than Slsy"],
      goodFor: ["Riding in everyday clothes", "Regular shopping runs", "Riders who value US-based support"],
      notFor: ["Buyers who need full brake specs first"],
    },
    {
      id: "max4out",
      name: "Max4out Adult Tricycle with Large Basket (24/26-inch)",
      brand: "Max4out",
      asin: "B0F7L9R7L2",
      selectionNote: "4.2 stars, 42 ratings (2026-10-13)",
      label: "Best for Rougher Paths",
      verdict: "Wide tires, a shock-absorbing saddle and wide bars make it the comfort pick for cracked sidewalks and packed gravel.",
      bestFor: "Rough pavement and riders who want a softer ride",
      keySpec: "Oversized tires, shock-absorbing seat, 350 lb",
      image: { src: "https://m.media-amazon.com/images/I/41R86HNneyL._SL500_.jpg", alt: "Max4out blue adult tricycle with large rear basket" },
      summary:
        "Max4out leans into comfort: oversized wide-tread tires, a shock-absorbing cruiser saddle and wide adjustable handlebars. On a trike, all three wheels hit every bump and you cannot lift off the saddle as easily as on a bike, so bigger tires at a sensible pressure do more for comfort than any spring. This is the trike for cracked sidewalks, brick paths and packed gravel.\n\nThe frame carries a stated 350 lb. The wide handlebars give more steering leverage, which helps riders with weaker grip, though they also make the trike wider at the front, so measure narrow gates.\n\nTwo things in the listing need care. It does not state the gearing or the brake type, so assume a single speed until you confirm otherwise. And its claim that the 24-inch size fits riders from 4'1\" is unusually low for that wheel size; treat that as optimistic and check seat height before buying for a very short rider. Ignore the line about the frame eliminating tipping worries: no trike does.",
      specs: {
        wheelSize: "24 or 26 in",
        riderHeightRange: "As listed: 24 in 4'1\"-5'9\"; 26 in 5'3\"-6'2\"",
        totalPayload: "350 lb",
      },
      pros: ["Oversized tires soften rough paths", "Shock-absorbing saddle", "Wide bars give steering leverage", "350 lb stated capacity"],
      cons: ["Gearing and brakes not stated", "24-inch height claim looks optimistic", "Wide bars need wider gates"],
      goodFor: ["Cracked pavement and packed gravel", "Riders who want a softer seat", "Weaker grip that needs leverage"],
      notFor: ["Hilly routes until gearing is confirmed", "Narrow side gates"],
    },
    {
      id: "brightpeak-1-speed",
      name: "Brightpeak 1-Speed Adult Tricycle (24-inch and 26-inch)",
      brand: "Brightpeak",
      asin: "B0G4R4KYMR",
      selectionNote: "4.6 stars, 23 ratings (2026-10-13)",
      label: "Best for Shorter or Heavier Riders",
      verdict: "A 24-inch frame sized for riders from 4'9\" and a 450 lb frame rating, both rare at this level.",
      bestFor: "Riders under about 5'1\", or heavier riders on flat routes",
      keySpec: "450 lb frame rating, 24-inch size for 4'9\"+",
      image: { src: "https://m.media-amazon.com/images/I/414I6Pj4ieL._SL500_.jpg", alt: "Brightpeak blue single-speed adult tricycle with large rear basket" },
      summary:
        "Brightpeak solves two problems the bigger names do not. Its 24-inch frame is sized for riders from 4'9\" to 5'1\", below the Schwinn's 5'0\" minimum, and its steel frame carries a stated 450 lb, the highest rating in this group. The rear basket takes 50 lb and the wide seat sits on conical springs.\n\nIt is single speed, so treat it as a flat-ground trike like the Schwinn. The front brake is a V-brake; the listing describes the rest only as an all-wheel system, so confirm exactly what acts on the rear when it arrives.\n\nWatch the gap in its sizing: the 24-inch tops out at 5'1\" and the 26-inch starts at 5'3\". A rider around 5'2\" should look at the Slsy or MOPHOTO, whose ranges overlap. Its owner record is the shortest here but its rating is the highest, which is a good start rather than a long history.",
      specs: {
        wheelSize: "24 or 26 in",
        riderHeightRange: "24 in: 4'9\"-5'1\"; 26 in: 5'3\"-6'2\"",
        totalPayload: "450 lb (frame rating)",
        cargoLimit: "50 lb (rear basket)",
        gearing: "Single speed",
        brakes: "Front V-brake, rear not specified",
      },
      pros: ["24-inch size fits riders from 4'9\"", "Highest stated capacity: 450 lb", "Spring-cushioned wide seat", "50 lb rear basket"],
      cons: ["Single speed only", "No size for riders near 5'2\"", "Shortest owner record here"],
      goodFor: ["Petite riders", "Heavier riders on flat ground"],
      notFor: ["Hills", "Riders between 5'1\" and 5'3\""],
    },
  ],
  howWeChose: [
    { title: "Owner track record", body: "Every pick has at least 4.2 stars across 20 or more Amazon ratings, using the listing with the most ratings for each model. Polished listings with only a handful of reviews were left out, however good they looked." },
    { title: "Fit information", body: "We favored brands that publish rider height ranges per frame size, because a trike that is too tall or too short is the most common reason people stop riding." },
    { title: "Terrain and gearing", body: "We matched single-speed and 7-speed models to the routes they suit, rather than treating more gears as automatically better." },
    { title: "Brakes and hands", body: "We looked at what brake acts on which wheel, and whether an enclosed hub brake is fitted, since those keep working in the wet and need little adjustment." },
    { title: "Honest specs", body: "Weight limits, basket ratings and fit claims were read carefully and flagged where they include cargo, conflict or look optimistic. Anything not published is marked as not listed." },
  ],
  whatToLookFor: [
    {
      title: "Fit the rider first, then pick the wheel size",
      paragraphs: [
        "Wheel size on a trike works like frame size on a bicycle, but brands do not agree on what fits whom. Schwinn says its 26-inch Meridian suits 5'0\" to 6'1\"; Slsy says its 26-inch suits 5'3\" to 6'2\". Go by the specific listing, not the wheel number.",
        "The practical test: with the seat at its lowest, the rider should be able to sit and put both feet flat on the ground. That is what makes stopping and starting relaxed. With the seat raised for riding, the knee should keep a slight bend at the bottom of the pedal stroke.",
        "If you are buying for someone else and cannot measure, choose a brand with overlapping size ranges (Slsy, MOPHOTO) and go one size down when in doubt. A trike that is slightly small is far easier to live with than one that is too tall.",
      ],
    },
    {
      title: "Read the weight limit as one number for everything",
      paragraphs: [
        "Listings mix up rider limits, basket limits and total payload. MOONCOOL's 350 lb covers rider and cargo together. Brightpeak's 450 lb is a frame rating. Schwinn does not list a rider limit at all.",
        "The safe approach is to add the rider, the basket load and anything hanging from the handlebars, and stay under the lowest figure the seller gives. Heavy loads also change how the trike corners, which is the next point.",
      ],
    },
    {
      title: "Understand why trikes tip, and when",
      paragraphs: [
        "A tricycle is stable when stopped or going straight, which is exactly why older riders like it. In a turn, though, it cannot lean the way a bicycle does. Speed, a side slope or a heavy load up high pushes the weight toward the outside wheel, and the inside wheel can lift.",
        "So slow down before the turn, not in it. Keep heavy shopping low in the basket and centered over the axle. Treat driveways and cambered paths with respect. Several listings say their frames eliminate tipping. None does, and a rider who believes that is more likely to corner fast.",
      ],
    },
    {
      title: "Match the gears to the route",
      paragraphs: [
        "On a trike you pedal seated almost all the time, so you cannot stand and use your body weight on a climb. A single-speed trike is lovely on flat ground and hard work on any steady slope.",
        "If the route includes a hill you will meet every day, choose a 7-speed and learn one habit: shift down before the hill starts. If even the lowest gear will not be enough, an electric trike is the honest answer.",
      ],
    },
    {
      title: "Check the brakes against the rider's hands",
      paragraphs: [
        "Most trikes here use a hand-operated rim brake at the front plus a rear brake. Enclosed rear hub brakes (the Schwinn's drum, the MOONCOOL's expander) keep working in the rain and rarely need adjusting, a real advantage for an older rider without a mechanic in the family.",
        "Whatever is fitted, check that the rider can reach the levers without stretching and squeeze them firmly. Brakes often arrive loosely adjusted from the box, and a bike shop can set lever reach and tension in a few minutes.",
      ],
    },
    {
      title: "Plan for where the trike will live",
      paragraphs: [
        "An adult trike is much wider than a bicycle at the rear, and few listings state the exact width. Measure the gate, shed door and any tight turn on the way before ordering, and ask the seller for the assembled width if it matters.",
        "Weight matters too. Steel trikes are heavier than the roughly 35 lb aluminum Schwinn, and you notice it every time you lift the front over a curb or push it up a garage step. Most adult trikes will not fit in a car trunk, so plan on a pickup, a van or riding from home.",
      ],
    },
  ],
  howToChoose: [
    {
      heading: "By Terrain",
      table: {
        headers: ["Your route", "Our pick", "Why"],
        rows: [
          ["Flat town, park paths", "Schwinn Meridian", "Single speed is simplest; aluminum frame is light"],
          ["Rolling hills", "MOONCOOL 7-Speed", "7 gears plus a backrest for longer rides"],
          ["Light hills, unsure of size", "Slsy 7-Speed", "Three sizes with overlapping height ranges"],
          ["Cracked pavement, packed gravel", "Max4out", "Oversized tires and a shock-absorbing seat"],
        ],
      },
    },
    {
      heading: "By Rider Height",
      intro: "Use the listing's own chart, then confirm with the feet-flat test with the seat lowered.",
      table: {
        headers: ["Rider height", "Our pick", "Size"],
        rows: [
          ["4'8\" to 5'1\"", "Brightpeak or Slsy", "Brightpeak 24-inch, or Slsy 20-inch"],
          ["Around 5'2\"", "Slsy or MOPHOTO", "24-inch (overlapping range covers you)"],
          ["5'3\" to 5'10\"", "MOPHOTO or Slsy", "24-inch for easier mounting, 26-inch for more leg extension"],
          ["5'10\" to 6'1\"", "Schwinn Meridian", "26-inch, published to 6'1\""],
        ],
      },
    },
    {
      heading: "Single Speed vs 7-Speed",
      cards: [
        { label: "Single speed", text: "Nothing to shift or adjust, quiet and simple. Hard work on any steady climb because you pedal seated. In this guide: Schwinn Meridian, Brightpeak." },
        { label: "7-speed", text: "Lets you drop into an easy gear before a hill. A little more to maintain, and the rider needs to learn to shift early. In this guide: MOONCOOL, Slsy, MOPHOTO." },
      ],
      note: "Most riders on flat ground are happier with a single speed. If there is one hill you meet every day, buy the gears.",
    },
    {
      heading: "By Weight and Load",
      table: {
        headers: ["Situation", "Our pick", "Stated limit"],
        rows: [
          ["Heavier rider, flat routes", "Brightpeak", "450 lb frame rating"],
          ["Heavier rider, some hills", "Slsy or MOPHOTO", "350 lb"],
          ["Weekly grocery runs", "MOONCOOL or Brightpeak", "50 lb basket"],
          ["Light loads only", "Schwinn Meridian", "44 lb basket"],
        ],
      },
    },
    {
      heading: "For Buying a Trike for a Parent Specifically",
      cards: [
        { label: "Look for", text: "A published height range, an enclosed rear brake that needs little upkeep, and a seat that lets them put both feet down. Ask about their route: one hill changes the answer." },
        { label: "In this comparison", text: "Slsy if you cannot measure them (overlapping sizes); Schwinn Meridian if their riding is flat and they have a step or shed to manage; MOONCOOL if they would appreciate back support." },
      ],
    },
    {
      heading: "When to Spend More",
      cards: [
        { label: "Spend more if", text: "The trike will be ridden often and kept for years. The Schwinn Meridian's long owner record, aluminum frame and familiar brand are worth paying for over a lesser-known steel trike." },
        { label: "Save if", text: "Riding will be occasional and the route has hills. The Slsy or MOPHOTO give you 7 speeds and clear sizing for less, and on a slope gears matter more than the badge." },
      ],
    },
  ],
  faq: [
    { q: "What size adult tricycle do I need?", a: "Go by the rider-height chart in the listing, not the wheel size alone, because brands differ. Then check that with the seat lowered, the rider can put both feet flat on the ground. If you are between sizes, choose the smaller frame." },
    { q: "Can an adult tricycle tip over?", a: "Yes. Trikes are very stable when stopped or riding straight, but they can tip when turning too fast, on side slopes, or with a heavy load up high. Slow down before corners and keep cargo low and centered." },
    { q: "Is a 7-speed tricycle worth it?", a: "If your route has any steady slope, yes. On a trike you pedal seated, so gears are the only way to make a climb easier. On flat ground, a single speed like the Schwinn Meridian is simpler to live with." },
    { q: "Are adult tricycles good for seniors?", a: "Many older riders love them for the low step-through frame and the ability to stop without balancing. They still need steering, braking and care in turns, so they are not right for every balance or mobility condition. Try one in a quiet space first, and ask a clinician if the rider has a medical condition." },
    { q: "How hard is it to assemble an adult tricycle?", a: "Plan on an hour or two with the included tools. The rear axle usually comes attached; the front wheel, handlebars, seat, basket and brake adjustment are left to you. Brakes are where most home assembly goes wrong, so have a bike shop check them if you are unsure." },
    { q: "Will an adult tricycle fit in my car?", a: "Usually not. Even with the basket removed, most full-size trikes are too wide for a car trunk or a standard hitch bike rack. Plan on a pickup, a van or riding from home, or look at a folding trike." },
  ],
  bottomLine:
    "For flat routes, the Schwinn Meridian is the one to beat: the longest owner record, honest fit guidance and a lighter aluminum frame. For hills, get gears: the MOONCOOL if back support matters, the Slsy or MOPHOTO if you need clear sizing. Shorter riders should start with the 24-inch Brightpeak. Whatever you choose, check the fit with the seat lowered and take the first corners slowly.",
  amazonSearch: "adult tricycles",
  relatedPaths: [
    "/how-to-shop-for-your-first-adult-three-wheel-bike/",
    "/electric-tricycle-for-adults/",
    "/which-muscles-does-a-3-wheel-bike-work/",
  ],
};
