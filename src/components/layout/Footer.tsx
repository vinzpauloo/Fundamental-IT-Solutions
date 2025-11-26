import Image from "next/image";
import type { Route } from "next";
import LayoutContainer from "./LayoutContainer";
import Link from "next/link";
import {
  Facebook,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

type NavHref = Route | `${Route}#${string}`;

const serviceLinks = [
  { label: "Web & App Development", href: "/services" },
  { label: "Cloud Solutions", href: "/services#cloud" },
  { label: "Cybersecurity", href: "/services#cybersecurity" },
  { label: "UI/UX Design", href: "/services#design" },
  { label: "IT Consulting", href: "/services#consulting" },
] satisfies { label: string; href: NavHref }[];

const companyLinks = [
  { label: "About Us", href: "/about-us" },
  { label: "Our Team", href: "/about-us#team" },
  { label: "Careers", href: "/careers" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact-us" },
] satisfies { label: string; href: NavHref }[];

const Footer = () => {
  return (
    <footer className="bg-[#0D1B2A] text-white pt-20 pb-12 border-solid border-t border-white/100">
      <LayoutContainer className="px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/fis-logo.jpg"
                alt="Fundamental IT Solutions logo mark"
                width={48}
                height={48}
                className="w-12 h-12 rounded-2xl object-cover"
                priority
              />
              <div>
                <p className="font-['Pacifico'] text-xl">Fundamental IT</p>
                <p className="text-sm tracking-[0.4em] uppercase text-slate-300">
                  Solutions
                </p>
              </div>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Delivering innovative technology solutions that drive growth and
              future-proof organizations across the globe.
            </p>
            <div className="flex space-x-3">
              {[Linkedin, Twitter, Github, Facebook].map((Icon) => (
                <a
                  key={Icon.displayName || Icon.name}
                  href="#"
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-slate-300">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-slate-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-5">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-4 text-slate-300 text-sm">
              <div className="flex space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p>hello@fundamentalit.com</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p>123 Innovation Drive, Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400 space-y-4 md:space-y-0">
          <p>© {new Date().getFullYear()} Fundamental IT Solutions.</p>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
