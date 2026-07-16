import { motion } from "framer-motion";

const CHAPTERS = [
  {
    n: "01",
    title: "A passion for the invisible craft.",
    body: "I design with obsessive attention to the small moments — the ease of a first tap, the confidence of a completed flow, the quiet satisfaction of a well-placed hint. Design, at its best, disappears.",
  },
  {
    n: "02",
    title: "User-centered — for real.",
    body: "Every decision is anchored to research, interviews, and evidence. Personas aren't decoration; they're the compass. I build for humans, in all their messiness.",
  },
  {
    n: "03",
    title: "A problem-solving mindset.",
    body: "I frame problems before I sketch pixels. Constraints are creative fuel. When I face an ambiguous brief, I ask the sharpest question I can find.",
  },
  {
    n: "04",
    title: "Continuous learning, always.",
    body: "The web moves fast. So do I. I read, write, prototype, and take courses relentlessly — because good design taste is trained, not gifted.",
  },
  {
    n: "05",
    title: "Collaboration is the multiplier.",
    body: "I speak fluently with product, engineering, and research. I document generously. Great work happens in the seams between disciplines.",
  },
];

const fadeVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } },
};

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-28">
        <div>
          <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-6">
            <span className="w-8 h-[1px] bg-electric" />
            Manifesto
          </div>
          <h2 className="font-serif font-light text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-4xl">
            About the way I think about <span className="italic">design.</span>
          </h2>
        </div>
        <p className="max-w-md text-chalk-muted text-base md:text-lg leading-relaxed">
          Five short chapters — the values that quietly shape everything I ship.
        </p>
      </div>

      {/* Chapters */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24">
        {CHAPTERS.map((c, idx) => (
          <motion.div
            key={c.n}
            variants={fadeVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className={`md:col-span-10 ${idx % 2 === 0 ? "md:col-start-1" : "md:col-start-3"}`}
            data-testid={`about-chapter-${c.n}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
              <div className="md:col-span-3">
                <div className="font-serif text-6xl md:text-7xl lg:text-8xl leading-none text-electric">{c.n}</div>
                <div className="mt-3 text-xs tracking-[0.28em] uppercase text-chalk-faint">Chapter {c.n}</div>
              </div>
              <div className="md:col-span-9">
                <h3 className="font-serif text-2xl md:text-4xl lg:text-5xl leading-tight tracking-tight text-white mb-5 max-w-2xl">
                  {c.title}
                </h3>
                <p className="max-w-xl text-chalk-muted text-base md:text-lg leading-relaxed font-light">{c.body}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
