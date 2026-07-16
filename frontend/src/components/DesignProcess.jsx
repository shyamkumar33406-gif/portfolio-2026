import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  { n: "01", label: "Empathize", body: "Interviews, contextual inquiries, and quiet observation." },
  { n: "02", label: "Define", body: "Sharpen the problem into a single, testable statement." },
  { n: "03", label: "Research", body: "Competitive audits, desk research, quantitative surveys." },
  { n: "04", label: "Ideate", body: "Divergent sketches, crazy-eights, sacrifice concepts." },
  { n: "05", label: "Wireframe", body: "Structure first — grayscale skeletons, no decoration." },
  { n: "06", label: "Prototype", body: "Interactive flows in Figma. Motion where it earns its keep." },
  { n: "07", label: "Test", body: "Moderated + guerrilla usability tests. Kill the darlings." },
  { n: "08", label: "Final Design", body: "Polished high-fidelity system, ready to hand off & ship." },
];

const easing = [0.76, 0, 0.24, 1];

export default function DesignProcess() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const pathLen = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      id="process"
      ref={ref}
      data-testid="process-section"
      className="relative py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      <div className="mb-20 md:mb-28 max-w-4xl">
        <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-6">
          <span className="w-8 h-[1px] bg-electric" />
          The Process
        </div>
        <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          A track from insight to <span className="italic">interface.</span>
        </h2>
      </div>

      {/* Racing-track SVG on desktop */}
      <div className="hidden lg:block relative">
        <svg viewBox="0 0 1400 500" className="w-full h-auto" preserveAspectRatio="none">
          <path
            d="M40,250 C200,50 300,450 500,250 S800,50 1000,250 S1300,450 1360,250"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
            fill="none"
            strokeDasharray="4 6"
          />
          <motion.path
            d="M40,250 C200,50 300,450 500,250 S800,50 1000,250 S1300,450 1360,250"
            stroke="#1D35FF"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            style={{ pathLength: pathLen }}
          />
        </svg>
      </div>

      <div className="mt-12 md:-mt-24 lg:-mt-32 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {STEPS.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: (i % 4) * 0.08, ease: easing }}
            className="glass p-5 md:p-6 rounded-md group"
            data-testid={`process-step-${s.n}`}
          >
            <div className="flex items-baseline justify-between mb-4">
              <span className="font-serif text-4xl md:text-5xl text-electric group-hover:text-white transition-colors duration-500">
                {s.n}
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-chalk-faint">Step</span>
            </div>
            <div className="text-lg md:text-xl text-white font-medium mb-2">{s.label}</div>
            <p className="text-sm text-chalk-muted leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
