import {
  AboutHero,
  ClosingCta,
  EngagementTimeline,
  Leadership,
  OurStory,
  Principles,
  TechStack,
} from "@/components/about";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "About",
  description:
    "We design, build and run web platforms, mobile apps, backend services and cloud infrastructure from Taguig, Metro Manila, and we stay on after launch.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <AboutHero />
      <OurStory />
      <Principles />
      <EngagementTimeline />
      <Leadership />
      <TechStack />
      <ClosingCta />
    </main>
  );
}
