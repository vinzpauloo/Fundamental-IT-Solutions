import Image from "next/image";
import type { Route } from "next";
import Link from "next/link";
import { ArrowRight, Play, Brain, Cloud, Shield, Leaf } from "lucide-react";

const heroStats = [
  { label: "Digital Solutions", value: "500+" },
  { label: "Success Rate", value: "98%" },
  { label: "Years Innovation", value: "12" },
  { label: "Global Support", value: "24/7" },
];

const bentoHighlights = [
  {
    title: "AI-First Architecture",
    body: "Predictive, intelligent, automation-ready platforms that adapt as fast as your business evolves.",
    tags: ["Machine Learning", "Neural Networks", "Predictive Analytics"],
    icon: Brain,
    span: "lg:col-span-2",
  },
  {
    title: "Quantum-Ready Cloud",
    body: "Future-proof infrastructure engineered for ultra low latency workloads and limitless scale.",
    icon: Cloud,
  },
  {
    title: "Zero-Trust Security",
    body: "Military-grade protection that assumes breach and verifies every interaction.",
    icon: Shield,
  },
  {
    title: "Sustainable Tech",
    body: "Carbon-neutral infrastructure with renewable energy optimisation and green compute practices.",
    icon: Leaf,
  },
];

const spotlightCards = [
  {
    title: "Services",
    body: "Comprehensive delivery across web, mobile, cloud, cybersecurity, and design.",
    href: "/services",
  },
  {
    title: "Case Studies",
    body: "See how we unlocked growth for fintech, healthcare, and retail leaders.",
    href: "/case-studies",
  },
  {
    title: "Careers",
    body: "Join a distributed team of architects, engineers, and designers solving bold problems.",
    href: "/careers",
  },
] satisfies { title: string; body: string; href: Route }[];

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-white">
      <HeroSection />
      <TransformingTomorrow />
      <SpotlightSection />
      <PrimaryCTA />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-white hero-pattern">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center bg-[#E8F4FD] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0D1B2A] mr-3 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.4em] text-[#0D1B2A] font-semibold">
                Next-Generation Partner
              </span>
            </div>
            <div>
              <h1 className="text-5xl sm:text-7xl font-black text-[#0D1B2A] leading-tight">
                Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B2A] to-blue-600">Innovation</span>{" "}
                <span className="block">Redefined</span>
              </h1>
              <p className="text-xl text-slate-600 mt-6">
                We architect tomorrow&apos;s digital experiences today—from AI-powered applications
                to quantum-ready cloud infrastructure.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-[#0D1B2A] text-white px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-[#0D1B2A] text-[#0D1B2A] px-8 py-4 rounded-full font-semibold text-lg inline-flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white transition"
              >
                Watch Demo <Play className="ml-2 w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl font-bold counter-modern">{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="floating-element">
              <div className="relative rounded-[32px] overflow-hidden shadow-2xl">
                <Image
                  src="https://readdy.ai/api/search-image?query=futuristic%20holographic%20user%20interface%20dashboard%20modern%20technology%20visualization%20abstract%20digital%20workspace%20cyberpunk%20aesthetic%20neon%20blue%20glowing%20elements%20floating%20panels%20innovative%20UI%20design%20high%20tech%20atmosphere%20clean%20sophisticated%20digital%20art&width=600&height=700&seq=hero_visual_1&orientation=portrait"
                  alt="Digital Innovation"
                  width={600}
                  height={700}
                  className="w-full h-full object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#E8F4FD]/70 to-transparent" />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#0D1B2A] rounded-full flex items-center justify-center text-white text-3xl floating-element">
              🚀
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#E8F4FD] rounded-full flex items-center justify-center text-[#0D1B2A] text-2xl floating-element">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TransformingTomorrow() {
  return (
    <section className="py-24 bg-[#E8F4FD]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">
            Transforming Tomorrow
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
            Architecting digital ecosystems that evolve, adapt, and thrive.
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Every solution we deliver fuses intelligent automation with resilient infrastructure so
            your teams can move faster with confidence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {bentoHighlights.map((card) => (
            <div
              key={card.title}
              className={`bento-card ${card.span ?? ""} bg-white/80`}
            >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#0D1B2A] text-white flex items-center justify-center">
                <card.icon className="w-7 h-7" />
              </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-2">{card.title}</h3>
                  <p className="text-slate-600 mb-4">{card.body}</p>
                  {card.tags ? (
                    <div className="flex flex-wrap gap-2">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 rounded-full bg-[#E8F4FD] text-sm text-[#0D1B2A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Explore</p>
            <h2 className="text-4xl font-black text-[#0D1B2A] mt-4">
              Each capability gets its own stage.
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            We split the experience across dedicated pages so visitors can dive deep without losing
            context. Heroic marketing upfront, focused storytelling per route.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {spotlightCards.map((card) => (
            <div key={card.title} className="rounded-3xl border border-slate-100 p-6 hover:-translate-y-1 hover:shadow-2xl transition shadow-[0_10px_40px_rgba(15,23,42,0.08)]">
              <p className="text-sm uppercase tracking-[0.4em] text-slate-400">
                Featured
              </p>
              <h3 className="text-2xl font-semibold text-[#0D1B2A] mt-3">
                {card.title}
              </h3>
              <p className="text-slate-600 mt-3 mb-6">{card.body}</p>
              <Link
                href={card.href}
                className="inline-flex items-center text-[#0D1B2A] font-semibold"
              >
                Visit page <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrimaryCTA() {
  return (
    <section className="py-24 bg-[#0D1B2A] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6 px-6">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-200">
          Ready to transform?
        </p>
        <h2 className="text-4xl md:text-5xl font-black">
          Join 150+ companies scaling with Fundamental IT Solutions.
        </h2>
        <p className="text-lg text-blue-100">
          You pick the vision, we deliver the architecture, engineering, and adoption roadmap.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us"
            className="bg-white text-[#0D1B2A] px-8 py-4 rounded-full font-semibold text-lg"
          >
            Get a Free Quote
          </Link>
          <Link
            href="/contact-us"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
