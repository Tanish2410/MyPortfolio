import { experiences } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-shell experience-section" aria-labelledby="experience-title">
      <div className="section-heading">
        <h2 id="experience-title">Experience<span>.</span></h2>
      </div>
      <div className="experience-list">
        {experiences.map((experience) => (
          <Reveal key={experience.organization}>
            <article className="experience-row">
              <div className="experience-meta"><p>{experience.dates}</p></div>
              <div className="experience-role">
                <h3>{experience.organization}</h3>
                <p>{experience.role}</p>
              </div>
              <div className="experience-detail"><p>{experience.description}</p></div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
