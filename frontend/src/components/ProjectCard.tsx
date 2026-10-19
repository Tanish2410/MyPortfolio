"use client";

import { useEffect, useRef } from "react";
import type { Project } from "@/data/portfolio";
import ProjectVisual from "./ProjectVisual";

function ProjectLinks({ project }: { project: Project }) {
  if (!project.github && !project.demo) return null;

  return (
    <div className="project-links">
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHub <span aria-hidden="true">↗</span>
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Live demo <span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const savedOverflow = useRef<string | null>(null);

  useEffect(() => {
    return () => {
      if (savedOverflow.current !== null) {
        document.documentElement.style.overflow = savedOverflow.current;
      }
    };
  }, []);

  function openDetails() {
    if (!dialogRef.current || dialogRef.current.open) return;
    savedOverflow.current = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    dialogRef.current.showModal();
  }

  function restorePage() {
    if (savedOverflow.current !== null) {
      document.documentElement.style.overflow = savedOverflow.current;
      savedOverflow.current = null;
    }
    triggerRef.current?.focus({ preventScroll: true });
  }

  return (
    <>
      <article
        className={`project-card${project.featured ? " project-card-featured" : ""}`}
        aria-labelledby={`project-${project.id}`}
      >
        <ProjectVisual variant={project.visual} />
        <div className="project-card-copy">
          <h3 id={`project-${project.id}`}>{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <ul className="tag-list project-technologies" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
          <div className="project-actions">
            <button
              ref={triggerRef}
              className="project-explore"
              onClick={openDetails}
              aria-label={`Explore project: ${project.title}`}
              aria-haspopup="dialog"
            >
              Explore project <span aria-hidden="true">↗</span>
            </button>
            <ProjectLinks project={project} />
          </div>
        </div>
      </article>

      <dialog
        ref={dialogRef}
        className="project-dialog"
        aria-labelledby={`project-detail-${project.id}`}
        onClose={restorePage}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          const clickedBackdrop =
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom;
          if (clickedBackdrop) event.currentTarget.close();
        }}
      >
        <div className="project-dialog-inner">
          <div className="project-dialog-top">
            <span className="project-dialog-title">{project.title}</span>
            <button
              className="project-close"
              aria-label={`Close ${project.title} details`}
              onClick={() => dialogRef.current?.close()}
              autoFocus
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <ProjectVisual variant={project.visual} />
          <div className="project-dialog-copy">
            <h2 id={`project-detail-${project.id}`}>{project.title}</h2>
            <p className="project-dialog-description">{project.description}</p>
            <p className="project-detail">{project.detail}</p>
            <ul className="tag-list project-technologies" aria-label="Technologies">
              {project.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
            <ProjectLinks project={project} />
          </div>
        </div>
      </dialog>
    </>
  );
}
