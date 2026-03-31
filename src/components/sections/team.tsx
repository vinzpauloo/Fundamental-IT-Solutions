"use client";

import { Section } from "@/components/ui/section";
import { SectionHeading, FadeIn } from "@/components/ui/animated-text";

const teamMembers = [
  {
    name: "Alex Rivera",
    role: "CEO & Founder",
    bio: "15+ years leading enterprise technology transformations across Fortune 500 companies.",
  },
  {
    name: "Dr. Maya Patel",
    role: "Chief Technology Officer",
    bio: "Former research scientist specializing in AI/ML with multiple patents in predictive analytics.",
  },
  {
    name: "James Okafor",
    role: "VP of Engineering",
    bio: "Cloud architecture expert who has designed infrastructure for platforms serving millions.",
  },
  {
    name: "Lisa Chen",
    role: "Director of Consulting",
    bio: "Strategic advisor helping enterprises align technology investments with business outcomes.",
  },
];

export function Team() {
  return (
    <Section variant="muted">
      <SectionHeading
        eyebrow="Our Leadership"
        title="Meet the Team"
        description="Experienced technologists and strategists committed to delivering exceptional results."
      />

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <FadeIn key={member.name} delay={index * 0.08}>
            <div className="rounded-2xl border border-border bg-surface p-6 text-center">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <span className="text-2xl font-bold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="text-sm font-medium text-primary-600">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
