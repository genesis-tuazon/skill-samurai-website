import type { Metadata } from "next";
import Faq from "@/components/sections/faq";
import FinalCta from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "FAQ — Coding Classes for Kids in Winnipeg | Skill Samurai",
  description:
    "Answers to common questions about Skill Samurai Winnipeg's coding and STEM classes for kids — ages, pricing, locations, schedules, and more.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/faq",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "My child has never coded before. Will they fit in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Most kids who walk into Skill Samurai have zero coding experience — and that's exactly who our beginner curriculum is designed for. Our Coding Instructors start with visual, game-based tools and grow with your child as they're ready.",
      },
    },
    {
      "@type": "Question",
      name: "What happens in the free trial class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your child joins a real class, meets a Coding Instructor, and builds an actual mini-project they can show you at the end. You'll get a clear sense of the environment, the instructors, and whether your child enjoys the experience before making any commitment.",
      },
    },
    {
      "@type": "Question",
      name: "What ages do you teach?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with students ages 6 through 18. Younger students start with visual, game-based coding, while older students can explore Python, JavaScript, artificial intelligence, robotics, app development, game development, and more.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a long-term contract?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Everything is month-to-month. We earn your trust and your child's excitement every month. There are no long-term contracts.",
      },
    },
    {
      "@type": "Question",
      name: "How long is each class?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Classes run between 60 and 90 minutes depending on the program. Long enough for students to build something meaningful and gain momentum, while keeping learning engaging and fun.",
      },
    },
    {
      "@type": "Question",
      name: "Will my child build real projects?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Students create games, apps, websites, animations, AI projects, and robotics projects they can proudly share with family and friends.",
      },
    },
    {
      "@type": "Question",
      name: "Are your instructors screened and certified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All instructors undergo background checks, child abuse registry checks, and training before working with students. Your child's safety is always a top priority.",
      },
    },
    {
      "@type": "Question",
      name: "What is your cancellation policy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer flexible month-to-month memberships. If you need to cancel, we simply require 30 days' notice before your next billing date.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer make-up classes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. If your child misses a class, we'll do our best to arrange a make-up class based on availability within the same month as the missed class.",
      },
    },
    {
      "@type": "Question",
      name: "What skills will my child learn besides coding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coding is only part of what we teach. Students also develop problem-solving, creativity, critical thinking, communication, persistence, confidence, and teamwork — skills that help them succeed both in school and in life.",
      },
    },
    {
      "@type": "Question",
      name: "Is this just more screen time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We believe in productive screen time. Instead of consuming content, students learn how to create games, apps, websites, robots, and AI projects while building problem-solving, creativity, and critical thinking skills.",
      },
    },
    {
      "@type": "Question",
      name: "How do I determine the right class for my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We consider your child's age, experience level, interests, and goals. During the trial class, we'll recommend the learning path that's the best fit for them.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Faq />
      <FinalCta />
    </>
  );
}
