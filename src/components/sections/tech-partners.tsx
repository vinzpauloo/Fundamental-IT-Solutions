"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading, FadeIn } from "@/components/ui/animated-text";

const technologies = [
  "Amazon Web Services",
  "Microsoft Azure",
  "Google Cloud",
  "Kubernetes",
  "TensorFlow",
  "React",
  "Node.js",
  "PostgreSQL",
];

export function TechPartners() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Technology Stack"
        title="Built on Leading Platforms"
        description="We leverage the best-in-class tools and platforms to deliver reliable, scalable solutions."
      />

      <FadeIn>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="flex h-20 items-center justify-center rounded-xl border border-border bg-surface px-6 transition-colors duration-200 hover:border-primary-200 hover:bg-primary-50/50"
            >
              <span className="text-sm font-medium text-muted-foreground">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
