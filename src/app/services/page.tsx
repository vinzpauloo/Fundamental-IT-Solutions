import { Check, Code2, Palette, Settings2, Shield, Cloud, Server } from "lucide-react";

const services = [
  {
    title: "Web & App Development",
    icon: Code2,
    description:
      "Custom web applications, mobile apps, and PWAs built with modern frameworks and best practices.",
    bullets: ["React & Vue.js", "iOS & Android Apps", "Progressive Web Apps"],
    accent: "bg-blue-100 text-blue-600",
  },
  {
    title: "Cloud Solutions",
    icon: Cloud,
    description:
      "Cloud migration, infrastructure setup, and managed services to optimise performance and cost.",
    bullets: ["AWS & Azure", "DevOps & CI/CD", "Cloud Architecture"],
    accent: "bg-green-100 text-green-600",
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    description:
      "Comprehensive security audits, threat assessment, and protection systems for your assets.",
    bullets: ["Security Audits", "Penetration Testing", "Compliance"],
    accent: "bg-red-100 text-red-600",
  },
  {
    title: "UI/UX Design",
    icon: Palette,
    description:
      "User-centered design solutions that create intuitive, engaging, conversion-optimised experiences.",
    bullets: ["Research & Testing", "Wireframes & Prototypes", "Design Systems"],
    accent: "bg-purple-100 text-purple-600",
  },
  {
    title: "IT Consulting",
    icon: Settings2,
    description:
      "Strategic consulting to help you make informed decisions and optimise infrastructure.",
    bullets: ["Digital Strategy", "Technology Assessment", "Process Optimisation"],
    accent: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Managed DevOps",
    icon: Server,
    description:
      "Automation pipelines, monitoring, and SRE practices that keep releases reliable.",
    bullets: ["Infrastructure as Code", "Observability", "24/7 Support"],
    accent: "bg-teal-100 text-teal-600",
  },
];

const technologies = [
  { label: "React", abbr: "R", color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Node.js", abbr: "N", color: "text-green-600", bg: "bg-green-50" },
  { label: "Python", abbr: "Py", color: "text-yellow-500", bg: "bg-yellow-50" },
  { label: "AWS", abbr: "AWS", color: "text-orange-500", bg: "bg-orange-50" },
  { label: "Flutter", abbr: "Fl", color: "text-purple-600", bg: "bg-purple-50" },
  { label: "PostgreSQL", abbr: "PG", color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Docker", abbr: "Dk", color: "text-red-500", bg: "bg-red-50" },
  { label: "Kubernetes", abbr: "K8s", color: "text-teal-600", bg: "bg-teal-50" },
  { label: "GraphQL", abbr: "GQL", color: "text-pink-500", bg: "bg-pink-50" },
  { label: "TypeScript", abbr: "TS", color: "text-cyan-600", bg: "bg-cyan-50" },
];

const caseStudies = [
  {
    title: "FinTech Revolution",
    industry: "Financial Services",
    summary:
      "Developed a comprehensive banking platform, increasing engagement by 150% and reducing processing time by 80%.",
    stats: [
      { label: "User Growth", value: "150%" },
      { label: "Faster Processing", value: "80%" },
      { label: "Uptime", value: "99.9%" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=modern%20fintech%20banking%20application%20dashboard%20interface%20clean%20professional%20financial%20technology%20mobile%20app%20design%20blue%20gradient%20background%20sleek%20user%20interface%20digital%20banking%20platform&width=400&height=300&seq=case_study_1&orientation=landscape",
  },
  {
    title: "HealthTech Innovation",
    industry: "Healthcare",
    summary:
      "Built a telemedicine platform that connected 10,000+ patients with healthcare providers, improving access by 200%.",
    stats: [
      { label: "Patients", value: "10K+" },
      { label: "Better Access", value: "200%" },
      { label: "User Rating", value: "4.9/5" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=healthcare%20medical%20technology%20telemedicine%20platform%20doctor%20patient%20consultation%20interface%20modern%20healthcare%20app%20design%20clean%20medical%20dashboard%20digital%20health%20solution&width=400&height=300&seq=case_study_2&orientation=landscape",
  },
  {
    title: "E-commerce Excellence",
    industry: "Retail",
    summary:
      "Created a scalable platform that handled 1M+ transactions and increased conversion rates by 120% during peak seasons.",
    stats: [
      { label: "Transactions", value: "1M+" },
      { label: "Conversion", value: "120%" },
      { label: "Load Time", value: "0.5s" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=ecommerce%20online%20shopping%20platform%20modern%20retail%20website%20product%20catalog%20shopping%20cart%20interface%20digital%20commerce%20solution%20clean%20ecommerce%20design%20mobile%20shopping%20app&width=400&height=300&seq=case_study_3&orientation=landscape",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServicesHero />
      <ServicesGrid />
      <TechStack />
      <CaseStudies />
    </main>
  );
}

function ServicesHero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Services</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
          Comprehensive IT solutions tailored to your business.
        </h1>
        <p className="text-lg text-slate-600">
          From strategy through delivery and support, we build scalable systems that accelerate
          digital transformation.
        </p>
      </div>
    </section>
  );
}

function ServicesGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-3xl border border-slate-100 shadow-xl">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.accent}`}>
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-semibold text-[#0D1B2A]">{service.title}</h3>
              <p className="text-slate-600 mt-3 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.bullets.map((item) => (
                  <li key={item} className="flex items-center text-slate-600 text-sm">
                    <Check className="w-4 h-4 text-green-500 mr-2" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStack() {
  return (
    <section className="py-20 bg-gray-50" id="cloud">
      <div className="max-w-6xl mx-auto px-6 space-y-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Technology Stack</p>
        <h2 className="text-4xl font-black text-[#0D1B2A]">Tools we wield daily.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.label}
              className={`${tech.bg} border border-slate-100 rounded-2xl p-6 text-center shadow-sm space-y-3`}
            >
              <div
                className={`${tech.color} text-xl font-bold w-14 h-14 rounded-full border border-current mx-auto flex items-center justify-center`}
              >
                {tech.abbr}
              </div>
              <p className="font-semibold text-[#0D1B2A]">{tech.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Case Studies</p>
          <h2 className="text-4xl font-black text-[#0D1B2A]">Proof in the outcomes.</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="p-6 space-y-4">
                <div className="text-sm uppercase tracking-[0.4em] text-slate-400">
                  {item.industry}
                </div>
                <h3 className="text-2xl font-semibold text-[#0D1B2A]">{item.title}</h3>
                <p className="text-slate-600">{item.summary}</p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  {item.stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-xl font-bold text-[#0D1B2A]">{stat.value}</p>
                      <p className="text-xs uppercase tracking-wide text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
