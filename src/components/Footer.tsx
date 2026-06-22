import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule-soft)] py-9">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)] flex justify-between items-center gap-4 font-mono text-[13px] tracking-[0.14em] uppercase text-[var(--ink-mute)]">
        <span>© 2026 Tomáš Nachtigal</span>
        <Link
          href="/cv"
          aria-label="Zobrazit CV"
          className="group inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-medium text-black transition-colors hover:bg-[var(--cream)]"
        >
          CV
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          >
            ↗
          </span>
        </Link>
      </div>
    </footer>
  );
}
