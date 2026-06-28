import Link from "next/link";

type FooterLink = { label: string; href: string };

const columns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: "Služby",
    links: [
      { label: "Tvorba webů", href: "/sluzby/tvorba-webu" },
      { label: "Tvorba e-shopů", href: "/sluzby/tvorba-eshopu" },
      { label: "Úpravy Shoptetu", href: "/sluzby/shoptet-upravy" },
      { label: "AI automatizace", href: "/sluzby/ai-automatizace" },
      { label: "SEO a GEO optimalizace", href: "/sluzby/seo-geo-optimalizace" },
    ],
  },
  {
    heading: "Projekty",
    links: [
      { label: "Bladers.cz", href: "/projekty/bladers-cz" },
      { label: "HerniCentro.cz", href: "/projekty/hernicentro-cz" },
      { label: "MapaSaun.cz", href: "/projekty/mapasaun-cz" },
      { label: "HRS Sanitky", href: "/projekty/hrs-sanitky-cz" },
    ],
  },
  {
    heading: "Znalosti",
    links: [
      { label: "Co je SEO", href: "/znalosti/co-je-seo" },
      { label: "Co je GEO optimalizace", href: "/znalosti/co-je-geo-optimalizace" },
      { label: "Jak připravit zadání pro web", href: "/znalosti/jak-pripravit-zadani-pro-web" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--rule-soft)]">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        {/* Sloupce odkazů — decentní vrstva pro služby, projekty a znalosti */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link
              href="/"
              className="font-serif text-[22px] tracking-[-0.01em] text-[var(--ink)] hover:text-[var(--cream)] transition-colors"
            >
              Tomáš <span className="italic text-[var(--cream)]">Nachtigal</span>
            </Link>
            <p className="mt-3 max-w-[240px] font-sans text-[14px] leading-[1.5] font-light text-[var(--ink-mute)]">
              Weby, e-shopy a digitální nástroje. Prakticky, lidsky a s důrazem na výsledek.
            </p>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h2 className="label mb-4">{col.heading}</h2>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-sans text-[14px] leading-snug font-light text-[var(--ink-dim)] transition-colors hover:text-[var(--cream)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Spodní lišta — copyright + CV */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[var(--rule-soft)] py-7 font-mono text-[13px] tracking-[0.14em] uppercase text-[var(--ink-mute)]">
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
      </div>
    </footer>
  );
}
