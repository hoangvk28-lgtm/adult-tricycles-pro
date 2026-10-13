import Link from "next/link";
import { SECTIONS, SITE_NAME, RESEARCH_STATEMENT } from "@/lib/site";
import { DISCLOSURE_SHORT } from "@/lib/affiliate";
import { TrikeMark } from "@/components/Logo";

const ABOUT = [
  { href: "/about/", label: "About" },
  { href: "/how-we-research/", label: "How we research" },
  { href: "/affiliate-disclosure/", label: "Affiliate disclosure" },
  { href: "/privacy-policy/", label: "Privacy policy" },
  { href: "/contact/", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 bg-brand-dark text-[1rem] text-white/85">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <TrikeMark />
            <span className="font-display text-xl font-bold text-white">{SITE_NAME}</span>
          </div>
          <p className="mt-4 leading-relaxed">{RESEARCH_STATEMENT} {DISCLOSURE_SHORT}</p>
        </div>
        <nav aria-label="Sections">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-white">Sections</h2>
          <ul className="mt-3 space-y-1">
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}/`} prefetch={false} className="inline-block py-1 text-white/85 no-underline hover:text-white hover:underline">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="About this site">
          <h2 className="font-sans text-sm font-bold uppercase tracking-wider text-white">About</h2>
          <ul className="mt-3 space-y-1">
            {ABOUT.map((l) => (
              <li key={l.href}>
                <Link href={l.href} prefetch={false} className="inline-block py-1 text-white/85 no-underline hover:text-white hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-white/70">
          © {new Date().getFullYear()} {SITE_NAME}. Health-related articles are general information, not medical advice.
        </p>
      </div>
    </footer>
  );
}
