import type { BestArticle } from "@/data/types";
import { RESEARCH_STATEMENT } from "@/lib/site";

// Selection (2026-10-13): replacement saddles with at least 4.2 stars and 20+ ratings
// on Amazon (scripts/amazon-ratings.sh). Broad replacement guide; wide-only seats
// live in best-wide-bicycle-seats-for-tricycles.
export const bestSeatsForAdultTricycles: BestArticle = {
  type: "best",
  slug: "best-seats-for-adult-tricycles",
  path: "/accessories/best-seats-for-adult-tricycles/",
  sections: ["accessories"],
  noun: { plural: "Tricycle Seats", singular: "Tricycle Seat" },
  title: "The Best Seats for Adult Tricycles: Replace a Hard Stock Saddle",
  metaTitle: "Best Seats for Adult Tricycles",
  description:
    "Six replacement seats for adult trikes compared on width, padding, springs and mounting, from a sprung leather classic to a backrest seat, with fit advice.",
  dek: "The seat that comes on most trikes is the first thing owners want to change. Six replacements, and how to make sure the new one actually fits your trike.",
  published: "2026-10-13",
  updated: "2026-10-13",
  methodology: `${RESEARCH_STATEMENT} Editorial review.`,
  heroImage: { src: "https://m.media-amazon.com/images/I/312VGSktmoL._SL500_.jpg", alt: "Cloud-9 Cruiser Select saddle in black vinyl", width: 500, height: 500 },
  intro: [
    "On a trike you sit upright, with your weight straight down through your sit bones, not leaning forward onto your hands and feet. That is why a seat that feels fine on a short test can become painful on a longer ride. The padding compresses, the nose pinches, and the hard shell underneath starts to feel like a plank.",
    "Replacing the seat is the cheapest comfort upgrade on a trike, but only if the new seat attaches to your trike. Seats come in several mounting styles, and a seat that fits a bicycle post may not bolt onto a trike frame. We shortlisted six with at least 4.2 stars across 20 or more Amazon ratings and sorted them by how they carry your weight. Wide-only seats have their own guide.",
  ],
  shortAnswer:
    "For most riders, the Cloud-9 Cruiser Select is the best all-round swap: foam padding, a cutout for pressure, and elastomer suspension under a wide vinyl saddle. If your trike uses a rear support bar or a trike-style mount, the Sun Trike Western Saddle is made for it. For a classic that molds to you over time, choose the Brooks B67. For back support, the MOONCOOL adds an adjustable backrest on a 7/8 inch post fit. Measure your seat post and check the mount before ordering any of them.",
  products: [
    {
      id: "cloud-9-cruiser-select",
      name: "Cloud-9 Cruiser Select Saddle",
      brand: "Cloud-9",
      asin: "B002MKFRQI",
      selectionNote: "4.5 stars, 3,065 ratings (2026-10-13)",
      label: "Best Overall",
      verdict: "A large foam saddle with a pressure-relief cutout and elastomer suspension, the safest all-round swap for an upright trike.",
      bestFor: "Most riders who want a softer, wider seat",
      keySpec: "10.5 x 10.75 in, memory foam, elastomer suspension",
      image: { src: "https://m.media-amazon.com/images/I/312VGSktmoL._SL500_.jpg", alt: "Cloud-9 Cruiser Select saddle in black soft touch vinyl" },
      summary:
        "The Cloud-9 is built around the problem trike riders actually have: sitting upright for a long time. Its memory foam is layered in stages so the padding supports you before it bottoms out, and a cutout in the center takes pressure off the area where an upright rider usually goes numb. Steel rails sit on an elastomer suspension that soaks up road buzz, which matters on a trike because all three wheels hit every crack.\n\nAt 10.5 by 10.75 inches, it is larger than the Bikeroo and LCYMD, and smaller than the Sun Trike Western and the MOONCOOL. That makes it a middle choice: big enough to support an upright rider, small enough that it rarely rubs the inner thigh. It weighs about 3 lb, which is heavy for a saddle but not an issue on a trike, where the seat is not something you lift.\n\nIt mounts on standard rails, so it works with a seat post and clamp. The caveat is that it needs that rail mount. If your trike uses a bolt-on seat bracket or a rear support bar, check the mount before you order, because the Cloud-9 will not bolt to one without an adapter.",
      specs: {
        dimensions: "10.5 x 10.75 in",
        bikeWeight: "About 3 lb",
      },
      pros: ["Staged memory foam holds up under weight", "Center cutout relieves pressure", "Elastomer suspension absorbs road buzz", "Steel rails, soft touch vinyl cover"],
      cons: ["About 3 lb, heavy for a saddle", "Needs a rail mount and clamp"],
      goodFor: ["Upright riders with sore sit bones", "Rough sidewalks", "Replacing a hard stock seat"],
      notFor: ["Trikes with bolt-on seat brackets", "Riders who want a light seat"],
    },
    {
      id: "sun-trike-western-saddle",
      name: "Sun Bicycles Trike Western Saddle",
      brand: "Sun Bicycles",
      asin: "B00RW5C3ME",
      selectionNote: "4.6 stars, 292 ratings (2026-10-13)",
      label: "Best Trike-Specific Mount",
      verdict: "A 16 inch wide trike saddle that comes with its hardware, but it needs a rear support bar from your trike.",
      bestFor: "Trikes with a western-style seat mount",
      keySpec: "16 in wide x 12 in long, hardware included",
      image: { src: "https://m.media-amazon.com/images/I/41y2sizokAL._SL500_.jpg", alt: "Sun Bicycles trike western saddle in black" },
      summary:
        "This is the one seat here made for trikes rather than bicycles. A western saddle spreads a rider's weight over a large flat area, with 16 inches of width and 12 inches of length. On an upright trike where you never lean forward, that area supports you the way a recliner does, and the width keeps pressure off the sit bones.\n\nCompared with the Cloud-9, it offers a lot more surface but less engineered cushioning, and the shape is more of a chair seat than a saddle. Compared with the MOONCOOL, it has no backrest. It is a good fit for trikes sold with a similar seat, as it comes with the mounting hardware.\n\nThe key point is the support bar. This saddle does not include the rear support bar, which is the part that attaches the back of the seat to the trike frame. If your trike has one, the saddle can be a straight swap. If not, you will need to source one, and you should check with a trike dealer first. It is also a very wide seat, so it may rub if you pedal with your knees close in.",
      specs: {
        dimensions: "16 in wide x 12 in long",
      },
      pros: ["Largest support area of the group", "Made for trikes", "Mounting hardware included", "Keeps pressure off sit bones"],
      cons: ["Rear support bar not included", "Very wide, can rub the inner thigh"],
      goodFor: ["Trikes with a rear support bar", "Riders who want chair-like support", "Upright, slow riding"],
      notFor: ["Standard rail-mount trikes", "Riders who pedal knees-in"],
    },
    {
      id: "bikeroo-comfort-saddle",
      name: "Bikeroo Comfort Saddle with Center Cutaway",
      brand: "Bikeroo",
      asin: "B01H60FCRC",
      selectionNote: "4.6 stars, 5,071 ratings (2026-10-13)",
      label: "Best Narrower Comfort Saddle",
      verdict: "A memory foam saddle with a deep cutout at 7.8 inches wide, for riders who find wider seats rub.",
      bestFor: "Riders who pedal with knees close in",
      keySpec: "7.8 in wide x 10.2 in long, memory foam",
      image: { src: "https://m.media-amazon.com/images/I/41LWZb9AY7S._SL500_.jpg", alt: "Bikeroo comfort saddle in black faux leather" },
      summary:
        "The Bikeroo goes the other way from the wide seats in this guide: 7.8 inches at the widest point and 10.2 inches long. That is a standard comfort-bike width, narrow enough to stay out of the way of your thighs. A deep center cutout and thick memory foam take pressure off the middle and keep the weight on the sit bones.\n\nIt is smaller than the Cloud-9, and much smaller than the Sun and MOONCOOL, so it is the choice if a wide seat has rubbed you raw. The trade-off is less support under a heavier or very upright rider, because there is less seat to spread the weight over. Compared with the LCYMD, it has a bigger owner record and a deeper cutout.\n\nIt includes a seat adapter, two hex keys and a wrench, and it mounts on standard rails, so it fits any post that takes a rail saddle. The faux leather cover is easy to wipe, and the tilt is adjustable. Make sure the width suits you: if you find yourself sliding to the edges of a 7.8 inch seat, step up to the Cloud-9.",
      specs: {
        dimensions: "7.8 in wide x 10.2 in long",
      },
      pros: ["Deep center cutout for pressure relief", "Narrow enough to avoid thigh rub", "Adapter and tools included", "Wipe-clean faux leather"],
      cons: ["Less support area for heavier riders", "Narrower than most trike seats"],
      goodFor: ["Knees-in pedaling", "Lighter riders", "Wiping clean after rain"],
      notFor: ["Heavier riders", "Riders who want a wide, chair-like seat"],
    },
    {
      id: "brooks-b67",
      name: "Brooks England B67 Leather Saddle",
      brand: "Brooks England",
      asin: "B0025UCRQI",
      selectionNote: "4.7 stars, 888 ratings (2026-10-13)",
      label: "Best Classic Leather",
      verdict: "A handmade, spring-suspended leather saddle that molds to the rider over time, for owners who keep a trike for years.",
      bestFor: "Long-term owners who like a classic sprung saddle",
      keySpec: "Handmade vegetable-tanned leather, coil springs",
      image: { src: "https://m.media-amazon.com/images/I/31EMgDYjSZL._SL500_.jpg", alt: "Brooks England B67 leather saddle with suspension springs" },
      summary:
        "The B67 is a different kind of seat. It is hand-made in England from vegetable-tanned leather, with coil springs under a wider rear portion, and it stretches and molds to the rider over a few hundred miles. The leather breathes, so it stays cooler than vinyl or foam. For an upright rider with a regular riding habit, a leather saddle can turn from stiff to personal.\n\nCompared with the foam saddles, it has no memory foam and no cutout, and it needs a break-in period. Compared with the Cloud-9, it will feel firmer at first and improve, rather than start soft and flatten. The springs give some cushion over bumps, which is useful on a trike, but they also bounce, and some riders find that distracting.\n\nIt uses a single-rail design that attaches to a modern micro-adjust seat pillar. That is a specific mount, so confirm that your trike's post and clamp take a single-rail saddle before you order. Leather also needs care: keep it dry, and use a leather dressing if it is left in the rain.",
      specs: {
        dimensions: "Leather, single rail, wider rear section",
        features: "Coil spring suspension",
      },
      pros: ["Handmade leather molds to the rider", "Breathable, stays cooler than vinyl", "Coil springs for bump comfort", "Wider rear for upright sitting"],
      cons: ["Needs a break-in period", "Needs leather care in the rain", "Single-rail mount only"],
      goodFor: ["Long-term owners", "Dry-stored trikes", "Riders who like a classic look"],
      notFor: ["Outdoor-stored trikes without a cover", "Riders who want instant softness"],
    },
    {
      id: "lcymd-comfort-saddle",
      name: "LCYMD Comfort Replacement Saddle",
      brand: "LCYMD",
      asin: "B08HXQ96L5",
      selectionNote: "4.6 stars, 11,997 ratings (2026-10-13)",
      label: "Best Value Foam Seat",
      verdict: "A thick-foam saddle with an airflow vent and a bundled adapter, the widest-owned replacement seat in the group.",
      bestFor: "A simple, low-cost foam upgrade",
      keySpec: "9.7 x 8 x 3.7 in, airflow vent",
      image: { src: "https://m.media-amazon.com/images/I/41v6y3FJilL._SL500_.jpg", alt: "LCYMD comfort bike seat saddle" },
      summary:
        "The LCYMD has the biggest owner base in this guide, and it is a simple, no-surprises seat. Thick high-density foam sits over built-in cushioning, with a vent in the center to keep air moving. It measures 9.7 by 8 by 3.7 inches, so it is mid-sized: wider than the Bikeroo, much narrower than the Cloud-9.\n\nCompared with the Bikeroo, it has less of a cutout and a flatter shape, and compared with the Cloud-9 it has no suspension beyond the cushioning. It is a good first upgrade for a rider who just wants a softer seat without changing the posture or mount. A saddle adapter and a wrench come in the box, and a waterproof cover is included for rain.\n\nIt is a full replacement saddle, not a cushion that slips over the old one, so it needs to fit your post with the included adapter. On a trike, check the post diameter. The nose is narrow at the front, which suits knees-in pedaling but gives you less support than a wide seat.",
      specs: {
        dimensions: "9.7 x 8 x 3.7 in",
      },
      pros: ["Large owner base", "Airflow vent in the center", "Saddle adapter and wrench included", "Waterproof cover included"],
      cons: ["Less support area than wider seats", "No separate suspension"],
      goodFor: ["A simple foam upgrade", "Light to moderate riders", "Rail-mount trikes"],
      notFor: ["Riders who want a wide, chair-like seat", "Riders who need back support"],
    },
    {
      id: "mooncool-backrest-seat",
      name: "MOONCOOL Oversized Seat with Backrest",
      brand: "MOONCOOL",
      asin: "B08PTZJQJ2",
      selectionNote: "4.2 stars, 822 ratings (2026-10-13)",
      label: "Best Seat With a Backrest",
      verdict: "A 12 by 12 inch padded seat with an adjustable lumbar backrest that removes if you do not need it.",
      bestFor: "Riders who need lower back support",
      keySpec: "12 x 12 in, adjustable backrest, 7/8 in post",
      image: { src: "https://m.media-amazon.com/images/I/31aUlKBmaPL._SL500_.jpg", alt: "MOONCOOL oversized bike seat with backrest" },
      summary:
        "The MOONCOOL is the only seat here with a backrest, and on an upright trike, a backrest turns the seat into something closer to a chair. The padded back moves up and down so it can sit where your lower back needs it, and it can be removed if you want a plain seat. A 12 by 12 inch pad with memory foam and a dual shock system spreads weight across the sit bones.\n\nCompared with the Cloud-9, it is larger and has support behind you; compared with the Sun Trike Western, it is smaller but comes with a backrest. It fits a standard 7/8 inch (22.2 mm) seat post, which suits most adult trikes, and it is sold for use on tricycles and exercise bikes.\n\nTwo things to check. First, the backrest needs room behind the seat: if your trike has a rear basket frame or a rack right behind the post, the back may hit it. Second, its 4.2 rating is the lowest of the group, so tighten the mount well and check it after a few rides. If you pedal with your knees in, the 12 inch width may rub.",
      specs: {
        dimensions: "12 x 12 in",
        features: "Backrest removable; fits 7/8 in (22.2 mm) seat post",
      },
      pros: ["Adjustable lumbar backrest", "12 x 12 in padded seat", "Fits a 7/8 in seat post", "Waterproof PU leather surface"],
      cons: ["Backrest needs room behind the post", "Wide seat can rub the inner thigh"],
      goodFor: ["Riders with lower back pain", "Longer leisure rides", "Posts with room behind them"],
      notFor: ["Trikes with a rack close behind the seat", "Knees-in pedaling"],
    },
  ],
  howWeChose: [
    { title: "Owner track record", body: "Every seat has at least 4.2 stars across 20 or more Amazon ratings, because seat comfort and durability only show over time." },
    { title: "How it carries upright weight", body: "We compared how each seat spreads weight over the sit bones, from foam and cutouts to sprung leather and a full backrest, since trike riders sit straight down." },
    { title: "Mounting style", body: "We separated rail saddles, a bolt-on trike saddle, and a post-mount backrest seat, because the wrong mount is the most common reason a replacement fails." },
    { title: "Width and thigh clearance", body: "Seat widths run from 7.8 inches to 16 inches here, and we flagged where a wide seat can rub or a narrow one can leave you perched." },
    { title: "Weather and care", body: "We noted which covers wipe clean and which need care, since many trikes live outside." },
  ],
  whatToLookFor: [
    {
      title: "Check how your trike mounts the seat",
      paragraphs: [
        "Most replacement saddles have two metal rails underneath, and a clamp on top of the seat post grips them. Many trikes use that same system, so a rail saddle will swap in directly. Others use a bolt-on bracket, a seat bolted to a support bar, or a tube that holds a seat with a backrest.",
        "Before you shop, look at how your current seat attaches. Unbolt it or look underneath, and note whether you see rails, a bracket or a bar. The Cloud-9, Bikeroo, LCYMD and Brooks are rail saddles. The Sun Trike Western expects a rear support bar. The MOONCOOL slides on a 7/8 inch post.",
        "If you are unsure, take a photo of the underside and ask the brand or a bike shop before you order.",
      ],
    },
    {
      title: "Why wide is not always better",
      paragraphs: [
        "An upright rider puts weight on the sit bones, and a wider seat spreads it. That is why trike riders often want a big saddle. But if the seat is wider than your hips, the sides push into your inner thighs with every pedal stroke.",
        "A seat of 10 to 11 inches suits many riders. Go wider if you sit very upright and pedal slowly, and narrower if you pedal with knees in. The Sun Trike Western at 16 inches and the MOONCOOL at 12 inches are at the wide end; the Bikeroo at 7.8 inches is narrow.",
        "Sit on the edge of a hard chair with your weight on your sit bones, then measure the gap. If the gap is under 5 inches, avoid a very wide seat.",
      ],
    },
    {
      title: "Foam, gel, springs and leather",
      paragraphs: [
        "Foam is soft at first and can flatten over a season; memory foam, as on the Cloud-9, takes longer to give. Springs, as on the Brooks, absorb big bumps but can bounce. Leather starts firm and molds to you. Elastomer suspension, which is a rubber-like mount under the seat, damps small vibration.",
        "On a trike, all three wheels hit the same cracks, and the rider cannot stand up out of the saddle. Some suspension helps. For short rides, foam is enough. For long rides, a combination of foam and suspension is more comfortable.",
        "Very soft seats are not always best. If your sit bones sink through the padding to the base, the pressure is back, and you want firmer support.",
      ],
    },
    {
      title: "Cutouts and pressure relief",
      paragraphs: [
        "A cutout or channel down the middle of the seat takes pressure off the soft tissue between the sit bones, which is where numbness comes from. On an upright trike, the pressure is on the sit bones and the middle, so a cutout helps.",
        "The Cloud-9 and Bikeroo have cutouts; the LCYMD has a vent that serves a similar purpose. A cutout does not replace a good fit, and a seat tilted nose-up can undo it.",
        "Set the seat level or a hair nose-down, then adjust. If you still have numbness, see a clinician rather than tweak the seat forever.",
      ],
    },
    {
      title: "Backrests and post room",
      paragraphs: [
        "A backrest changes a seat from a saddle into a chair, and for riders with lower back pain, it can make longer rides possible. It also changes where you sit: you slide back into it, so you may need to move the seat forward or adjust the handlebar.",
        "A backrest needs clear space behind the post. If your trike has a basket frame or rack close behind the seat, the back can hit it. Measure the gap before you order.",
        "Pick a backrest that adjusts up and down, like the MOONCOOL, so you can place it at your lower back rather than your shoulder blades.",
      ],
    },
    {
      title: "Seat height after the swap",
      paragraphs: [
        "A new seat is usually a different thickness, and that changes your seat height. A thick foam saddle can lift you an inch or more, which makes it harder to put your feet flat when stopping.",
        "After installing, check that you can sit with your feet flat on the ground with the seat lowered. If you cannot, lower the post by the extra thickness. On a trike, standing stability matters more than leg extension.",
        "Tighten the clamp fully, and check it again after the first few rides, because new seats settle and a loose seat tilts back.",
      ],
    },
  ],
  howToChoose: [
    {
      heading: "By Your Current Mount",
      table: {
        headers: ["Your trike's seat mount", "Our pick", "Why"],
        rows: [
          ["Standard seat post with rail clamp", "Cloud-9, Bikeroo or LCYMD", "All three are rail saddles"],
          ["Single-rail micro-adjust seat pillar", "Brooks B67", "Single-rail design"],
          ["Rear support bar and bolt-on seat", "Sun Trike Western", "Made for trike mounts, hardware included"],
          ["7/8 inch post with room behind", "MOONCOOL", "Backrest seat for that post size"],
        ],
      },
    },
    {
      heading: "By Rider Need",
      table: {
        headers: ["Need", "Our pick", "Why"],
        rows: [
          ["Sore sit bones on long rides", "Cloud-9", "Staged foam and elastomer suspension"],
          ["Lower back pain", "MOONCOOL", "Adjustable lumbar backrest"],
          ["Pedals with knees close in", "Bikeroo", "7.8 in width avoids thigh rub"],
          ["Wants a seat that lasts for years", "Brooks B67", "Leather that molds over time"],
        ],
      },
    },
    {
      heading: "Foam vs Leather and Springs",
      cards: [
        { label: "Foam and gel", text: "Soft from the first ride, a wide range of shapes, easy to clean. Can flatten over a season. In this guide: Cloud-9, Bikeroo, LCYMD, MOONCOOL." },
        { label: "Leather and springs", text: "Firm at first, molds to the rider, breathes and lasts for years. Needs a break-in and care in the rain. In this guide: Brooks B67." },
      ],
      note: "Most riders should start with foam. Choose leather if you will ride regularly and keep the trike dry.",
    },
    {
      heading: "By Seat Width",
      table: {
        headers: ["Width", "Our pick", "Why"],
        rows: [
          ["Narrow, under 8 in", "Bikeroo", "7.8 in wide"],
          ["Medium, about 10 in", "Cloud-9 or LCYMD", "10.5 in and 9.7 in"],
          ["Wide, about 12 in", "MOONCOOL", "12 x 12 in padded seat"],
          ["Very wide, 16 in", "Sun Trike Western", "Chair-like support area"],
        ],
      },
    },
    {
      heading: "For Replacing a Stock Seat on a Budget Specifically",
      cards: [
        { label: "Look for", text: "A rail saddle with its adapter included, a foam depth of an inch or more, and a width between 9 and 11 inches. Confirm the post diameter before you order." },
        { label: "In this comparison", text: "LCYMD includes an adapter, wrench and cover, and the Cloud-9 offers the most comfort per dollar if you ride long. Both fit a standard rail clamp." },
      ],
    },
    {
      heading: "When to Spend More",
      cards: [
        { label: "Spend more if", text: "You ride often and keep the trike for years. The Brooks B67 costs more but molds to you, and the Cloud-9's suspension is worth it on rough paths." },
        { label: "Save if", text: "You ride a few times a month. The LCYMD or Bikeroo gives a soft, simple seat, and if your trike already has a good clamp, you do not need more." },
      ],
    },
  ],
  faq: [
    { q: "Can I replace the seat on an adult tricycle?", a: "Yes, on most trikes. Look at how the current seat attaches: rails in a clamp, a bracket or a rear support bar. Then choose a seat with a matching mount and measure your seat post." },
    { q: "What seat width is best for a trike?", a: "Many riders do well with 10 to 11 inches. A wider seat suits very upright, slow riding, and a narrower one suits pedaling with knees in. Too wide a seat will rub your inner thighs." },
    { q: "Are spring seats worth it?", a: "Springs absorb bigger bumps and can make rough paths easier. They also bounce, and some riders dislike that. For smooth paths, foam alone is enough." },
    { q: "How do I stop numbness on a trike seat?", a: "Pick a seat with a cutout or vent, set it level or a hair nose-down, and check that the padding does not bottom out. If numbness continues, ask a clinician." },
    { q: "Will a backrest seat fit my trike?", a: "It fits if your seat post is 7/8 inch (22.2 mm) and there is room behind the post. Check for a basket frame or rack close behind the seat." },
    { q: "How do I look after a leather saddle?", a: "Keep it dry, use a cover when stored outside, and apply a leather dressing from time to time. A wet leather saddle can stretch out of shape." },
  ],
  bottomLine:
    "For most trikes, start with the Cloud-9 Cruiser Select. Take the Sun Trike Western if your trike has a rear support bar, the Brooks B67 if you want a saddle that lasts for years, and the MOONCOOL if your back needs support. Check your seat mount and post size first, then set the new seat level and confirm your feet reach the ground.",
  amazonSearch: "adult tricycle seat",
  relatedPaths: [
    "/adult-tricycles/best-adult-tricycles/",
    "/accessories/best-wide-bicycle-seats-for-tricycles/",
    "/adult-tricycle-sizing-and-fit-guide/",
  ],
};
