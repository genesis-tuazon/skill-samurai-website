import React from "react";
import { FadeIn } from "@/components/ui/fade-in";

const logos = [
  { name: "Spotify", className: "italic" },
  { name: "FOX", className: "tracking-tighter font-black" },
  { name: "CBS", className: "tracking-wider" },
  { name: "NBC NEWS", className: "tracking-tight" },
  { name: "Today's Parent", className: "font-serif italic" },
  { name: "MyMorning", className: "tracking-tight" },
];

export default function FeaturedIn() {
  return (
    <section className="bg-muted border-b border-border py-10 md:py-12 relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center mb-6">
          <p className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-secondary/60">
            As Featured In
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-4">
            {logos.map((logo) => (
              <span
                key={logo.name}
                className={`text-xl md:text-2xl lg:text-3xl font-black text-secondary/70 hover:text-secondary transition-colors uppercase select-none ${logo.className}`}
              >
                {logo.name}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
