import Link from "next/link";
import {
  ArrowIcon,
  Container,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";

const helpfulLinks = [
  { label: "Home", href: "/" },
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Section tone="dark" className="flex flex-1 items-center">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            level={1}
            tone="dark"
            eyebrow="Page not found"
            title={
              <>
                This page{" "}
                <SerifAccent className="text-gold-300">isn&apos;t here.</SerifAccent>
              </>
            }
            description="The link may be out of date or mistyped. These pages are a good place to start."
          />
          <nav aria-label="Helpful links">
            <ul className="grid gap-px overflow-hidden rounded-2xl bg-paper/10 ring-1 ring-paper/10 sm:grid-cols-2">
              {helpfulLinks.map((link) => (
                <li key={link.href} className="bg-forest-900">
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-6 px-6 py-6 text-lg font-medium text-paper transition-colors duration-200 hover:bg-forest-800 md:px-8"
                  >
                    {link.label}
                    <ArrowIcon className="text-gold-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </Section>
    </main>
  );
}
