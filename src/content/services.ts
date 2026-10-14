import type { CaseSlug } from "./work";

export type CapabilitySlug =
  | "web-platforms"
  | "mobile-apps"
  | "backend-integrations"
  | "cloud-platforms"
  | "operations-reliability"
  | "ai-automation";

export type CapabilityIcon =
  | "Layers"
  | "Smartphone"
  | "Network"
  | "CloudCog"
  | "Activity"
  | "Workflow";

export type CapabilityFaq = {
  readonly q: string;
  readonly a: string;
};

export type Capability = {
  readonly slug: CapabilitySlug;
  readonly title: string;
  readonly short: string;
  readonly summary: string;
  readonly icon: CapabilityIcon;
  readonly deliverables: readonly string[];
  readonly stack: readonly string[];
  readonly relatedWork: readonly CaseSlug[];
  readonly faq: readonly CapabilityFaq[];
};

export const capabilities: readonly Capability[] = [
  {
    slug: "web-platforms",
    title: "Web platforms",
    short: "Public sites, portals and admin consoles, built in TypeScript and React.",
    summary:
      "We build the web products a business runs on: public websites, merchant and partner portals, and admin consoles for staff. We work in TypeScript with React and Next.js, and we add a content editor wherever a team needs to change copy without a developer.",
    icon: "Layers",
    deliverables: [
      "Public websites in several languages, with structured data for search engines",
      "Merchant and partner portals with self-serve sign-up",
      "Admin consoles with role-based access for staff",
      "Content editing in Payload CMS, where a team needs it",
      "Interactive tools such as calculators, built into the site",
      "Typed code, with automated checks before anything ships",
    ],
    stack: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vite",
      "Payload CMS",
      "PostgreSQL",
    ],
    relatedWork: ["volthub", "b-ticket", "nomad"],
    faq: [
      {
        q: "What do you build with?",
        a: "TypeScript is our default, with React or Next.js for the interface and PostgreSQL for data. The stack for each project follows the work, and every tool listed on this page is one we have used in production.",
      },
      {
        q: "Can the team edit content without a developer?",
        a: "Often, yes. Payload CMS gives editors a screen for pages, articles and other content. We agree the content fields with your team first, so the editor matches the pages they need to change.",
      },
      {
        q: "Do you work with teams outside the Philippines?",
        a: "Yes. We work remotely. One of the sites we built is for a skin care studio in Kuala Lumpur, in English, Simplified Chinese and Malay.",
      },
    ],
  },
  {
    slug: "mobile-apps",
    title: "Mobile apps",
    short: "iOS and Android apps from one codebase, built with React Native and Expo.",
    summary:
      "We build consumer and staff apps with React Native and Expo, so one codebase runs on iOS and Android. We handle builds and store submissions through Expo EAS, and we write the release steps down.",
    icon: "Smartphone",
    deliverables: [
      "Consumer apps for iOS and Android",
      "Staff apps for the people who run the business day to day, such as a scanner for redeeming coupons at the counter",
      "Maps, QR scanning and live status, where the product needs them",
      "Notifications for the events users care about",
      "In-app purchases and subscriptions through the app stores",
      "Builds and store submissions through Expo EAS, with the steps documented",
    ],
    stack: ["React Native", "Expo", "Expo EAS", "TypeScript"],
    relatedWork: ["volthub", "b-ticket"],
    faq: [
      {
        q: "Do you build for both iOS and Android?",
        a: "Yes. We build with React Native and Expo, so one codebase runs on both platforms. Where a feature needs platform-specific code, we write it for that platform.",
      },
      {
        q: "Who submits the app to the App Store and Google Play?",
        a: "We do, through Expo EAS. We run the builds and submissions ourselves and keep the release steps written down.",
      },
      {
        q: "Do you handle updates after launch?",
        a: "Yes. Updates follow the same release steps, and we handle store requirements that change over time, such as the permission text Apple asks for.",
      },
    ],
  },
  {
    slug: "backend-integrations",
    title: "Backend, APIs and integrations",
    short: "The services behind a product: APIs, data, payments and devices.",
    summary:
      "We design the APIs, data models and scheduled jobs a product runs on, and we connect them to payment providers, messaging and hardware. The back ends we have built use NestJS and Node.js with PostgreSQL, and we have built a gateway for EV chargers that speaks OCPP 1.6.",
    icon: "Network",
    deliverables: [
      "APIs with typed contracts for web and mobile clients",
      "PostgreSQL data models, managed with Prisma or Drizzle",
      "Payment integrations, including QR Ph payments that customers pay with GCash or Maya, and app store purchases",
      "Gateways for devices, such as OCPP 1.6 EV chargers",
      "Email and SMS messages for accounts and notifications",
      "Scheduled jobs, queues and caching with Redis",
    ],
    stack: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Drizzle",
      "Redis",
    ],
    relatedWork: ["volthub", "b-ticket"],
    faq: [
      {
        q: "Can you connect our product to a payment provider?",
        a: "We have built payment integrations for a deals marketplace and for EV charging sessions. Each provider's API is different, so we check the flows your product needs before we commit to a plan.",
      },
      {
        q: "Do you work with hardware?",
        a: "Yes. Our EV charging platform talks to chargers over OCPP 1.6, the open standard for charger communication. The back end receives status and meter readings and sends start and stop commands.",
      },
      {
        q: "How do you handle changes to the database?",
        a: "Schema changes live in migration files that go through review, so every change can be read and repeated.",
      },
    ],
  },
  {
    slug: "cloud-platforms",
    title: "Cloud platforms and DevOps",
    short: "Cloud infrastructure described in code, with deployments that repeat.",
    summary:
      "We set up cloud accounts, containers, databases and deployment pipelines on Google Cloud, Vercel and Cloudflare. Infrastructure is written as code, changes go through review, and releases move from staging to production.",
    icon: "CloudCog",
    deliverables: [
      "Infrastructure as code with Pulumi, changed through review",
      "Containers deployed to Google Cloud Run",
      "Managed PostgreSQL and Redis, set up with the services that use them",
      "Deployment pipelines in GitHub Actions for each environment",
      "DNS, domains and edge settings with Cloudflare and Vercel",
      "Secrets kept in a secret manager, not in code",
    ],
    stack: [
      "Google Cloud",
      "Cloud Run",
      "Vercel",
      "Cloudflare",
      "Docker",
      "Pulumi",
      "GitHub Actions",
    ],
    relatedWork: ["volthub", "b-ticket", "nomad"],
    faq: [
      {
        q: "What does infrastructure as code look like in practice?",
        a: "On our EV charging platform, the Cloud Run services, load balancer, fixed outbound IP address, monitoring, secrets and database migration job are all described in Pulumi. A release changes the image in that code, so the history shows what ran and when.",
      },
      {
        q: "How do you keep deployments safe?",
        a: "Changes go through review and automated checks. Releases move from staging to production, so problems can show up in staging first.",
      },
      {
        q: "Can you run the environment after it is set up?",
        a: "Yes. We can keep operating the environment under an ongoing support agreement, with monitoring and on-call cover.",
      },
    ],
  },
  {
    slug: "operations-reliability",
    title: "Operations and reliability",
    short: "We stay on after launch to monitor, respond and release.",
    summary:
      "Launch is where operations start. We set up error monitoring, tracing and uptime checks, write runbooks for the systems we run, provide on-call cover for production, and release changes through staged environments.",
    icon: "Activity",
    deliverables: [
      "Error monitoring and tracing with Sentry, and uptime checks with Better Stack",
      "Runbooks for the systems we operate",
      "On-call cover for production incidents",
      "Staged releases from development to staging to production",
      "Written post-incident reviews, shared with your team",
      "Ongoing support agreements for products in production",
    ],
    stack: ["Sentry", "Better Stack", "GitHub Actions", "Vercel", "Google Cloud Run"],
    relatedWork: ["volthub", "b-ticket"],
    faq: [
      {
        q: "Do you support a product after launch?",
        a: "Yes. We can keep operating what we build under an ongoing support agreement, covering monitoring, on-call cover and releases.",
      },
      {
        q: "What happens when something breaks outside office hours?",
        a: "The engineer on call works from the runbook for that system, and we write up what happened afterwards.",
      },
      {
        q: "Can you handle app store releases after launch?",
        a: "Yes. We prepare each build and submit it through Expo EAS, and we keep the release steps written down.",
      },
    ],
  },
  {
    slug: "ai-automation",
    title: "AI and automation",
    short: "Automation for repetitive work, with AI where it saves real time.",
    summary:
      "We look at how a team works, automate the steps that repeat, and connect AI models where they save real time. Where a wrong answer would cost money, trust or a customer, a person reviews the output before it goes out.",
    icon: "Workflow",
    deliverables: [
      "A review of how your team works, to find the steps worth automating",
      "Automations that connect forms, email, databases and messaging",
      "AI features built into your product, with logs your team can review",
      "Turning photos into structured drafts, such as a menu photo into product listings",
      "Assistants that answer questions and act through tools you control, including Model Context Protocol servers",
      "A human review step for outputs that customers or money depend on",
      "Monitoring of errors, cost and output quality after launch",
    ],
    stack: ["OpenAI", "Model Context Protocol", "TypeScript", "NestJS", "PostgreSQL"],
    relatedWork: ["b-ticket", "nomad"],
    faq: [
      {
        q: "Which AI models do you use?",
        a: "We choose a model for each task, based on the data it works with and the cost of running it. The features we have shipped so far use OpenAI models, including vision for reading menu photos.",
      },
      {
        q: "Will the AI make decisions on its own?",
        a: "Only where you decide that is acceptable. For payments, customer accounts or anything hard to undo, we keep a person in the loop. On B-Ticket, the menu scanner creates drafts, and the merchant reviews them before anything is published.",
      },
      {
        q: "Can you automate a process we already run by hand?",
        a: "Often, yes. The first step is a short review to see which steps repeat and which need a person's judgment.",
      },
    ],
  },
];

export function getCapability(slug: string): Capability | undefined {
  return capabilities.find((capability) => capability.slug === slug);
}

export function capabilitySlugs(): string[] {
  return capabilities.map((capability) => capability.slug);
}

export type ServicePath = "/services" | `/services/${CapabilitySlug}`;

export const legacyServiceRedirects: Record<string, ServicePath> = {
  "it-consulting": "/services",
  "software-development": "/services/web-platforms",
  "ai-ml-solutions": "/services/ai-automation",
  "data-analytics": "/services/backend-integrations",
  "cloud-services": "/services/cloud-platforms",
  cybersecurity: "/services",
  "digital-transformation": "/services",
  devops: "/services/cloud-platforms",
};
