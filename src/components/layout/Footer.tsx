import LayoutContainer from "./LayoutContainer";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  ArrowRight,
  Heart,
  Zap
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0D1B2A] border-t border-[#415A77]">
      <LayoutContainer className="py-8 sm:py-12 px-2 lg:py-16">
        {/* Desktop/Tablet Footer */}
        <div className="hidden sm:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Company info */}
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#415A77] rounded-lg flex items-center justify-center">
                    <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">Fundamental IT</h3>
                  <p className="text-xs sm:text-sm text-[#E0E1DD]">Solutions</p>
                </div>
              </div>

              <p className="text-[#778DA9] text-xs sm:text-sm leading-relaxed">
                Empowering businesses with cutting-edge technology solutions.
                We transform ideas into digital reality.
              </p>

              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="p-2 sm:p-3 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors border border-[#415A77]">
                  <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-[#778DA9]" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors border border-[#415A77]">
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4 text-[#778DA9]" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors border border-[#415A77]">
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 text-[#778DA9]" />
                </a>
                <a href="#" className="p-2 sm:p-3 bg-[#1B263B] rounded-lg hover:bg-[#415A77] transition-colors border border-[#415A77]">
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 text-[#778DA9]" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#778DA9]">
                <li><a href="#" className="hover:text-white transition-colors block py-1">Custom Software Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Cloud Infrastructure</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Cybersecurity Solutions</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Mobile App Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Data Analytics & AI</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">IT Consulting</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[#778DA9]">
                <li><a href="#" className="hover:text-white transition-colors block py-1">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Our Team</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors block py-1">Contact</a></li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-4 sm:space-y-6">
              <h4 className="text-base sm:text-lg font-semibold text-white">Get in Touch</h4>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-[#778DA9]">
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="break-all">hello@fundamental-it.com</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-[#778DA9]">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 text-xs sm:text-sm text-[#778DA9]">
                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Newsletter signup */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-xs sm:text-sm text-[#778DA9]">Subscribe to our newsletter</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-[#1B263B] border border-[#415A77] rounded-md text-white placeholder-[#778DA9] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#415A77] focus:border-[#415A77]"
                  />
                  <Button size="sm" className="bg-[#415A77] hover:bg-[#778DA9] text-white w-full sm:w-auto">
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Always visible */}
        <div className="pt-6 sm:pt-8 border-t border-[#415A77]">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-xs sm:text-sm text-[#778DA9] text-center lg:text-left">
              © 2024 Fundamental IT Solutions. All rights reserved.
            </div>

            <div className="hidden lg:flex items-center space-x-6 text-sm text-[#778DA9]">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>

            <div className="hidden lg:flex items-center space-x-1 text-sm text-[#778DA9]">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-[#415A77] fill-current" />
              <span>for innovation</span>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </footer>
  );
};

export default Footer;
