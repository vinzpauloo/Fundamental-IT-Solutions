export type SiteLink = {
  label: string;
  href: string;
};

export type SiteAddress = {
  streetLines: string[];
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  countryCode: string;
};

export type Site = {
  name: string;
  shortName: string;
  legalName: string;
  formerName: string;
  url: string;
  email: string;
  description: string;
  tagline: string;
  address: SiteAddress;
  nav: SiteLink[];
  cta: SiteLink;
};

export const site: Site = {
  name: "Fundamental IT Solutions",
  shortName: "Fundamental IT",
  legalName: "Fundamental IT Solutions",
  formerName: "Nova Aurora Technologies",
  url: "https://www.fundamental-it-solutions.com",
  email: "official@fundamental-it-solutions.com",
  description:
    "A senior product-engineering company in the Philippines that designs, builds and runs web platforms, mobile apps, backend services, cloud infrastructure and AI automation.",
  tagline: "We build it, then we keep it running.",
  address: {
    streetLines: [
      "Unit 1001 The Boni Prime",
      "20th Drive",
      "Upper McKinley Business Park",
      "Fort Bonifacio",
    ],
    locality: "Taguig",
    region: "Metro Manila",
    postalCode: "1635",
    country: "Philippines",
    countryCode: "PH",
  },
  nav: [
    { label: "Work", href: "/work" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  cta: { label: "Start a project", href: "/contact" },
};
