import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Star } from "lucide-react";

export default function Results() {
  const outcomes = [
    "More confidence to tackle hard problems",
    "Better focus that translates to schoolwork",
    "Genuine excitement to learn something new",
    "Immense pride in what they build",
    "Technical skills that last a lifetime"
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="bg-accent rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-white/20 rounded-full blur-[40px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-primary/20 rounded-full blur-[40px] pointer-events-none"></div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <FadeIn direction="right">
              <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6 leading-tight">
                What Parents Notice.
              </h2>
              <p className="text-xl text-secondary/80 mb-8 font-medium">
                The shift happens fast. It's not just about coding—it's about a change in how they approach the world.
              </p>
              
              <div className="bg-white/50 backdrop-blur-md rounded-2xl p-6 border border-white/60">
                <div className="flex gap-1 mb-3 text-primary">
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                  <Star className="h-5 w-5 fill-current" />
                </div>
                <p className="text-secondary italic mb-4 font-medium">
                  "I was amazed. He used to complain when it was time to get off Roblox. Now he begs me to stay longer at Skill Samurai so he can finish his project. He's so proud of what he makes."
                </p>
                <p className="text-sm font-bold text-secondary">— Local Winnipeg Parent</p>
              </div>
            </FadeIn>

            <FadeIn direction="left">
              <ul className="space-y-4">
                {outcomes.map((outcome, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow transform hover:-translate-y-1 duration-300">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                      {i + 1}
                    </div>
                    <span className="text-secondary font-bold text-lg">{outcome}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
