"use client";

import Image from "next/image";
import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
] satisfies { label: string; href: Route }[];

const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="w-full flex justify-center px-4 pt-6">
      <div className="nav-floating w-full flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/fis-logo.jpg"
            alt="Fundamental IT Solutions logo"
            width={44}
            height={44}
            className="w-11 h-11 rounded-full object-cover"
            priority
          />
          <div>
            <span className="font-['Pacifico'] text-lg text-[#0D1B2A] leading-none">
              Fundamental
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500 mt-1">
              IT Solutions
            </p>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-semibold transition-colors ${
                pathname === link.href
                  ? "text-[#0D1B2A]"
                  : "text-slate-500 hover:text-[#0D1B2A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="/services"
            className="text-sm font-semibold text-[#0D1B2A] bg-[#E8F4FD] border border-[#0D1B2A]/10 px-5 py-2 rounded-full hover:bg-white transition-colors"
          >
            Explore Solutions
          </Link>
          <Link
            href="/contact-us"
            className="text-sm font-semibold text-white bg-[#0D1B2A] px-5 py-2 rounded-full hover:bg-[#132137] transition-colors"
          >
            Start Project
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden w-10 h-10 rounded-full bg-[#E8F4FD] text-[#0D1B2A] flex items-center justify-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {isOpen ? (
        <div className="lg:hidden fixed inset-x-4 top-28 rounded-2xl bg-white shadow-2xl border border-slate-100 p-6 space-y-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block text-base font-semibold ${
                pathname === link.href
                  ? "text-[#0D1B2A]"
                  : "text-slate-500 hover:text-[#0D1B2A]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="block text-center w-full bg-[#0D1B2A] text-white rounded-full py-3 font-semibold"
          >
            Start Project
          </Link>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
