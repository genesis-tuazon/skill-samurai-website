import type { Metadata } from "next";
import CampsContent from "./CampsContent";

export const metadata: Metadata = {
  title: "Coding & STEM Summer Camps for Kids in Winnipeg | Skill Samurai",
  description:
    "Week-long coding and STEM camps for kids ages 6–16 in Winnipeg. Choose from Roblox Game Dev, Python, Robotics & AI, or Scratch & Creative Coding. Launching Summer 2027 — join the waitlist now.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/camps",
  },
};

export default function CampsPage() {
  return <CampsContent />;
}
