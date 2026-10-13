import { buildMetadata } from "@/lib/seo";
import { StaticPage } from "@/components/StaticPage";
import { RESEARCH_STATEMENT } from "@/lib/site";

export const metadata = buildMetadata({
  title: "How We Research Adult Tricycles",
  description: "How Adult Tricycles Pro researches tricycles: manufacturer specs, manuals, safety guidance and buyer questions. Research-based, not hands-on tested unless stated.",
  path: "/how-we-research/",
});

export default function HowWeResearch() {
  return (
    <StaticPage title="How We Research" path="/how-we-research/">
      <p><strong>{RESEARCH_STATEMENT}</strong> If we ever ride or inspect a product ourselves, the article will say so plainly, including what we did and did not check.</p>
      <h2>Sources we use</h2>
      <ul>
        <li>Manufacturer specification sheets, owner&apos;s manuals and published geometry.</li>
        <li>Public safety guidance, such as CPSC information on e-bike and battery safety.</li>
        <li>Medical and rehabilitation guidance from recognized organizations for health topics.</li>
        <li>Patterns in questions and problems buyers raise, treated as leads to verify rather than as proof.</li>
      </ul>
      <h2>What we compare</h2>
      <p>For every model we try to report the assembled dimensions and widest point, trike weight, rider and cargo limits, rider height range, step-through height, gearing and brakes. For electric models we add motor, battery capacity, assist modes, throttle behavior and charging. When a manufacturer does not publish a figure, we say &quot;Not listed&quot; rather than estimating it.</p>
      <h2>What we will not do</h2>
      <ul>
        <li>Publish star ratings, scores or test results we did not produce.</li>
        <li>Quote current prices, which change constantly. Use the retailer link to check.</li>
        <li>Describe a tricycle as impossible to tip over or as suitable for everyone with balance problems.</li>
        <li>Show a &quot;medically reviewed&quot; badge without a real, named reviewer.</li>
      </ul>
      <h2>Corrections</h2>
      <p>Specifications change between model years. If you spot an error, please contact us and we will check it against the manufacturer&apos;s current documentation.</p>
    </StaticPage>
  );
}
