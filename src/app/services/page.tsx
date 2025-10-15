import HeroServicesSection from "@/app/services/components/HeroServicesSection";
import ServicesDetailSection from "@/app/services/components/ServicesDetailSection";

export default function Services() {
  return (
    <main className="flex flex-col flex-1">
      <HeroServicesSection />
      <ServicesDetailSection />
    </main>
  );
}
