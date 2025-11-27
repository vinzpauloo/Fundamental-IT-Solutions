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
    maxWidth: "max-w-md",
    icon: Brain,
    span: "lg:col-span-2",
  },
  {
    title: "Quantum-Ready Cloud",
    body: "Future-proof infrastructure engineered for ultra low latency workloads and limitless scale.",
    maxWidth: "max-w-md",
    icon: Cloud,
  },
  {
    title: "Zero-Trust Security",
    body: "Military-grade protection that assumes breach and verifies every interaction.",
    maxWidth: "max-w-md",
    icon: Shield,
  },
  {
    title: "Sustainable Tech",
    body: "Carbon-neutral infrastructure with renewable energy optimisation and green compute practices.",
    maxWidth: "max-w-md",
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 md:py-24 lg:py-24 w-full ">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 md:space-y-10 lg:space-y-10      ">
          {/* Next-Generation Partner */}
              <div className="inline-flex items-center bg-[#E8F4FD] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#0D1B2A] mr-3 animate-pulse" />
              <span className="text-xs uppercase tracking-[0.4em] text-[#0D1B2A] font-semibold">
                Next-Generation Partner
              </span>
            </div>
            {/* Digital Innovation Redefined */}
            <div className="   ">
              <h1 className="text-4xl md:text-7xl lg:text-7xl font-black text-[#0D1B2A] leading-tight">
                Digital{" "}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D1B2A] to-blue-600">
                  Innovation
                </span>{" "}
                <span className="block">Redefined</span>
              </h1>
              <p className="text-base md:text-xl lg:text-xl text-slate-600 mt-2 md:mt-6 lg:mt-6">
                We architect tomorrow&apos;s digital experiences today—from
                AI-powered applications to quantum-ready cloud infrastructure.
              </p>
            </div>
            {/* Explore Solutions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="bg-[#0D1B2A] text-white px-8 py-2 md:py-4 lg:py-4 rounded-[8px] font-semibold text-lg inline-flex items-center justify-center shadow-lg hover:shadow-xl transition"
              >
                Explore Solutions <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-[#0D1B2A] text-[#0D1B2A] px-8 py-2 md:py-4 lg:py-4 rounded-[8px] font-semibold text-lg inline-flex items-center justify-center hover:bg-[#0D1B2A] hover:text-white transition"
              >
                Watch Demo <Play className="ml-2 w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 md:mt-5 lg:mt-5 ">
              {heroStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold counter-modern">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-slate-500 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-[94%] mx-auto ">
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
            <div className="absolute -top-8 -right-8 w-20 h-20 md:w-24 md:h-24 lg:w-24 lg:h-24 bg-[#0D1B2A] rounded-full flex items-center justify-center text-white text-3xl floating-element">
              <svg
                width="38"
                height="36"
                viewBox="0 0 38 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.24989 19.14C8.24989 16.64 8.69989 14.25 9.59989 11.97C10.4799 9.77001 11.7149 7.83501 13.3049 6.16501C14.8949 4.49501 16.7099 3.23001 18.7499 2.37001C20.7899 3.23001 22.6049 4.49501 24.1949 6.16501C25.7849 7.83501 27.0199 9.77001 27.8999 11.97C28.7999 14.25 29.2499 16.64 29.2499 19.14C29.2499 20.36 29.1399 21.56 28.9199 22.74L31.8299 25.47C31.9499 25.59 32.0249 25.735 32.0549 25.905C32.0849 26.075 32.0599 26.24 31.9799 26.4L28.2299 33.24C28.1299 33.42 27.9799 33.54 27.7799 33.6C27.5799 33.66 27.3899 33.64 27.2099 33.54C27.1499 33.52 27.0899 33.48 27.0299 33.42L23.6999 30.06C23.3999 29.78 23.0399 29.64 22.6199 29.64H14.8799C14.4599 29.64 14.0999 29.78 13.7999 30.06L10.4699 33.42C10.3099 33.56 10.1299 33.63 9.92989 33.63C9.72989 33.63 9.54989 33.56 9.38989 33.42C9.34989 33.38 9.30989 33.32 9.26989 33.24L5.51989 26.4C5.43989 26.24 5.41489 26.075 5.44489 25.905C5.47489 25.735 5.54989 25.59 5.66989 25.47L8.57989 22.74C8.35989 21.56 8.24989 20.36 8.24989 19.14ZM10.4699 29.16L11.6999 27.96C12.1199 27.54 12.6049 27.215 13.1549 26.985C13.7049 26.755 14.2799 26.64 14.8799 26.64H22.6199C23.2199 26.64 23.7949 26.755 24.3449 26.985C24.8949 27.215 25.3799 27.54 25.7999 27.96L27.0299 29.16L28.4999 26.46L26.8499 24.93C26.4899 24.57 26.2299 24.15 26.0699 23.67C25.9099 23.19 25.8799 22.7 25.9799 22.2C26.1599 21.18 26.2499 20.16 26.2499 19.14C26.2499 17.22 25.9399 15.38 25.3199 13.62C24.6999 11.9 23.8249 10.355 22.6949 8.98501C21.5649 7.61501 20.2499 6.52001 18.7499 5.70001C17.2499 6.52001 15.9349 7.61501 14.8049 8.98501C13.6749 10.355 12.7999 11.9 12.1799 13.62C11.5599 15.38 11.2499 17.22 11.2499 19.14C11.2499 20.16 11.3399 21.18 11.5199 22.2C11.6199 22.7 11.5899 23.19 11.4299 23.67C11.2699 24.15 11.0099 24.57 10.6499 24.93L8.99989 26.46L10.4699 29.16ZM18.7499 19.14C18.2099 19.14 17.7099 19.005 17.2499 18.735C16.7899 18.465 16.4249 18.1 16.1549 17.64C15.8849 17.18 15.7499 16.68 15.7499 16.14C15.7499 15.6 15.8849 15.1 16.1549 14.64C16.4249 14.18 16.7899 13.815 17.2499 13.545C17.7099 13.275 18.2099 13.14 18.7499 13.14C19.2899 13.14 19.7899 13.275 20.2499 13.545C20.7099 13.815 21.0749 14.18 21.3449 14.64C21.6149 15.1 21.7499 15.6 21.7499 16.14C21.7499 16.68 21.6149 17.18 21.3449 17.64C21.0749 18.1 20.7099 18.465 20.2499 18.735C19.7899 19.005 19.2899 19.14 18.7499 19.14Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="absolute -bottom-6 -left-6 w-15 h-15 md:w-20 md:h-20 lg:w-20 lg:h-20 bg-[#E8F4FD] rounded-full flex items-center justify-center text-[#0D1B2A] text-2xl floating-element">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5001 18.9L5.44008 22.86L7.02008 14.92L1.08008 9.43999L9.12008 8.47999L12.5001 1.13999L15.8801 8.47999L23.9201 9.43999L17.9801 14.92L19.5601 22.86L12.5001 18.9ZM12.5001 16.62L16.7401 19L15.8001 14.22L19.3801 10.92L14.5401 10.34L12.5001 5.91998L10.4601 10.34L5.62008 10.92L9.20008 14.22L8.26008 19L12.5001 16.62Z"
                  fill="#0D1B2A"
                />
              </svg>
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
          {/* <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">
            Transforming Tomorrow
          </p> */}
          <h2 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
          Transforming Tomorrow
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          We don't just build software – we architect digital ecosystems that evolve, adapt, and thrive in an ever-changing technological landscape.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {bentoHighlights.map((card) => (
            <div
              key={card.title}
              className={`bento-card ${card.span ?? ""} bg-white/80 ${card.maxWidth ?? ""}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-[#0D1B2A] text-white flex items-center justify-center">
                  <card.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#0D1B2A] mb-2">
                    {card.title}
                  </h3>
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
            <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">
              Explore
            </p>
            <h2 className="text-4xl font-black text-[#0D1B2A] mt-4">
              Each capability gets its own stage.
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl">
            We split the experience across dedicated pages so visitors can dive
            deep without losing context. Heroic marketing upfront, focused
            storytelling per route.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {spotlightCards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-100 p-6 hover:-translate-y-1 hover:shadow-2xl transition shadow-[0_10px_40px_rgba(15,23,42,0.08)]"
            >
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
          You pick the vision, we deliver the architecture, engineering, and
          adoption roadmap.
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
