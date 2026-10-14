import { CapabilitiesBento } from "@/components/home/capabilities-bento";
import { ClosingCta } from "@/components/home/closing-cta";
import { EngineeringStandards } from "@/components/home/engineering-standards";
import { HomeHero } from "@/components/home/home-hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { SelectedWork } from "@/components/home/selected-work";
import { StackTicker } from "@/components/home/stack-ticker";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title:
    "Fundamental IT Solutions — Product engineering for web, mobile and cloud",
  description:
    "A senior product-engineering company in Taguig, Philippines. We design, build and run web platforms, mobile apps, backend services and cloud infrastructure.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <HomeHero />
      <CapabilitiesBento />
      <SelectedWork />
      <HowWeWork />
      <EngineeringStandards />
      <StackTicker />
      <ClosingCta />
    </main>
  );
}
