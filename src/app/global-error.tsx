"use client";

import { site } from "@/lib/site";

export default function GlobalError({
  unstable_retry,
}: {
  unstable_retry: () => void;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`Something went wrong · ${site.name}`}</title>
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 20px",
          boxSizing: "border-box",
          backgroundColor: "#03120B",
          color: "#F7F5EF",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          lineHeight: 1.6,
        }}
      >
        <main id="main-content" style={{ maxWidth: 560, padding: "64px 0" }}>
          <p
            style={{
              margin: 0,
              color: "#ECD28C",
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Something went wrong
          </p>
          <h1
            style={{
              margin: "16px 0 0",
              fontSize: 40,
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            This page didn&apos;t load.
          </h1>
          <p style={{ margin: "20px 0 0", color: "#B9E3C3", fontSize: 18 }}>
            Try again. If it keeps happening, email{" "}
            <a href={`mailto:${site.email}`} style={{ color: "#ECD28C" }}>
              {site.email}
            </a>
            .
          </p>
          <button
            type="button"
            onClick={() => unstable_retry()}
            style={{
              marginTop: 32,
              height: 48,
              padding: "0 24px",
              border: 0,
              borderRadius: 9999,
              backgroundColor: "#F7F5EF",
              color: "#03120B",
              fontSize: 16,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
