"use client";

import { motion } from "framer-motion";
import { domains } from "@/data/domains";
import { AnimatedText } from "./AnimatedText";
import { FadeIn } from "./FadeIn";
import { SectionLabel } from "./SectionLabel";

const EMAIL = "nachtigal.tom@proton.me";

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function Domains() {
  return (
    <section className="pt-[140px] pb-[200px] max-md:pt-24 max-md:pb-32">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-[35fr_55fr] gap-12 md:gap-24 items-end mb-20">
            <div>
              <SectionLabel className="mb-7">Domény / 05</SectionLabel>
              <h2 className="font-serif text-[clamp(40px,4.4vw,64px)] leading-none tracking-[-0.02em] m-0">
                <AnimatedText text="Prémiové české " trigger="view" />
                <span className="it">
                  <AnimatedText text="domény" trigger="view" startDelay={15} />
                </span>
              </h2>
            </div>
            <p
              className="font-sans text-[16px] leading-[1.6] font-light text-[var(--ink-dim)] m-0 max-w-[460px]"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              Sbírka českých domén k prodeji nebo dlouhodobému pronájmu.
              Krátké, snadno zapamatovatelné. Pro projekty, které
              potřebují silný a důvěryhodný základ.
            </p>
          </div>
        </FadeIn>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
          className="border-t border-[var(--rule-soft)]"
        >
          {domains.map((domain) => {
            const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
              domain.subject
            )}`;
            return (
              <motion.a
                key={domain.name}
                href={mailto}
                variants={itemVariants}
                className="group grid grid-cols-[60px_1fr_auto] md:grid-cols-[80px_1fr_1.2fr_auto] gap-4 md:gap-8 items-baseline py-7 border-b border-[var(--rule-soft)] cursor-pointer transition-[padding] duration-300 hover:pl-3"
              >
                <span className="font-mono text-[11px] text-[var(--ink-mute)] tracking-[0.14em]">
                  {domain.idx}
                </span>
                <span className="font-serif text-[20px] md:text-[24px] text-[var(--ink)] tracking-[-0.01em] group-hover:text-[var(--cream)] transition-colors duration-300">
                  {domain.name}
                </span>
                <span className="hidden md:block font-sans text-[14px] font-light leading-[1.5] text-[var(--ink-dim)]">
                  {domain.description}
                </span>
                <span className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.14em] uppercase text-[var(--ink-dim)] group-hover:text-[var(--cream)] group-hover:gap-3.5 transition-all duration-300 whitespace-nowrap col-start-2 md:col-auto">
                  Mám zájem <span aria-hidden>→</span>
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
