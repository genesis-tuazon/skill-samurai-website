import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-10 md:p-20 shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold font-heading text-white mb-8 leading-tight">
            Let Your Child Try It — <br/>
            <span className="text-accent">You'll See the Difference.</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10 text-white/90 text-lg font-medium">
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> No experience needed.
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> Fun + structured.
            </span>
            <span className="flex items-center gap-2">
              <span className="text-accent">✓</span> We meet your child where they're at.
            </span>
          </div>

          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-16 items-center justify-center rounded-full bg-primary px-12 text-xl font-bold text-white shadow-xl shadow-primary/30 transition-all hover:bg-white hover:text-primary hover:scale-105 active:scale-95 group w-full sm:w-auto"
          >
            Book Your Free Trial Class
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="mt-6 text-white/60 text-sm">
            Zero commitment. 100% safe answer to the screen time battle.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
