import HeroContactSection from "@/app/contact-us/components/HeroContactSection";
import ContactFormSection from "@/app/contact-us/components/ContactFormSection";

export default function ContactUs() {
  return (
    <main className="flex flex-col flex-1">
      <HeroContactSection />
      <ContactFormSection />
    </main>
  );
}
