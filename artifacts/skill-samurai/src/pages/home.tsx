import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Proof from "@/components/sections/proof";
import HowItWorks from "@/components/sections/how-it-works";
import Schedule from "@/components/sections/schedule";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Proof />
        <HowItWorks />
        <Schedule />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
