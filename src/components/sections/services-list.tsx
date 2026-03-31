"use client";

import Link from "next/link";
import { ArrowRight, Lightbulb, Code, Brain, BarChart3, Cloud, Shield, Workflow, GitBranch } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animated-text";
import { services } from "@/lib/services-data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb,
  Code,
  Brain,
  BarChart3,
  Cloud,
  Shield,
  Workflow,
  GitBranch,
};

export function ServicesList() {
  return (
    <Section>
      <div className="space-y-16 lg:space-y-24">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon];
          const isEven = index % 2 === 0;

          return (
            <FadeIn key={service.slug}>
              <div
                id={service.slug}
                className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
              >
                {/* Content */}
                <div className={isEven ? "" : "lg:order-2"}>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 text-primary-700">
                    {Icon && <Icon size={24} />}
                  </div>
                  <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                    {service.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-600"
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Feature list card */}
                <div className={isEven ? "lg:order-2" : ""}>
                  <div className="rounded-2xl border border-border bg-muted p-8">
                    <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-700">
                      Key Capabilities
                    </h3>
                    <ul className="space-y-3">
                      {service.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-3 text-foreground"
                        >
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              aria-hidden="true"
                            >
                              <path
                                d="M2 6L5 9L10 3"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
