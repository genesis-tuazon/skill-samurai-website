import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Code, Lightbulb, Rocket, Blocks } from "lucide-react";

export default function ChildBenefits() {
  const benefits = [
    {
      icon: <Blocks className="h-6 w-6 text-accent" />,
      title: "Builds their own games (not just plays them)",
      desc: "They'll transform from consumers to creators, learning the mechanics behind the games they love.",
      color: "bg-accent/10"
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Learns coding, AI, and problem-solving",
      desc: "They acquire future-proof technical skills without even realizing they're studying because it's wrapped in fun.",
      color: "bg-primary/10"
    },
    {
      icon: <Rocket className="h-6 w-6 text-secondary" />,
      title: "Gains confidence by creating real projects",
      desc: "There is nothing quite like the look on a child's face when they show you a working game they built from scratch.",
      color: "bg-secondary/10"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-green-500" />,
      title: "Learns how to think, not just follow instructions",
      desc: "We don't do rigid copy-pasting. We teach computational thinking—how to break big problems into solvable pieces.",
      color: "bg-green-500/10"
    }
  ];

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <FadeIn direction="right">
              <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">For Your Child</h2>
              <h3 className="text-3xl md:text-5xl font-bold font-heading text-secondary leading-tight mb-6">
                What Your Child Actually Learns Here.
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                We meet your child exactly where they're at. No experience needed. Just a structured, incredibly fun environment where learning feels like playing.
              </p>
              
              <div className="space-y-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className={`mt-1 flex-shrink-0 h-12 w-12 rounded-2xl flex items-center justify-center ${benefit.color} transition-transform group-hover:scale-110`}>
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-secondary mb-1">{benefit.title}</h4>
                      <p className="text-muted-foreground">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 w-full">
            <FadeIn direction="left" className="relative">
              <div className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 border-8 border-white bg-white">
                <img 
                  src="/images/learning-moment.png" 
                  alt="Child deeply focused and smiling at a computer screen" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent rounded-full blur-[40px] opacity-60 z-0"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary rounded-full blur-[40px] opacity-40 z-0"></div>
              
              <div className="absolute top-1/2 -left-8 md:-left-12 -translate-y-1/2 bg-white rounded-2xl p-4 shadow-xl z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="text-3xl">🚀</span>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
