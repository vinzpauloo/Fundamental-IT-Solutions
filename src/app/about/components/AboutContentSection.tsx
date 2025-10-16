import { Button } from "@/components/ui/button";
import LayoutContainer from "@/components/layout/LayoutContainer";
import {
  Award,
  TrendingUp,
  Target,
  ArrowRight,
  Star,
  Zap,
  Shield,
} from "lucide-react";

const values = [
  {
    title: "Excellence",
    description:
      "We don't just build software. We craft digital masterpieces that stand the test of time.",
    icon: Award,
  },
  {
    title: "Innovation",
    description:
      "Constantly pushing boundaries, exploring new technologies, and redefining what's possible.",
    icon: Zap,
  },
  {
    title: "Integrity",
    description:
      "Transparent communication, honest pricing, and delivering exactly what we promise.",
    icon: Shield,
  },
  {
    title: "Results",
    description:
      "Every project is measured by impact. We focus on outcomes that drive real business growth.",
    icon: TrendingUp,
  },
];

const achievements = [
  "500+ Projects Delivered",
  "99.8% Client Satisfaction",
  "Award-Winning Solutions",
  "24/7 Expert Support",
  "5+ Years of Excellence",
  "Global Client Base",
];

export default function AboutContentSection() {
  return (
    <section className="relative py-16 px-2 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(148,163,184,0.05),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(148,163,184,0.05),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-slate-400/5 to-slate-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-slate-500/5 to-slate-400/5 rounded-full blur-3xl"></div>
      </div>

      <LayoutContainer>
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Story section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-6 sm:space-y-8">
              <div className="text-center space-y-4 sm:space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Our <span className="text-slate-200">Story</span>
                </h2>
                <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  Founded by elite engineers who were tired of the industry&apos;s
                  broken promises, we set out to build something different.
                </p>
              </div>

              <div className="space-y-6 sm:space-y-8 text-slate-200">
                <p className="text-lg sm:text-xl leading-relaxed">
                  <span className="font-bold text-white">The Problem:</span> Too
                  many agencies promise the world but deliver mediocrity.
                  Endless meetings, missed deadlines, and solutions that break
                  as soon as they&apos;re deployed.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed">
                  <span className="font-bold text-white">Our Solution:</span> A
                  team of battle-tested engineers who understand that great
                  software isn&apos;t just about lines of code—it&apos;s about solving
                  real problems and creating lasting value.
                </p>

                <p className="text-lg sm:text-xl leading-relaxed">
                  <span className="font-bold text-white">The Result:</span> Over
                  500 successful projects, countless satisfied clients, and a
                  reputation for delivering bulletproof solutions that actually
                  work.
                </p>
              </div>
            </div>
          </div>

          {/* Values section */}
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-200 border border-slate-300">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 mr-2" />
                <span className="text-sm sm:text-base text-slate-800 font-semibold">
                  Our Values
                </span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">Built on</span>
                <span className="block text-slate-700">Principles</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-full">
                    {/* Card background */}
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/50 group-hover:border-slate-300/50 transition-all duration-500"></div>

                    {/* Content */}
                    <div className="relative p-6 sm:p-8 space-y-4 sm:space-y-6">
                      <div className="relative">
                        <div className="inline-flex p-4 sm:p-5 rounded-2xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                          <value.icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-slate-500 rounded-full animate-pulse"></div>
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                          {value.title}
                        </h3>
                        <p className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-700 transition-colors">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30"></div>

            <div className="relative p-8 sm:p-12 space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Proven <span className="text-slate-200">Track Record</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300">
                  Numbers don&apos;t lie. Here&apos;s what we&apos;ve accomplished together.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-2 sm:space-x-3 rounded-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300" />
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA section */}
          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Ready to Build Something
                  <span className="block text-slate-200">Amazing?</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
                  Join hundreds of satisfied clients who chose excellence over
                  mediocrity.
                  <span className="block mt-2 font-semibold text-slate-200">
                    Let&apos;s create something extraordinary together.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 w-full sm:w-auto"
                >
                  View Our Work
                </Button>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
