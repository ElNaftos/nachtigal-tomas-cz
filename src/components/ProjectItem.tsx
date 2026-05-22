"use client";

import { motion } from "framer-motion";
import { AnimatedText } from "./AnimatedText";
import { BrowserFrame } from "./BrowserFrame";
import { FadeIn } from "./FadeIn";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

export function ProjectItem({ project, index }: Props) {
  const isLeft = index % 2 === 0;
  const compact = project.compact === true;

  // Compact varianta = menší vše, bez stats
  const headingClass = compact
    ? "font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.1] tracking-[-0.02em] m-0 mb-2"
    : "font-serif text-[clamp(32px,3.2vw,48px)] leading-[1.05] tracking-[-0.02em] m-0 mb-3";

  const browserContainerClass = compact
    ? "max-w-[78%] md:max-w-[78%]"
    : "";

  return (
    <article
      className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center ${
        compact ? "mb-20 md:mb-24 -mt-8 md:-mt-16" : "mb-32 md:mb-40"
      } last:mb-0`}
    >
      {/* Huge italic background number — render jako SVG, aby Lighthouse
          neflagoval kontrast u čistě dekorativního prvku (aria-hidden text
          uvnitř <div> stejně axe-core kontroluje). */}
      {!compact && (
        <svg
          aria-hidden="true"
          role="presentation"
          focusable="false"
          className="absolute pointer-events-none select-none z-0"
          style={{
            width: "clamp(160px, 22vw, 280px)",
            height: "clamp(120px, 16vw, 200px)",
            opacity: 0.06,
            ...(isLeft
              ? { right: "56%", top: "-40px" }
              : { left: "56%", top: "-40px" }),
          }}
          viewBox="0 0 200 160"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="50%"
            y="82%"
            textAnchor="middle"
            fill="var(--ink)"
            style={{
              fontFamily: "var(--font-instrument-serif), serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "180px",
              letterSpacing: "-0.04em",
            }}
          >
            {project.number}
          </text>
        </svg>
      )}

      {/* Timeline node */}
      <motion.div
        aria-hidden
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="absolute left-0 md:left-1/2 top-1/2 z-20"
        style={{
          width: compact ? 6 : 9,
          height: compact ? 6 : 9,
          marginLeft: compact ? -3 : -4.5,
          marginTop: compact ? -3 : -4.5,
          borderRadius: 9999,
          background: "var(--bg)",
          border: `1px solid ${project.accentColor}`,
          boxShadow: `0 0 0 4px var(--bg)`,
        }}
      />

      {/* Browser */}
      <FadeIn className={`relative z-10 ${isLeft ? "md:order-1" : "md:order-2"}`}>
        <div className={`${browserContainerClass} ${isLeft ? "" : "md:ml-auto"}`}>
          <BrowserFrame
            url={project.url}
            imageSrc={project.image}
            imageAlt={`${project.name} — screenshot`}
          />
        </div>
      </FadeIn>

      {/* Text */}
      <FadeIn
        delay={0.1}
        className={`relative z-10 ${isLeft ? "md:order-2" : "md:order-1"}`}
      >
        <div
          className={`px-6 md:px-0 py-2 md:pr-2 ${
            isLeft ? "md:text-left" : "md:text-right"
          }`}
        >
          <div
            className={`relative ${isLeft ? "border-l-[3px] pl-6 md:pl-8" : "border-r-[3px] pr-6 md:pr-8"} transition-colors duration-300`}
            style={{ borderColor: project.accentColor }}
          >
            <span className="meta block mb-4">{project.meta}</span>
            <h3 className={headingClass}>
              <AnimatedText text={project.name} trigger="view" />
            </h3>
            <p
              className={`font-sans italic font-normal text-[var(--cream)] m-0 ${
                compact ? "text-[14px] mb-3" : "text-[16px] mb-6"
              }`}
            >
              {project.tagline}
            </p>
            <p
              className={`font-sans leading-[1.65] font-light text-[var(--ink-dim)] m-0 ${
                compact ? "text-[14px] mb-5 max-w-[420px]" : "text-[15px] mb-7 max-w-[460px]"
              } ${!isLeft ? "md:ml-auto" : ""}`}
              style={{ textWrap: "pretty" } as React.CSSProperties}
            >
              {project.description}
            </p>

            {!compact && project.stats.length > 0 && (
              <div
                className={`flex gap-8 mb-8 py-4 border-y border-[var(--rule-soft)] ${
                  !isLeft ? "md:justify-end" : ""
                }`}
              >
                {project.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col gap-1.5 whitespace-nowrap ${
                      !isLeft ? "md:text-right" : ""
                    }`}
                  >
                    <span className="font-serif text-[24px] text-[var(--ink)] leading-none block whitespace-nowrap">
                      {stat.value}
                    </span>
                    <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-[var(--ink-mute)] whitespace-nowrap block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            <div
              className={`flex flex-wrap gap-1.5 ${
                compact ? "mb-5" : "mb-7"
              } ${!isLeft ? "md:justify-end" : ""}`}
            >
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-cta"
            >
              Navštívit <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </FadeIn>
    </article>
  );
}
