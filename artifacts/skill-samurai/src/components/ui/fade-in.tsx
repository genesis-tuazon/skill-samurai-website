"use client";

import { useEffect, useRef } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

const translateMap: Record<string, string> = {
  up: "translateY(22px)",
  down: "translateY(-22px)",
  left: "translateX(22px)",
  right: "translateX(-22px)",
  none: "none",
};

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.6,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference — never animate
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // If the element is already in the viewport on mount, leave it fully visible
    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    // Element is below the fold — hide it, then fade in when scrolled to.
    // We do this via direct DOM style (not React state) to avoid any
    // SSR/hydration mismatch — the server renders with no inline opacity.
    el.style.opacity = "0";
    el.style.transform = translateMap[direction];
    el.style.transition = `opacity ${duration}s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s, transform ${duration}s cubic-bezier(0.21,0.47,0.32,0.98) ${delay}s`;
    el.style.willChange = "opacity, transform";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "none";
          el.style.willChange = "auto";
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
