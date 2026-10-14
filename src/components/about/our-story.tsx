import Link from "next/link";
import { Container, Reveal, Section, SectionHeading } from "@/components/ui";
import { site } from "@/lib/site";

const proofLinkClasses =
  "font-medium text-ink underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors duration-200 hover:text-forest-700";

const proofProjects = [
  {
    href: "/work/volthub",
    name: "VoltHub",
    detail:
      "An EV charging platform: driver app, operator console and back end.",
  },
  {
    href: "/work/b-ticket",
    name: "B-Ticket",
    detail:
      "A deals platform in the Philippines: consumer app, website and merchant portal.",
  },
  {
    href: "/work/nomad",
    name: "NOMAD Beauty & Skin Care",
    detail:
      "A website in English, Chinese and Malay for a skin care studio in Kuala Lumpur.",
  },
];

export function OurStory() {
  return (
    <Section aria-labelledby="story-heading">
      <Container>
        <div className="grid gap-16 md:grid-cols-12 md:gap-x-12">
          <Reveal className="md:col-span-5">
            <SectionHeading
              id="story-heading"
              eyebrow="Our story"
              title="From first design to daily operations, in one team."
            />
          </Reveal>
          <Reveal
            delay={1}
            className="flex flex-col gap-8 md:col-span-6 md:col-start-7"
          >
            <p className="text-xl leading-relaxed text-ink md:text-2xl">
              Fundamental IT Solutions is a product-engineering company based in
              Taguig, Metro Manila. We were formerly Nova Aurora Technologies.
            </p>
            <p className="text-lg leading-relaxed text-muted">
              We design, build and run web platforms, mobile apps, backend
              services and cloud infrastructure. We stay on after launch to
              monitor, respond and release changes, under an ongoing support
              agreement.
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-lg leading-relaxed text-muted">
                Three projects we built are live today.
              </p>
              <ul
                role="list"
                className="divide-y divide-line border-y border-line"
              >
                {proofProjects.map((project) => (
                  <li key={project.href} className="flex flex-col gap-1 py-5">
                    <Link href={project.href} className={proofLinkClasses}>
                      {project.name}
                    </Link>
                    <span className="text-muted">{project.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-lg leading-relaxed text-muted">
              We also work with clients remotely across Asia and beyond.
            </p>
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs font-medium tracking-[0.14em] text-forest-700 uppercase">
                Office
              </p>
              <address className="not-italic leading-relaxed text-ink">
                {site.address.streetLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="block">
                  {`${site.address.locality} ${site.address.postalCode}, ${site.address.region}`}
                </span>
                <span className="block">{site.address.country}</span>
              </address>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
