export type CaseSlug = "volthub" | "b-ticket" | "nomad";

export type CaseAccent = "forest" | "gold";

export type CaseLink = {
  readonly label: string;
  readonly href: string;
};

export type CaseImage = {
  readonly src: string;
  readonly alt: string;
};

export type CaseBuiltItem = {
  readonly title: string;
  readonly detail: string;
};

export type CaseStudy = {
  readonly slug: CaseSlug;
  readonly name: string;
  readonly client: string;
  readonly sector: string;
  readonly location: string;
  readonly url: string;
  readonly appLinks?: readonly CaseLink[];
  readonly relatedLinks?: readonly CaseLink[];
  readonly summary: string;
  readonly challenge: string;
  readonly built: readonly CaseBuiltItem[];
  readonly platforms: readonly string[];
  readonly stack: readonly string[];
  readonly highlights: readonly string[];
  readonly status: "Live";
  readonly images: {
    readonly desktop: CaseImage;
    readonly mobile: CaseImage;
  };
  readonly accent: CaseAccent;
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "volthub",
    name: "VoltHub",
    client: "VoltHub",
    sector: "EV charging",
    location: "Philippines",
    url: "https://www.volthub.ph",
    appLinks: [
      {
        label: "VoltHub PH on the App Store",
        href: "https://apps.apple.com/ph/app/volthub-ph/id6795752536",
      },
      {
        label: "VoltHub PH on Google Play",
        href: "https://play.google.com/store/apps/details?id=ph.volthub.app",
      },
    ],
    summary:
      "We built the driver app, the public website and the operator console for an EV charging operator, along with the back end that talks to its chargers.",
    challenge:
      "EV charging only works when drivers can find a station, start a charge and pay from their phone, and operators can see every charger in one place. Behind that, each charger has to report to a back end and take commands from it. VoltHub needed all of these to work as one system.",
    built: [
      {
        title: "Driver app",
        detail:
          "Drivers find stations on a map, scan the QR code on a charger to start a session, and follow power and time as the car charges. They can pay with local e-wallets such as GCash and Maya, and receipts and charging history sit in their account. Built with Expo for iOS and Android.",
      },
      {
        title: "Charger gateway",
        detail:
          "A back-end service keeps a connection open to each charger over OCPP 1.6, the open standard chargers use. It receives boot, heartbeat, status, meter and transaction messages, and it sends remote start and stop commands.",
      },
      {
        title: "Operator console",
        detail:
          "A Next.js admin for chargers and stations. Each charger has a QR code that drivers scan to start a session at that charger.",
      },
      {
        title: "Public website",
        detail:
          "Product and service pages, a blog, and solar and EV charging ROI calculators, built in Next.js.",
      },
      {
        title: "Back end",
        detail:
          "NestJS services with Prisma and PostgreSQL, deployed on Google Cloud Run.",
      },
    ],
    platforms: [
      "iOS and Android app",
      "Public website",
      "Operator console",
      "Charger gateway (OCPP 1.6)",
    ],
    stack: [
      "Expo",
      "React Native",
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Google Cloud Run",
    ],
    highlights: [
      "Drivers scan a QR code at the station, then follow the charge live in the app.",
      "Chargers connect over OCPP, the open standard EV chargers use to talk to a back end.",
      "Drivers get notifications when a charge starts, finishes or is interrupted.",
      "The public site includes solar and EV charging ROI calculators.",
    ],
    status: "Live",
    images: {
      desktop: {
        src: "/work/volthub/desktop.jpg",
        alt: "VoltHub homepage on a desktop screen, with the headline Build Your Charging Station. Manage It with VoltHub. and its Start Your Charging Project button.",
      },
      mobile: {
        src: "/work/volthub/mobile.jpg",
        alt: "VoltHub homepage on a phone, showing the headline and the Start Your Charging Project button.",
      },
    },
    accent: "forest",
  },
  {
    slug: "b-ticket",
    name: "B-Ticket",
    client: "B-ticket",
    sector: "Deals and local commerce",
    location: "Philippines",
    url: "https://b-ticket.ph",
    appLinks: [
      {
        label: "B-ticket on the App Store",
        href: "https://apps.apple.com/ph/app/b-ticket/id6753974452",
      },
      {
        label: "B-ticket on Google Play",
        href: "https://play.google.com/store/apps/details?id=com.bticket.bticket",
      },
    ],
    relatedLinks: [
      {
        label: "B-Merchant partner portal",
        href: "https://b-merchant.ph",
      },
      {
        label: "B-ticket Creators affiliate program",
        href: "https://creators.b-ticket.ph",
      },
    ],
    summary:
      "We built the consumer app, the consumer website and the merchant portal for a deals platform in the Philippines, along with the APIs and payments behind them.",
    challenge:
      "B-Ticket needed a marketplace that works for three groups at once. Diners and shoppers need offers they can claim and redeem at the store. Merchants need to publish and run their deals, and the team behind the platform needs to see what is being redeemed.",
    built: [
      {
        title: "Consumer app",
        detail:
          "Customers browse deals, see them on a map and claim one, which stays in their wallet for 24 hours. They show the QR code at the store to redeem it. A paid subscription gives access to subscriber-only deals. Built with Expo for iOS and Android.",
      },
      {
        title: "Consumer website",
        detail:
          "Deals by city and category, articles, and pages in English, Japanese, Korean and Tagalog, with structured data for search engines.",
      },
      {
        title: "Merchant portal",
        detail:
          "B-Merchant lets a business sign up for free, add its branches, publish coupons and deals, run ads on B-ticket and accept customer payments. Redemption and sales reports sit in the same portal.",
      },
      {
        title: "Merchant and rider apps",
        detail:
          "Expo apps for merchant staff and for riders, built on the same mobile stack as the consumer app.",
      },
      {
        title: "Admin console and APIs",
        detail:
          "An admin console with role-based access for staff and a review step for new merchants. The APIs use NestJS and Drizzle over PostgreSQL, with payment integrations and error monitoring in Sentry.",
      },
    ],
    platforms: [
      "iOS and Android app",
      "Consumer website",
      "Merchant portal",
      "Admin console",
      "Merchant and rider apps",
    ],
    stack: [
      "Expo",
      "React Native",
      "React",
      "Vite",
      "NestJS",
      "Drizzle",
      "PostgreSQL",
      "Vercel",
      "Google Cloud Run",
      "Sentry",
    ],
    highlights: [
      "Customers claim a deal in the app and show a QR code at the store to redeem it.",
      "Merchants manage coupons, branches, ads and redemption reports from one portal.",
      "The consumer website is available in English, Japanese, Korean and Tagalog.",
      "A paid subscription gives access to deals that only subscribers can claim.",
    ],
    status: "Live",
    images: {
      desktop: {
        src: "/work/b-ticket/desktop.jpg",
        alt: "B-ticket homepage on a desktop screen, showing the search bar, the city picker and the deal categories.",
      },
      mobile: {
        src: "/work/b-ticket/mobile.jpg",
        alt: "B-ticket website on a phone, showing the deal categories and a banner that promotes the app.",
      },
    },
    accent: "gold",
  },
  {
    slug: "nomad",
    name: "NOMAD Beauty & Skin Care",
    client: "NOMAD Beauty & Skin Care",
    sector: "Beauty and skin care",
    location: "Kuala Lumpur, Malaysia",
    url: "https://nomadbeautyskin.com/en",
    summary:
      "We built a website in English, Chinese and Malay for a skin care studio in Kuala Lumpur, with its services and rates, and a booking path that starts on WhatsApp.",
    challenge:
      "The studio needed a website that explains each service in plain language, shows what a first visit involves and makes it easy to start a conversation before booking. The team also needed to keep the content up to date without a developer for every change.",
    built: [
      {
        title: "Three languages",
        detail:
          "Full pages in English, Chinese and Malay, each with its own address and a language switch in the header.",
      },
      {
        title: "Services and rates",
        detail:
          "Service pages for facials, peels and resurfacing, light and device sessions, massage, brows and lashes, and hair removal, plus a menu of rates.",
      },
      {
        title: "Consultation path",
        detail:
          "A consult page asks a few questions before a first visit. WhatsApp links sit in the header and on the main pages, and each prefilled message carries a tag that shows where it started on the site.",
      },
      {
        title: "Content management",
        detail:
          "Pages and articles are managed in Payload CMS, which gives editors a screen for changes instead of a code change.",
      },
      {
        title: "Hosting",
        detail:
          "Built with Next.js and hosted on Vercel, with PostgreSQL for the data.",
      },
    ],
    platforms: ["Website in English, Chinese and Malay", "Content management (Payload CMS)"],
    stack: ["Next.js 16", "Payload CMS 3", "PostgreSQL", "Vercel"],
    highlights: [
      "The site runs in English, Chinese and Malay, with each language on its own address.",
      "Every visit starts with a consultation, and the services pages say so.",
      "Each WhatsApp message carries a tag that shows where the enquiry started.",
      "Booking starts with a conversation, so visitors can ask their questions first.",
    ],
    status: "Live",
    images: {
      desktop: {
        src: "/work/nomad/desktop.jpg",
        alt: "NOMAD Beauty & Skin Care home page on a desktop screen, showing the English version with the Book a consultation and Message us on WhatsApp buttons.",
      },
      mobile: {
        src: "/work/nomad/mobile.jpg",
        alt: "NOMAD Beauty & Skin Care home page on a phone, showing the Book a consultation and Message us on WhatsApp buttons.",
      },
    },
    accent: "forest",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function caseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
