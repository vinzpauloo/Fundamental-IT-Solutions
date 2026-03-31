import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { getAllServices, getServiceBySlug } from "@/lib/services-data";
import { ServiceDetailContent } from "@/components/sections/service-detail-content";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button-styles";

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

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.metaDescription,
    openGraph: {
      title: `${service.title} | Fundamental IT Solutions`,
      description: service.metaDescription,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const allServices = getAllServices();
  const relatedServices = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const Icon = iconMap[service.icon];

  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden bg-primary-950 py-20 sm:py-28 lg:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-primary-700/25 blur-[100px]" />
          <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-accent-500/15 blur-[80px]" />
        </div>

        <Container className="relative">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-2 text-sm text-primary-300 transition-colors hover:text-white"
          >
            <ArrowLeft size={16} />
            All Services
          </Link>

          <div className="flex items-start gap-6">
            {Icon && (
              <div className="hidden h-16 w-16 items-center justify-center rounded-2xl bg-primary-800/50 text-primary-300 sm:flex">
                <Icon size={32} />
              </div>
            )}
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-primary-200/80 sm:text-xl">
                {service.fullDescription}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <ServiceDetailContent service={service} relatedServices={relatedServices} />

      {/* CTA */}
      <section className="bg-primary-950 py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 text-lg text-primary-200/80">
              Let&apos;s discuss how our {service.title.toLowerCase()} services
              can help your business.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className={buttonStyles({
                  size: "lg",
                  className: "group bg-white text-primary-800 hover:bg-primary-50",
                })}
              >
                Schedule a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
