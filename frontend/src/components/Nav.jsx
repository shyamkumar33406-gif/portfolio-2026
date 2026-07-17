import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const LINKS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { offset: -20, duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      data-testid="site-nav"
      className={`fixed top-0 inset-x-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
        scrolled ? "bg-ink-0/70 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-5 flex items-center justify-between">
        <button
          onClick={() => goTo("hero")}
          data-testid="nav-logo"
          className="flex items-center gap-2 text-sm tracking-[0.25em] uppercase text-white"
        >
          <span className="inline-block w-2 h-2 rounded-full bg-electric shadow-[0_0_20px_4px_rgba(29,53,255,0.6)]" />
          Shyam/Kumar
        </button>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => goTo(link.id)}
              data-testid={`nav-link-${link.id}`}
              className="link-underline text-sm tracking-[0.15em] uppercase text-chalk-muted hover:text-white transition-colors"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => goTo("contact")}
          data-testid="nav-cta-say-hi"
          className="hidden md:inline-flex items-center gap-2 border border-white/15 hover:border-electric hover:text-electric text-white text-xs tracking-[0.2em] uppercase px-5 py-2.5 rounded-full transition-colors duration-500"
        >
          Say Hi
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-electric animate-pulse-glow" />
        </button>

        <button
          onClick={() => goTo("contact")}
          data-testid="nav-mobile-cta"
          className="md:hidden text-xs uppercase tracking-[0.2em] text-white border border-white/15 px-4 py-2 rounded-full"
        >
          Menu
        </button>
      </div>
    </motion.header>
  );
}
