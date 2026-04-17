import React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Link } from "wouter";

export default function ParentsPage() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-black font-heading text-secondary uppercase mb-4">For Parents</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Everything parents care about in one place.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/schedule" className="rounded-3xl border border-border p-6 hover:border-primary/40 transition-colors">
              <h2 className="text-2xl font-black font-heading text-secondary mb-2 uppercase">Schedule & Pricing</h2>
              <p className="text-muted-foreground">See the basics at a glance.</p>
            </Link>
            <Link href="/faq" className="rounded-3xl border border-border p-6 hover:border-primary/40 transition-colors">
              <h2 className="text-2xl font-black font-heading text-secondary mb-2 uppercase">FAQ</h2>
              <p className="text-muted-foreground">Common parent questions answered.</p>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}