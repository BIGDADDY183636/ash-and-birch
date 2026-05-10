"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;   // seconds
  duration?: number; // ms
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  duration = 900,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay * 1000}ms, transform ${duration}ms cubic-bezier(0.25,0.46,0.45,0.94) ${delay * 1000}ms`,
      }}
    >
      {children}
    </div>
  );
}
