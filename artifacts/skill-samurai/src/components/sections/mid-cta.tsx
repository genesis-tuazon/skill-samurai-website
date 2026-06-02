"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { openBookingModal } from "@/components/ui/modal-events";

export default function MidCta() {
  return (
    <section className="py-12 md:py-16 bg-primary">
      <div className="container mx-auto px-4">
        <FadeIn className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-1">First class is free</p>
            <h2 className="text-2xl md:text-3xl font-black font-heading text-white leading-tight">
              Ready to see it for yourself?
            </h2>
            <p className="text-white/80 text-base mt-1">
              One free hour — a real class, a real project, zero pressure.
            </p>
          </div>
          <button
            type="button"
            onClick={openBookingModal}
            className="shrink-0 inline-flex h-13 items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-black uppercase tracking-wide text-primary shadow-lg transition-all hover:bg-white/90 hover:scale-105 active:scale-95 cursor-pointer whitespace-nowrap"
          >
            Book a Free Session
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
