import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, ArrowRight, Instagram, Facebook, MessageCircle, CheckCircle } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Skill Samurai Winnipeg",
  description:
    "Get in touch with Skill Samurai Winnipeg. Call, email, or visit our two locations — North East and Seven Oaks. We'd love to answer your questions.",
};

const locations = [
  {
    name: "North East",
    address: "1199 Rothesay St.",
    city: "Winnipeg, MB",
    days: "Mon & Tue",
    times: "5:30 PM & 6:30 PM",
    mapsHref: "https://maps.google.com/?q=1199+Rothesay+St+Winnipeg+MB",
  },
  {
    name: "Seven Oaks",
    address: "745 Kingsbury Ave.",
    city: "Winnipeg, MB",
    days: "Wed & Thu",
    times: "4:30, 5:30 & 6:30 PM",
    mapsHref: "https://maps.google.com/?q=745+Kingsbury+Ave+Winnipeg+MB",
  },
];

const promises = [
  "We respond within 1 business day",
  "No pressure — just honest answers",
  "Free trial class available at both locations",
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
            Get In Touch
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white leading-tight tracking-tight">
            We&apos;d Love to Hear from You
          </h1>
          <p className="mt-4 text-white/75 text-base sm:text-lg max-w-xl mx-auto font-medium leading-relaxed">
            Questions about classes, locations, or pricing? Reach out and we&apos;ll get back to you shortly.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Contact cards row */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <a
              href="tel:+12048182155"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Phone className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-0.5">Phone</p>
                <p className="text-base font-extrabold text-secondary">204-818-2155</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <a
              href="mailto:winnipeg@skillsamurai.com"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm hover:border-primary hover:shadow-md transition-all"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-0.5">Email</p>
                <p className="text-sm font-extrabold text-secondary">winnipeg@skillsamurai.com</p>
              </div>
              <ArrowRight className="h-4 w-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Clock className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-secondary/50 mb-1">Hours</p>
                <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-sm">
                  <span className="font-semibold text-secondary/60">Sat – Sun</span><span className="font-bold text-secondary">12–6 PM</span>
                  <span className="font-semibold text-secondary/60">Mon – Fri</span><span className="font-bold text-secondary">4–8 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Locations + promises */}
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {locations.map((loc) => (
              <div
                key={loc.name}
                className="rounded-2xl border border-border bg-white px-6 py-5 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <MapPin className="h-4 w-4 text-secondary" strokeWidth={2.2} />
                  </div>
                  <h3 className="text-sm font-extrabold text-secondary">{loc.name}</h3>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <p className="font-semibold text-secondary/80">{loc.address}, {loc.city}</p>
                  <p><span className="font-semibold text-secondary/60">Days:</span> {loc.days}</p>
                  <p><span className="font-semibold text-secondary/60">Times:</span> {loc.times}</p>
                </div>
                <a
                  href={loc.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                >
                  Open in Google Maps
                  <ArrowRight className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>

          {/* Message CTA + promises */}
          <div className="rounded-3xl bg-secondary px-8 py-10 flex flex-col sm:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20">
                  <MessageCircle className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <h2 className="text-lg font-black text-white">Send Us a Message</h2>
              </div>
              <ul className="flex flex-col gap-2 mb-0">
                {promises.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle className="h-4 w-4 text-primary shrink-0" strokeWidth={2.2} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center gap-3 shrink-0">
              <Link
                href="/#locations"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:scale-105 active:scale-95 transition-all"
              >
                Book a Free Trial
                <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-2">
                <a
                  href="https://instagram.com/skillsamuraiwinnipeg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* GHL popup form — fires automatically */}
      <ContactForm />
    </>
  );
}
