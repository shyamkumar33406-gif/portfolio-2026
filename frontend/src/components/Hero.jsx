import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download } from "lucide-react";

const easing = [0.76, 0, 0.24, 1];

const LineReveal = ({ children, delay = 0 }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block will-change-transform"
      initial={{ y: "110%", rotate: 3 }}
      animate={{ y: 0, rotate: 0 }}
      transition={{ duration: 1.1, ease: easing, delay }}
    >
      {children}
    </motion.span>
  </span>
);

export default function Hero({ ready }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const handleCTA = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (window.__lenis) window.__lenis.scrollTo(el, { duration: 1.6 });
    else el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      data-testid="hero-section"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-end pt-32 pb-16 md:pb-24 px-6 md:px-12"
    >
      {/* Ambient blue spotlight */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[70vw] h-[70vw] rounded-full spotlight blur-3xl opacity-70" />
      </div>

      {/* Speed lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        {[0, 80, 160, 260, 380, 520, 700].map((y, i) => (
          <motion.path
            key={i}
            d={`M-100,${300 + y * 0.4} C400,${100 + y} 900,${500 + y * 0.6} 1600,${200 + y * 0.3}`}
            stroke="#1D35FF"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={ready ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 0.4 + i * 0.12, ease: easing }}
          />
        ))}
      </svg>

      {/* Top meta row */}
      <motion.div
        className="absolute top-24 md:top-28 left-6 md:left-12 right-6 md:right-12 flex flex-col md:flex-row md:justify-between gap-4 text-xs tracking-[0.28em] uppercase text-chalk-muted z-10"
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <span>UI · UX · Product · Interaction</span>
        <span className="text-electric">◆ Available May 2026</span>
      </motion.div>

      {/* Main headline with parallax */}
      <motion.div style={{ y: textY }} className="relative z-10 max-w-[1400px]">
        <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric">
          <motion.span
            initial={{ scaleX: 0 }}
            animate={ready ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 1 }}
            className="inline-block w-10 h-[1px] bg-electric origin-left"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={ready ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Portfolio — 2026
          </motion.span>
        </div>

        <h1 data-testid="hero-heading" className="font-serif font-light text-[13vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.92] tracking-[-0.03em]">
          {ready && (
            <>
              <LineReveal delay={0.15}>Designing</LineReveal>
              <LineReveal delay={0.3}>
                <span className="italic font-light">intuitive</span> digital
              </LineReveal>
              <LineReveal delay={0.45}>
                experiences that
              </LineReveal>
              <LineReveal delay={0.6}>
                <span className="text-electric">people love</span><span className="text-electric">.</span>
              </LineReveal>
            </>
          )}
        </h1>

        <div className="mt-12 md:mt-16 grid md:grid-cols-3 gap-8 md:gap-16 items-end">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.2, duration: 0.9, ease: easing }}
            className="md:col-span-2 max-w-2xl text-lg md:text-xl text-chalk-muted font-light leading-relaxed"
          >
            Hi — I&apos;m a passionate UI/UX Designer focused on creating user-centered,
            accessible, and visually engaging digital products. I transform ideas into
            meaningful experiences through <em className="italic text-white/85 font-serif">research, wireframes,</em> and
            high-fidelity design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ready ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1.35, duration: 0.9, ease: easing }}
            className="flex flex-col gap-3"
          >
            <button
              onClick={() => handleCTA("work")}
              data-testid="hero-cta-view-work"
              className="group inline-flex items-center justify-between gap-6 bg-electric text-white pl-6 pr-3 py-3 rounded-full text-sm uppercase tracking-[0.15em] hover:bg-white hover:text-ink-0 transition-colors duration-500"
            >
              View My Work
              <span className="grid place-items-center w-9 h-9 rounded-full bg-white text-ink-0 group-hover:bg-electric group-hover:text-white transition-colors duration-500">
                <ArrowUpRight size={16} />
              </span>
            </button>

            <a
              href="#"
              onClick={(e) => e.preventDefault()}
              data-testid="hero-cta-download-resume"
              className="group inline-flex items-center justify-between gap-6 border border-white/20 text-white pl-6 pr-3 py-3 rounded-full text-sm uppercase tracking-[0.15em] hover:border-electric hover:text-electric transition-colors duration-500"
            >
              Download Resume
              <span className="grid place-items-center w-9 h-9 rounded-full border border-white/20 group-hover:border-electric group-hover:text-electric transition-colors duration-500">
                <Download size={14} />
              </span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Portrait card floating right */}
      <motion.div
        style={{ y: imgY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={ready ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 1, duration: 1.4, ease: easing }}
        className="hidden lg:block absolute top-32 right-12 w-[260px] xl:w-[300px] aspect-[3/4] z-10"
        data-testid="hero-portrait"
      >
        <div className="absolute inset-0 border border-electric/40 translate-x-3 translate-y-3" />
        <div className="relative w-full h-full overflow-hidden">
          <img
            src="https://customer-assets-gfyr7b9c.emergentagent.net/job_interface-labs-1/artifacts/q7zmu86z_WhatsApp%20Image%202026-07-17%20at%2011.02.43%20AM.jpeg"
            alt="Shyam Kumar portrait"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-3 left-3 right-3 flex justify-between text-[10px] tracking-[0.25em] uppercase text-white">
            <span>S / K</span>
            <span>N° 001</span>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-6 right-6 md:right-12 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-chalk-muted"
      >
        <span className="inline-block w-8 h-[1px] bg-white/30" />
        Scroll
      </motion.div>
    </section>
  );
}
