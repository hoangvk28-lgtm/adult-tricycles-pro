import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteDisclosureBar } from "@/components/SiteDisclosureBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <SiteDisclosureBar />
      <main id="main">{children}</main>
      <SiteFooter />
    </>
  );
}
