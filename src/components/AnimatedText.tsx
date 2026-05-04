"use client";

import { motion } from "framer-motion";

// Wrapper má dostatečný line-box i padding pro háčky a descendery
// (š, í, á, g, j, p, y) — bez clippingu.
const WRAPPER_LH = 1.05;
const PAD_TOP = 0.12; // em
const PAD_BOTTOM = 0.18; // em

const letterVariants = {
  hidden: { y: "115%" }, // plně skryto i s padem
  visible: (i: number) => ({
    y: "0%",
    transition: {
      delay: i * 0.08,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
};

type Props = {
  text: string;
  startDelay?: number;
  className?: string;
};

export function AnimatedText({ text, startDelay = 0, className }: Props) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "top",
            lineHeight: WRAPPER_LH,
            paddingTop: `${PAD_TOP}em`,
            paddingBottom: `${PAD_BOTTOM}em`,
          }}
        >
          <motion.span
            custom={i + startDelay}
            variants={letterVariants}
            style={{ display: "inline-block", lineHeight: WRAPPER_LH }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
