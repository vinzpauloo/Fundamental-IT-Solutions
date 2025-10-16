import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Sparkles } from "lucide-react";

export default function HeroSection() {
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
              <span className="block text-white drop-shadow-2xl">Code.</span>
              <span className="block text-slate-300 drop-shadow-2xl">
                Deploy.
              </span>
              <span className="block text-slate-400 drop-shadow-2xl">
                Dominate.
              </span>
            </h1>

            {/* Animated accent line */}
            <div className="flex justify-center">
              <div className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-slate-600 to-transparent rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Enhanced punch line */}
          <div className="max-w-3xl mx-auto px-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-300 font-medium leading-relaxed">
              Turn your vision into reality with
              <span className="text-slate-200 font-bold">
                {" "}
                bulletproof code
              </span>
              <span className="block mt-2 text-base sm:text-lg text-slate-400">
                Built by elite engineers. Delivered with precision.
              </span>
            </p>
          </div>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-8 sm:pt-12">
            <Button
              size="lg"
              className="group relative bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-10 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 border-2 border-transparent hover:border-slate-600 w-full sm:w-auto"
            >
              <span className="flex items-center justify-center">
                Start Now
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
                See Results
                <Sparkles className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-sm text-slate-400">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-4 h-4 text-slate-500" />
              <span>Enterprise Security</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Zap className="w-4 h-4 text-slate-500" />
              <span>Lightning Fast</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
