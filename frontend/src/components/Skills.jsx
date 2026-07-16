import { motion } from "framer-motion";

const SKILLS = [
  { name: "UX Research", level: 82 },
  { name: "User Personas", level: 88 },
  { name: "User Journey Mapping", level: 84 },
  { name: "Information Architecture", level: 78 },
  { name: "Wireframing", level: 92 },
  { name: "Prototyping", level: 90 },
];

const TOOLS = ["Figma", "Adobe XD", "Framer", "Miro", "Canva"];

const easing = [0.76, 0, 0.24, 1];

function Dial({ level }) {
  const radius = 42;
  const circ = 2 * Math.PI * radius;
  const offset = circ - (level / 100) * circ;
  return (
    <svg viewBox="0 0 100 100" className="w-16 h-16">
      <circle cx="50" cy="50" r={radius} stroke="rgba(255,255,255,0.08)" strokeWidth="4" fill="none" />
      <motion.circle
        cx="50"
        cy="50"
        r={radius}
        stroke="#1D35FF"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        whileInView={{ strokeDashoffset: offset }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: easing }}
        style={{ transformOrigin: "center", transform: "rotate(-90deg)" }}
      />
      <text x="50" y="55" textAnchor="middle" className="fill-white text-[16px] font-sans font-medium">
        {level}
      </text>
    </svg>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      data-testid="skills-section"
      className="relative py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      <div className="mb-16 md:mb-24 max-w-4xl">
        <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-6">
          <span className="w-8 h-[1px] bg-electric" />
          Capabilities
        </div>
        <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          Skills tuned like <span className="italic">instruments.</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-10 md:gap-16">
        {/* Skills column */}
        <div className="space-y-4">
          <div className="text-xs tracking-[0.28em] uppercase text-chalk-faint mb-6">— Design Craft</div>
          {SKILLS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: easing }}
              className="glass flex items-center gap-6 p-5 md:p-6 rounded-md"
              data-testid={`skill-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <Dial level={s.level} />
              <div className="flex-1">
                <div className="text-lg md:text-xl font-medium text-white">{s.name}</div>
                <div className="mt-2 h-[1px] w-full bg-white/5 relative overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, delay: 0.2 + i * 0.08, ease: easing }}
                    className="absolute inset-y-0 left-0 bg-electric"
                  />
                </div>
              </div>
              <div className="text-xs tracking-[0.25em] uppercase text-chalk-faint">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools column */}
        <div className="md:pl-12 md:border-l md:border-white/5">
          <div className="text-xs tracking-[0.28em] uppercase text-chalk-faint mb-6">— Tools I Use Daily</div>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((t, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: easing }}
                whileHover={{ y: -4 }}
                className="glass px-5 py-3 rounded-full text-sm tracking-widest uppercase"
                data-testid={`tool-${t.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {t}
              </motion.div>
            ))}
          </div>

          <div className="mt-14 space-y-6 max-w-md text-chalk-muted leading-relaxed">
            <p className="text-lg font-light">
              I approach every product like a mechanic approaches an engine — measure twice,
              cut once, and never ship a component that hasn&apos;t earned its place.
            </p>
            <p className="font-serif text-2xl italic text-white/80">
              &ldquo;Details are not details. They make the design.&rdquo;
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-chalk-faint">— Charles Eames</p>
          </div>
        </div>
      </div>
    </section>
  );
}
