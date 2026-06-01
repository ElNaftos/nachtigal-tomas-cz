"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Globální provider. `reducedMotion="user"` zajistí, že VŠECHNY framer-motion
 * animace (Hero, FadeIn, AnimatedText, ProfilePhoto, Domains…) respektují
 * `prefers-reduced-motion: reduce` — transformy/posuny se neanimují.
 * Víko-efekt (GSAP) řeší reduced-motion zvlášť ve své komponentě.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
