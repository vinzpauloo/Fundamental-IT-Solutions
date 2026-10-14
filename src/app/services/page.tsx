import { CapabilityList } from "@/components/services/capability-list";
import { ServicesClosingCta } from "@/components/services/closing-cta";
import { EngagementModels } from "@/components/services/engagement-models";
import { ServicesIntro } from "@/components/services/services-intro";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  path: "/services",
  title: "Services",
  description:
    "Web platforms, mobile apps, backend services, cloud infrastructure, operations and AI automation. We build them end to end and stay on to run what we ship.",
});

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ServicesIntro />
      <CapabilityList />
      <EngagementModels />
      <ServicesClosingCta />
    </main>
  );
}
