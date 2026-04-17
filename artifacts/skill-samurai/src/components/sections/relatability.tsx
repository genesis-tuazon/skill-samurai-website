import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Gamepad2, Brain, Timer, Trophy } from "lucide-react";

export default function Relatability() {
  const painPoints = [
    {
      icon: <Gamepad2 className="h-8 w-8 text-primary" />,
      title: "Your child loves Roblox, Minecraft, or YouTube",
      desc: "They can spend hours absorbed in these worlds, but it feels like passive consumption rather than active creation."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "It's hard to know what's actually helping them",
      desc: "With so many apps and games, distinguishing between empty calories and meaningful brain-building is exhausting."
    },
    {
      icon: <Timer className="h-8 w-8 text-primary" />,
      title: "You don't want to constantly limit screen time",
      desc: "The daily battle of 'time's up' leaves everyone frustrated. You want them off screens, or doing something better on them."
    },
    {
      icon: <Trophy className="h-8 w-8 text-primary" />,
      title: "You just want them doing something productive",
      desc: "You know they're smart. You just need a way to channel that screen-focused energy into real-world skills."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">This might sound familiar...</h2>
          <h3 className="text-3xl md:text-4xl font-bold font-heading text-secondary">
            The screen time battle every parent knows.
          </h3>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {painPoints.map((point, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up" className="bg-muted/50 rounded-3xl p-8 border border-muted">
              <div className="h-16 w-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold font-heading text-secondary mb-3 leading-snug">
                {point.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {point.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4} direction="up" className="max-w-4xl mx-auto bg-secondary text-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-4xl font-bold font-heading mb-6 leading-tight">
              That's exactly why we built Skill Samurai.
            </h3>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              We replace the empty guilt of passive gaming with the profound pride of building something real. You'll finally feel good about their screen time.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
