import type { BestArticle } from "@/data/types";
import { RESEARCH_STATEMENT } from "@/lib/site";

// Selection (2026-10-13): handlebar mirrors with at least 4.2 stars and 20+ ratings
// on Amazon (scripts/amazon-ratings.sh), covering bar-end and clamp-on designs.
export const bestMirrorsForAdultTricycles: BestArticle = {
  type: "best",
  slug: "best-mirrors-for-adult-tricycles",
  path: "/accessories/best-mirrors-for-adult-tricycles/",
  sections: ["accessories"],
  noun: { plural: "Tricycle Mirrors", singular: "Tricycle Mirror" },
  title: "The Best Mirrors for Adult Tricycles: See Traffic Without Turning",
  metaTitle: "Best Mirrors for Adult Tricycles",
  description:
    "Five handlebar mirrors compared for adult trikes: bar-end versus clamp-on, glass versus plastic, arm reach past a wide body, and how well each holds still.",
  dek: "On an upright trike you sit tall, ride wide and cannot always twist around to look. Five mirrors, and how to match one to your handlebar and your neck.",
  published: "2026-10-13",
  updated: "2026-10-13",
  methodology: `${RESEARCH_STATEMENT} Editorial review.`,
  heroImage: { src: "https://m.media-amazon.com/images/I/31GhyYRYceL._SL500_.jpg", alt: "Mirrycle Mountain Mirror in black, bar-end bicycle mirror", width: 500, height: 500 },
  intro: [
    "A trike rider sits upright, often with a stiff neck or shoulders, and takes up more road than a cyclist. Cars pass close, and a quick glance over the shoulder can pull the handlebar with it. A mirror lets you check traffic while keeping your eyes forward and both hands where they belong.",
    "Not every bike mirror suits a trike. Many are made for narrow road or mountain bike bars. We shortlisted five with at least 4.2 stars across 20 or more Amazon ratings and sorted them by handlebar type, reach and glass. Before you buy, check how your handlebar ends, because that decides what will fit.",
  ],
  shortAnswer:
    "If your handlebar grips are open at the end, the Mirrycle Mountain Mirror is the proven pick: a 3-inch convex mirror with a huge owner record. If you need the mirror held further out to see past a wide body, choose the RBRL, which has an adjustable arm and clamps to the bar. For a closed or capped grip end, avoid bar-end mirrors and use a clamp-on like the Wittkop or RBRL. Whatever you buy, fit one on the left side, where traffic passes you in the US.",
  products: [
    {
      id: "mirrycle-mountain-mirror",
      name: "Mirrycle Mountain Mirror",
      brand: "Mirrycle",
      asin: "B0009R96YK",
      selectionNote: "4.6 stars, 9,769 ratings (2026-10-13)",
      label: "Best Overall",
      verdict: "A simple 3-inch convex bar-end mirror with the longest owner record in the group and a wide range of bar fits.",
      bestFor: "Open-ended handlebars and riders who want simple",
      keySpec: "3 in round convex, fits 13.75 to 22.5 mm bar ends",
      image: { src: "https://m.media-amazon.com/images/I/31GhyYRYceL._SL500_.jpg", alt: "Mirrycle Mountain Mirror in black" },
      summary:
        "The Mirrycle has been the default bike mirror for so long that it has an owner record the others cannot match, and the design is a simple one. A 3-inch round convex mirror sits on a short stem that plugs into the open end of the handlebar. The convex glass shows a wide slice of the road behind you, and the pivoting head lets you aim it where you want.\n\nOn a trike, the bar-end position suits a wide, upright cruiser handlebar. The mirror sits at the outer end of the bar, which is the furthest-out point of your steering, giving you a clear line past your shoulder and past a rear basket. The fit range of 13.75 to 22.5 mm inside diameter covers the open end of most bars, which is useful on trikes where grips vary from model to model.\n\nCompared with the RBRL and Wittkop, the Mirrycle trades adjustability for simplicity. It has no long arm and no fold-away joint, so what you see is what you set. The caveat is that it only works if your handlebar end is open. Many trike grips have a cap or a closed end, so pull one back and look before you order.",
      specs: {
        dimensions: "3 in round glass",
        mount: "Head pivots to any angle; fits 13.75 to 22.5 mm bar ends",
      },
      pros: ["Longest owner record of any mirror here", "3 in convex glass shows a wide view", "Fits a wide range of bar ends", "Plugs in, no clamp to loosen"],
      cons: ["Needs an open-ended handlebar", "No extended arm for reach", "Single mirror, buy a pair if you want both sides"],
      goodFor: ["Cruiser bars with open ends", "Riders who want a simple setup", "Wide views behind"],
      notFor: ["Capped or closed bar ends", "Riders who need reach past a wide basket"],
    },
    {
      id: "wittkop-bike-mirror",
      name: "Wittkop Bike Mirror (real glass, clamp-on)",
      brand: "Wittkop",
      asin: "B0CND6MSH9",
      selectionNote: "4.2 stars, 6,245 ratings (2026-10-13)",
      label: "Best Glass Quality",
      verdict: "A real convex glass mirror from a German saddle maker that rotates, tilts and folds, mounting above or below the bar.",
      bestFor: "Riders who want a clear image and a clamp-on mount",
      keySpec: "Real convex glass, 360 degree rotation, folds",
      image: { src: "https://m.media-amazon.com/images/I/41jCx1JvooL._SL500_.jpg", alt: "Wittkop folding convex glass bike mirror" },
      summary:
        "Most cheap mirrors use plastic or acrylic, which scratches and turns hazy in the sun. The Wittkop uses real convex glass, and the image is the clearest in this group. It also rotates fully and tilts, so you can set it low and wide for a trike seat that sits lower than a bicycle's.\n\nIt mounts to the handlebar with a screw, above or below the bar, rather than plugging into the end. That is its main advantage over the Mirrycle on a trike: if your grip is capped, or if you want the mirror closer to your eye line, the clamp-on style works anywhere there is a clear section of bar. It folds against the bar, which helps when the trike goes through a narrow gate or into a shed.\n\nCompared with the RBRL, it has a shorter reach, so the mirror sits closer to your hand. That is fine on a narrow bar and tighter on a trike with a wide basket. Its 4.2 rating is the lowest in this group, so check the clamp is tight on the first ride, because a loose mirror is the usual complaint on any clamp-on design.",
      specs: {
        dimensions: "Large convex glass, clamp-on",
        mount: "Rotates 360 degrees and folds against the bar",
      },
      pros: ["Real glass gives a clear image", "Mounts above or below the bar", "Folds for tight gates", "Rotates and tilts freely"],
      cons: ["Short reach, mirror sits near the hand", "Lowest owner rating in the group"],
      goodFor: ["Capped or closed bar ends", "Riders who want a sharp image", "Sheds and narrow gates"],
      notFor: ["Wide trikes where reach matters most"],
    },
    {
      id: "rbrl-bike-mirror",
      name: "RBRL Bike Mirror with 3D Adjustable Arm (left)",
      brand: "RBRL",
      asin: "B0DT3YF764",
      selectionNote: "4.5 stars, 1,337 ratings (2026-10-13)",
      label: "Best for Reach",
      verdict: "An adjustable arm holds the mirror out past a wide body or basket, on a base built to resist shaking.",
      bestFor: "Wide trikes and riders who need to see past the basket",
      keySpec: "Adjustable arm, glass mirror, 22.2 to 25.4 mm bars",
      image: { src: "https://m.media-amazon.com/images/I/51ahv0bdtZL._SL500_.jpg", alt: "RBRL adjustable arm bike mirror" },
      summary:
        "The RBRL is the only mirror here with a proper extended arm, and that is its edge on a trike. A trike's rider sits behind a wide handlebar, and a rear basket and body can block part of the view from a mirror held close to the bar. The adjustable arm moves the mirror outward and up, so the glass sits where the view is clear.\n\nIt uses automotive-grade glass, an aluminum arm and base, and three screws on the back to hold the position. Vibration is the usual enemy of a trike mirror: all three wheels hit every bump, and you cannot stand on the pedals to absorb them. A well-braced base and metal arm keep the image steadier than a plastic stem. If the arm loosens, you tighten it with the included wrench.\n\nIt clamps to flat bars of 22.2 to 25.4 mm, which covers most trike handlebars, and the mirror pivots on impact and folds for storage. This one is sold as a left-side mirror, which suits US traffic. The caveat is that a longer arm means more leverage on the clamp, so tighten it fully and recheck after the first few rides.",
      specs: {
        dimensions: "Adjustable arm, glass lens",
        mount: "Foldable; pivots on impact; fits 22.2 to 25.4 mm bars",
      },
      pros: ["Adjustable arm for extra reach", "Automotive-grade glass lens", "Metal arm and base resist shaking", "Pivots on impact instead of breaking"],
      cons: ["Sold as a single left-side mirror", "Long arm needs a firmly tightened clamp"],
      goodFor: ["Wide trikes with a basket", "Riders who need to see past their body", "Bumpy sidewalks"],
      notFor: ["Bars outside 22.2 to 25.4 mm", "Riders who want a pair in one box"],
    },
    {
      id: "accmor-bar-end-mirrors",
      name: "Accmor Bar End Bike Mirrors (2-pack)",
      brand: "Accmor",
      asin: "B09C5CRB1F",
      selectionNote: "4.2 stars, 859 ratings (2026-10-13)",
      label: "Best Pair of Mirrors",
      verdict: "Two bar-end mirrors in one box for riders who want both sides covered, in lightweight plastic.",
      bestFor: "Both-side coverage on open-ended bars",
      keySpec: "2-pack, plastic convex, fits 17.4 to 22 mm bar ends",
      image: { src: "https://m.media-amazon.com/images/I/41r94-FpbvL._SL500_.jpg", alt: "Accmor 2-pack bar end bike mirrors" },
      summary:
        "Accmor gives you two mirrors in the box, which suits riders who like to check both sides: left for passing traffic and right for pedestrians and driveways. The convex mirror is made from unbreakable plastic with an ABS and acrylic frame. It rotates 360 degrees at the base, and the mirror itself turns 180 degrees, so you can aim it widely.\n\nIt installs with a 5 mm hex key into the open end of the handlebar, in the same style as the Mirrycle. The fit range of 17.4 to 22 mm is narrower than the Mirrycle's, so measure the inside of your bar end before you order. Compared with the BriskMore pair, it uses a plastic lens rather than glass, which is lighter but scratches more easily.\n\nAs with all bar-end designs, it needs an open-ended handlebar. The 4.2 rating and the shortest owner record in the group mean it is a decent budget pair, not a premium one. If your trike has a capped or closed grip end, skip it and choose a clamp-on.",
      specs: {
        dimensions: "2-pack, convex plastic lens",
        mount: "Base rotates 360 degrees, mirror turns 180 degrees; fits 17.4 to 22 mm bar ends",
      },
      pros: ["Two mirrors in the box", "Rotates 360 degrees at the base", "Fits both left and right bars", "Light plastic construction"],
      cons: ["Plastic lens scratches more easily", "Narrow 17.4 to 22 mm fit range"],
      goodFor: ["Checking both sides", "Open-ended handlebars", "Light-use riders"],
      notFor: ["Riders who want glass", "Capped bar ends"],
    },
    {
      id: "briskmore-bar-end-mirrors",
      name: "BriskMore Bar End Bike Mirrors (pair)",
      brand: "BriskMore",
      asin: "B0CYLV2M7Y",
      selectionNote: "4.6 stars, 293 ratings (2026-10-13)",
      label: "Best Wide View in a Pair",
      verdict: "A pair of glass bar-end mirrors with a 3.6 by 2.2 inch lens, the biggest view of any bar-end mirror here.",
      bestFor: "Open-ended bars where a larger glass view matters",
      keySpec: "3.6 x 2.2 in glass lens, pair",
      image: { src: "https://m.media-amazon.com/images/I/41QNfSqXcdL._SL500_.jpg", alt: "BriskMore bar end bike mirrors pair" },
      summary:
        "The BriskMore lens measures 3.6 by 2.2 inches, wider than the Mirrycle's 3-inch round, and it is real convex glass with a shatterproof film. For a trike rider who cannot turn easily, a bigger lens means more of the road behind you in a single glance, with less time spent aiming the mirror.\n\nIt comes as a pair, fits left or right, and rotates 360 degrees with 180 degrees of adjustment. The body is a glass-reinforced nylon, and a stainless steel screw and expanding plug lock it in the bar end. Compared with the Accmor pair, it has glass rather than plastic and a higher rating, but a much smaller owner record, so there is less long-term evidence.\n\nIt fits open-ended grips with an inside diameter of 14 to 24 mm, and the plug can be cut for a hole on some grips. Check your handlebar before ordering. If the end is closed or capped, this will not mount without modifying the grip, and a clamp-on mirror is a safer choice.",
      specs: {
        dimensions: "3.6 x 2.2 in glass lens, pair",
        mount: "Rotates 360 degrees, adjusts 180 degrees; fits 14 to 24 mm bar ends",
      },
      pros: ["Largest lens of the bar-end mirrors", "Real convex glass with shatterproof film", "Pair for both sides", "Stainless screw and expanding plug"],
      cons: ["Short owner record", "Needs open-ended grips"],
      goodFor: ["Open-ended bars", "Riders who want both sides", "A wider view in one glance"],
      notFor: ["Capped grips", "Riders who want an extended arm"],
    },
  ],
  howWeChose: [
    { title: "Owner track record", body: "Every mirror has at least 4.2 stars across 20 or more Amazon ratings, because a mirror's weak points, loosening clamps and scratched lenses, show up over months." },
    { title: "Mount type", body: "We included both bar-end and clamp-on designs, since a trike's handlebar ends vary and the right mount depends on whether your grip is open." },
    { title: "View and glass", body: "We compared glass size and material, favoring real glass or a large convex lens over a small plastic one." },
    { title: "Reach and steadiness", body: "We looked at whether each mirror can sit away from the body and basket and how it is braced, since a trike shakes more than a bike." },
    { title: "Honest fit ranges", body: "Handlebar diameters differ between mirrors, so each pick flags the range it fits and what to check on your own bar." },
  ],
  whatToLookFor: [
    {
      title: "Bar-end or clamp-on: check your grip first",
      paragraphs: [
        "A bar-end mirror plugs into the open end of the handlebar tube. It is quick to fit and sits at the far end of the bar, clear of your body. It only works if the end of the tube is open. Many trike grips have a cap or a closed rubber end, and some handlebars have a bar-end shifter or a brake lever in the way.",
        "A clamp-on mirror wraps around the bar with a screw, so it fits wherever there is a clear stretch of tube. That makes it the safer choice if your grip is closed. The cost is that it takes a few millimeters of bar space, and you need to leave room for your hand and the brake lever.",
        "Pull the grip back or look inside the bar end before you order. A thirty-second check saves a return.",
      ],
    },
    {
      title: "Match the bar diameter, not just the type",
      paragraphs: [
        "Mirrors are made for a range of bar diameters, and the ranges differ. The Mirrycle fits 13.75 to 22.5 mm inside the bar end, the Accmor 17.4 to 22 mm, the BriskMore 14 to 24 mm, and the RBRL clamps to bars of 22.2 to 25.4 mm. A mirror that is a little too small slips; one that is too big will not go in.",
        "On a bar-end mirror, the number that matters is the inside diameter of the tube. On a clamp-on, it is the outside diameter. A caliper or a ruler laid across the bar end gives you a close enough number.",
        "If you are between ranges, pick the mirror with the wider tolerance and tighten it fully.",
      ],
    },
    {
      title: "Glass versus plastic",
      paragraphs: [
        "Glass gives a sharper image and resists the fine scratches that cloud plastic over time. Plastic and acrylic are lighter and do not shatter, but they scratch from cleaning and sun. On a trike parked outdoors, a plastic lens usually clouds sooner.",
        "Glass is heavier, so it needs a good mount. The Wittkop, RBRL and BriskMore use glass, and the BriskMore adds a shatterproof film that holds the pieces together if it breaks.",
        "Whichever you choose, clean it with a soft cloth and water, not a dry paper towel.",
      ],
    },
    {
      title: "Reach past a wide body and basket",
      paragraphs: [
        "A trike is wider than a bicycle, and the rider sits behind a rear basket and often a wide cruiser handlebar. A mirror held close to the hand may see only your elbow and the basket frame. The further out the mirror sits, the more road it shows.",
        "A bar-end mirror naturally sits at the outer end of the bar. A clamp-on with an extended arm, like the RBRL, can move the glass out and up. A short clamp-on like the Wittkop sits closer, which is fine on a narrow bar but tighter on a wide one.",
        "Sit on the trike with your hands on the grips and have someone hold a mirror where it would go. If you can see the lane behind, the position works.",
      ],
    },
    {
      title: "Vibration and holding still",
      paragraphs: [
        "A trike has three wheels hitting every crack, and the rider is seated and cannot stand to absorb the bumps. The mirror shakes more than it would on a bicycle. A blurry, jumping image is hard to read and quickly becomes useless.",
        "Look for a base braced with several screws and a rigid arm, such as the RBRL's metal arm and three-screw back. For bar-end mirrors, an expanding plug that grips the tube firmly keeps the mirror from rotating. After the first ride, retighten the screws, because new mounts settle.",
        "If the image still shakes, shorten the arm or move the mirror closer to the bar.",
      ],
    },
    {
      title: "Which side, and how many",
      paragraphs: [
        "In the US, traffic overtakes you on the left, so the left mirror is the one that matters most. A second mirror on the right is useful for driveways, parked cars and cyclists coming up on that side, but it is optional.",
        "Pairs, like the Accmor and BriskMore, give you both sides for little more than the price of one good mirror. Some single mirrors are sold as left or right only, so check that you are buying the side you want.",
        "Whatever you fit, aim it so you can see a little of your own trike at the edge of the glass. That gives you a reference and shows how far the lane extends behind you.",
      ],
    },
  ],
  howToChoose: [
    {
      heading: "By Handlebar End",
      table: {
        headers: ["Your handlebar", "Our pick", "Why"],
        rows: [
          ["Open-ended tube, standard size", "Mirrycle Mountain Mirror", "Plugs in, widest owner record"],
          ["Open end, want both sides", "BriskMore or Accmor", "Pairs, glass or plastic"],
          ["Capped or closed grip end", "Wittkop", "Clamps on anywhere there is clear bar"],
          ["Flat bar 22.2 to 25.4 mm, need reach", "RBRL", "Clamp-on with adjustable arm"],
        ],
      },
    },
    {
      heading: "By Trike Width",
      table: {
        headers: ["Your trike", "Our pick", "Why"],
        rows: [
          ["Wide handlebar and large basket", "RBRL", "Extended arm sees past the basket"],
          ["Standard cruiser bar", "Mirrycle", "Bar-end sits clear of your body"],
          ["Narrow bar, tight storage", "Wittkop", "Folds against the bar"],
          ["Open bar, want the biggest glass", "BriskMore", "3.6 by 2.2 in lens"],
        ],
      },
    },
    {
      heading: "Bar-End vs Clamp-On",
      cards: [
        { label: "Bar-end", text: "Plugs into the open end of the bar, sits at the outer edge and clears your body. Needs an open tube. In this guide: Mirrycle, Accmor, BriskMore." },
        { label: "Clamp-on", text: "Wraps around the bar and fits wherever there is a clear stretch. Takes bar space and can loosen on bumps if not tightened. In this guide: Wittkop, RBRL." },
      ],
      note: "If your grip end is open, a bar-end mirror is simpler. If it is capped or you need reach, use a clamp-on.",
    },
    {
      heading: "By Glass and Image",
      table: {
        headers: ["Priority", "Our pick", "Why"],
        rows: [
          ["Sharpest image", "Wittkop", "Real convex glass"],
          ["Largest view", "BriskMore", "3.6 by 2.2 in glass"],
          ["Impact resistance", "RBRL", "Pivots on impact"],
          ["Lowest scratch worry on a short budget", "Accmor", "Pair of plastic lenses, cheap to replace"],
        ],
      },
    },
    {
      heading: "For Riders Who Cannot Turn Their Head Specifically",
      cards: [
        { label: "Look for", text: "A larger lens, a position that shows the lane behind you, and a mount that holds still. You should be able to read traffic without moving your head." },
        { label: "In this comparison", text: "BriskMore for the biggest bar-end view, RBRL for a clear line past the basket, Mirrycle for a proven simple option. Fit one on the left at least." },
      ],
    },
    {
      heading: "When to Spend More",
      cards: [
        { label: "Spend more if", text: "You ride on busy roads or share the road with fast traffic. The RBRL's extended arm and steady mount, or the Wittkop's real glass, give a clearer, steadier image." },
        { label: "Save if", text: "You ride quiet paths and just want a check behind you. The Mirrycle gives a wide view for little, and the Accmor pair covers both sides." },
      ],
    },
  ],
  faq: [
    { q: "Do adult tricycles need a mirror?", a: "A mirror is a strong help, especially for riders who cannot easily look over their shoulder. A trike is wide and cars pass close. A mirror lets you check traffic without turning your head or pulling the bar." },
    { q: "Which side should I put the mirror on?", a: "The left, because traffic overtakes you on the left in the US. A right-side mirror is useful for driveways and parked cars but optional." },
    { q: "Will a bar-end mirror fit my trike?", a: "Only if your handlebar ends are open. Pull back the grip and look inside the tube, then measure the inside diameter. Capped or closed grips need a clamp-on mirror instead." },
    { q: "Why does my mirror shake on a trike?", a: "All three wheels hit every bump, and you cannot stand on the pedals. Choose a mirror with a braced base, tighten it after the first rides, and shorten the arm if it still jitters." },
    { q: "Is a glass mirror better than a plastic one?", a: "Glass gives a clearer image and resists scratches, while plastic is lighter. For a trike stored outdoors, glass tends to hold up better, but it needs a sturdy mount." },
    { q: "Can I use a car mirror or a helmet mirror instead?", a: "Helmet and eyeglass mirrors can work, but they are small and need a turn of the head to aim. A bar mirror stays put and shows the same view each time, which suits a trike rider." },
  ],
  bottomLine:
    "If your handlebar ends are open, the Mirrycle Mountain Mirror is the proven pick. If you need to see past a wide basket, choose the RBRL. If your grip is capped, take the Wittkop clamp-on. For both sides, the BriskMore or Accmor pairs do the job. Check your bar end and diameter before you order, put one mirror on the left, and tighten it again after the first ride.",
  amazonSearch: "bike mirror handlebar",
  relatedPaths: [
    "/adult-tricycles/best-adult-tricycles/",
    "/how-to-ride-an-adult-tricycle-safely/",
    "/adult-tricycle-maintenance-checklist/",
  ],
};
