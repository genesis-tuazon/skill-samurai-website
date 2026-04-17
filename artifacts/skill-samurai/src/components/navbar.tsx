import React from "react";
import { Link } from "wouter";
import { Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform duration-300">
            <Code2 className="h-6 w-6" />
          </div>
          <span className="font-heading font-bold text-2xl tracking-tight text-secondary">
            Skill Samurai
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <a
            href="https://skillsamurai.ca/book-a-free-trial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-sm font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 hover:scale-105 hover:shadow-lg active:scale-95"
          >
            Book Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
