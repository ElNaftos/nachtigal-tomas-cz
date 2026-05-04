"use client";

import { motion } from "framer-motion";

const letterVariants = {
  hidden: { y: "100%" },
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
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          aria-hidden
          style={{
            display: "inline-block",
            overflow: "hidden",
            verticalAlign: "bottom",
            paddingBottom: "0.12em",
            marginBottom: "-0.12em",
            lineHeight: "0.92",
          }}
        >
          <motion.span
            custom={i + startDelay}
            variants={letterVariants}
            style={{ display: "inline-block" }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
