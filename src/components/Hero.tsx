"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";

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
              transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="label mb-14"
            >
              Designer · Developer · Builder
            </motion.div>

            <h1 className="font-serif text-[clamp(72px,11vw,168px)] leading-[0.92] tracking-[-0.025em] m-0 text-[var(--ink)]">
              <AnimatedText text="Tomáš" />
              <br />
              <span className="italic text-[var(--cream)]">
                <AnimatedText text="Nachtigal" startIndex={5} />
              </span>
            </h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 64 }}
              transition={{
                delay: 1.2,
                duration: 0.6,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="h-[2px] bg-[var(--cream)] mt-10 mb-8"
              aria-hidden
            />

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="font-sans text-[19px] leading-[1.5] font-light text-[var(--ink)] max-w-[540px] mb-14"
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              Weby a datové projekty pro český trh.
              <br />
              Každý jiný. Každý od nuly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              className="meta"
            >
              Písek, Česko · OSVČ · Est. 2024
            </motion.div>
          </div>

          {/* PRAVÁ — abstraktní art (desktop only) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden md:block relative h-[360px] pl-6"
            aria-hidden
          >
            <span className="meta absolute top-0 left-6">Idx / 01</span>
            <div className="h-full flex flex-col justify-center gap-7">
              <div className="h-px bg-[var(--rule)] w-[80%]" />
              <div className="h-px bg-[var(--rule)] w-[55%]" />
              <div className="h-px bg-[var(--ink-mute)] w-[70%] relative">
                <span
                  className="absolute w-2 h-2 rounded-full bg-[var(--cream)]"
                  style={{ top: "-3.5px", left: "62%" }}
                />
              </div>
              <div className="h-px bg-[var(--rule)] w-[40%]" />
              <div className="h-px bg-[var(--rule)] w-[55%]" />
            </div>
            <span className="meta absolute bottom-0 right-0">N. — 2026</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute left-[clamp(24px,5vw,96px)] bottom-8 hidden md:flex items-center gap-3 text-[var(--ink-mute)]"
      >
        <span className="meta">Scroll</span>
        <span className="w-6 h-px bg-[var(--ink-mute)]" />
      </motion.div>
    </section>
  );
}
