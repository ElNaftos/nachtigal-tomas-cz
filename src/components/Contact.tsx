"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const EMAIL = "nachtigal.tom@proton.me";
const SMOOTH = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Contact() {
  return (
    <section className="py-[200px] max-md:py-32 text-center">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <FadeIn>
          <SectionLabel className="mb-8 flex justify-center">
            Kontakt / 06
          </SectionLabel>
          <h2 className="font-serif text-[clamp(48px,6vw,96px)] leading-none tracking-[-0.025em] m-0 mb-8">
            Pojďme <span className="it">stavět</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p
            className="font-sans text-[18px] leading-[1.5] font-light text-[var(--ink-dim)] mx-auto mb-16 max-w-[480px]"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            Web, nástroj, datový projekt.
            <br />
            Napište mi, co řešíte.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="inline-block relative group">
            <a
              href={`mailto:${EMAIL}`}
              className="email-glow inline-block font-serif text-[clamp(28px,3.2vw,44px)] tracking-[-0.01em] text-[var(--ink)] pb-2 group-hover:text-[var(--cream)] transition-colors duration-300"
            >
              {EMAIL}
            </a>
            <motion.span
              aria-hidden
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.6, duration: 1.2, ease: SMOOTH }}
              className="absolute bottom-0 left-0 right-0 h-px bg-[var(--rule)] origin-left group-hover:bg-[var(--cream)] transition-colors duration-300"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <a
            href="tel:+420721419183"
            className="block mt-8 font-mono text-[14px] tracking-[0.18em] text-[var(--ink-dim)] hover:text-[var(--cream)] transition-colors"
          >
            721 419 183
          </a>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-dim)]">
            <a
              href="https://github.com/ElNaftos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cream)] transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden className="text-[var(--rule)]">·</span>
            <a
              href="https://www.linkedin.com/in/tomasnachtigal/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cream)] transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden className="text-[var(--rule)]">·</span>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--cream)] transition-colors"
            >
              Instagram
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
