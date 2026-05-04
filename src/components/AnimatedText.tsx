"use client";

import { motion } from "framer-motion";

// Velkorysý wrapper i translate — italic Instrument Serif má vysoké
// ascendery i hluboké descendery, hlavně u N, g, l, š, í.
const WRAPPER_LH = 1.3;
const PAD_TOP = 0.25; // em — pro háčky/čárky/serify
const PAD_BOTTOM = 0.35; // em — pro descendery (g, j, p, y) + italic flourishes

const TIMING = {
  mount: { stagger: 0.08, duration: 1.1 },
  view: { stagger: 0.05, duration: 0.85 },
} as const;

type Props = {
  text: string;
  startDelay?: number;
  className?: string;
  trigger?: "mount" | "view";
};

export function AnimatedText({
  text,
  startDelay = 0,
  className,
  trigger = "mount",
}: Props) {
  const { stagger, duration } = TIMING[trigger];

  const letterVariants = {
    hidden: { y: "150%" },
    visible: (i: number) => ({
      y: "0%",
      transition: {
        delay: i * stagger,
        duration,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  const motionProps =
    trigger === "view"
      ? {
          initial: "hidden" as const,
          whileInView: "visible" as const,
          viewport: { once: true, margin: "-80px" },
        }
      : {
          initial: "hidden" as const,
          animate: "visible" as const,
        };

  return (
    <motion.span
      {...motionProps}
      className={className}
      aria-label={text}
      style={{
        display: "inline-block",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
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
            // pre pro space, aby se nekolapsoval
            whiteSpace: "pre",
          }}
        >
          <motion.span
            custom={i + startDelay}
            variants={letterVariants}
            style={{
              display: "inline-block",
              lineHeight: WRAPPER_LH,
              whiteSpace: "pre",
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
