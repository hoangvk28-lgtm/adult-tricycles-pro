import Link from "next/link";
import { absoluteUrl } from "@/lib/seo";
import { DISCLOSURE_SHORT } from "@/lib/affiliate";

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export interface Crumb {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-[0.95rem] text-ink-3">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {items.map((c, i) => (
            <li key={c.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {i === items.length - 1 ? (
                <span aria-current="page" className="text-ink-2">{c.name}</span>
              ) : (
                <Link href={c.path} prefetch={false} className="text-ink-2 underline-offset-2 hover:underline">
                  {c.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((c, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: c.name,
            item: absoluteUrl(c.path),
          })),
        }}
      />
    </>
  );
}

export function AffiliateNote() {
  return (
    <p className="rounded-md border border-line bg-surface px-4 py-3 text-[0.95rem] leading-relaxed text-ink-2">
      <strong className="text-ink">Disclosure:</strong> {DISCLOSURE_SHORT}{" "}
      <Link href="/affiliate-disclosure/" prefetch={false}>Read our disclosure</Link>.
    </p>
  );
}

export function Notice({ tone = "info", children }: { tone?: "info" | "warn"; children: React.ReactNode }) {
  const cls = tone === "warn" ? "border-warn bg-warn-soft" : "border-brand bg-brand-soft";
  return <div className={`rounded-md border-l-4 ${cls} px-4 py-3 text-[1rem] leading-relaxed text-ink`}>{children}</div>;
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
}
