import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import LayoutContainer from "@/components/layout/LayoutContainer";
import { services, ArrowRight, CheckCircle, Sparkles, Zap, Shield, Code2, Cloud, Smartphone, Database, Brain } from "@/lib/constants";

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We dive deep into your business needs, analyze requirements, and create a detailed project roadmap.",
    features: ["Requirements analysis", "Technical assessment", "Project timeline", "Resource allocation"]
  },
  {
    step: "02",
    title: "Design & Architecture",
    description: "Our architects design scalable, secure, and maintainable solutions tailored to your needs.",
    features: ["System architecture", "UI/UX design", "Security planning", "Performance optimization"]
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with continuous integration, rigorous testing, and quality assurance.",
    features: ["Agile methodology", "Code reviews", "Automated testing", "Performance testing"]
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Seamless deployment, comprehensive training, and ongoing support for your success.",
    features: ["Production deployment", "User training", "24/7 monitoring", "Maintenance & updates"]
  }
];

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "TypeScript", category: "Language" },
  { name: "GraphQL", category: "API" },
  { name: "REST APIs", category: "API" }
];

export default function ServicesDetailSection() {
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
          {/* Services overview */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-200 border border-slate-300">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 mr-2" />
              <span className="text-sm sm:text-base text-slate-800 font-semibold">Comprehensive Solutions</span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
              <span className="text-slate-900">Full-Spectrum</span>
              <span className="block text-slate-700">Services</span>
            </h2>

            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-medium leading-relaxed px-4">
              From concept to deployment and beyond,
              <span className="font-bold text-slate-800"> we handle every aspect</span>
              <span className="block mt-2 text-base sm:text-lg text-slate-500">of your technology needs with expertise and precision.</span>
            </p>
          </div>

          {/* Detailed services grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 sm:hover:-translate-y-4 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/10 via-slate-700/10 to-slate-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>

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

                  {/* Service features */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-800 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                          <div className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-600 mr-2 sm:mr-3 flex-shrink-0">
                            <CheckCircle className="w-2 h-2 sm:w-3 sm:h-3 text-white" />
                          </div>
                          <span className="font-medium text-sm sm:text-base">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardHeader>

                <CardContent className="relative px-6 sm:px-8 pb-6 sm:pb-8">
                  <Button
                    className="w-full group/btn bg-slate-800 hover:bg-slate-700 text-white font-bold py-3 sm:py-4 text-base sm:text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                  >
                    <span className="flex items-center justify-center">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Process section */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-8 sm:space-y-12">
              <div className="text-center space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Our <span className="text-slate-200">Process</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  A proven methodology that ensures successful project delivery every time.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative p-6 sm:p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600/30 transition-all duration-300">
                    <div className="flex items-start space-x-4 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-600 flex items-center justify-center">
                          <span className="text-white font-bold text-lg sm:text-xl">{step.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 space-y-3 sm:space-y-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-white">{step.title}</h4>
                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed">{step.description}</p>
                        <ul className="space-y-2">
                          {step.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-slate-400">
                              <CheckCircle className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                              <span className="text-sm sm:text-base">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies section */}
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4 sm:space-y-6">
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-slate-200 border border-slate-300">
                <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 mr-2" />
                <span className="text-sm sm:text-base text-slate-800 font-semibold">Technologies We Use</span>
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">Cutting-Edge</span>
                <span className="block text-slate-700">Tech Stack</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="group relative">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl border border-slate-200/50 group-hover:border-slate-300/50 transition-all duration-500"></div>
                    <div className="relative p-4 sm:p-6 text-center space-y-2 sm:space-y-3">
                      <div className="text-slate-900 font-bold text-sm sm:text-base group-hover:text-slate-800 transition-colors">
                        {tech.name}
                      </div>
                      <div className="text-xs sm:text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                        {tech.category}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA section */}
          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Ready to Start Your
                  <span className="block text-slate-200">Next Project?</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
                  Let's discuss your requirements and create something extraordinary together.
                  <span className="block mt-2 font-semibold text-slate-200">Free consultation. No obligations.</span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Schedule Consultation
                    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 w-full sm:w-auto"
                >
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
