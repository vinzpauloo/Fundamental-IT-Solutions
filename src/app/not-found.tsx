import Link from "next/link";
import { Container } from "@/components/ui/container";
import { buttonStyles } from "@/components/ui/button-styles";

export default function NotFound() {
  return (
    <main id="main-content" className="flex flex-1 flex-col items-center justify-center py-20">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary-600">
          404
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <div className="mt-8">
          <Link href="/" className={buttonStyles()}>
            Back to Home
          </Link>
        </div>
      </Container>
    </main>
  );
}
