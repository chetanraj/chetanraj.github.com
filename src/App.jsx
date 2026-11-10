import { useEffect, useRef } from "react";
import { attachScrollMotion } from "./scrollMotion";
import laptop from "./images/bg.jpg";
const links = [
  { title: "Writing", label: "Visit the blog", href: "https://chetanraj.dev/blog/", text: "Notes from the web.", number: "01" },
  { title: "Code", label: "Explore GitHub", href: "https://github.com/chetanraj", text: "A look under the hood.", number: "02" },
  { title: "Community", label: "JavaScript Essentials", href: "https://instagram.com/javascriptessentials", text: "Tech, shared on Instagram.", number: "03" },
];
function Arrow({ down = false }) {
  return <svg className="arrow-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">{down ? <path d="M12 4v16m-6-6 6 6 6-6" /> : <path d="M6 18 18 6M6 6h12v12" />}</svg>;
}
export default function App() {
  const portfolio = useRef(null);
  useEffect(() => {
    if (!window.matchMedia) return;
    let cancelled = false;
    let detach;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (!cancelled && portfolio.current) detach = attachScrollMotion(portfolio.current, gsap, ScrollTrigger);
      })
      .catch(() => { /* Native scrolling remains available if optional motion fails. */ });
    return () => { cancelled = true; detach?.(); };
  }, []);
  return (
    <div className="portfolio afterglow" ref={portfolio}>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header"><a className="wordmark" href="#main" aria-label="Chetan Raj home">cr<span>.</span></a><span className="header-note">Design & development</span><a className="text-link" href="https://chetanraj.dev/blog/">Read the blog <Arrow /></a></header>
      <main id="main">
        <section className="hero" aria-labelledby="name">
          <figure className="hero-image"><img src={laptop} alt="The original laptop photograph, glowing with orange, violet, and blue light." fetchPriority="high"/><figcaption>Same desk. New perspectives.</figcaption></figure>
          <div className="hero-copy"><p className="eyebrow">Designer & developer</p><h1 id="name">Chetan<br/><span>Raj.</span></h1><p className="intro">Design meets code.<br/>Curiosity does the rest.</p><a className="hero-link" href="#explore">Explore my corner of the web <Arrow down /></a></div>
          <div className="role"><span className="role-label">Currently</span><p>Frontend Architect /<br/>Senior Engineering Manager</p><a href="https://zinnia.com/">Zinnia <Arrow /></a></div>
        </section>
        <section className="explore-section" id="explore" aria-labelledby="explore-title"><div className="section-heading"><p className="eyebrow">Around the web</p><h2 id="explore-title">A few open tabs.</h2><p>Writing, building, sharing.</p></div><div className="link-grid">{links.map(link => <a className="destination" href={link.href} key={link.title}><div className="card-top"><span>{link.number}</span><Arrow /></div><h3>{link.title}</h3><p>{link.text}</p><span className="destination-label">{link.label}</span></a>)}</div></section>
        <section className="offscreen" aria-labelledby="offscreen-title"><p className="eyebrow" id="offscreen-title">Beyond the screen</p><p>Music. Movies. Gadgets.<br/><span>Iron Man. Batman.</span></p><span className="asterisk" aria-hidden="true">✳</span></section>
      </main>
      <footer><span>Chetan Raj <span className="footer-detail"> / Designer & developer</span></span><nav aria-label="Social links"><a href="https://instagram.com/javascriptessentials">Instagram</a><a href="https://x.com/chetan_raj">X</a><a href="https://github.com/chetanraj">GitHub</a></nav></footer>
    </div>
  );
}
