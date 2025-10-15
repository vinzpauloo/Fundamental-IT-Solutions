import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { services, ArrowRight, CheckCircle, Sparkles } from "@/lib/constants";

export default function ServicesSection() {
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
          {/* Enhanced section header */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-200 border border-slate-300">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 mr-2" />
              <span className="text-sm sm:text-base text-slate-800 font-semibold">Enterprise Solutions</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="text-slate-900">Built to</span>
              <span className="block text-slate-700">Scale</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-medium leading-relaxed px-4">
              Enterprise-grade solutions. <span className="font-bold text-slate-800">Zero bullshit.</span>
              <span className="block mt-2 text-base sm:text-lg text-slate-500">Just results that matter.</span>
            </p>
          </div>

          {/* Enhanced services grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-700/10 to-slate-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(255,255,255,0.3)_50%,transparent_51%)] bg-[length:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative space-y-4 sm:space-y-6 p-6 sm:p-8">
                  <div className="relative">
                    <div className="inline-flex p-4 sm:p-5 rounded-2xl bg-slate-700 w-fit group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-slate-500 rounded-full animate-pulse"></div>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <CardTitle className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-700 transition-colors">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="relative px-6 sm:px-8 pb-6 sm:pb-8">
                  <Button
                    className="w-full group/btn bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 sm:py-4 text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Enhanced CTA section */}
          <div className="relative text-center space-y-8 sm:space-y-12">
            {/* Glass morphism background */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            {/* Content */}
            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Ready to Build Something
                  <span className="block text-slate-200">Epic?</span>
                </h3>

                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
                  Let's turn your ideas into reality.
                  <span className="block mt-2 font-semibold text-slate-200">Fast. Efficient. Brilliant.</span>
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
                  className="border-2 border-slate-400 text-slate-600 hover:text-white hover:border-slate-600 hover:bg-slate-800/50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 w-full sm:w-auto"
                >
                  View Portfolio
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-6 sm:pt-8 text-sm text-slate-400">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-slate-500" />
                  <span>500+ Projects</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-slate-500" />
                  <span>99% Success Rate</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-slate-500" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
