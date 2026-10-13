import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-[2.4rem] font-bold">Page not found</h1>
        <p className="mt-4 text-[1.15rem] text-ink-2">This page does not exist or has moved.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/" prefetch={false} className="btn btn-cta">Go to the homepage</Link>
          <Link href="/guides/" prefetch={false} className="btn btn-outline">Browse guides</Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
