import HeroAboutSection from "@/app/about/components/HeroAboutSection";
import AboutContentSection from "@/app/about/components/AboutContentSection";

export default function About() {
  return (
    <main className="flex flex-col flex-1">
      <HeroAboutSection />
      <AboutContentSection />
    </main>
  );
}
