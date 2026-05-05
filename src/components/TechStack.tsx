"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FadeIn } from "./FadeIn";

const PRIMARY_TAGS = [
  "Next.js",
  "TypeScript",
  "Supabase",
  "Vercel",
  "Stripe",
  "Shoptet",
  "Figma",
  "GA4",
  "Claude",
];

type StackBlock = {
  label: string;
  /** Tailwind grid-cols class string — musí být doslovně, kvůli Tailwind purge */
  cols: string;
  items: Array<[string, string]>;
};

const STACK: StackBlock[] = [
  {
    label: "Technologie",
    cols: "grid-cols-2 md:grid-cols-4",
    items: [
      ["Next.js", "Framework"],
      ["React", "UI"],
      ["TypeScript", "Typový systém"],
      ["HTML & CSS", "Základ"],
      ["Tailwind", "Styly"],
      ["Supabase", "DB · Auth"],
      ["Vercel", "Deploy"],
      ["Stripe", "Platby"],
    ],
  },
  {
    label: "Platformy a nástroje",
    cols: "grid-cols-2 md:grid-cols-3",
    items: [
      ["Shoptet", "E-shopy"],
      ["Eshop-rychle", "E-shopy"],
      ["Figma", "Design"],
      ["Canva", "Grafika"],
      ["Lovable", "Prototypy"],
      ["Notion", "Organizace"],
    ],
  },
  {
    label: "Marketing a analytika",
    cols: "grid-cols-2 md:grid-cols-5",
    items: [
      ["GA4", "Analytics"],
      ["Search Console", "SEO"],
      ["Microsoft Clarity", "Heatmapy"],
      ["Meta Ads", "FB · IG"],
      ["Google Ads", "PPC"],
    ],
  },
  {
    label: "AI nástroje",
    cols: "grid-cols-3 md:grid-cols-5",
    items: [
      ["Claude", "Anthropic"],
      ["ChatGPT", "OpenAI"],
      ["Gemini", "Google"],
      ["Perplexity", "Search"],
      ["Manus", "Agent"],
    ],
  },
];

const SMOOTH = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function TechStack() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-14 pt-8 border-t border-[var(--rule-soft)]">
      {/* Collapsed: jeden řádek inline tagů */}
      <div className="flex flex-wrap gap-2">
        {PRIMARY_TAGS.map((tag) => (
          <span
            key={tag}
            className="font-mono text-[11px] uppercase tracking-[0.1em] border border-[var(--rule)] px-3 py-1.5 rounded-[4px] text-[var(--ink-dim)]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Toggle button */}
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-mute)] hover:text-[var(--ink)] transition-colors cursor-pointer"
        aria-expanded={expanded}
      >
        {expanded ? "Skrýt ×" : "Zobrazit celý stack →"}
      </button>

      {/* Expanded: 4 bloky */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="full-stack"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: SMOOTH }}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-10 space-y-12">
              {STACK.map((block, blockIdx) => (
                <FadeIn key={block.label} delay={blockIdx * 0.06}>
                  <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--ink-mute)] mb-6">
                    {block.label}
                  </div>
                  <div className="h-px bg-[var(--rule)] mb-6" />
                  <div className={`grid ${block.cols} gap-x-8 gap-y-6`}>
                    {block.items.map(([name, desc]) => (
                      <div key={name} className="flex flex-col gap-1">
                        <span className="font-sans font-bold text-[14px] text-[var(--ink)] leading-tight">
                          {name}
                        </span>
                        <span className="font-mono text-[11px] text-[var(--ink-mute)] leading-tight">
                          {desc}
                        </span>
                      </div>
                    ))}
                  </div>
                </FadeIn>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
