import { FadeIn } from "./FadeIn";

const EMAIL = "nachtigal.tom@proton.me";

export function Contact() {
  return (
    <section className="py-40">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8 text-center">
        <FadeIn>
          <span className="label">Kontakt</span>
          <h2 className="font-serif text-[clamp(36px,4vw,56px)] leading-[1.1] tracking-[-0.02em] mt-4">
            Pojďme něco
            <br />
            postavit
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[17px] leading-[1.75] text-[var(--text-secondary)] mt-8 max-w-[420px] mx-auto">
            Žádné šablony. Žádný chatbot.
            <br />
            Prostě email člověku, který vám to postaví.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block mt-12 font-serif text-[clamp(24px,3vw,32px)] leading-tight text-[var(--accent)] hover:underline underline-offset-8"
          >
            {EMAIL}
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-x-12 gap-y-3">
            <a
              href="https://github.com/ElNaftos"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tomasnachtigal/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
