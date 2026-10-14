"use client";

import {
  Button,
  ButtonLink,
  Container,
  Section,
  SectionHeading,
  SerifAccent,
} from "@/components/ui";
import { site } from "@/lib/site";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Section tone="dark" className="flex flex-1 items-center">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            level={1}
            tone="dark"
            eyebrow="Something went wrong"
            title={
              <>
                This page{" "}
                <SerifAccent className="text-gold-300">didn&apos;t load.</SerifAccent>
              </>
            }
            description={
              <>
                Something failed while the page was loading. Try again, or go
                back home. If it keeps happening, email{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline underline-offset-4 hover:text-paper"
                >
                  {site.email}
                </a>{" "}
                and include the reference below, if one is shown.
              </>
            }
          />
          <div className="flex flex-wrap items-center gap-3">
            <Button
              variant="on-dark"
              size="lg"
              onClick={() => unstable_retry()}
            >
              Try again
            </Button>
            <ButtonLink
              href="/"
              variant="ghost"
              size="lg"
              className="text-paper ring-1 ring-paper/25"
            >
              Back to home
            </ButtonLink>
          </div>
          {error.digest ? (
            <p className="font-mono text-sm text-forest-200">
              Reference: {error.digest}
            </p>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}
