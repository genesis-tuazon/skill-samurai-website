import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
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
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6">
            Why Parents Choose Skill Samurai.
          </h2>
          <p className="text-lg text-muted-foreground">
            We aren't a corporate franchise pushing a one-size-fits-all curriculum. We are a community built for your child.
          </p>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white border rounded-[2rem] shadow-xl overflow-hidden">
            {differentiators.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className={`p-6 md:p-8 flex gap-6 items-start ${i !== differentiators.length - 1 ? 'border-b' : ''}`}>
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-secondary mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-lg">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
