import Marquee from "react-fast-marquee";

const WORDS = [
  "UI/UX Designer",
  "Problem Solver",
  "Systems Thinker",
  "Figma Craftsman",
  "Design Engineer",
  "Storyteller",
];

export default function EditorialMarquee() {
  return (
    <section
      data-testid="editorial-marquee"
      className="relative py-10 md:py-14 border-y border-white/[0.06] bg-ink-50/30 overflow-hidden"
      aria-hidden
    >
      <Marquee gradient={false} speed={35} pauseOnHover>
        {WORDS.concat(WORDS).map((word, i) => (
          <span key={i} className="flex items-center gap-10 mx-10">
            <span className="stroke-huge text-stroke">{word}</span>
            <span className="w-3 h-3 rounded-full bg-electric shrink-0" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
