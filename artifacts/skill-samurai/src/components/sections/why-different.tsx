import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { WaveDivider } from "@/components/ui/wave-divider";
import { Check } from "lucide-react";

export default function WhyDifferent() {
  const differentiators = [
    {
      title: "Not passive screen time",
      desc: "This isn't an educational app you hand them on an iPad. It's active, structured creation."
    },
    {
      title: "Hands-on, guided learning",
      desc: "Our coaches are in the room, helping them get unstuck and cheering them on."
    },
    {
      title: "Personalized to your child's level",
      desc: "We meet your child where they're at. Beginners start simple; advanced kids get challenged."
    },
    {
      title: "Month-to-month (no pressure)",
      desc: "No massive upfront commitments. We earn your trust and their excitement every single month."
    },
    {
      title: "Real projects they can show you",
      desc: "They don't just earn digital badges; they build actual playable games and apps."
    }
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.03) 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
      <div className="container mx-auto px-4 relative z-10 pt-10">
        <FadeIn className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-wider uppercase text-sm mb-3">Our Approach</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-black font-heading uppercase leading-tight tracking-tight mb-8">
            <span className="text-secondary block mb-2">WHY PARENTS CHOOSE</span>
            <span className="text-primary">SKILL SAMURAI</span>
          </h3>
          <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto">
            We aren't a corporate franchise pushing a one-size-fits-all curriculum. We are a community built for your child.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white border-[6px] border-muted rounded-[3rem] shadow-2xl shadow-black/5 overflow-hidden">
            {differentiators.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`p-8 md:p-10 flex gap-8 items-start hover:bg-primary/5 transition-colors group ${i !== differentiators.length - 1 ? 'border-b-[3px] border-muted/50' : ''}`}>
                <div className="h-12 w-12 rounded-[1rem] bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform group-hover:bg-accent group-hover:text-secondary text-accent rotate-3 group-hover:-rotate-3 shadow-sm">
                  <Check className="h-6 w-6" strokeWidth={3} />
                </div>
                <div>
                  <h4 className="text-2xl font-black font-heading text-secondary mb-2 uppercase tracking-wide group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-muted-foreground text-lg font-medium">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}