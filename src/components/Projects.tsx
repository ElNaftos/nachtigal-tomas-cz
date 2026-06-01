import { projects } from "@/data/projects";
import { AnimatedText } from "./AnimatedText";
import { FadeIn } from "./FadeIn";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <section id="projekty" className="pt-[140px] pb-[200px] max-md:pt-24 max-md:pb-32 scroll-mt-20">
      <div className="max-w-[1280px] mx-auto px-[clamp(24px,5vw,96px)]">
        <FadeIn>
          <div className="flex justify-between items-end mb-[120px] max-md:mb-16 pb-6 border-b border-[var(--rule-soft)] gap-6">
            <h2 className="font-serif text-[clamp(40px,4.4vw,64px)] leading-none tracking-[-0.02em] m-0">
              <AnimatedText text="Vybrané " trigger="view" />
              <span className="it">
                <AnimatedText text="projekty" trigger="view" startDelay={8} />
              </span>
            </h2>
            <div className="meta text-right leading-[1.6]">
              Projects / 09
              <br />
              2024 — 2026
            </div>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-px md:-translate-x-[0.5px]"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, var(--rule) 8%, var(--rule) 92%, transparent 100%)",
            }}
          />

          {projects.map((project, i) => (
            <ProjectItem key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
