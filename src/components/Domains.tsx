import { domains } from "@/data/domains";
import { FadeIn } from "./FadeIn";

const EMAIL = "nachtigal.tom@proton.me";

export function Domains() {
  return (
    <section className="py-40">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <FadeIn>
          <span className="label">Na prodej</span>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.02em] mt-4">
            Prémiové
            <br />
            <span className="text-[var(--text-secondary)]">české domény</span>
          </h2>
          <p className="text-[16px] leading-[1.7] text-[var(--text-secondary)] mt-6 max-w-[440px]">
            Cena dohodou. Stáří, historie a SEO data k nahlédnutí na
            vyžádání.
          </p>
        </FadeIn>

        <div className="mt-16">
          {domains.map((domain, i) => {
            const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
              domain.subject
            )}`;
            return (
              <FadeIn key={domain.name} delay={Math.min(i * 0.04, 0.2)}>
                <div className="group flex flex-col md:flex-row md:justify-between md:items-center gap-3 md:gap-8 py-7 border-b border-[var(--border)] hover:border-[var(--border-hover)] transition-colors">
                  <div>
                    <h3 className="font-serif text-[22px] leading-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                      {domain.name}
                    </h3>
                    <p className="text-[14px] text-[var(--text-muted)] mt-1.5">
                      {domain.description}
                    </p>
                  </div>
                  <a
                    href={mailto}
                    className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors whitespace-nowrap"
                  >
                    Mám zájem →
                  </a>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
