const posts = [
  {
    title: "The Future of AI in Enterprise Software Development",
    tag: "AI & Machine Learning",
    date: "March 15, 2024",
    summary:
      "Explore how artificial intelligence is reshaping software development and what it means for tech-forward companies.",
    image:
      "https://readdy.ai/api/search-image?query=artificial%20intelligence%20machine%20learning%20technology%20innovation%20digital%20transformation%20AI%20algorithms%20data%20science%20futuristic%20technology%20concept%20modern%20tech%20background&width=400&height=300&seq=blog_1&orientation=landscape",
  },
  {
    title: "Cloud Migration Best Practices for 2024",
    tag: "Cloud Solutions",
    date: "March 10, 2024",
    summary:
      "A comprehensive guide to cloud migration strategies, pitfalls to avoid, and maximising ROI from cloud investments.",
    image:
      "https://readdy.ai/api/search-image?query=cloud%20computing%20infrastructure%20digital%20transformation%20server%20technology%20data%20center%20modern%20cloud%20services%20scalable%20architecture%20enterprise%20solutions&width=400&height=300&seq=blog_2&orientation=landscape",
  },
  {
    title: "Zero Trust Security: Implementation Roadmap",
    tag: "Cybersecurity",
    date: "March 5, 2024",
    summary:
      "Learn how to implement a zero trust security model and defend against modern threats with advanced frameworks.",
    image:
      "https://readdy.ai/api/search-image?query=cybersecurity%20data%20protection%20digital%20security%20network%20safety%20encryption%20technology%20secure%20systems%20cyber%20defense%20information%20security%20modern%20protection&width=400&height=300&seq=blog_3&orientation=landscape",
  },
];

export default function InsightsPage() {
  return (
    <main className="bg-white">
      <section className="py-20 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Insights</p>
          <h1 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
            Latest thinking from the Fundamental IT team.
          </h1>
          <p className="text-lg text-slate-600">
            Trends, best practices, and playbooks for transforming your organisation with technology.
          </p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-slate-100 overflow-hidden shadow-xl hover:-translate-y-1 transition"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
              <div className="p-6 space-y-3">
                <div className="flex items-center text-xs uppercase tracking-[0.4em] text-slate-400 gap-3">
                  <span>{post.tag}</span>
                  <span className="text-slate-300">•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-2xl font-semibold text-[#0D1B2A]">{post.title}</h2>
                <p className="text-slate-600">{post.summary}</p>
                <button className="text-[#0D1B2A] font-semibold">Read More →</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
