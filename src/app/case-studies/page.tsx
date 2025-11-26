import Link from "next/link";

const stories = [
  {
    title: "FinTech Revolution",
    industry: "Financial Services",
    description:
      "Modernised a digital banking platform that increased customer engagement by 150% and reduced transaction time by 80%.",
    stats: [
      { label: "User Growth", value: "150%" },
      { label: "Processing", value: "80% faster" },
      { label: "Uptime", value: "99.9%" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=modern%20fintech%20banking%20application%20dashboard%20interface%20clean%20professional%20financial%20technology%20mobile%20app%20design%20blue%20gradient%20background%20sleek%20user%20interface%20digital%20banking%20platform&width=400&height=300&seq=case_study_1&orientation=landscape",
  },
  {
    title: "HealthTech Innovation",
    industry: "Healthcare",
    description:
      "Built a telemedicine platform connecting 10,000+ patients with providers and improving access by 200%.",
    stats: [
      { label: "Patients", value: "10K+" },
      { label: "Access", value: "200%" },
      { label: "Rating", value: "4.9/5" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=healthcare%20medical%20technology%20telemedicine%20platform%20doctor%20patient%20consultation%20interface%20modern%20healthcare%20app%20design%20clean%20medical%20dashboard%20digital%20health%20solution&width=400&height=300&seq=case_study_2&orientation=landscape",
  },
  {
    title: "E-commerce Excellence",
    industry: "Retail",
    description:
      "Created a scalable commerce stack handling 1M+ transactions and boosting conversions by 120% during peak seasons.",
    stats: [
      { label: "Transactions", value: "1M+" },
      { label: "Conversion", value: "120%" },
      { label: "Load Time", value: "0.5s" },
    ],
    image:
      "https://readdy.ai/api/search-image?query=ecommerce%20online%20shopping%20platform%20modern%20retail%20website%20product%20catalog%20shopping%20cart%20interface%20digital%20commerce%20solution%20clean%20ecommerce%20design%20mobile%20shopping%20app&width=400&height=300&seq=case_study_3&orientation=landscape",
  },
];

const industries = [
  { title: "Finance", subtitle: "Banking & FinTech" },
  { title: "Healthcare", subtitle: "Medical Technology" },
  { title: "Logistics", subtitle: "Supply Chain" },
  { title: "E-commerce", subtitle: "Online Retail" },
  { title: "Education", subtitle: "EdTech" },
];

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Stories />
      <Industries />
      <CTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Case Studies</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
          Success stories powered by strategic engineering.
        </h1>
        <p className="text-lg text-slate-600">
          Explore how we partner with teams to design, build, and launch digital products that move
          the needle.
        </p>
      </div>
    </section>
  );
}

function Stories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => (
          <article key={story.title} className="rounded-3xl border border-slate-100 overflow-hidden shadow-xl">
            <div
              className="h-48 bg-cover bg-center"
              style={{ backgroundImage: `url(${story.image})` }}
            ></div>
            <div className="p-6 space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
                {story.industry}
              </p>
              <h3 className="text-2xl font-semibold text-[#0D1B2A]">{story.title}</h3>
              <p className="text-slate-600">{story.description}</p>
              <div className="grid grid-cols-3 gap-3 text-center">
                {story.stats.map((stat) => (
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
    </section>
  );
}

function Industries() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 space-y-10 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Industries</p>
        <h2 className="text-4xl font-black text-[#0D1B2A]">Where we deliver impact.</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.title}
              className="rounded-3xl border border-slate-200 p-6 hover:-translate-y-1 transition shadow-sm"
            >
              <p className="text-2xl font-semibold text-[#0D1B2A]">{industry.title}</p>
              <p className="text-sm text-slate-500">{industry.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 bg-[#0D1B2A] text-white">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-blue-200">Next Project</p>
        <h2 className="text-4xl font-black">Let&apos;s build your success story.</h2>
        <p className="text-lg text-blue-100">
          Tell us about your goals and we&apos;ll map the architecture, delivery plan, and team to get
          you there.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact-us"
            className="bg-white text-[#0D1B2A] px-8 py-4 rounded-full font-semibold"
          >
            Book a Strategy Call
          </Link>
          <Link
            href="/services"
            className="border-2 border-white px-8 py-4 rounded-full font-semibold"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
