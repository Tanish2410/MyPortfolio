"use client";

import { useEffect, useState } from "react";
import Arrow from "./Arrow";

const links = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const marker = window.innerHeight * 0.32;
      let current = "home";
      for (const { id } of links) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= marker) {
          current = id;
        }
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = "contact";
      }
      setActive(current);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <header className="site-header">
      <div className="header-inner section-shell">
        <a
          className="wordmark"
          href="#home"
          aria-label="Tanish Srikakolapu, home"
        >
          ts<span>.</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
              <span className="nav-indicator" aria-hidden="true" />
            </a>
          ))}
        </nav>
        <a href="#contact" className="header-contact">
          Let’s talk <Arrow />
        </a>
      </div>
    </header>
  );
}
