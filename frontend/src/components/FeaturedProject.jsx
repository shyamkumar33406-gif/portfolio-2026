import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const easing = [0.76, 0, 0.24, 1];

const BLOCKS = [
  {
    label: "Problem",
    body: "Creators — photographers, podcasters, videographers — waste hours searching, calling, and negotiating for the right studio. Availability is opaque; pricing is inconsistent; discovery lives on WhatsApp screenshots.",
  },
  {
    label: "Research",
    body: "12 interviews with content creators, 3 studio owners, and a survey with 84 respondents. 78% said 'the booking process feels stuck in 2005.' Pricing transparency and vibe/photo previews ranked as top decision drivers.",
  },
  {
    label: "User Flow",
    body: "A three-step arc: Discover (feed + filters) → Preview (photos, gear list, calendar) → Book (instant confirm, chat with owner). Two personas: the ad-hoc creator and the regular studio-hopper.",
  },
  {
    label: "Wireframes",
    body: "Low-fi flows explored in Figma with 5 participants in moderated tests. Two IA revisions before we settled on a bottom-nav mobile model + hero-first desktop layout.",
  },
  {
    label: "Final UI",
    body: "Editorial dark theme with electric-blue accents, generous imagery, sharp typographic hierarchy. Every touchpoint — from the empty state to the booking confirmation — was designed with equal care.",
  },
];

const FEATURES = [
  "Instant availability calendar",
  "Vibe-first studio previews",
  "In-app chat with owners",
  "Transparent pricing tiers",
  "Verified reviews & photos",
  "Saved collections",
];

