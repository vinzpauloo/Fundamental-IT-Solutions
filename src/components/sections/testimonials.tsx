"use client";

import { Quote } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading, FadeIn } from "@/components/ui/animated-text";

const testimonials = [
  {
    quote:
      "Fundamental IT transformed our data infrastructure. Their analytics solutions gave us insights we never had before, leading to a 40% increase in operational efficiency.",
    author: "Sarah Chen",
    role: "CTO, MedTech Innovations",
  },
  {
    quote:
      "The AI solutions they built for our supply chain have been a game-changer. Predictive analytics alone saved us millions in the first year.",
    author: "Michael Torres",
    role: "VP of Operations, Global Logistics Corp",
  },
  {
    quote:
      "From cloud migration to ongoing support, their team delivered on every promise. They are a true technology partner, not just a vendor.",
    author: "Priya Sharma",
    role: "Director of IT, FinanceFlow",
  },
];

export function Testimonials() {
  return (
    <Section variant="muted">
      <SectionHeading
        eyebrow="Client Testimonials"
        title="Trusted by Industry Leaders"
        description="Hear from the companies we have helped transform through technology."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <FadeIn key={item.author} delay={index * 0.1}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-8">
              <Quote size={24} className="mb-4 text-primary-300" />
              <blockquote className="flex-1 text-foreground leading-relaxed">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{item.author}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
