import HeroSection from "@/app/(home)/components/HeroSection";
import ServicesSection from "@/app/(home)/components/ServicesSection";
import FeaturesSection from "@/app/(home)/components/FeaturesSection";
import CTASection from "@/app/(home)/components/CTASection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
