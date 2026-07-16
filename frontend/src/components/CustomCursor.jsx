import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!visible) setVisible(true);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX - 3}px, ${mouseY - 3}px, 0)`;
      }
    };

    const raf = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 16}px, ${ringY - 16}px, 0)`;
      }
      requestAnimationFrame(raf);
    };
    raf();

    const overInteractive = (e) => {
      const el = e.target;
      const interactive = el.closest && el.closest('a, button, input, textarea, [data-cursor-hover]');
      setHover(!!interactive);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", overInteractive);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", overInteractive);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] w-1.5 h-1.5 bg-electric rounded-full"
        style={{ mixBlendMode: "difference" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-white/30 transition-[width,height,border-color,background-color] duration-300"
        style={{
          width: hover ? 64 : 32,
          height: hover ? 64 : 32,
          borderColor: hover ? "#1D35FF" : "rgba(255,255,255,0.25)",
          backgroundColor: hover ? "rgba(29,53,255,0.08)" : "transparent",
        }}
      />
    </>
  );
}
