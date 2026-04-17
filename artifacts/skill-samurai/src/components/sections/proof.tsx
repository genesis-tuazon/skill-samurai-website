import React from "react";
import { FadeIn } from "@/components/ui/fade-in";

export default function Proof() {
  return (
    <section className="py-20 bg-accent/10 relative overflow-hidden">
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-accent/20 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="max-w-3xl">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Real Results</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-6">
            <span className="text-secondary block mb-2">SEE WHAT KIDS ARE</span>
            <span className="text-primary">ACTUALLY BUILDING</span>
          </h3>
          <p className="text-xl text-secondary/80 font-medium">
            Most parents are surprised at what their kids can create after just a few classes. This isn't abstract theory; it's hands-on creation.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}