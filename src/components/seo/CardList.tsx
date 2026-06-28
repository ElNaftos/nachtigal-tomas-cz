import Link from "next/link";

export type LinkCard = {
  href: string;
  name: string;
  text: string;
  /** Volitelný text CTA, jinak „Více". */
  cta?: string;
};

/** Mřížka klikatelných karet pro rozcestníky /sluzby, /projekty, /znalosti. */
export function CardList({ cards }: { cards: LinkCard[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--rule-soft)] border border-[var(--rule-soft)] rounded-[6px] overflow-hidden">
      {cards.map((c) => (
        <Link
          key={c.href}
          href={c.href}
          className="group flex flex-col bg-[var(--bg)] p-8 transition-colors hover:bg-[var(--bg-elev)]"
        >
          <h2 className="font-serif text-[26px] leading-tight tracking-[-0.01em] text-[var(--ink)] group-hover:text-[var(--cream)] transition-colors">
            {c.name}
          </h2>
          <p
            className="mt-4 grow font-sans text-[16px] leading-[1.6] font-light text-[var(--ink-dim)]"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            {c.text}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.12em] uppercase text-[var(--cream)]">
            {c.cta ?? "Více"}
            <span aria-hidden className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </span>
        </Link>
      ))}
    </div>
  );
}
