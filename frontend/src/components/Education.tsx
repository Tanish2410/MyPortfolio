import { profile } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-shell education-section" aria-labelledby="education-title">
      <div className="education-row">
        <div className="education-mark" aria-hidden="true">W<span>_</span></div>
        <div className="education-main">
          <h2 id="education-title">{profile.university}</h2>
          <p>{profile.degree}</p>
        </div>
        <p className="education-dates">{profile.educationDates}</p>
      </div>
    </section>
  );
}
