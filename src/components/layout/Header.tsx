
"use client";

import Image from "next/image";
import type { Route } from "next";
import Link from "next/link";
import LayoutContainer from "./LayoutContainer";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";


const NAV_LINKS = [
  { label: "Solutions", href: "/" },
  { label: "Expertise", href: "/services" },
  { label: "Works", href: "/careers" },
  { label: "Team", href: "/about-us" },
] satisfies { label: string; href: Route }[];



const Header = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="  max-w-[767px] w-full h-[50px] mx-auto  py-1
    px-4 md:py-2 
    px-4 lg:py-2 
    md:rounded-[50px] lg:rounded-[50px] fixed md:top-5 lg:top-5 left-0 right-0 z-50
    bg-white shadow-lg opacity-90 border border-[#0D1B2A]/10 backdrop-blur-xl">

      <LayoutContainer className="flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo1.jpg"
            alt="Fundamental IT Solutions Logo"
            width={32}
            height={32}
            className="object-cover rounded-full"
          />
          <div className="leading-tight">
            <p className="text-xs font-bold text-[#0D1B2A]">Fundamental</p>
            <p className="text-[10px] text-[#0D1B2A]">IT Solutions</p>
          </div>
        </Link>

        <nav className="hidden md:flex lg:flex items-center space-x-6">
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

        <div className="hidden md:flex lg:flex items-center space-x-3">
          {/* <Link
            href="/services"
            className="text-sm font-semibold text-[#0D1B2A] bg-[#E8F4FD] border border-[#0D1B2A]/10 px-5 py-2 rounded-full hover:bg-white transition-colors"
          >
            Explore Solutions
          </Link> */}
          <Link
            href="/contact-us"
            className="text-sm font-semibold text-white bg-[#0D1B2A] px-3 py-1 h-7 rounded-[8px] hover:bg-[#132137] transition-colors"
          >
            Start Project
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden md:hidden w-10 h-10 rounded-full bg-[#E8F4FD] text-[#0D1B2A] flex items-center justify-center"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </LayoutContainer>

      {isOpen ? (
        <div className="lg:hidden fixed inset-x-4 top-14 rounded-2xl bg-white shadow-2xl border border-slate-100 p-6 space-y-4">
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
