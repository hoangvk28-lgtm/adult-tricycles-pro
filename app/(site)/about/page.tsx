import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { StaticPage } from "@/components/StaticPage";

export const metadata = buildMetadata({
  title: "About Adult Tricycles Pro",
  description: "Adult Tricycles Pro publishes research-based guides to adult tricycles, electric trikes and accessories for riders, seniors and the families helping them choose.",
  path: "/about/",
});

export default function About() {
  return (
    <StaticPage title="About Adult Tricycles Pro" path="/about/">
      <p>Adult Tricycles Pro helps people choose, ride and look after three-wheel bikes. Our readers include first-time adult riders, older riders returning to cycling, and family members shopping on someone else&apos;s behalf.</p>
      <h2>What we publish</h2>
      <ul>
        <li><strong>Best lists</strong> compare several models for a specific need, such as narrow storage or heavier riders.</li>
        <li><strong>Reviews</strong> analyze one specific model in depth, using its published specifications and manual.</li>
        <li><strong>Guides</strong> explain how to choose, use and maintain a tricycle, without pushing a product.</li>
      </ul>
      <h2>What we do not claim</h2>
      <p>Our content is research-based, not hands-on tested unless an article explicitly says otherwise. We do not publish invented ratings, test results or prices, and our health articles are not medically reviewed unless a named reviewer is shown. A tricycle can still tip, and it is not the right answer for every balance or mobility condition.</p>
      <p>Read <Link href="/how-we-research/" prefetch={false}>how we research</Link> and our <Link href="/affiliate-disclosure/" prefetch={false}>affiliate disclosure</Link>.</p>
    </StaticPage>
  );
}
