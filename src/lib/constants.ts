export const SITE_CONFIG = {
  name: "Fundamental IT Solutions",
  tagline: "Technology, Fundamentally Right.",
  description:
    "Enterprise IT consulting, AI solutions, data analytics, and digital transformation services. We build the technology foundation your business needs to thrive.",
  domain: "fundamentalit.solutions",
  url: "https://fundamentalit.solutions",
  ogImage: "/fund-logo-1.png",
  social: {
    linkedin: "https://linkedin.com/company/fundamental-it-solutions",
    twitter: "https://twitter.com/fundamental_it",
  },
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
] as const;

export const COMPANY_INFO = {
  email: "hello@fundamentalit.solutions",
  phone: "+63 (2) 8888-0000",
  address:
    "Bonifacio Global City, Taguig, Metro Manila, Philippines",
} as const;
