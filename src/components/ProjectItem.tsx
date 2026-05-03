import { BrowserFrame } from "./BrowserFrame";
import { FadeIn } from "./FadeIn";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  index: number;
};

export function ProjectItem({ project, index }: Props) {
  const imageOnLeft = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline dot */}
      <div
        aria-hidden
        className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 z-10"
      >
        <div
          className="w-3 h-3 rounded-full bg-[var(--bg-base)] border-2 border-[var(--accent)]"
          style={{ boxShadow: "0 0 0 4px var(--bg-base)" }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        <FadeIn
          className={`pl-12 md:pl-0 ${
            imageOnLeft ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
          }`}
        >
          <div
            className="rounded-lg overflow-hidden"
            style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}
          >
            <BrowserFrame src={project.image} alt={project.name} />
          </div>
        </FadeIn>

        <FadeIn
          delay={0.1}
          className={`pl-12 md:pl-0 ${
            imageOnLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"
          }`}
        >
          <div className="group relative border border-[#1a1a1f] hover:border-[#2a2a2d] rounded-xl p-8 bg-[#0d0d0f] transition-colors duration-300 overflow-hidden">
            {/* Velké průhledné číslo v pozadí */}
            <span
              aria-hidden
              className="absolute font-serif text-[120px] leading-none text-[var(--accent)] opacity-[0.06] pointer-events-none select-none"
              style={{ top: "-16px", right: "12px" }}
            >
              {project.number}
            </span>

            <div className="relative">
              <span className="label">{`Projekt ${project.number}`}</span>
              <h3 className="font-serif text-[clamp(32px,3.5vw,44px)] font-normal leading-[1.1] tracking-[-0.02em] mt-3">
                {project.name}
              </h3>
              <p className="text-[19px] leading-[1.6] text-[var(--text-primary)] mt-4 font-normal">
                {project.tagline}
              </p>
              <p className="text-[16px] leading-[1.75] text-[var(--text-secondary)] mt-5 max-w-[480px] whitespace-pre-line">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-x-3 gap-y-2 items-center">
                {project.stack.map((tech, i) => (
                  <span key={tech} className="label flex items-center gap-3">
                    {tech}
                    {i < project.stack.length - 1 && (
                      <span className="text-[var(--text-muted)]" aria-hidden>
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </div>

              <div className="mt-8">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:opacity-80 transition-opacity"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.12em]">
                    Navštívit
                  </span>
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
