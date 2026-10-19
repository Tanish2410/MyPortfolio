import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-shell skills-section" aria-labelledby="skills-title">
      <div className="section-heading"><h2 id="skills-title">My <span>toolkit.</span></h2></div>
      <dl className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-group">
            <dt>{group.title}</dt>
            <dd>{group.skills.join(" · ")}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
