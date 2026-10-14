import { capabilities } from "@/content/services";
import { site } from "@/lib/site";

type JsonLdData = Record<string, unknown>;

function JsonLdScript({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        alternateName: [site.shortName, site.formerName],
        url: site.url,
        logo: new URL("/brand/fit-mark.png", site.url).toString(),
        email: site.email,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.streetLines.join(", "),
          addressLocality: site.address.locality,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.countryCode,
        },
        knowsAbout: capabilities.map((capability) => capability.title),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLdScript
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.name,
        alternateName: site.shortName,
        url: site.url,
        description: site.description,
        inLanguage: "en",
      }}
    />
  );
}
