import { profile } from "@/data/portfolio";
import Arrow from "./Arrow";

function ContourStudy() {
  return (
    <div className="contour-study" aria-hidden="true">
      <svg viewBox="0 0 360 260" fill="none">
        <path className="contour-axis" d="M16 130h328M180 12v236" />
        <g transform="translate(180 130) rotate(-24)">
          {Array.from({ length: 17 }, (_, i) => (
            <ellipse
              key={i}
              rx={30 + i * 6.9}
              ry={92 - i * 3.4}
              className={i === 11 ? "contour-accent" : "contour-line"}
            />
          ))}
          <path className="contour-accent" d="M-148 0h296" />
          <circle cx="148" cy="0" r="3" fill="var(--accent)" />
        </g>
        <path
          className="contour-axis"
          d="M12 12h8m-4-4v8M340 244h8m-4-4v8"
        />
      </svg>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero-title-wrap">
        <h1 id="hero-title" aria-label={profile.name}>
          <span className="hero-first-name">TANISH</span>
          <span className="hero-last-name">
            SRIKAKOLAPU<span className="name-period">.</span>
          </span>
        </h1>
        <ContourStudy />
      </div>
      <div className="hero-description-row">
        <div className="hero-description">
          <p className="hero-lead">
            A mathematical mind.
            <br />
            An engineering instinct.
          </p>
          <p className="hero-subtitle">
            {profile.subject} @ {profile.university}
            <br />
            Exploring software engineering & machine learning.
          </p>
        </div>
        <div className="hero-actions">
          <a className="button-primary" href="#work">
            View projects <Arrow direction="down" />
          </a>
          <div className="hero-secondary-actions">
            {profile.github ? (
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Arrow />
              </a>
            ) : (
              <span className="unavailable-link">
                GitHub <span>soon</span>
              </span>
            )}
            {profile.resume ? (
              <a
                className="text-link"
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
              >
                Résumé <Arrow />
              </a>
            ) : (
              <span className="unavailable-link">
                Résumé <span>soon</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
