import type { Metadata } from "next";
import BirthdayPartiesContent from "./BirthdayPartiesContent";

export const metadata: Metadata = {
  title: "Kids Coding Birthday Parties in Winnipeg | Skill Samurai",
  description:
    "Book a Roblox coding birthday party at Skill Samurai Winnipeg. 2 hours of coding & gaming, pizza, Roblox cupcakes, and a project every kid takes home. Up to 12 guests. Ages 6–16.",
  alternates: {
    canonical: "https://www.skillsamuraiwinnipeg.com/birthday-parties",
  },
};

export default function BirthdayPartiesPage() {
  return <BirthdayPartiesContent />;
}
