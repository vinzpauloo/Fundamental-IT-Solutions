import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { ServicesOverview } from "@/components/sections/services-overview";

const WhyUs = dynamic(() =>
  import("@/components/sections/why-us").then((mod) => mod.WhyUs),
);
const TechPartners = dynamic(() =>
  import("@/components/sections/tech-partners").then((mod) => mod.TechPartners),
);
const Testimonials = dynamic(() =>
  import("@/components/sections/testimonials").then((mod) => mod.Testimonials),
);
const CTA = dynamic(() =>
  import("@/components/sections/cta").then((mod) => mod.CTA),
);

export default function Home() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />
      <ServicesOverview />
      <WhyUs />
      <TechPartners />
      <Testimonials />
      <CTA />
    </main>
  );
}
