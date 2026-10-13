import Link from "next/link";

/** Site-wide affiliate disclosure, directly under the header on every page. */
export function SiteDisclosureBar() {
  return (
    <div className="border-b border-line bg-brand-soft">
      <p className="mx-auto max-w-[1280px] px-4 py-2.5 text-center text-[0.9375rem] leading-snug text-ink-2 sm:px-6 lg:px-8">
        We research everything we recommend. When you buy through our links, we may earn a commission.{" "}
        <Link href="/affiliate-disclosure/" prefetch={false} className="whitespace-nowrap font-semibold text-ink no-underline hover:underline">
          Learn more <span aria-hidden="true">›</span>
        </Link>
      </p>
    </div>
  );
}
