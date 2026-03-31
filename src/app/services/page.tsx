import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { ServicesList } from "@/components/sections/services-list";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore our comprehensive IT services — consulting, AI solutions, data analytics, cloud, cybersecurity, and digital transformation.",
};

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ServicesHero />
      <ServicesList />
      <CTA />
    </main>
  );
}
