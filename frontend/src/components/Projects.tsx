import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";
import "./projects.css";

export default function Projects() {
  return (
    <section
      id="work"
      className="section-shell projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading projects-heading">
        <div>
          <h2 id="projects-heading">
            Selected <span>work.</span>
          </h2>
        </div>
        <a
          href="https://github.com/Tanish2410?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link projects-repository-link"
        >
          All projects on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
