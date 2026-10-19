// Static content from Tanish's supplied résumé and public GitHub repositories.
// These links describe past work; this portfolio has no API integration.
export const profile = {
  name: "Tanish Srikakolapu",
  university: "University of Waterloo",
  subject: "Mathematics",
  degree: "Bachelor of Mathematics · Combinatorics & Optimization",
  educationDates: "2024 — 2029",
  email: "srikakolaputanish@gmail.com",
  github: "https://github.com/Tanish2410",
  repositories: "https://github.com/Tanish2410?tab=repositories",
  linkedin: "https://linkedin.com/in/tanish-srikakolapu-a959b9331/",
  resume: "/Tanish-Srikakolapu-Resume.pdf",
};

export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  detail: string;
  visual: "vector" | "trace" | "margin";
  github?: string;
  demo?: string;
  featured?: boolean;
  sample?: boolean;
};

export const projects: Project[] = [
  {
    id: "nautica",
    number: "01",
    title: "Nautica",
    category: "Probability & strategy",
    description: "A Battleship agent that turns uncertainty into strategy. Built in 12 hours, with a 69% win rate at Code Clash UofT.",
    technologies: ["Python", "Monte Carlo", "Search heuristics"],
    detail: "Nautica uses probabilistic modelling and Monte Carlo simulation to estimate where an opponent's ships could be. It updates those estimates as the game unfolds and combines them with search heuristics to choose its next move. Built for Code Clash UofT in 2026, it earned first place in the round robin and the Most Creative Implementation award.",
    visual: "vector",
    github: "https://github.com/Tanish2410/Battleship-AI-agent",
    featured: true,
  },
  {
    id: "clippy",
    number: "02",
    title: "Clippy",
    category: "Creative tools",
    description: "A playful drawing app with AI-assisted prompts. Second place at the MUES Hackathon in October 2025.",
    technologies: ["JavaScript", "Node.js", "HTML / CSS"],
    detail: "Clippy combines a responsive web interface with AI-assisted drawing prompts to give people a starting point for creating. The original application was built with JavaScript, HTML, and Node.js and used the OpenAI API for prompt generation. The team earned second place at the MUES Hackathon in October 2025.",
    visual: "trace",
    github: "https://github.com/Tanish2410/clippy",
    demo: "https://clippy-sage.vercel.app",
  },
  {
    id: "genesis",
    number: "03",
    title: "Genesis",
    category: "Collaborative development",
    description: "A collaborative Discord utility bot. My contributions bring binary conversion and arithmetic into a simple command interface.",
    technologies: ["JavaScript", "discord.js", "Node.js"],
    detail: "Genesis is a team-built Discord bot with slash-command utilities. I contributed binary conversion and arithmetic commands, including input validation and clear error responses. Working within a shared codebase meant keeping new commands consistent with the existing bot. This repository is a fork of the collaborative project; my work is part of that larger effort.",
    visual: "margin",
    github: "https://github.com/Tanish2410/Genesis",
  },
];

export const experiences = [
  {
    organization: "GuruvaiSciences",
    role: "AI Solutions Intern",
    dates: "Apr 2026 — Present",
    description: "Evaluating inference models and improving agent reliability. Designed guardrails for data leakage and invalid modelling assumptions, and debugged LangGraph routing across planning, profiling, and execution.",
    technologies: ["Python", "LangGraph", "Model evaluation"],
  },
  {
    organization: "Electrium Mobility",
    role: "Software Developer Intern",
    dates: "Feb 2025 — Present",
    description: "Building Android tools for connected e-bike fleets. Developed persistent BLE scanning across 15+ devices and a live fleet dashboard, maintaining over 99% connection reliability across app state changes.",
    technologies: ["Kotlin", "Android", "Bluetooth LE"],
  },
  {
    organization: "Exceed Robotics",
    role: "SWE Instructor",
    dates: "Sep — Dec 2025",
    description: "Taught programming and robotics to more than 30 students through 40+ hands-on lessons. Introduced computer vision alongside projects with Python, Arduino, and Raspberry Pi.",
    technologies: ["Python", "OpenCV", "Arduino"],
  },
];

export const journey = [
  {
    year: "2026",
    title: "Putting mathematics to work.",
    description: "Joined GuruvaiSciences to work on AI reliability. Built Nautica at Code Clash UofT, earning first place in the round robin and Most Creative Implementation.",
  },
  {
    year: "2025",
    title: "Building, teaching, competing.",
    description: "Started developing connected mobility tools at Electrium, taught at Exceed Robotics, and took second place at the MUES Hackathon with Clippy.",
  },
  {
    year: "2024",
    title: "A new chapter at Waterloo.",
    description: "Began a Bachelor of Mathematics, focusing on Combinatorics and Optimization. A foundation in algorithms, probability, and computational mathematics.",
  },
];

export const skillGroups = [
  { title: "Languages", skills: ["Python", "Kotlin", "Java", "C / C#", "TypeScript", "SQL"] },
  { title: "Web & backend", skills: ["React", "Node.js", "FastAPI", "Flask", "HTML / CSS"] },
  { title: "AI & data", skills: ["LangGraph", "Whisper", "OpenAI", "Jupyter", "Streamlit"] },
  { title: "Databases", skills: ["PostgreSQL", "SQLite", "Supabase"] },
  { title: "Infrastructure", skills: ["Docker", "Linux", "AWS Lambda", "Git"] },
  { title: "Mobile & hardware", skills: ["Android", "Bluetooth LE", "Arduino", "Raspberry Pi"] },
];
