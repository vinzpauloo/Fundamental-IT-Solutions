import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactForm } from "@/components/sections/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Fundamental IT Solutions. Request a consultation or learn how we can help transform your business.",
};

export default function ContactPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <ContactHero />
      <ContactForm />
    </main>
  );
}
