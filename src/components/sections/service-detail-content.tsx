"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { Section } from "@/components/ui/section";
import { SectionHeading, FadeIn } from "@/components/ui/animated-text";
import { Card, CardTitle, CardDescription } from "@/components/ui/card";

interface ServiceDetailContentProps {
  service: Service;
  relatedServices: Service[];
}

export function ServiceDetailContent({
  service,
  relatedServices,
}: ServiceDetailContentProps) {
  return (
    <>
      {/* Features */}
      <Section>
        <SectionHeading
          eyebrow="Capabilities"
          title={`What Our ${service.title} Covers`}
          description="We deliver comprehensive solutions tailored to your specific needs."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.features.map((feature, index) => (
            <FadeIn key={feature} delay={index * 0.05}>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-5">
                <CheckCircle
                  size={20}
                  className="mt-0.5 shrink-0 text-accent-500"
                />
                <span className="font-medium text-foreground">{feature}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section variant="muted">
          <SectionHeading
            eyebrow="Explore More"
            title="Related Services"
            description="Discover other ways we can help transform your business."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {relatedServices.map((related, index) => (
              <FadeIn key={related.slug} delay={index * 0.08}>
                <Link
                  href={`/services/${related.slug}`}
                  className="block h-full"
                >
                  <Card className="flex h-full flex-col justify-between gap-4">
                    <div>
                      <CardTitle>{related.title}</CardTitle>
                      <CardDescription className="mt-2">
                        {related.shortDescription}
                      </CardDescription>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary-700">
                      Learn more
                      <ArrowRight size={14} />
                    </span>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
