import Link from "next/link";
import { JsonLd } from "./JsonLd";

const SITE_URL = "https://nachtigal-tomas.cz";

export type Crumb = { label: string; href: string };

/**
 * Breadcrumb navigace + BreadcrumbList strukturovaná data.
 * Poslední položka je aktuální stránka (bez odkazu).
 */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <nav
        aria-label="Drobečková navigace"
        className="font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-mute)]"
      >
        <ol className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
          {items.map((c, i) => {
            const last = i === items.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-x-2.5">
                {last ? (
                  <span aria-current="page" className="text-[var(--ink-dim)]">
                    {c.label}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-[var(--cream)] transition-colors">
                    {c.label}
                  </Link>
                )}
                {!last && (
                  <span aria-hidden className="text-[var(--rule)]">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
