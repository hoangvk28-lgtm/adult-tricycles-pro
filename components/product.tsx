import Image from "next/image";
import type { Product, TrikeSpecs } from "@/data/types";
import { buildAmazonUrl } from "@/lib/affiliate";

const SPEC_ROWS: { key: keyof TrikeSpecs; label: string; electricOnly?: boolean }[] = [
  { key: "dimensions", label: "Assembled size (L × W × H)" },
  { key: "overallWidth", label: "Widest point" },
  { key: "bikeWeight", label: "Trike weight" },
  { key: "riderLimit", label: "Rider limit" },
  { key: "cargoLimit", label: "Cargo limit" },
  { key: "totalPayload", label: "Total payload" },
  { key: "riderHeightRange", label: "Rider height range" },
  { key: "stepThroughHeight", label: "Step-through height" },
  { key: "wheelSize", label: "Wheel size" },
  { key: "gearing", label: "Gearing" },
  { key: "brakes", label: "Brakes" },
  { key: "folding", label: "Folding" },
  { key: "motor", label: "Motor", electricOnly: true },
  { key: "battery", label: "Battery", electricOnly: true },
  { key: "assistModes", label: "Assist modes", electricOnly: true },
  { key: "throttle", label: "Throttle", electricOnly: true },
  { key: "chargeTime", label: "Charge time", electricOnly: true },
];

/** Rows for this product: electric rows only for electric models; "folding" only if stated. */
function rowsFor(p: Product) {
  // Only rows we have values for; missing specs are hidden, never shown as "not listed".
  return SPEC_ROWS.filter((r) => (r.electricOnly ? p.electric : true)).filter((r) => !!p.specs[r.key]);
}

export function BuyButtons({ p }: { p: Product }) {
  const amazon = buildAmazonUrl(p.asin);
  if (!amazon && !p.merchantUrl) return null;
  return (
    <div className="flex flex-wrap gap-3">
      {amazon && (
        <a href={amazon} target="_blank" rel="noopener noreferrer sponsored nofollow" className="btn btn-cta">
          Check price on Amazon
        </a>
      )}
      {p.merchantUrl && (
        <a href={p.merchantUrl} target="_blank" rel="noopener noreferrer sponsored nofollow" className="btn btn-outline">
          Check price at {p.merchantName ?? "the retailer"}
        </a>
      )}
    </div>
  );
}

export function SpecTable({ p }: { p: Product }) {
  return (
    <div className="overflow-x-auto rounded-md border border-line bg-surface">
      <table className="w-full text-left text-[1rem]">
        <caption className="sr-only">{p.name} specifications</caption>
        <tbody>
          {rowsFor(p).map((r) => (
            <tr key={r.key} className="border-b border-line last:border-0">
              <th scope="row" className="w-2/5 bg-brand-soft/60 px-4 py-2.5 font-semibold">{r.label}</th>
              <td className="px-4 py-2.5">{p.specs[r.key]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="border-t border-line px-4 py-2 text-sm text-ink-3">Specs can change between model years; confirm the exact version before buying.</p>
    </div>
  );
}

function List({ title, items, tone }: { title: string; items: string[]; tone: "good" | "bad" }) {
  return (
    <div className="rounded-md border border-line bg-surface p-4">
      <h4 className={`font-sans text-[1rem] font-semibold ${tone === "good" ? "text-good" : "text-warn"}`}>{title}</h4>
      <ul className="mt-2 space-y-1.5 text-[1rem]">
        {items.map((t) => (
          <li key={t} className="flex gap-2">
            <span aria-hidden="true" className="font-semibold">{tone === "good" ? "+" : "–"}</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ProsCons({ p }: { p: Product }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <List title="Strengths" items={p.pros} tone="good" />
      <List title="Limitations" items={p.cons} tone="bad" />
      <List title="Consider it if" items={p.goodFor} tone="good" />
      <List title="Skip it if" items={p.notFor} tone="bad" />
    </div>
  );
}

/** Product intro block: image, summary and the Amazon button near the top. */
export function ProductIntro({ p, rank, priority }: { p: Product; rank?: number; priority?: boolean }) {
  return (
    <div className="grid gap-6 rounded-md border border-line bg-surface p-5 md:grid-cols-[minmax(0,15rem)_1fr]">
      {p.image ? (
        <div className="relative aspect-square overflow-hidden rounded bg-white">
          <Image src={p.image.src} alt={p.image.alt} fill sizes="(max-width: 768px) 100vw, 240px" className="object-contain p-2" priority={priority} />
        </div>
      ) : null}
      <div className="space-y-3">
        {p.label && <p className="text-sm font-semibold uppercase tracking-wider text-cta">{rank ? `${rank}. ` : ""}{p.label}</p>}
        <h3 className="text-[1.6rem] font-semibold">{p.name}</h3>
        <p className="text-[1.0625rem] leading-relaxed text-ink-2">{p.summary.split("\n\n")[0]}</p>
        <BuyButtons p={p} />
        {p.image?.credit && <p className="text-sm text-ink-3">Image: {p.image.credit}</p>}
      </div>
    </div>
  );
}

export function ComparisonTable({ products }: { products: Product[] }) {
  const anyElectric = products.some((p) => p.electric);
  const cols: { key: keyof TrikeSpecs; label: string }[] = [
    { key: "wheelSize", label: "Wheels" },
    { key: "riderHeightRange", label: "Rider height" },
    { key: "totalPayload", label: "Weight limit" },
    { key: "cargoLimit", label: "Basket limit" },
    { key: "gearing", label: "Gears" },
    { key: "brakes", label: "Brakes" },
    ...(anyElectric ? [{ key: "battery" as const, label: "Battery" }] : []),
  ];
  return (
    <div className="overflow-x-auto rounded-md border border-line bg-surface" role="region" aria-label="Comparison table" tabIndex={0}>
      <table className="w-full min-w-[44rem] text-left text-[0.98rem]">
        <thead className="bg-brand-soft">
          <tr>
            <th scope="col" className="px-3 py-3">Model</th>
            {cols.map((c) => <th key={c.key} scope="col" className="px-3 py-3">{c.label}</th>)}
            <th scope="col" className="px-3 py-3"><span className="sr-only">Link</span></th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => {
            const amazon = buildAmazonUrl(p.asin);
            return (
              <tr key={p.id} className="border-t border-line align-top">
                <th scope="row" className="px-3 py-3">
                  <a href={`#${p.id}`} className="font-semibold">{p.name}</a>
                  {p.label && <div className="text-sm font-normal text-ink-3">{p.label}</div>}
                </th>
                {cols.map((c) => <td key={c.key} className="px-3 py-3">{p.specs[c.key] ?? <span aria-label="No figure" className="text-ink-3">—</span>}</td>)}
                <td className="px-3 py-3">
                  {amazon && (
                    <a href={amazon} target="_blank" rel="noopener noreferrer sponsored nofollow" className="whitespace-nowrap font-semibold text-cta">
                      Check price
                    </a>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
