"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { scrollToSection } from "@/lib/scrollToSection";

const SMOOTH = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  const handleNavClick =
    (id: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(id);
    };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] md:grid-rows-[auto_auto_auto_auto_auto_auto] gap-x-16">
          {/* Row 1 — Col 1: label */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: SMOOTH }}
            className="label mb-14 md:row-start-1 md:col-start-1"
          >
            Tvorba webů · Systémy na míru · Data
          </motion.div>

          {/* Row 1 — Col 2: Idx / 01 marker */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: SMOOTH }}
            className="meta hidden md:block md:row-start-1 md:col-start-2 md:pl-6 mb-14"
            aria-hidden
          >
            Idx / 01
          </motion.span>

          {/* Row 2 — Col 1: h1 */}
          <h1 className="font-serif text-[clamp(72px,11vw,168px)] leading-[0.92] tracking-[-0.025em] m-0 text-[var(--ink)] md:row-start-2 md:col-start-1">
            <AnimatedText text="Tomáš" />
            <br />
            <span className="italic text-[var(--cream)]">
              <AnimatedText text="Nachtigal" startDelay={6} />
            </span>
          </h1>

          {/* Row 2 — Col 2: abstraktní čárky vedle nadpisu */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.5 },
              },
            }}
            className="hidden md:flex md:row-start-2 md:col-start-2 md:pl-6 flex-col justify-center gap-7"
            aria-hidden
          >
            {[
              { w: "80%", color: "var(--rule)" },
              { w: "55%", color: "var(--rule)" },
              { w: "70%", color: "var(--ink-mute)", dot: true },
              { w: "40%", color: "var(--rule)" },
              { w: "55%", color: "var(--rule)" },
            ].map((line, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { width: 0, opacity: 0 },
                  visible: {
                    width: line.w,
                    opacity: 1,
                    transition: { duration: 1.1, ease: SMOOTH },
                  },
                }}
                className="h-px relative"
                style={{ background: line.color }}
              >
                {line.dot && (
                  <span
                    className="absolute w-2 h-2 rounded-full bg-[var(--cream)]"
                    style={{ top: "-3.5px", left: "62%" }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Row 3 — Col 1: divider */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{
              delay: 1.4,
              duration: 1.1,
              ease: SMOOTH,
            }}
            className="h-[2px] bg-[var(--cream)] mt-10 mb-8 md:row-start-3 md:col-start-1"
            aria-hidden
          />

          {/* Row 4 — Col 1: paragraph "Weby a systémy" */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9, duration: 0.9, ease: SMOOTH }}
            className="font-sans text-[19px] leading-[1.5] font-light text-[var(--ink)] max-w-[540px] mb-14 md:row-start-4 md:col-start-1"
            style={{ textWrap: "pretty" } as React.CSSProperties}
          >
            Navrhuji a stavím weby, e-shopy a datové nástroje pro firmy,
            které potřebují funkční digitální produkt, ne jen hezkou stránku.
          </motion.p>

          {/* Row 4 — Col 2: Primární CTA "Chci konzultaci" — v úrovni s odstavcem */}
          <motion.a
            href="#kontakt"
            onClick={handleNavClick("kontakt")}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.9, ease: SMOOTH }}
            className="group hidden md:inline-block self-start md:row-start-4 md:col-start-2 md:pl-6 mb-14"
          >
            <span className="relative inline-flex items-baseline gap-3 font-serif text-[clamp(28px,3.2vw,42px)] tracking-[-0.01em] text-[var(--ink)] pb-2 group-hover:text-[var(--cream)] transition-colors duration-300">
              Chci konzultaci
              <span
                aria-hidden
                className="font-sans text-[0.55em] transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
              <span
                aria-hidden
                className="absolute bottom-0 left-0 right-0 h-px bg-[var(--rule)] group-hover:bg-[var(--cream)] transition-colors duration-300"
              />
            </span>
            <span className="block mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink-mute)] group-hover:text-[var(--ink-dim)] transition-colors duration-300">
              ··· zdarma & nezávazně
            </span>
          </motion.a>

          {/* Row 5 — Col 1: meta "Písek, Česko" */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.6, duration: 0.8, ease: SMOOTH }}
            className="meta md:row-start-5 md:col-start-1"
          >
            Písek, Česko
          </motion.div>

          {/* Row 5 — Col 2: Sekundární CTA "Prohlédnout projekty" — vystředěná */}
          <motion.a
            href="#projekty"
            onClick={handleNavClick("projekty")}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.9, ease: SMOOTH }}
            className="group hidden md:inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-dim)] hover:text-[var(--cream)] pb-2 border-b border-[var(--rule-soft)] hover:border-[var(--cream)] transition-colors duration-300 md:row-start-5 md:col-start-2 md:pl-6 justify-self-center self-center"
          >
            Prohlédnout projekty
            <span
              aria-hidden
              className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
            >
              ↓
            </span>
          </motion.a>

          {/* MOBILNÍ CTAs — viditelné jen na mobilu, pod popiskem */}
          <div className="md:hidden mt-10 flex flex-col gap-8">
            <a
              href="#kontakt"
              onClick={handleNavClick("kontakt")}
              className="group inline-block self-start"
            >
              <span className="relative inline-flex items-baseline gap-3 font-serif text-[clamp(28px,3.2vw,42px)] tracking-[-0.01em] text-[var(--ink)] pb-2 group-hover:text-[var(--cream)] transition-colors duration-300">
                Chci konzultaci
                <span
                  aria-hidden
                  className="font-sans text-[0.55em] transition-transform duration-300 group-hover:translate-x-1.5"
                >
                  →
                </span>
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-px bg-[var(--rule)] group-hover:bg-[var(--cream)] transition-colors duration-300"
                />
              </span>
              <span className="block mt-3 font-mono text-[10px] tracking-[0.22em] uppercase text-[var(--ink-mute)] group-hover:text-[var(--ink-dim)] transition-colors duration-300">
                ··· zdarma & nezávazně
              </span>
            </a>

            <a
              href="#projekty"
              onClick={handleNavClick("projekty")}
              className="group self-center inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.18em] uppercase text-[var(--ink-dim)] hover:text-[var(--cream)] pb-2 border-b border-[var(--rule-soft)] hover:border-[var(--cream)] transition-colors duration-300"
            >
              Prohlédnout projekty
              <span
                aria-hidden
                className="inline-block transition-transform duration-300 group-hover:translate-y-0.5"
              >
                ↓
              </span>
            </a>
          </div>

          {/* Row 6 — Col 2: N. — 2026 marker */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.8, duration: 1, ease: SMOOTH }}
            className="meta hidden md:block md:row-start-6 md:col-start-2 md:pl-6 mt-6 text-right"
            aria-hidden
          >
            N. — 2026
          </motion.span>
        </div>
      </div>
    </section>
  );
}
