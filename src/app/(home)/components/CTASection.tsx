import { Button } from "@/components/ui/button";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { benefits, guarantees, ArrowRight, CheckCircle, Shield, Zap, Sparkles } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative py-16 px-2 sm:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(148,163,184,0.05),transparent_50%),radial-gradient(circle_at_90%_80%,rgba(148,163,184,0.05),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-gradient-to-r from-slate-400/5 to-slate-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-r from-slate-500/5 to-slate-400/5 rounded-full blur-3xl"></div>
      </div>

      <LayoutContainer>
        <div className="relative space-y-12 sm:space-y-16 lg:space-y-20">
          {/* Enhanced main CTA section */}
          <div className="text-center space-y-8 sm:space-y-12">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-200 border border-slate-300">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 mr-2" />
                <span className="text-sm sm:text-base text-slate-800 font-semibold">Time to Level Up</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">Ready to</span>
                <br className="hidden sm:block" />
                <span className="text-slate-700">Change</span>
                <span className="block text-slate-900">the Game?</span>
              </h2>
            </div>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-medium leading-relaxed px-4">
              Stop settling. <span className="font-bold text-slate-800">Start building something legendary.</span>
              <span className="block mt-2 text-base sm:text-lg text-slate-500">Your competitors won&apos;t wait. Neither should you.</span>
            </p>
          </div>

          {/* Enhanced benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="relative h-full">
                  {/* Card background */}
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-slate-200/50 group-hover:border-slate-300/50 transition-all duration-500"></div>

                  {/* Animated gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-600/5 via-slate-700/5 to-slate-800/5 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
                    <div className="relative">
                      <div className="inline-flex p-4 sm:p-5 rounded-2xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                        <benefit.icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-slate-500 rounded-full animate-pulse"></div>
                    </div>

                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                        {benefit.title}
                      </h3>

                      <p className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-700 transition-colors">
                        {benefit.description}
                      </p>
                    </div>

                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced guarantees section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  <span className="text-slate-200">Zero Risk.</span>
                  <span className="block">All Reward.</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300">
                  We back every project with <span className="font-semibold text-slate-200">ironclad guarantees</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/30 transition-all duration-300 hover:bg-slate-800/70">
                    <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-600 flex-shrink-0">
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-slate-200 font-medium text-sm sm:text-base">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced final CTA */}
          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-8 sm:space-y-12">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  What Are You
                  <span className="block text-slate-200">Waiting For?</span>
                </h3>

                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
                  Every day you wait is a day your competition gets ahead.
                  <span className="block mt-2 font-semibold text-slate-200">Let&apos;s change that. Now.</span>
                  <span className="block mt-2 text-base sm:text-lg text-slate-400">Because extraordinary results don&apos;t wait for permission.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Start Today
                    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 w-full sm:w-auto"
                >
                  See Results
                </Button>
              </div>

              {/* Enhanced trust indicators */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-sm text-slate-400">
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="w-4 h-4 text-slate-500" />
                  <span className="font-bold">✓ No bullshit</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-slate-500" />
                  <span className="font-bold">✓ Results guaranteed</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Zap className="w-4 h-4 text-slate-500" />
                  <span className="font-bold">✓ Elite execution</span>
                </div>
              </div>

              {/* Additional compelling stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-8 sm:pt-12 text-center">
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-black text-slate-200">24h</div>
                  <div className="text-sm sm:text-base text-slate-400">Project Kickoff</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-black text-slate-200">100%</div>
                  <div className="text-sm sm:text-base text-slate-400">Transparent Process</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-black text-slate-200">∞</div>
                  <div className="text-sm sm:text-base text-slate-400">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
