import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-28 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 4px 4px, rgba(255,255,255,0.4) 2px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/40 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-accent/30 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center bg-white/8 backdrop-blur-md border border-white/15 rounded-[2.5rem] p-8 md:p-14 shadow-xl shadow-black/20">
          <h2 className="text-4xl md:text-6xl font-black font-heading uppercase tracking-tight mb-6 leading-[1.05]">
            <span className="text-white block mb-2">LET YOUR CHILD TRY IT</span>
            <span className="text-primary block">YOU'LL SEE THE DIFFERENCE</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-4 mb-8 text-white/85 text-sm md:text-base font-bold uppercase tracking-wide">
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <span className="text-accent text-2xl">✓</span> No experience needed
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <span className="text-accent text-2xl">✓</span> Fun & structured
            </span>
            <span className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/10">
              <span className="text-accent text-2xl">✓</span> Month-to-month
            </span>
          </div>

          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base md:text-lg font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 transition-all hover:bg-white hover:text-primary hover:scale-105 active:scale-95 group w-full sm:w-auto border-b-4 border-primary-foreground/20 hover:border-primary/20"
          >
            Book Your Free Trial
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="mt-6 text-white/70 text-sm md:text-base font-medium">
            Zero commitment. 100% safe answer to the screen time battle.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}