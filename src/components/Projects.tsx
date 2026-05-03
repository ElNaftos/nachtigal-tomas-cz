import { projects } from "@/data/projects";
import { FadeIn } from "./FadeIn";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <section className="py-40 relative">
      <div className="max-w-[1120px] mx-auto px-6 md:px-8">
        <FadeIn>
          <span className="label">Projekty</span>
          <h2 className="headline-lg mt-4">Co jsem postavil</h2>
        </FadeIn>

        <div className="mt-24 relative">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[var(--timeline-line)] -translate-x-1/2"
          />

          <div className="space-y-32 md:space-y-40">
            {projects.map((project, i) => (
              <ProjectItem key={project.number} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
