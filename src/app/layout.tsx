import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";
import { MotionConfigProvider } from "@/components/motion-config-provider";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/structured-data";
import { SITE_CONFIG } from "@/lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1A5276",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: "Fundamental IT Solutions — Enterprise IT Consulting & AI Services",
    template: "%s | Fundamental IT Solutions",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "IT consulting",
    "AI solutions",
    "data analytics",
    "software development",
    "cloud services",
    "cybersecurity",
    "digital transformation",
    "DevOps",
    "enterprise technology",
    "digital innovation",
  ],
  authors: [{ name: "Fundamental IT Solutions" }],
  creator: "Fundamental IT Solutions",
  openGraph: {
    title: "Fundamental IT Solutions",
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/fund-logo-1.png",
        width: 1200,
        height: 630,
        alt: "Fundamental IT Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundamental IT Solutions",
    description: SITE_CONFIG.description,
    images: ["/fund-logo-1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-primary-900 focus:shadow-lg"
        >
          Skip to main content
        </a>
        <MotionConfigProvider>
          <OrganizationJsonLd />
          <WebSiteJsonLd />
          <Header />
          <div className="flex flex-1 flex-col pt-18 lg:pt-20">{children}</div>
          <Footer />
        </MotionConfigProvider>
        <Analytics />
      </body>
    </html>
  );
}
