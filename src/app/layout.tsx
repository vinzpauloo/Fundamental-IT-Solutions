import type { Metadata } from "next";
import { Pacifico, Space_Grotesk } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Fundamental IT Solutions",
  description:
    "NexTech Solutions - Revolutionary Digital Innovation for modern teams.",
  icons: {
    icon: [
      {
        url: "/fis-logo-circle.png",
        type: "image/png",
        sizes: "any",
      },
    ],
    shortcut: "/fis-logo-circle.png",
    apple: "/fis-logo-circle.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${pacifico.variable} bg-white text-slate-900 antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
