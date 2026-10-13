import Link from "next/link";
import { Wordmark } from "@/components/Logo";
import { SECTIONS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-surface focus:p-2">
        Skip to content
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" prefetch={false} aria-label="Adult Tricycles Pro home" className="no-underline">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex gap-1">
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}/`}
                  prefetch={false}
                  className="rounded px-3 py-2 text-[1rem] font-semibold text-ink no-underline hover:bg-brand-soft"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="relative lg:hidden">
          <summary className="btn btn-outline cursor-pointer list-none !min-h-11 !px-4 [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav aria-label="Main mobile" className="absolute right-0 mt-2 w-72 rounded-md border border-line bg-surface p-2 shadow-lg">
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} prefetch={false} className="block rounded px-3 py-3 text-[1.0625rem] font-semibold text-ink no-underline hover:bg-brand-soft">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
