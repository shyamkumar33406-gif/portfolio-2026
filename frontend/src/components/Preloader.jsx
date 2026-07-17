import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 8) + 3;
      if (n >= 100) {
        n = 100;
        setCount(100);
        clearInterval(id);
        setTimeout(() => {
          setDone(true);
          setTimeout(() => onComplete && onComplete(), 900);
        }, 350);
      } else {
        setCount(n);
      }
    }, 90);
    return () => clearInterval(id);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          data-testid="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-ink-0 flex flex-col justify-between px-6 md:px-12 py-8"
        >
          {/* Top row */}
          <div className="flex items-start justify-between text-xs tracking-[0.25em] uppercase text-chalk-muted">
            <span>Shyam Kumar</span>
            <span className="hidden md:inline">© 2026 — Portfolio</span>
          </div>

          {/* Center signature */}
          <div className="flex flex-col items-start gap-8">
            <svg viewBox="0 0 500 120" className="w-[70vw] max-w-[640px] h-auto text-electric">
              <motion.path
                d="M20,80 C60,20 110,120 160,60 S260,20 310,80 S420,20 480,60"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
              />
            </svg>
            <motion.div
              className="font-serif text-[15vw] md:text-[8vw] leading-none tracking-tighter text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {count.toString().padStart(3, "0")}
            </motion.div>
          </div>

          {/* Bottom progress bar */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-xs uppercase tracking-[0.25em] text-chalk-muted">
              <span>Loading Experience</span>
              <span>{count}%</span>
            </div>
            <div className="h-[2px] w-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full bg-electric"
                initial={{ width: "0%" }}
                animate={{ width: `${count}%` }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
