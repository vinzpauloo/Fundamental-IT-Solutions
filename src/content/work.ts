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
      "We built VoltHub's driver app, public website and operator console, along with the back end that talks to its chargers.",
    challenge:
      "EV charging only works when drivers can find a station, start a charge and pay from their phone, and operators can see every charger in one place. Behind that, each charger has to report to a back end and take commands from it. VoltHub needed all of these to work as one system.",
    built: [
      {
        title: "Driver app",
        detail:
          "Drivers find stations on a map, scan the QR code on a charger to start a session, and follow power and time as the car charges. They pay per session or from a prepaid VoltHub wallet through StarPay QR, using GCash, Maya or the StarPay app. Charging history sits in their account, and a receipt arrives by email. Built with Expo for iOS and Android.",
      },
      {
        title: "Charger gateway",
        detail:
          "A back-end service keeps a connection open to each charger over OCPP 1.6, the open standard chargers use. It receives boot, heartbeat, status, meter and transaction messages, and it sends remote start and stop, reset, unlock, configuration and firmware update commands.",
      },
      {
        title: "Operator console",
        detail:
          "A Next.js admin for chargers, stations, sessions, payments, payouts and revenue. Each charger has a QR code that drivers scan to start a session at that charger.",
      },
      {
        title: "Public website",
        detail:
          "Product and service pages, a blog, and solar and EV charging ROI calculators, built in Next.js.",
      },
      {
        title: "Back end",
        detail:
          "A NestJS app with Prisma, PostgreSQL on Neon and Redis on Upstash, deployed on Google Cloud Run. The infrastructure is described in Pulumi. Rules run in the background: a charge stops at the driver's limit, slow charging is flagged, idle fees are applied and unpaid QR codes expire.",
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
      "Pulumi",
      "Sentry",
    ],
    highlights: [
      "Drivers scan a QR code at the station, then follow the charge live in the app.",
      "Chargers connect over OCPP, the open standard EV chargers use to talk to a back end.",
      "Drivers get a notification when a charge finishes, stops at their limit or slows down, and a receipt by email.",
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
          "Customers browse deals, see them on a map and claim one, which stays in their Coupons tab for 24 hours, with an optional Apple Wallet or Google Wallet pass. They show a QR code at the store to redeem it, and the code refreshes every few minutes. A paid membership unlocks member-only deals. Built with Expo for iOS, Android and Huawei AppGallery.",
      },
      {
        title: "Consumer website",
        detail:
          "Deals by city and category, articles and guides, in English, Japanese, Korean, Tagalog and Cebuano, with structured data for search engines.",
      },
      {
        title: "Merchant portal",
        detail:
          "B-Merchant lets a business sign up for free, add its branches, publish coupons and buy ads on B-ticket. Redemption history and analytics sit in the same portal.",
      },
      {
        title: "Merchant app",
        detail:
          "An Expo app for merchants, with a manager view for offers, branches and insights, and a scanner view that counter staff use to redeem coupons.",
      },
      {
        title: "AI tools for merchants",
        detail:
          "A merchant takes a photo of a menu, and OpenAI vision turns it into draft products the merchant reviews before publishing. A merchant assistant answers questions and acts through the portal's own tools, listings can be rewritten and translated automatically, and new merchants can be onboarded through a Telegram bot.",
      },
      {
        title: "Admin console and APIs",
        detail:
          "An admin console with role-based access for staff and an approval queue for new merchants that requires multi-factor sign-in. The APIs use NestJS and Drizzle over PostgreSQL on Neon. Payments run through StarPay QR Ph and Apple, Google and Huawei in-app purchases, with error monitoring in Sentry.",
      },
    ],
    platforms: [
      "iOS and Android app",
      "Consumer website",
      "Merchant portal",
      "Admin console",
      "Merchant app",
    ],
    stack: [
      "Expo",
      "React Native",
      "React Router",
      "NestJS",
      "Drizzle",
      "PostgreSQL",
      "OpenAI",
      "Vercel",
      "Google Cloud Run",
      "Sentry",
    ],
    highlights: [
      "Customers claim a deal in the app and show a QR code at the store to redeem it.",
      "Merchants turn a photo of their menu into draft listings with AI, then review them before publishing.",
      "The consumer website is available in English, Japanese, Korean, Tagalog and Cebuano.",
      "A paid membership unlocks deals that only members can claim.",
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
      "We built a website in English, Simplified Chinese and Malay for a skin care studio in Kuala Lumpur, with its services, published rates and a booking path that starts on WhatsApp.",
    challenge:
      "The studio needed a website that explains each service in plain language, shows what a first visit involves and makes it easy to start a conversation before booking. The team also needed to keep the content up to date without a developer for every change.",
    built: [
      {
        title: "Three languages",
        detail:
          "Full pages in English, Simplified Chinese and Malay, each at its own address (/en, /zh, /ms), with a language switch in the footer and a sitemap for each language.",
      },
      {
        title: "Services and rates",
        detail:
          "Service pages for facials, peels and resurfacing, light and device sessions, lymphatic body-contour massage, brows and lashes, and hair removal, with published rates for Korean skin management and hair removal. Each service carries structured data for search engines.",
      },
      {
        title: "Consultation path",
        detail:
          "A four-step consult questionnaire suggests treatments and saves each enquiry in the CMS, with an email alert to the team. WhatsApp links sit in the header and on the main pages, and each prefilled message carries a tag that shows where it started on the site.",
      },
      {
        title: "Content management",
        detail:
          "Pages and articles are managed in Payload CMS, which gives editors a screen for changes instead of a code change. An MCP server lets AI assistants edit pages, posts and media after the editor signs in.",
      },
      {
        title: "Hosting",
        detail:
          "Built with Next.js and hosted on Vercel, with PostgreSQL on Neon for the data and Vercel Blob for images. Analytics load only after a visitor agrees.",
      },
    ],
    platforms: ["Website in English, Simplified Chinese and Malay", "Content management (Payload CMS)"],
    stack: ["Next.js 16", "Payload CMS 3", "PostgreSQL", "Neon", "Vercel", "Resend"],
    highlights: [
      "The site runs in English, Simplified Chinese and Malay, with each language on its own address.",
      "Service pages invite visitors to begin with a skin consult.",
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
