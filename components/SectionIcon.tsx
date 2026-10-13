import type { SectionSlug } from "@/lib/site";

const P = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

/** Simple line icons for the "What are you shopping for?" strip. */
export function SectionIcon({ slug }: { slug: SectionSlug }) {
  return (
    <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0 text-ink" aria-hidden="true">
      {slug === "adult-tricycles" && (<g {...P}><circle cx="7" cy="22" r="5" /><circle cx="25" cy="22" r="5" /><path d="M7 22l6-10h7l5 10M13 12l3 10h9M11 8h5" /></g>)}
      {slug === "electric-tricycles" && (<g {...P}><circle cx="7" cy="23" r="5" /><circle cx="25" cy="23" r="5" /><path d="M7 23l6-9h7l5 9" /><path d="M17 3l-4 6h5l-3 5" /></g>)}
      {slug === "folding-tricycles" && (<g {...P}><circle cx="9" cy="22" r="5" /><circle cx="23" cy="22" r="5" /><path d="M9 22l7-12 7 12M16 10v-3M12 7h8" /><path d="M14 16h4" strokeDasharray="1.5 2" /></g>)}
      {slug === "recumbent-tricycles" && (<g {...P}><circle cx="6" cy="23" r="4" /><circle cx="26" cy="22" r="5" /><path d="M6 23h10l10-1M16 23l-3-7h6l3 6M13 16l-2-6" /></g>)}
      {slug === "accessories" && (<g {...P}><path d="M6 12h20l-2 13H8z" /><path d="M10 12l3-6M22 12l-3-6M12 17h8" /></g>)}
      {slug === "guides" && (<g {...P}><path d="M5 7h9a3 3 0 013 3v16a2 2 0 00-2-2H5zM27 7h-9a3 3 0 00-1 0" /><path d="M27 7v17h-10" /></g>)}
    </svg>
  );
}
