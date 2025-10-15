import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail, MapPin, Clock } from "lucide-react";

export default function HeroContactSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-slate-700/20 to-slate-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-80 h-80 sm:w-[32rem] sm:h-[32rem] bg-gradient-to-r from-slate-600/15 to-slate-700/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-slate-800/20 to-slate-700/20 rounded-full blur-3xl animate-pulse delay-500"></div>

        {/* Additional floating elements */}
        <div className="absolute top-1/2 right-1/3 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-slate-600/15 to-slate-500/15 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/3 left-1/3 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-r from-slate-700/10 to-slate-600/10 rounded-full blur-2xl animate-pulse delay-300"></div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Glass morphism container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 sm:space-y-12">
          {/* Enhanced main headline */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight leading-tight">
              <span className="block text-white drop-shadow-2xl">Contact</span>
              <span className="block text-slate-300 drop-shadow-2xl">Us</span>
            </h1>

            {/* Animated accent line */}
            <div className="flex justify-center">
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-slate-600 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced punch line */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium leading-relaxed">
              Ready to turn your vision into reality?
              <span className="text-slate-200 font-bold"> Let's talk</span>
              <span className="block mt-2 text-base sm:text-lg text-slate-400">We're here to help you build something extraordinary.</span>
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12">
            <Button
              size="lg"
              className="group relative bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 border-2 border-transparent hover:border-slate-600 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                Start a Project
                <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-slate-700/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="group relative border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 hover:bg-slate-800/50 hover:shadow-xl hover:shadow-slate-900/10 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                Schedule a Call
                <Phone className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Contact info cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500"></div>
              <div className="relative p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
                <div className="inline-flex p-3 sm:p-4 rounded-xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Phone</h3>
                  <p className="text-slate-300 text-sm sm:text-base">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500"></div>
              <div className="relative p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
                <div className="inline-flex p-3 sm:p-4 rounded-xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Email</h3>
                  <p className="text-slate-300 text-sm sm:text-base">hello@fundamental-it.com</p>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500"></div>
              <div className="relative p-6 sm:p-8 text-center space-y-3 sm:space-y-4">
                <div className="inline-flex p-3 sm:p-4 rounded-xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="text-lg sm:text-xl font-bold text-white">Response</h3>
                  <p className="text-slate-300 text-sm sm:text-base">Within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
