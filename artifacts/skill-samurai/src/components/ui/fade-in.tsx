"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

function isStaticRenderEnvironment() {
  if (typeof window === "undefined") return true;
  try {
    if (window.matchMedia && window.matchMedia("print").matches) return true;
  } catch {}
  const ua = (navigator.userAgent || "").toLowerCase();
  if (
    /headlesschrome|jsdom|prerender|googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|facebookexternalhit|twitterbot|linkedinbot|embedly/i.test(
      ua
    )
  ) {
    return true;
  }
  return false;
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  duration = 0.6,
}: FadeInProps) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  // Start as "static" (visible) on both server and client initial render
  // to avoid SSR/client hydration mismatch. After mount, detect the real env.
  const [staticRender, setStaticRender] = useState(true);
  const [forceVisible, setForceVisible] = useState(true);

  const isInView = useInView(ref, { once: true, amount: 0.05 });

  useEffect(() => {
    const isStatic = isStaticRenderEnvironment();
    setStaticRender(isStatic);
    setForceVisible(isStatic);

    if (!isStatic) {
      const timer = window.setTimeout(() => setForceVisible(true), 250);
      const onPrint = () => setForceVisible(true);
      window.addEventListener("beforeprint", onPrint);
      return () => {
        window.clearTimeout(timer);
        window.removeEventListener("beforeprint", onPrint);
      };
    }
  }, []);

  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const skipAnimation = prefersReducedMotion || staticRender;
  const shouldShow = isInView || forceVisible || skipAnimation;

  return (
    <motion.div
      ref={ref}
      initial={
        skipAnimation
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      animate={
        shouldShow
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, ...directions[direction] }
      }
      transition={{
        duration: skipAnimation ? 0 : duration,
        delay: skipAnimation ? 0 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
