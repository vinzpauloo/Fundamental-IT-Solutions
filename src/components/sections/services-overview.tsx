"use client";

import Link from "next/link";
import {
  Lightbulb,
  Code,
  Brain,
  BarChart3,
  Cloud,
  Shield,
  Workflow,
  GitBranch,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading, FadeIn } from "@/components/ui/animated-text";
import { Card, CardIcon, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/services-data";

const iconMap = {
  Lightbulb,
  Code,
  Brain,
  BarChart3,
  Cloud,
  Shield,
  Workflow,
  GitBranch,
} as const;

export function ServicesOverview() {
  return (
    <Section variant="muted">
      <SectionHeading
        eyebrow="What We Do"
        title="Comprehensive IT Services"
        description="From strategy to execution, we provide end-to-end technology solutions that drive growth and innovation."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <FadeIn key={service.slug} delay={index * 0.05}>
              <Link href={`/services/${service.slug}`} className="block h-full">
                <Card className="flex h-full flex-col gap-4">
                  <CardIcon>
                    <Icon size={24} />
                  </CardIcon>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.shortDescription}</CardDescription>
                </Card>
              </Link>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
