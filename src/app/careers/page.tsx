import Link from "next/link";
import { Heart, GraduationCap, Users, Trophy } from "lucide-react";

const roles = [
  {
    title: "Senior Full-Stack Developer",
    location: "Remote • Full-time",
    description:
      "Seeking an experienced engineer with React, Node.js, and cloud expertise to lead feature squads.",
    badge: "New",
  },
  {
    title: "DevOps Engineer",
    location: "San Francisco, CA • Full-time",
    description:
      "Help scale infrastructure and improve deployment processes across multi-cloud environments.",
  },
  {
    title: "UX/UI Designer",
    location: "New York, NY • Full-time",
    description:
      "Craft intuitive enterprise experiences and contribute to our design system evolution.",
  },
];

const benefits = [
  {
    title: "Work-Life Balance",
    icon: Heart,
    copy: "Flexible hours, remote options, and unlimited PTO support a healthy rhythm.",
  },
  {
    title: "Continuous Learning",
    icon: GraduationCap,
    copy: "Annual learning budgets, conferences, and internal workshops.",
  },
  {
    title: "Collaborative Culture",
    icon: Users,
    copy: "Work with world-class engineers, architects, and designers.",
  },
  {
    title: "Competitive Benefits",
    icon: Trophy,
    copy: "Comprehensive health cover, equity options, and performance bonuses.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-white">
      <Hero />
      <OpenRoles />
      <Benefits />
    </main>
  );
}

function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Careers</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
          Join a team obsessed with building the future.
        </h1>
        <p className="text-lg text-slate-600">
          We&apos;re remote-first with hubs in SF, NYC, and London. If you love solving complex problems
          with kind, talented people—we want to hear from you.
        </p>
      </div>
    </section>
  );
}

function OpenRoles() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 space-y-10">
        <h2 className="text-3xl font-black text-[#0D1B2A]">Open Positions</h2>
        <div className="space-y-6">
          {roles.map((role) => (
            <div key={role.title} className="p-6 rounded-3xl border border-slate-100 shadow-md">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-[#0D1B2A]">{role.title}</h3>
                    {role.badge ? (
                      <span className="text-xs uppercase tracking-widest bg-green-100 text-green-600 px-3 py-1 rounded-full">
                        {role.badge}
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">{role.location}</p>
                </div>
                <Link
                  href="/contact-us"
                  className="text-sm font-semibold text-[#0D1B2A] border border-slate-200 px-5 py-2 rounded-full"
                >
                  Apply Now
                </Link>
              </div>
              <p className="text-slate-600 mt-4">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <h2 className="text-3xl font-black text-[#0D1B2A] text-center">Why work with us?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-6 rounded-3xl border border-slate-200 bg-white flex items-start gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#E8F4FD] flex items-center justify-center text-[#0D1B2A]">
                <benefit.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#0D1B2A]">{benefit.title}</h3>
                <p className="text-slate-600 mt-2">{benefit.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
