import Link from "next/link";
import type { ReactNode } from "react";
import { Container, Logo } from "@/components/ui";
import { capabilities } from "@/content/services";
import { caseStudies } from "@/content/work";
import { site } from "@/lib/site";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
];

const footerLinkClassName =
  "inline-flex min-h-11 items-center text-[0.9375rem] text-forest-200 transition-colors duration-200 hover:text-paper focus-visible:outline-gold-300";

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div>
      <h2 className="flex items-center gap-3 font-mono text-xs font-medium tracking-[0.14em] text-gold-300 uppercase">
        <span aria-hidden="true" className="h-px w-8 shrink-0 bg-gold-500" />
        {title}
      </h2>
      <ul className="mt-4 flex flex-col">{children}</ul>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const { address } = site;

  return (
    <footer className="relative isolate overflow-hidden bg-forest-950 text-paper texture-glow">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 texture-circuit texture-fade"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 texture-grain"
      />
      <Container className="pt-20 pb-10 md:pt-28">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <Logo href="/" tone="dark" wordmark="full" className="min-h-11" />
            <p className="mt-2 text-sm text-forest-200">
              Formerly {site.formerName}
            </p>
            <p className="mt-6 max-w-md text-lg leading-[1.6] text-forest-200">
              {site.description}
            </p>
            <address className="mt-10 text-[0.9375rem] leading-7 text-forest-200 not-italic">
              {address.streetLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
              <span className="block">
                {`${address.locality}, ${address.region} ${address.postalCode}`}
              </span>
              <span className="block">{address.country}</span>
            </address>
            <a
              href={`mailto:${site.email}`}
              className={`mt-4 ${footerLinkClassName}`}
            >
              {site.email}
            </a>
          </div>
          <nav aria-label="Footer navigation" className="lg:col-span-7">
            <div className="grid gap-12 sm:grid-cols-3">
              <FooterColumn title="Work">
                {caseStudies.map((study) => (
                  <li key={study.slug}>
                    <Link
                      href={`/work/${study.slug}`}
                      className={footerLinkClassName}
                    >
                      {study.name}
                    </Link>
                  </li>
                ))}
              </FooterColumn>
              <FooterColumn title="Capabilities">
                {capabilities.map((capability) => (
                  <li key={capability.slug}>
                    <Link
                      href={`/services/${capability.slug}`}
                      className={footerLinkClassName}
                    >
                      {capability.title}
                    </Link>
                  </li>
                ))}
              </FooterColumn>
              <FooterColumn title="Company">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={footerLinkClassName}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </FooterColumn>
            </div>
          </nav>
        </div>
        <p className="mt-20 border-t border-paper/10 pt-8 text-sm text-forest-200">
          &copy; {year} {site.name}
        </p>
      </Container>
    </footer>
  );
}
