"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const SMOOTH = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <div className={className}>
      <span className="label inline-flex items-center gap-3">
        <span>{children}</span>
        <motion.span
          aria-hidden
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 36, opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.4, duration: 0.9, ease: SMOOTH }}
          className="h-px bg-[var(--ink-mute)] block"
        />
      </span>
    </div>
  );
}
