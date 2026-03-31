import { SITE_CONFIG, COMPANY_INFO } from "@/lib/constants";
import { services } from "@/lib/services-data";

export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/fund-logo-1.png`,
    email: COMPANY_INFO.email,
    telephone: COMPANY_INFO.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bonifacio Global City, Taguig",
      addressRegion: "Metro Manila",
      addressCountry: "PH",
    },
    sameAs: [SITE_CONFIG.social.linkedin, SITE_CONFIG.social.twitter],
    knowsAbout: services.map((s) => s.title),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export function WebSiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    description: SITE_CONFIG.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
