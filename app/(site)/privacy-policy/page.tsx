import { buildMetadata } from "@/lib/seo";
import { StaticPage } from "@/components/StaticPage";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Adult Tricycles Pro: what data the site collects, how analytics and affiliate cookies work, and how to contact us about your information.",
  path: "/privacy-policy/",
});

export default function Privacy() {
  return (
    <StaticPage title="Privacy Policy" path="/privacy-policy/">
      <p><em>Last updated October 13, 2026.</em></p>
      <h2>Information we collect</h2>
      <p>We do not require accounts and do not sell personal information. If analytics is enabled, Google Analytics collects standard usage data such as pages viewed, approximate location and device type, using cookies.</p>
      <h2>Affiliate links</h2>
      <p>When you click an Amazon link, Amazon may set cookies to attribute a purchase to us. Amazon&apos;s own privacy notice governs what happens on its site.</p>
      <h2>Your choices</h2>
      <p>You can block or delete cookies in your browser settings. To ask about your data, use the contact page.</p>
    </StaticPage>
  );
}
