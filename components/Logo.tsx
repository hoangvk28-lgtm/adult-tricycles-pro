/** Trike mark: one front wheel, two rear wheels in perspective, simple frame. */
export function TrikeMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <rect width="48" height="48" rx="10" fill="#24231f" />
      <circle cx="13" cy="31" r="7" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="35" cy="31" r="7" fill="none" stroke="#fff" strokeWidth="3" />
      <circle cx="31" cy="34" r="5" fill="none" stroke="#e08a63" strokeWidth="2.5" />
      <path d="M13 31 L21 18 H30 L35 31 M21 18 L24 31 H35 M19 14 H25" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="flex items-center gap-2.5">
      <TrikeMark className="h-9 w-9 sm:h-10 sm:w-10" />
      <span className="flex flex-col">
        <span className="font-display text-[1.25rem] font-semibold uppercase leading-none tracking-[0.02em] text-ink sm:text-[1.5rem]">
          Adult Tricycles Pro
        </span>
        <span className="mt-1 hidden text-[0.625rem] font-medium uppercase tracking-[0.22em] text-ink-3 sm:block">
          Three wheels. Clear advice.
        </span>
      </span>
    </span>
  );
}
