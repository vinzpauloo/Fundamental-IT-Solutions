import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Check, Palette, Settings2, Shield, Cloud, Server } from "lucide-react";

const services = [
  {
    title: "Web & App Development",
    icon: "/service-icons/Web-app-icon.png",
    description:
      "Custom web applications, mobile apps, and PWAs built with modern frameworks and best practices.",
    bullets: ["React & Vue.js", "iOS & Android Apps", "Progressive Web Apps"],
    accent: "bg-blue-100 text-blue-600s",
  },
  {
    title: "Cloud Solutions",
    icon: "/service-icons/cloud-icon.png",
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
    icon: "/service-icons/consulting-icon.png",
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
  { label: "React Native", abbr: "RN", color: "text-purple-600", bg: "bg-purple-50" },
  { label: "PostgreSQL", abbr: "PG", color: "text-indigo-600", bg: "bg-indigo-50" },
  { label: "Docker", abbr: "Dk", color: "text-red-500", bg: "bg-red-50" },
  { label: "Kubernetes", abbr: "K8s", color: "text-teal-600", bg: "bg-teal-50" },
  { label: "GraphQL", abbr: "GQL", color: "text-pink-500", bg: "bg-pink-50" },
  { label: "TypeScript", abbr: "TS", color: "text-cyan-600", bg: "bg-cyan-50" },
];


export default function ServicesPage() {
  return (
    <main className="bg-white">
      <ServicesHero />
      <ServicesGrid />
      <TechStack />
      {/* <CaseStudies /> */}
    </main>
  );
}

function ServicesHero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-5xl font-bold uppercase tracking-[0.4em] text-[#0D1B2A]"> Our Services</h1>
        <p className="text-xl md:text-xl text-slate-600">
          Comprehensive IT solutions tailored to meet your business needs and drive digital transformation across all industries.
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
                {typeof service.icon === "string" ? (
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <service.icon className="w-6 h-6" />
                )}
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
              <Button className="w-full justify-start font-bold bg-transparent 
              border-2 hover:bg-transparent text-[#0D1B2A] hover:text-slate-200 mt-1">Learn More →</Button>
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

// function CaseStudies() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-6xl mx-auto px-6 space-y-12">
//         <div className="text-center space-y-4">
//           <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Case Studies</p>
//           <h2 className="text-4xl font-black text-[#0D1B2A]">Proof in the outcomes.</h2>
//         </div>
//         <div className="grid md:grid-cols-3 gap-8">
//           {caseStudies.map((item) => (
//             <article key={item.title} className="rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
//               <div
//                 className="h-48 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               ></div>
//               <div className="p-6 space-y-4">
//                 <div className="text-sm uppercase tracking-[0.4em] text-slate-400">
//                   {item.industry}
//                 </div>
//                 <h3 className="text-2xl font-semibold text-[#0D1B2A]">{item.title}</h3>
//                 <p className="text-slate-600">{item.summary}</p>
//                 <div className="grid grid-cols-3 gap-4 text-center">
//                   {item.stats.map((stat) => (
//                     <div key={stat.label}>
//                       <p className="text-xl font-bold text-[#0D1B2A]">{stat.value}</p>
//                       <p className="text-xs uppercase tracking-wide text-slate-400">
//                         {stat.label}
//                       </p>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
