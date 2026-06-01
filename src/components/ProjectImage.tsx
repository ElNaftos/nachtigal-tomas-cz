"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { BrowserFrame } from "./BrowserFrame";
import type { Project } from "@/data/projects";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

type Props = {
  project: Project;
};

export function ProjectImage({ project }: Props) {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const inner = innerRef.current;
      const container = containerRef.current;
      if (!inner || !container || reduceMotion) return;

      gsap.set(inner, {
        rotateX: -78,
        opacity: 0.3,
        transformOrigin: "top center",
        willChange: "transform",
      });

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top 85%",
        end: "top 35%",
        scrub: true,
        animation: gsap.to(inner, {
          rotateX: 0,
          opacity: 1,
          ease: "none",
        }),
      });

      return () => {
        trigger.kill();
        gsap.set(inner, { clearProps: "willChange" });
      };
    },
    { scope: containerRef }
  );

  const handleImageLoad = () => {
    if (typeof window === "undefined") return;
    ScrollTrigger.refresh();
  };

  return (
    <a
      ref={containerRef}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Otevřít projekt ${project.name}`}
      className="block group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink-mute)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] rounded-[4px]"
      style={{ perspective: "1400px" }}
    >
      <div ref={innerRef} style={{ transformOrigin: "top center" }}>
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.01]">
          <BrowserFrame
            url={project.url}
            imageSrc={project.image}
            imageAlt={`${project.name} — screenshot`}
            onImageLoad={handleImageLoad}
          />
        </div>
      </div>
    </a>
  );
}
