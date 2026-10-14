import type { ReviewArticle } from "@/data/types";
import { RESEARCH_STATEMENT } from "@/lib/site";

export const addmotorMotanHeavyDutyElectricTricycle: ReviewArticle = {
  type: "review",
  slug: "addmotor-motan-heavy-duty-electric-tricycle",
  path: "/addmotor-motan-heavy-duty-electric-tricycle/",
  sections: ["electric-tricycles"],
  title: "AddMotor Motan Review: A Powerful Fat-Tire Electric Trike for Experienced Riders",
  metaTitle: "AddMotor Motan E-Trike Review",
  description:
    "A research-based review of the AddMotor Motan M-350 fat-tire electric tricycle: 750W motor, suspension, 83 lb weight and why it is not a beginner trike.",
  dek: "A 750-watt, fat-tire e-trike with suspension and big cargo room. Capable and comfortable, but fast enough that rider skill matters.",
  published: "2026-10-14",
  updated: "2026-10-14",
  heroImage: { src: "/images/reviews/addmotor-motan.webp", alt: "AddMotor Motan electric tricycle with fat tires and rear cargo box", width: 1200, height: 1032 },
  methodology: `${RESEARCH_STATEMENT} Editorial review.`,
  availabilityNote:
    "We cannot confirm that this exact Motan model is still on sale. AddMotor sells electric trikes directly, so check the brand's current range and compare with the other options in our electric tricycle guide. If you find one used, inspect the battery, brakes and motor wiring before buying.",
  historyNote: "This review was rewritten in 2026 from our original article. It is research-based and does not report hands-on testing.",
  shortAnswer:
    "The AddMotor Motan M-350 is a heavy, powerful fat-tire e-trike with a 750W motor, front and seat suspension and room for 100 lb of cargo. It suits confident riders who want comfort on rough ground. It is not a first trike, because the speed and weight make mistakes costly.",
  product: {
    id: "addmotor-motan-m-350",
    name: "AddMotor Motan M-350 Electric Tricycle",
    brand: "AddMotor",
    electric: true,
    label: "Fat-tire electric trike",
    verdict: "A capable, well-cushioned cargo e-trike for experienced riders, but heavy and quick enough to demand respect.",
    bestFor: "Experienced riders on rough paths with cargo",
    keySpec: "750W motor, 48V 16Ah battery, 4-inch fat tires",
    image: { src: "/images/reviews/addmotor-motan.webp", alt: "AddMotor Motan electric tricycle with fat tires and rear cargo box" },
    summary:
      "The Motan is built to be comfortable on rough ground. Wide 4-inch tires, an 80 mm suspension fork and a sprung seat post combine to soak up bumps that would rattle a normal trike. A 24-inch front wheel and two 20-inch rear wheels keep the stance low, and the step-through frame has a stand-over height of about 22 inches.\n\nThe drivetrain is the headline. A 750W geared hub motor in the front wheel, a 48V 16Ah lithium battery and a 7-speed Shimano Altus drivetrain make it fast, with a claimed top speed of about 22 mph and a claimed range of 55 to 65 miles at the lowest assist level. Treat range claims as best case: heavy loads, hills, wind and high assist reduce it a lot. A half-twist throttle and motor cutoff on the brake levers add control.\n\nThe cost is mass and speed. At about 83 lb, it is hard to lift and impossible to carry up steps. A heavy trike moving fast can lift a rear wheel in a sharp turn or on a side slope, and no amount of stability at low speed changes that. It has a rear basket for up to 100 lb of cargo, and a smaller front basket.",
    specs: {
      wheelSize: "24 in front, 20 in rear (4 in fat tires)",
      bikeWeight: "About 83 lb",
      dimensions: "About 30 in wide x 68.5 in long",
      stepThroughHeight: "22 in stand-over",
      cargoLimit: "Up to 100 lb",
      gearing: "7-speed Shimano Altus",
      brakes: "Mechanical, with motor cutoff",
      features: "80 mm fork, 30 mm seat suspension, removable rear basket, headlight",
      motor: "750W geared hub (front)",
      battery: "48V 16Ah lithium, removable",
      throttle: "Half-twist throttle",
      chargeTime: "6 to 7 hours (2.5A charger)",
    },
    pros: ["Fat tires and suspension smooth rough ground", "Removable locking battery", "Motor cuts when brakes squeezed", "Large cargo capacity"],
    cons: ["83 lb is hard to lift", "Fast enough to demand skill", "Mechanical brakes less adjustable"],
    goodFor: ["Experienced riders on gravel and rough paths", "Heavy cargo hauling", "Riders who want a cushioned ride"],
    notFor: ["First-time trike riders", "Anyone who must lift it into a vehicle"],
  },
  sectionsBody: [
    {
      heading: "Power and why it demands skill",
      body: "A 750W motor on a trike delivers real speed. The danger is that three wheels make a rider feel safe at low speed, and that feeling does not transfer to 20 mph. A trike's wheels sit in a plane that follows the surface, so you cannot lean into a turn the way you do on a bicycle.\n\nIn practice that means slowing down well before a corner, keeping cargo low and limiting throttle on side slopes. If you have never ridden a trike, learn on a slower, lighter model first.",
    },
    {
      heading: "Ride comfort",
      body: "The fat tires, front fork and sprung seat post work together. At sensible pressure the big tires do most of the work, with the fork and seat post handling the sharper hits. The result is a ride closer to a small vehicle than a bicycle.\n\nThat comfort suits gravel, packed trails and cracked pavement. It also suits riders with sensitive backs or joints who dread vibration.",
    },
    {
      heading: "Battery, range and charging",
      body: "The 48V 16Ah battery is removable and locks to the frame, which helps if you keep the trike in a garage and charge indoors. A full charge takes about 6 to 7 hours on the standard charger.\n\nRange claims of 55 to 65 miles apply to the lowest assist level in ideal conditions. Plan on far less if you carry heavy loads, climb hills or use the throttle often. Read our range planning advice before relying on a number.",
    },
    {
      heading: "Controls, brakes and lights",
      body: "Mechanical brake levers are less adjustable than hydraulic ones, which matters for riders with small or large hands. Check lever reach and cable tension on arrival. Motor cutoff on the levers helps shorten stops.\n\nThe integrated headlight runs from the main battery, while the tail light has historically run on separate AA batteries, so remember to check them before dusk. Confirm the current lighting setup before buying.",
    },
    {
      heading: "Weight, storage and ownership",
      body: "At roughly 83 lb, the Motan is not something you lift. Plan a ramp or a ground-level garage, and do not count on carrying it up steps or into a car trunk. It is about 68.5 inches long, so measure your storage space.\n\nBecause availability of this exact model is uncertain, check parts and service support from AddMotor before buying new or used.",
    },
  ],
  alternatives: [
    { name: "Electric tricycles for adults", path: "/electric-tricycle-for-adults/", why: "How to choose an electric trike based on your needs." },
    { name: "Best folding electric tricycles", path: "/electric-tricycles/best-folding-electric-tricycles-for-adults/", why: "Lighter, easier-to-store electric options." },
    { name: "Best adult tricycles", path: "/adult-tricycles/best-adult-tricycles/", why: "Non-electric trikes if you do not need motor assist." },
    { name: "Buying a used adult tricycle", path: "/buying-used-adult-tricycle-inspection/", why: "What to check on a used e-trike, especially the battery." },
  ],
  faq: [
    { q: "Is the Motan good for beginners?", a: "No. It is heavy and fast, and a trike can tip in a sharp turn or on a side slope at speed. Learn on a slower trike first." },
    { q: "How far can it go on a charge?", a: "The claimed range is 55 to 65 miles at the lowest assist level, in ideal conditions. Expect less with loads, hills or heavy throttle use." },
    { q: "Can I remove the battery?", a: "Yes. It is removable and locks to the frame, so you can charge it indoors." },
    { q: "How much can it carry?", a: "It is rated for up to 100 lb of cargo, with a rear basket and a smaller front basket." },
    { q: "Can I lift it into my car?", a: "Probably not. It weighs about 83 lb and is long, so plan on a ramp, truck or riding from home." },
  ],
};
