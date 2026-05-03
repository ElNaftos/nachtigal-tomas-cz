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
        className="absolute left-4 md:left-1/2 top-2 -translate-x-1/2 z-10"
      >
        <div className="w-2.5 h-2.5 rounded-full bg-[var(--timeline-dot)] ring-4 ring-[var(--timeline-dot-ring)]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
        {/* Mobile: image always first. Desktop: alternates. */}
        <FadeIn
          className={`pl-12 md:pl-0 ${
            imageOnLeft ? "md:order-1 md:pr-8" : "md:order-2 md:pl-8"
          }`}
        >
          <BrowserFrame src={project.image} alt={project.name} />
        </FadeIn>

        <FadeIn
          delay={0.1}
          className={`pl-12 md:pl-0 ${
            imageOnLeft ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8"
          }`}
        >
          <div>
            <span className="label">{project.number}</span>
            <h3 className="headline-lg mt-3">{project.name}</h3>
            <p className="body-lg mt-4 text-[var(--text-primary)]">
              {project.tagline}
            </p>
            <p className="body mt-6 max-w-[480px]">{project.description}</p>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
              {project.stack.map((tech, i) => (
                <span key={tech} className="label">
                  {tech}
                  {i < project.stack.length - 1 && (
                    <span className="ml-3 text-[var(--text-muted)]">·</span>
                  )}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] hover:underline transition-opacity"
                style={{ fontSize: 17 }}
              >
                {project.url} →
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
