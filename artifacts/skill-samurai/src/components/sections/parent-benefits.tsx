import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Heart, ShieldCheck, Eye, TrendingUp } from "lucide-react";

export default function ParentBenefits() {
  const benefits = [
    {
      icon: <Heart className="h-6 w-6 text-white" />,
      title: "Less guilt about screen time",
      desc: "Stop worrying that they're rotting their brains. They're actively engaged in high-value learning."
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-white" />,
      title: "No more battles over devices",
      desc: "Channel their obsession with screens into a scheduled, productive outlet that you both agree on."
    },
    {
      icon: <Eye className="h-6 w-6 text-white" />,
      title: "You'll actually see what they're learning",
      desc: "They won't just say 'nothing' when asked what they did. They'll show you the app they just coded."
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      title: "You're investing in skills that matter long-term",
      desc: "Beyond coding, they learn resilience, logic, and how to push through failure to solve problems."
    }
  ];

  return (
    <section className="py-24 bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, var(--color-primary) 25%, transparent 25%, transparent 75%, var(--color-primary) 75%, var(--color-primary)), linear-gradient(45deg, var(--color-primary) 25%, transparent 25%, transparent 75%, var(--color-primary) 75%, var(--color-primary))', backgroundSize: '60px 60px', backgroundPosition: '0 0, 30px 30px' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-accent font-bold tracking-wider uppercase text-sm mb-3">For You</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-heading mb-6">
            What This Means for You as a Parent.
          </h3>
          <p className="text-lg text-secondary-foreground/80">
            A safe answer to the screen time battle. We provide a warm, expert hand on the shoulder saying, "we've got this."
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <FadeIn key={i} delay={i * 0.1} direction="up">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-colors">
                <div className="h-12 w-12 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold font-heading mb-3">{benefit.title}</h4>
                <p className="text-secondary-foreground/70 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
