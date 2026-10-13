import Link from "next/link";
import { Wordmark } from "@/components/Logo";
import { SECTIONS } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur-sm">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:bg-surface focus:p-2">
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Link href="/" prefetch={false} aria-label="Adult Tricycles Pro home" className="no-underline">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-5 whitespace-nowrap xl:gap-7">
            {SECTIONS.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/${s.slug}/`}
                  prefetch={false}
                  className="py-2 text-[1rem] font-medium text-ink no-underline decoration-cta decoration-2 underline-offset-[6px] hover:underline"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <details className="relative lg:hidden">
          <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 rounded-sm border border-ink px-4 text-[1rem] font-semibold [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav aria-label="Main mobile" className="absolute right-0 mt-2 w-72 border border-line bg-surface p-2 shadow-lg">
            <ul>
              {SECTIONS.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}/`} prefetch={false} className="block border-b border-line px-3 py-3.5 text-[1.0625rem] font-medium text-ink no-underline last:border-0 hover:bg-brand-soft">
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
