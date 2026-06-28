import Link from "next/link";

/**
 * Decentní horní lišta pro podstránky SEO/GEO vrstvy.
 * Hlavní menu zůstává jednoduché — jen návrat domů a tři kotvy z homepage.
 */
export function SubpageNav() {
  return (
    <header className="border-b border-[var(--rule-soft)]">
      <nav className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)] h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-[20px] tracking-[-0.01em] text-[var(--ink)] hover:text-[var(--cream)] transition-colors"
        >
          Tomáš <span className="italic text-[var(--cream)]">Nachtigal</span>
        </Link>
        <div className="flex items-center gap-x-6 gap-y-2 font-mono text-[11px] tracking-[0.16em] uppercase text-[var(--ink-dim)]">
          <Link href="/#projekty" className="hover:text-[var(--cream)] transition-colors">
            Projekty
          </Link>
          <Link href="/#o-mne" className="hover:text-[var(--cream)] transition-colors max-sm:hidden">
            O mně
          </Link>
          <Link href="/#kontakt" className="hover:text-[var(--cream)] transition-colors">
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
