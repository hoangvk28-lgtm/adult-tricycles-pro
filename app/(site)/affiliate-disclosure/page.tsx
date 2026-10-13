import { buildMetadata } from "@/lib/seo";
import { StaticPage } from "@/components/StaticPage";
import { DISCLOSURE_FULL } from "@/lib/affiliate";

export const metadata = buildMetadata({
  title: "Affiliate Disclosure",
  description: "How Adult Tricycles Pro earns money: as an Amazon Associate we earn from qualifying purchases, and commissions never decide what we recommend.",
  path: "/affiliate-disclosure/",
});

export default function Disclosure() {
  return (
    <StaticPage title="Affiliate Disclosure" path="/affiliate-disclosure/">
      <p>{DISCLOSURE_FULL}</p>
      <p>Buttons labeled &quot;Check price on Amazon&quot; are affiliate links. They do not change the price you pay. We do not accept payment for placement, and we do not publish sponsored rankings.</p>
      <p>Links to other retailers or manufacturers are not Amazon links and never carry our Amazon tracking tag. If we ever join another affiliate program, the link and this page will say so.</p>
    </StaticPage>
  );
}
