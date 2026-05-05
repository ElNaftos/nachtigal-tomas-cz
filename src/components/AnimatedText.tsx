"use client";

import { motion } from "framer-motion";

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

  // Translate o trochu víc než 100% — kompenzuje padding tak, aby
  // descender byl plně schovaný v initial stavu.
  const letterVariants = {
    hidden: { y: "112%" },
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
            verticalAlign: "bottom",
            paddingTop: "0.2em",
            paddingBottom: "0.1em",
            whiteSpace: "pre",
          }}
        >
          <motion.span
            custom={i + startDelay}
            variants={letterVariants}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
