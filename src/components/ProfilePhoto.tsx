"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export function ProfilePhoto() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasFlipped, setHasFlipped] = useState(false);
  const [tapFlip, setTapFlip] = useState(0);

  // Auto-flip on first scroll-into-view (mobile primary trigger)
  // and on tap (subsequent triggers)
  const shouldFlip = (isInView && !hasFlipped) || tapFlip > 0;

  return (
    <div
      ref={ref}
      className="mt-10 relative w-48 h-48 md:w-56 md:h-56 mx-auto md:mx-0"
    >
      <div
        className="coin-flip-trigger w-full h-full rounded-full overflow-hidden border-2 border-[var(--rule)]"
        onClick={() => setTapFlip((n) => n + 1)}
      >
        <motion.div
          key={tapFlip}
          className="coin-flip-image w-full h-full"
          animate={shouldFlip ? { rotateY: [0, 360] } : { rotateY: 0 }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          onAnimationComplete={() => {
            if (!hasFlipped) setHasFlipped(true);
          }}
        >
          <Image
            src="/tomas.webp"
            alt="Tomáš Nachtigal"
            width={224}
            height={224}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>
      </div>
      {/* Jemný krémový accent ring */}
      <div
        aria-hidden
        className="absolute -inset-1 rounded-full border border-[var(--cream)] opacity-20 pointer-events-none"
      />
    </div>
  );
}
