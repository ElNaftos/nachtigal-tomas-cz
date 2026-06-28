import Link from "next/link";
import type { RelatedLink } from "@/data/seo/types";

/** Blok interního prolinkování na konci stránky. */
export function RelatedLinks({
  heading,
  links,
}: {
  heading: string;
  links: RelatedLink[];
}) {
  return (
    <section className="mt-20 border-t border-[var(--rule-soft)] pt-10">
      <h2 className="label mb-6">{heading}</h2>
      <ul className="flex flex-wrap gap-x-3 gap-y-3">
        {links.map((l) => (
          <li key={l.href + l.label}>
            <Link
              href={l.href}
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--rule)] px-4 py-2 font-mono text-[12px] tracking-[0.06em] text-[var(--ink-dim)] transition-colors hover:border-[var(--cream)] hover:text-[var(--cream)]"
            >
              {l.label}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
