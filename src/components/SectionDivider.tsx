"use client";

import { motion } from "framer-motion";

export function SectionDivider() {
  return (
    <div aria-hidden className="relative h-px w-full overflow-hidden">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-full origin-center"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--rule) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
