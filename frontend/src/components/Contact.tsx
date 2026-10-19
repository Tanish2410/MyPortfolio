import { profile } from "@/data/portfolio";
import Arrow from "./Arrow";

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="contact-heading">
          <h2 id="contact-title">Let’s build<br /><span>something good.</span></h2>
          <Arrow />
        </div>
        <div className="contact-bottom">
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}</a>
          <div className="contact-links">
            <a className="text-link" href={profile.github} target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
