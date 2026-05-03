import { domains } from "@/data/domains";
import { FadeIn } from "./FadeIn";

const EMAIL = "nachtigal.tom@proton.me";

export function Domains() {
  return (
    <section className="py-40">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <FadeIn>
          <span className="label">Na prodej</span>
          <h2 className="headline-lg mt-4">Domény</h2>
          <p className="body mt-6 max-w-[480px]">
            Prémiové české domény z mého portfolia. Cena dohodou —
            napište mi.
          </p>
        </FadeIn>

        <div className="mt-20">
          {domains.map((domain, i) => {
            const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
              domain.subject
            )}`;
            return (
              <FadeIn key={domain.name} delay={Math.min(i * 0.04, 0.2)}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-8 py-6 border-b border-[var(--border)]">
                  <div className="text-[20px] text-[var(--text-primary)] font-normal">
                    {domain.name}
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 md:text-right">
                    <span className="body text-[var(--text-secondary)]">
                      {domain.description}
                    </span>
                    <a
                      href={mailto}
                      className="text-[var(--accent)] hover:underline whitespace-nowrap"
                      style={{ fontSize: 17 }}
                    >
                      Mám zájem →
                    </a>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
