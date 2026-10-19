import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import MusicPlayer from "@/components/MusicPlayer";
import Reveal from "@/components/Reveal";
import Arrow from "@/components/Arrow";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Reveal><Projects /></Reveal>
        <Experience />
        <Timeline />
        <Reveal><Skills /></Reveal>
        <Reveal><Education /></Reveal>
        <Contact />
      </main>
      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home" aria-label="Back to home">ts<span>.</span></a>
        <p>© 2026 Tanish Srikakolapu</p>
        <a className="footer-top" href="#home">Back to top <Arrow /></a>
      </footer>
      <MusicPlayer />
    </>
  );
}