export default function FeaturedProject() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [80, -120]);

  return (
    <section
      id="work"
      ref={ref}
      data-testid="featured-project"
      className="relative py-24 md:py-40 px-6 md:px-12 max-w-[1600px] mx-auto"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24">
        <div>
          <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-6">
            <span className="w-8 h-[1px] bg-electric" />
            Featured Case Study — N° 001
          </div>
          <h2 className="font-serif font-light text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight">
            Studio<span className="italic text-electric">Spot.</span>
          </h2>
          <p className="mt-6 max-w-xl text-lg md:text-xl text-chalk-muted font-light">
            A booking platform that helps photographers, videographers, podcasters, and content
            creators discover and reserve professional studios — in under 90 seconds.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:min-w-[300px]">
          {[
            ["Role", "Lead Designer"],
            ["Timeline", "12 Weeks"],
            ["Tools", "Figma · Miro"],
            ["Platform", "Mobile App"],
          ].map(([k, v]) => (
            <div key={k} className="glass p-4 rounded-md">
              <div className="text-[10px] uppercase tracking-[0.25em] text-chalk-faint">{k}</div>
              <div className="mt-2 text-white font-medium">{v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cover image */}
      <div className="relative overflow-hidden rounded-md mb-24 md:mb-32">
        <motion.div style={{ y: imageY }} className="grayscale-image">
          <img
            src="https://images.pexels.com/photos/37310331/pexels-photo-37310331.jpeg"
            alt="Studio Spot — neon studio hero"
            className="w-full h-[70vh] object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-0 via-ink-0/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-electric mb-2">Studio Spot</div>
            <div className="font-serif text-3xl md:text-5xl text-white max-w-xl leading-tight">Book the room. Skip the friction.</div>
          </div>
          <div className="hidden md:flex flex-col items-end gap-1 text-xs uppercase tracking-[0.25em] text-chalk-muted">
            <span>001 / 001</span>
            <span>Case Study</span>
          </div>
        </div>
      </div>

      {/* Body content — two column asymmetric */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
        <div className="md:col-span-7 space-y-14">
          {BLOCKS.map((b, i) => (
            <motion.div
              key={b.label}
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: easing }}
              data-testid={`case-block-${b.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-baseline gap-4 mb-4">
                <span className="font-serif text-4xl text-electric">0{i + 1}</span>
                <h3 className="font-serif text-2xl md:text-4xl text-white">{b.label}</h3>
              </div>
              <p className="text-chalk-muted text-base md:text-lg leading-relaxed font-light max-w-2xl">{b.body}</p>
            </motion.div>
          ))}
        </div>

        <div className="md:col-span-5 space-y-10">
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easing }}
            className="glass p-8 rounded-md"
          >
            <div className="text-xs uppercase tracking-[0.28em] text-electric mb-6">Key Features</div>
            <ul className="space-y-4">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-white/85 border-b border-white/5 pb-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 pt-8 border-t border-white/5 grid grid-cols-3 gap-4">
              {[
                ["+42%", "Faster bookings"],
                ["4.8★", "App Store rating"],
                ["12k+", "Studios listed"],
              ].map(([n, l]) => (
                <div key={n}>
                  <div className="font-serif text-3xl text-electric">{n}</div>
                  <div className="text-xs uppercase tracking-[0.2em] text-chalk-faint mt-1">{l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: easing }}
        className="mt-24 md:mt-32"
        data-testid="case-userflow-diagram"
      >
        <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-8">
          <span className="w-8 h-[1px] bg-electric" />
          User Flow — The Workflow
        </div>

        <div className="glass rounded-md p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 relative">
            {[
              { step: "Discover", n: "01", nodes: ["Browse feed", "Apply filters", "Search by city"] },
              { step: "Preview", n: "02", nodes: ["View photos & gear", "Check calendar", "Read reviews"] },
              { step: "Book", n: "03", nodes: ["Instant confirm", "Chat with owner", "Pay securely"] },
            ].map((col, ci) => (
              <div key={col.step} className="relative">
                {/* connector arrow between columns */}
                {ci < 2 && (
                  <div className="hidden md:flex absolute top-8 -right-2 z-10 text-electric">
                    <ArrowUpRight size={22} className="rotate-45" />
                  </div>
                )}
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="font-serif text-4xl text-electric">{col.n}</span>
                  <span className="text-lg md:text-xl text-white font-medium">{col.step}</span>
                </div>
                <div className="space-y-3">
                  {col.nodes.map((node, ni) => (
                    <motion.div
                      key={node}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: ci * 0.15 + ni * 0.08, ease: easing }}
                      className="flex items-center gap-3 border border-white/[0.08] rounded-md px-4 py-3 bg-white/[0.015]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-electric shrink-0" />
                      <span className="text-sm text-white/80">{node}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs uppercase tracking-[0.25em] text-chalk-faint">
            Two personas · Ad-hoc creator + regular studio-hopper · Avg. 90-second booking
          </p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easing }}
        className="mt-24 md:mt-32 glass p-8 md:p-14 rounded-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.28em] text-electric mb-4">Outcome</div>
          <p className="font-serif text-2xl md:text-4xl text-white leading-snug">
            &ldquo;The design gave us a soul — creators keep telling us the app finally <em>feels like their world.</em>&rdquo;
          </p>
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-chalk-faint">
            — Studio Spot, founding team
          </div>
        </div>
        <a
          href="https://www.behance.net/gallery/251567735/Studio-Spot-Studio-Booking-Mobile-App-Case-Study/modules/1459827431"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="case-cta-full-case"
          className="group inline-flex items-center gap-4 border border-white/15 hover:border-electric hover:text-electric text-white px-6 py-3 rounded-full text-sm tracking-[0.2em] uppercase transition-colors duration-500 shrink-0"
        >
          View Full Case Study on Behance
          <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-500" />
        </a>
      </motion.div>

      {/* Hero Section Studies — additional works */}
      <div className="mt-24 md:mt-32" data-testid="hero-studies">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-[0.28em] uppercase text-electric mb-6">
              <span className="w-8 h-[1px] bg-electric" />
              More Works — Hero Section Studies
            </div>
            <h3 className="font-serif font-light text-4xl md:text-6xl leading-[0.95] tracking-tight">
              Landing <span className="italic">explorations.</span>
            </h3>
          </div>
          <p className="max-w-sm text-chalk-muted text-base md:text-lg font-light">
            Selected high-fidelity hero concepts — exploring bold layout, motion cues, and brand-led color.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              src: "https://customer-assets-gfyr7b9c.emergentagent.net/job_interface-labs-1/artifacts/s83sesd9_Desktop%20-%2031.jpg",
              title: "Porsche GT3 RS",
              tag: "Automotive · Hero Concept",
              n: "02",
            },
            {
              src: "https://customer-assets-gfyr7b9c.emergentagent.net/job_interface-labs-1/artifacts/26p5irpf_Desktop%20-%2041.jpg",
              title: "You-Gaming",
              tag: "Gaming · Landing Page",
              n: "03",
            },
          ].map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: easing }}
              className="group"
              data-testid={`hero-study-${w.n}`}
            >
              <div className="relative overflow-hidden rounded-md border border-white/[0.06] grayscale-image">
                <img
                  src={w.src}
                  alt={`${w.title} — hero section design`}
                  className="w-full aspect-[16/11] object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.25em] text-white/70">N° {w.n}</div>
              </div>
              <div className="mt-4 flex items-baseline justify-between">
                <h4 className="font-serif text-xl md:text-2xl text-white">{w.title}</h4>
                <span className="text-xs uppercase tracking-[0.2em] text-chalk-faint">{w.tag}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
