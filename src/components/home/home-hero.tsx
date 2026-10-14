import Image from "next/image";
import {
  BrowserFrame,
  ButtonLink,
  Container,
  Eyebrow,
  PhoneFrame,
  Section,
  SerifAccent,
} from "@/components/ui";
import { caseStudies } from "@/content/work";
import { site } from "@/lib/site";
import { siteHost } from "@/lib/utils";
import { LiveProducts } from "./live-products";

function ProductComposition() {
  const featured = caseStudies[0];

  return (
    <div className="relative isolate">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-6 -inset-y-10 -z-10"
      >
        <div className="absolute top-[12%] left-[16%] size-[72%] rounded-full bg-forest-500/30 blur-3xl" />
        <div className="absolute right-[2%] bottom-[-8%] size-[44%] rounded-full bg-gold-500/25 blur-3xl" />
      </div>
      <BrowserFrame address={siteHost(featured.url)}>
        <Image
          src={featured.images.desktop.src}
          alt={featured.images.desktop.alt}
          fill
          preload
          sizes="(min-width: 1240px) 760px, (min-width: 1024px) 62vw, 100vw"
          className="object-cover object-top"
        />
      </BrowserFrame>
      <PhoneFrame className="absolute -right-2 -bottom-10 w-[34%] md:-right-6 md:w-[27%]">
        <Image
          src={featured.images.mobile.src}
          alt={featured.images.mobile.alt}
          fill
          sizes="(min-width: 768px) 22vw, 34vw"
          className="object-cover object-top"
        />
      </PhoneFrame>
    </div>
  );
}

export function HomeHero() {
  return (
    <Section tone="dark" aria-labelledby="hero-title">
      <Container>
        <Eyebrow tone="dark">Product engineering · Taguig, Philippines</Eyebrow>
        <h1 id="hero-title" className="mt-8 text-display-2xl text-paper">
          We design, build and{" "}
          <SerifAccent className="text-gold-300">run</SerifAccent> the software
          your business depends on.
        </h1>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <p className="text-lg leading-relaxed text-forest-200 md:text-xl">
              We build web platforms, mobile apps, backend services, cloud
              infrastructure and AI automation for clients across Asia and
              beyond. Then we stay on to monitor what we ship, respond to
              incidents and release changes.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink
                href={site.cta.href}
                variant="on-dark"
                size="lg"
                arrow
              >
                {site.cta.label}
              </ButtonLink>
              <ButtonLink
                href="/work"
                variant="ghost"
                size="lg"
                className="text-paper ring-1 ring-paper/25"
              >
                See our work
              </ButtonLink>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ProductComposition />
          </div>
        </div>
        <LiveProducts className="mt-32" />
      </Container>
    </Section>
  );
}
