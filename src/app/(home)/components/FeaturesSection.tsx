import { Button } from "@/components/ui/button";
import LayoutContainer from "@/components/layout/LayoutContainer";
import {
  features,
  highlights,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "@/lib/constants";

export default function FeaturesSection() {
  return (
    <section className="relative py-16 px-2 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Gradient mesh background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(148,163,184,0.08),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(148,163,184,0.08),transparent_50%)]"></div>
        </div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-1 h-1 sm:w-2 sm:h-2 bg-slate-500 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-slate-500 rounded-full animate-ping delay-1000"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 sm:w-2 sm:h-2 bg-slate-500 rounded-full animate-ping delay-500"></div>

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px] opacity-50"></div>
      </div>

      <LayoutContainer>
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Enhanced section header */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-800/50 border border-slate-600/30 backdrop-blur-sm">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mr-2" />
              <span className="text-sm sm:text-base text-slate-300 font-semibold">
                Why We Dominate
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="text-white">Why We</span>
              <span className="block text-slate-300">Win</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-300 font-medium leading-relaxed px-4">
              Simple. We deliver{" "}
              <span className="font-bold text-slate-200">
                results that matter.
              </span>
              <span className="block mt-2 text-base sm:text-lg text-slate-400">
                No excuses. Just execution.
              </span>
            </p>
          </div>

          {/* Enhanced features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="relative h-full">
                  {/* Card background with glass morphism */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/50 group-hover:border-slate-600/50 transition-all duration-500"></div>

                  {/* Animated gradient border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-500/10 to-slate-700/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8 space-y-4 sm:space-y-6">
                    {/* Icon with enhanced styling */}
                    <div className="relative">
                      <div className="inline-flex p-4 sm:p-5 rounded-2xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                        <feature.icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                      </div>
                      <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-slate-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Text content */}
                    <div className="space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-slate-200 transition-colors duration-300">
                        {feature.title}
                      </h3>

                      <p className="text-slate-300 text-base sm:text-lg leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        {feature.description}
                      </p>

                      {/* Enhanced benefits list */}
                      <ul className="space-y-2 sm:space-y-3">
                        {feature.benefits
                          .slice(0, 3)
                          .map((benefit, benefitIndex) => (
                            <li
                              key={benefitIndex}
                              className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors duration-300"
                            >
                              <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-600 mr-2 sm:mr-3 flex-shrink-0">
                                <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                              </div>
                              <span className="font-medium text-sm sm:text-base">
                                {benefit}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>

                    {/* Hover effect overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced trust indicators */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30"></div>

            <div className="relative p-8 sm:p-12 space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Built for <span className="text-slate-200">Champions</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300">
                  Trusted by those who demand{" "}
                  <span className="font-semibold text-slate-200">
                    excellence
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="group flex items-center space-x-2 sm:space-x-3 rounded-full px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border border-slate-600/50 hover:border-slate-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-slate-300 transition-colors duration-300" />
                    <span className="text-white font-bold text-xs sm:text-sm">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced CTA section */}
          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Ready to <span className="text-slate-200">Dominate?</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed px-2">
                  Join the elite.{" "}
                  <span className="font-semibold text-slate-100">
                    Transform your business today.
                  </span>
                  <span className="block mt-2 text-base sm:text-lg text-slate-300">
                    Because average is not in our vocabulary.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Start Winning
                    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 w-full sm:w-auto"
                >
                  See Case Studies
                </Button>
              </div>

              {/* Additional trust metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 text-center">
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-200">
                    500+
                  </div>
                  <div className="text-sm sm:text-base text-slate-400">
                    Projects Delivered
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-200">
                    99.8%
                  </div>
                  <div className="text-sm sm:text-base text-slate-400">
                    Client Satisfaction
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-200">
                    24/7
                  </div>
                  <div className="text-sm sm:text-base text-slate-400">
                    Expert Support
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
