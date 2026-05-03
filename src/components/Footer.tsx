import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule-soft)] py-8">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)] flex justify-between items-center font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-mute)]">
        <span>© 2026 Tomáš Nachtigal</span>
        <Link
          href="/cv"
          className="hover:text-[var(--cream)] transition-colors inline-flex items-center gap-1.5"
        >
          CV <span aria-hidden>↗</span>
        </Link>
      </div>
    </footer>
  );
}
