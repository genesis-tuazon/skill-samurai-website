import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary">
      {/* Full-bleed background video */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/799591701?background=1&autoplay=1&loop=1&muted=1&autopause=0"
          title="Skill Samurai students at work"
          allow="autoplay; fullscreen; picture-in-picture"
          loading="eager"
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{
            border: 0,
            width: '100vw',
            height: '56.25vw',
            minHeight: '100%',
            minWidth: '177.77vh',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%) scale(1.15)',
          }}
        />
        {/* Grey overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-800/65 to-neutral-900/80"></div>
        <div className="absolute inset-0 bg-neutral-900/25"></div>
      </div>

      {/* Color blob accents */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-30 pointer-events-none z-0">
        <div className="w-[600px] h-[600px] rounded-full bg-primary blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none z-0">
        <div className="w-[500px] h-[500px] rounded-full bg-accent blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-32 pb-28 lg:pt-40 lg:pb-36 min-h-[640px] lg:min-h-[720px] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-3xl text-center mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-[0.2em] mb-8 border border-white/20 backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
            </span>
            Now enrolling in Winnipeg
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-heading leading-[1.05] mb-6 tracking-tight text-white drop-shadow-2xl">
            Where screen time<br className="hidden sm:block" /> becomes a{" "}
            <span className="relative inline-block text-primary">
              real skill
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
            .
          </h1>

          <p className="text-lg lg:text-xl text-white/85 mb-10 leading-relaxed max-w-xl font-medium drop-shadow">
            After-school coding, robotics &amp; STEM classes for ages 6–18 — small groups, real coaches, no long-term contracts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-center mb-10">
            <a
              href="https://skillsamurai.ca/book-a-free-trial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base lg:text-lg font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group hover:shadow-primary/60 border-b-4 border-primary-foreground/20"
            >
              Book a Free Trial Class
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs sm:text-sm font-medium text-white/75 sm:ml-3">
              Free 60-min trial.<br className="hidden sm:block" /> No experience needed.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm font-semibold text-white/80">
            {[
              "Small groups",
              "Certified coaches",
              "Month-to-month",
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-accent flex-shrink-0" />
                {badge}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
