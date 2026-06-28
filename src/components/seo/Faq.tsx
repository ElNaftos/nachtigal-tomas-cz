import type { FaqItem } from "@/data/seo/types";
import { JsonLd } from "./JsonLd";

/**
 * FAQ sekce — nativní <details>/<summary>, takže je čitelná i bez JS
 * a plně indexovatelná. Doplní FAQPage strukturovaná data.
 */
export function Faq({
  items,
  heading = "Časté otázky",
}: {
  items: FaqItem[];
  heading?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="mt-20" aria-labelledby="faq-heading">
      <JsonLd data={jsonLd} />
      <h2
        id="faq-heading"
        className="font-serif text-[clamp(28px,3.4vw,44px)] leading-[1.05] tracking-[-0.02em] text-[var(--ink)] mb-8"
      >
        {heading}
      </h2>
      <div className="divide-y divide-[var(--rule-soft)] border-t border-[var(--rule-soft)]">
        {items.map((f, i) => (
          <details key={i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-sans text-[18px] font-normal leading-snug text-[var(--ink)] transition-colors hover:text-[var(--cream)]">
              {f.q}
              <span
                aria-hidden
                className="mt-1 shrink-0 font-mono text-[var(--ink-mute)] transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p
              className="mt-3 max-w-[680px] font-sans text-[16px] leading-[1.65] font-light text-[var(--ink-dim)]"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              {f.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
