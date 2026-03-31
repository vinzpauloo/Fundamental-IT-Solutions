"use client";

import { CheckCircle, Users, Award, Clock } from "lucide-react";
import { Section } from "@/components/ui/section";
import { SectionHeading, FadeIn } from "@/components/ui/animated-text";

const stats = [
  { label: "Projects Delivered", value: "200+", icon: CheckCircle },
  { label: "Expert Consultants", value: "50+", icon: Users },
  { label: "Years of Experience", value: "10+", icon: Award },
  { label: "Client Retention Rate", value: "95%", icon: Clock },
];

const differentiators = [
  {
    title: "Industry Expertise",
    description:
      "Deep knowledge across healthcare, finance, manufacturing, and tech sectors enables us to deliver solutions that address real industry challenges.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "From initial consulting and architecture through development, deployment, and ongoing support — we own the entire lifecycle.",
  },
  {
    title: "Future-Ready Solutions",
    description:
      "Every solution is built with scalability, security, and emerging technologies in mind, ensuring your investment grows with your business.",
  },
];

export function WhyUs() {
  return (
    <Section>
      <div className="grid items-center gap-16 lg:grid-cols-2">
        {/* Left: Content */}
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Technology That Drives Results"
            description="We combine strategic thinking with hands-on engineering to deliver solutions that don't just work — they transform operations."
            align="left"
          />

          <div className="space-y-6">
            {differentiators.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.1}>
                <div className="flex gap-4">
                  <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-100">
                    <CheckCircle size={14} className="text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Right: Stats */}
        <FadeIn direction="right">
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-surface p-6 text-center"
                >
                  <Icon
                    size={24}
                    className="mx-auto mb-3 text-primary-600"
                  />
                  <p className="text-3xl font-bold text-primary-700 lg:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
