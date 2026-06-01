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

  // 110% — kompenzuje wrapper padding tak, aby ascender plně skrytý.
  const letterVariants = {
    hidden: { y: "110%" },
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
      style={{
        display: "inline-block",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {/* Skutečný text pro čtečky / SEO. `aria-label` na generickém <span>
          ARIA zakazuje (axe: aria-prohibited-attr), proto sr-only text node
          a vizuální písmena níže jsou aria-hidden. */}
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          borderWidth: 0,
        }}
      >
        {text}
      </span>
      {/* Jeden mask-wrapper kolem CELÉHO slova — italic letter flourishes
          se mohou navzájem překrývat bez clippingu na boundary mezi písmeny.
          Horizontální padding zajistí, že ani slant na začátku/konci slova
          se neořeže. */}
      <span
        aria-hidden
        style={{
          display: "inline-block",
          overflow: "hidden",
          paddingTop: "0.2em",
          paddingBottom: "0.15em",
          paddingLeft: "0.05em",
          paddingRight: "0.1em",
          marginLeft: "-0.05em",
          marginRight: "-0.1em",
          verticalAlign: "bottom",
          whiteSpace: "pre",
          lineHeight: 1.15,
        }}
      >
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            custom={i + startDelay}
            variants={letterVariants}
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              lineHeight: 1.15,
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </span>
    </motion.span>
  );
}
