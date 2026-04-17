import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Calendar, Laptop, Sparkles, ThumbsUp, ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Book a free trial",
      desc: "Pick a time that works for your family. Zero commitment, zero pressure."
    },
    {
      icon: <Laptop className="h-6 w-6 text-primary" />,
      title: "Child builds first project",
      desc: "They jump right in with our expert coaches in a fun, supportive environment."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-primary" />,
      title: "See what they learned",
      desc: "At the end of the class, they'll proudly show you the exact thing they created."
    },
    {
      icon: <ThumbsUp className="h-6 w-6 text-primary" />,
      title: "Decide if it fits",
      desc: "If they love it (most do!), we'll find the right month-to-month program for them."
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6">
            Getting Started is Easy.
          </h2>
          <p className="text-lg text-muted-foreground">
            We've removed all the friction so your child can start learning immediately.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-1 bg-border/60 z-0"></div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.15} direction="up" className="text-center">
                <div className="mx-auto h-24 w-24 rounded-full bg-white border-4 border-muted/50 shadow-xl flex items-center justify-center mb-6 relative">
                  {step.icon}
                  <div className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-secondary text-white font-bold flex items-center justify-center text-sm border-2 border-white">
                    {i + 1}
                  </div>
                </div>
                <h4 className="text-xl font-bold font-heading text-secondary mb-3">{step.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={0.6} className="mt-16 text-center">
          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-lg font-bold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:bg-primary/90 hover:scale-105 active:scale-95 group"
          >
            Book Free Trial
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
