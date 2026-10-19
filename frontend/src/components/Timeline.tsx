"use client";

import { useEffect, useRef } from "react";
import { journey } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Timeline() {
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = track.current;
    if (!element) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      const rect = element.getBoundingClientRect();
      const progress = motion.matches
        ? 1
        : Math.max(
            0,
            Math.min(1, (window.innerHeight * 0.7 - rect.top) / rect.height),
          );
      element.style.setProperty("--journey-progress", String(progress));
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    motion.addEventListener("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      motion.removeEventListener("change", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="journey"
      className="journey-section"
      aria-labelledby="journey-title"
    >
      <div className="section-shell journey-layout">
        <div className="journey-intro">
          <h2 id="journey-title">
            Always a
            <br />
            work in
            <br />
            <span>progress.</span>
          </h2>
          <p>
            A collection of beginnings, experiments, and things learned along the
            way.
          </p>
        </div>
        <div ref={track} className="journey-track">
          <ol className="journey-list" role="list">
            {journey.map((milestone, index) => (
              <li key={milestone.year} className="journey-item">
                <span
                  className={`journey-node ${index === 0 ? "journey-node-current" : ""}`}
                  aria-hidden="true"
                />
                <Reveal>
                  <div className="journey-year-row">
                    <p className="journey-year">{milestone.year}</p>
                  </div>
                  <h3>{milestone.title}</h3>
                  <p className="journey-description">{milestone.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
