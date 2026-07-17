export default function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="relative border-t border-white/[0.06] bg-ink-50/40 px-6 md:px-12 pt-16 pb-8"
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Massive brand line */}
        <div className="mb-14">
          <div className="stroke-huge text-stroke-blue leading-none">SHYAM KUMAR</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 mb-14">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-chalk-faint mb-3">Currently</div>
            <div className="text-white leading-relaxed">Open to junior product design roles, Summer 2026.</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-chalk-faint mb-3">Based In</div>
            <div className="text-white">India — remote friendly</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-chalk-faint mb-3">Elsewhere</div>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/in/shyam-kumar-a-8a1990303/" target="_blank" rel="noopener noreferrer" className="link-underline text-white">LinkedIn</a></li>
              <li><a href="https://www.behance.net/shyamkumara" target="_blank" rel="noopener noreferrer" className="link-underline text-white">Behance</a></li>
              <li><a href="mailto:shyamkumar33406@gmail.com" className="link-underline text-white">Email</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-chalk-faint mb-3">Say Hi</div>
            <a href="mailto:shyamkumar33406@gmail.com" className="link-underline text-electric">shyamkumar33406@gmail.com</a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs uppercase tracking-[0.25em] text-chalk-muted">
          <span>Designed & Developed with passion by Shyam Kumar.</span>
          <span>© 2026 · All rights reserved · v1.0</span>
        </div>
      </div>
    </footer>
  );
}
