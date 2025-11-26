import Image from "next/image";
import Link from "next/link";
import { Shield, Target, Users } from "lucide-react";

const values = [
  {
    title: "Experience",
    copy: "15+ years building enterprise-grade software and infrastructure.",
  },
  {
    title: "Innovation",
    copy: "Dedicated R&D pods continually experiment with AI, XR, and quantum-ready architectures.",
  },
  {
    title: "Impact",
    copy: "We measure success by the business outcomes we unlock for forward-thinking teams.",
  },
];

const differentiators = [
  {
    title: "Innovation First",
    body: "We stay ahead of technology trends and deploy cutting-edge solutions that give you a competitive advantage.",
    icon: Target,
  },
  {
    title: "Proven Reliability",
    body: "Enterprise-grade delivery models, zero compromise security, and 99.9% uptime guarantees.",
    icon: Shield,
  },
  {
    title: "Future-Ready Scalability",
    body: "Solutions that scale seamlessly from startup to enterprise, across regions and platforms.",
    icon: Users,
  },
];

const testimonials = [
  {
    quote:
      "Fundamental IT Solutions transformed our entire digital infrastructure. Operational costs dropped 40% while performance skyrocketed.",
    author: "Sarah Chen",
    role: "CTO, TechFlow Dynamics",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20business%20executive%20portrait%20confident%20CEO%20corporate%20headshot%20modern%20office%20background%20business%20suit%20leadership%20professional%20lighting%20clean%20background&width=64&height=64&seq=testimonial_1&orientation=squarish",
  },
  {
    quote:
      "The mobile platform they built exceeded all expectations. Engagement increased 300% and satisfaction scores hit an all-time high.",
    author: "Michael Rodriguez",
    role: "Founder, InnovateNow",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20business%20manager%20portrait%20confident%20executive%20corporate%20headshot%20modern%20office%20setting%20business%20attire%20leadership%20professional%20lighting%20clean%20background&width=64&height=64&seq=testimonial_2&orientation=squarish",
  },
  {
    quote:
      "Their cybersecurity practice gave us peace of mind. Zero incidents since implementation and 24/7 monitoring is exceptional.",
    author: "Jennifer Park",
    role: "VP Security, DataVault Corp",
    avatar:
      "https://readdy.ai/api/search-image?query=professional%20business%20woman%20portrait%20confident%20female%20executive%20corporate%20headshot%20modern%20office%20background%20business%20suit%20leadership%20professional%20lighting&width=64&height=64&seq=testimonial_3&orientation=squarish",
  },
];

const team = [
  {
    name: "Alex Thompson",
    title: "Chief Technology Officer",
    bio: "15+ years scaling enterprise software. Former senior architect at AWS.",
    img: "https://readdy.ai/api/search-image?query=professional%20software%20engineer%20portrait%20confident%20tech%20leader%20modern%20office%20background%20business%20casual%20attire%20friendly%20approachable%20technology%20professional%20clean%20lighting&width=300&height=400&seq=team_1&orientation=portrait",
  },
  {
    name: "Maria Garcia",
    title: "Lead Full-Stack Developer",
    bio: "React, Node.js, and cloud expert building at scale for Fortune 500s.",
    img: "https://readdy.ai/api/search-image?query=professional%20female%20software%20developer%20portrait%20confident%20tech%20expert%20modern%20office%20background%20business%20casual%20attire%20friendly%20technology%20professional%20clean%20lighting&width=300&height=400&seq=team_2&orientation=portrait",
  },
  {
    name: "David Kim",
    title: "Cybersecurity Director",
    bio: "Certified ethical hacker with enterprise, finance, and public sector experience.",
    img: "https://readdy.ai/api/search-image?query=professional%20cybersecurity%20expert%20portrait%20confident%20security%20specialist%20modern%20office%20background%20business%20attire%20technology%20professional%20clean%20lighting&width=300&height=400&seq=team_3&orientation=portrait",
  },
  {
    name: "Emily Chen",
    title: "Head of UX/UI Design",
    bio: "Award-winning designer with stints at Google and Airbnb.",
    img: "https://readdy.ai/api/search-image?query=professional%20UX%20designer%20portrait%20confident%20design%20expert%20modern%20office%20background%20creative%20professional%20business%20casual%20attire%20friendly%20clean%20lighting&width=300&height=400&seq=team_4&orientation=portrait",
  },
];

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ValuesSection />
      <WhyChoose />
      <Testimonials />
      <TeamSection />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8 py-24">
        <p className="text-slate-300 uppercase tracking-[0.4em]">About Us</p>
        <h1 className="text-4xl md:text-6xl font-black text-white">
          We reimagine what enterprise technology can do.
        </h1>
        <p className="text-xl text-slate-300">
          Elite engineers, architects, and designers collaborating across continents to build
          intelligent ecosystems that adapt faster than the market shifts.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/case-studies"
            className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold"
          >
            View Success Stories
          </Link>
          <Link
            href="/careers"
            className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold"
          >
            Join the Team
          </Link>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Our Promise</p>
        <h2 className="text-4xl font-black text-[#0D1B2A]">
          We combine technical precision with bold imagination.
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          {values.map((value) => (
            <div
              key={value.title}
              className="p-6 rounded-3xl border border-slate-100 shadow-[0_15px_45px_rgba(13,27,42,0.08)]"
            >
              <h3 className="text-xl font-semibold text-[#0D1B2A]">{value.title}</h3>
              <p className="text-slate-600 mt-3">{value.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  return (
    <section className="py-20 bg-[#0D1B2A] text-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Why Choose Us</p>
            <h2 className="text-4xl font-black mt-4">Why teams trust Fundamental IT Solutions.</h2>
          </div>
          <p className="text-lg text-blue-100 max-w-2xl">
            We obsess over the details so our partners can focus on outcomes. Strategy, design,
            engineering, adoption—we align every stage around measurable value.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white/5 border border-white/10 p-6 space-y-4"
            >
              <item.icon className="w-10 h-10 text-white" />
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-blue-100">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Client Voices</p>
          <h2 className="text-4xl font-black text-[#0D1B2A]">What our partners say.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimony) => (
            <article key={testimony.author} className="bg-white rounded-3xl border border-slate-100 p-6 shadow-xl">
              <div className="flex items-center space-x-4 mb-4">
                <Image
                  src={testimony.avatar}
                  alt={testimony.author}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-[#0D1B2A]">{testimony.author}</p>
                  <p className="text-sm text-slate-500">{testimony.role}</p>
                </div>
              </div>
              <p className="text-slate-600">“{testimony.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Leadership</p>
          <h2 className="text-4xl font-black text-[#0D1B2A]">Meet our expert team.</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.name} className="rounded-3xl border border-slate-100 shadow-[0_10px_40px_rgba(13,27,42,0.08)] overflow-hidden">
              <div className="h-80 overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-2">
                <p className="text-lg font-semibold text-[#0D1B2A]">{member.name}</p>
                <p className="text-sm text-blue-500 font-medium">{member.title}</p>
                <p className="text-sm text-slate-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/careers"
            className="inline-flex items-center px-6 py-3 rounded-full bg-[#0D1B2A] text-white font-semibold"
          >
            We&apos;re hiring — explore roles
          </Link>
        </div>
      </div>
    </section>
  );
}
