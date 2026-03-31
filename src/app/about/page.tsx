import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { Mission } from "@/components/sections/mission";
import { Team } from "@/components/sections/team";
import { CTA } from "@/components/sections/cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Fundamental IT Solutions — our mission, values, and the team driving innovation in enterprise technology.",
};

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <AboutHero />
      <Mission />
      <Team />
      <CTA />
    </main>
  );
}
