"use client";

import { Target, Eye, Gem } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animated-text";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To deliver transformative technology solutions that enable businesses to operate smarter, scale faster, and innovate with confidence. We believe that the right technology foundation is the key to unlocking every organization's potential.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    description:
      "To be the most trusted technology partner for enterprises navigating digital transformation. We envision a world where every business — regardless of size — has access to world-class IT expertise and cutting-edge solutions.",
  },
  {
    icon: Gem,
    title: "Our Values",
    description:
      "Excellence in every engagement. Transparency in every conversation. Innovation in every solution. We hold ourselves to the highest standards because our clients depend on us to get it right.",
  },
];

export function Mission() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-3">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <FadeIn key={pillar.title} delay={index * 0.1}>
              <div className="text-center lg:text-left">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-primary-700 lg:mx-0">
                  <Icon size={28} />
                </div>
                <h2 className="text-xl font-bold text-foreground">
                  {pillar.title}
                </h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {pillar.description}
                </p>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
