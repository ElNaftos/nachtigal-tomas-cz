"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

const SMOOTH = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20">
      <div className="w-full max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <div className="grid grid-cols-1 md:grid-cols-[60fr_40fr] gap-16 md:gap-16 items-center">
          {/* LEVÁ — copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: SMOOTH }}
              className="label mb-14"
            >
              Tvorba webů · Systémy na míru · Data
            </motion.div>

            <h1 className="font-serif text-[clamp(72px,11vw,168px)] leading-[0.92] tracking-[-0.025em] m-0 text-[var(--ink)]">
              <AnimatedText text="Tomáš" />
              <br />
              <span className="italic text-[var(--cream)]">
                <AnimatedText text="Nachtigal" startDelay={6} />
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{
                delay: 2.6,
                duration: 1.1,
                ease: SMOOTH,
              }}
              className="h-[2px] bg-[var(--cream)] mt-10 mb-8"
              aria-hidden
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.1, duration: 1, ease: SMOOTH }}
              className="font-sans text-[19px] leading-[1.5] font-light text-[var(--ink)] max-w-[540px] mb-14"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              Weby a systémy na míru.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.7, duration: 0.9, ease: SMOOTH }}
              className="meta"
            >
              Písek, Česko
            </motion.div>
          </div>

          {/* PRAVÁ — abstraktní art (desktop only) — staggered lines */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.18, delayChildren: 0.4 },
              },
            }}
            className="hidden md:block relative h-[360px] pl-6"
            aria-hidden
          >
            <motion.span
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1.4, ease: SMOOTH },
                },
              }}
              className="meta absolute top-0 left-6"
            >
              Idx / 01
            </motion.span>
            <div className="h-full flex flex-col justify-center gap-7">
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
                      transition: { duration: 1.2, ease: SMOOTH },
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
            </div>
            <motion.span
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { duration: 1.4, ease: SMOOTH },
                },
              }}
              className="meta absolute bottom-0 right-0"
            >
              N. — 2026
            </motion.span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
