import { ContactDetails } from "@/components/contact/contact-details";
import { EnquiryForm } from "@/components/contact/enquiry-form";
import { needOptions } from "@/components/contact/need-options";
import {
  Container,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us what you want to build or run. We read every message and reply by email to set up a call.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Section tone="dark" className="py-28 md:py-32">
        <Container>
          <SectionHeading
            level={1}
            tone="dark"
            eyebrow="Contact"
            title={
              <>
                Tell us what you want to{" "}
                <SerifAccent className="text-gold-300">build</SerifAccent> or
                run.
              </>
            }
            description="Tell us about the product, the people who use it and what is slowing you down. We read every message and reply by email to set up a call."
          />
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-16 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <EnquiryForm needOptions={needOptions} />
          </div>
          <aside
            aria-label="Contact details"
            className="lg:col-span-4 lg:col-start-9"
          >
            <ContactDetails />
          </aside>
        </Container>
      </Section>
    </main>
  );
}
