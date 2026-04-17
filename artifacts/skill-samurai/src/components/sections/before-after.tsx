import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { XCircle, CheckCircle2 } from "lucide-react";

export default function BeforeAfter() {
  const before = [
    "Playing games endlessly",
    "Passive screen time consumption",
    "Hard to stay focused on hard tasks",
    "Frustrating battles over devices",
    "Nothing tangible to show for it"
  ];

  const after = [
    "Building their own games",
    "Learning real technical skills",
    "Deep focus on engaging projects",
    "Excited to go to coding class",
    "Proud to show you what they made"
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-secondary mb-6">
            The Transformation
          </h2>
          <p className="text-lg text-muted-foreground">
            Your child will go from playing games to building them. Here is what that shift looks like.
          </p>
        </FadeIn>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-stretch">
          <FadeIn direction="right" className="bg-muted/30 border border-muted rounded-3xl p-8 md:p-12 relative overflow-hidden h-full">
            <div className="absolute top-0 left-0 w-2 h-full bg-destructive/60"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                <XCircle className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-secondary">Before Skill Samurai</h3>
            </div>
            
            <ul className="space-y-6">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <XCircle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden h-full shadow-xl shadow-primary/5">
            <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white shadow-md shadow-primary/30">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-secondary">After Skill Samurai</h3>
            </div>
            
            <ul className="space-y-6">
              {after.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-secondary font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10 pt-8 border-t border-primary/10">
              <p className="text-primary font-bold italic text-center text-lg">
                "They'll actually build something you can see."
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
