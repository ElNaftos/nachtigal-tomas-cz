import { FadeIn } from "./FadeIn";

const EMAIL = "nachtigal.tom@proton.me";

export function Contact() {
  return (
    <section className="py-40">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <FadeIn>
          <span className="label">Kontakt</span>
          <h2 className="headline-lg mt-4">Pojďme něco postavit</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="body-lg mt-8 max-w-[480px]">
            Hledáte někoho, kdo vám neudělá web ze šablony? Někoho,
            kdo přemýšlí nad tím, proč ten web existuje — ne jen jak
            vypadá?
          </p>
          <p className="body mt-6 max-w-[480px]">
            Ozvěte se. Žádný formulář, žádný chatbot. Prostě email.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={`mailto:${EMAIL}`}
            className="headline-lg mt-10 block hover:underline"
            style={{ color: "var(--accent)" }}
          >
            {EMAIL}
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <a
              href="https://github.com/ElNaftos"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--text-primary)] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tomasnachtigal/"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--text-primary)] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="label hover:text-[var(--text-primary)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
