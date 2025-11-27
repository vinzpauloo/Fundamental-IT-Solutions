import type { ReactNode } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    heading: "Office Address",
    lines: ["20th Drive, Upper Mckinley Rd", " Taguig, Metro Manila", "Philippines"],
  },
  {
    icon: Phone,
    heading: "Phone Number",
    lines: ["+63 9659700823"],
  },
  {
    icon: Mail,
    heading: "Email",
    lines: ["joanna-admin@fundamental-it-solutions.com"],
  },
  {
    icon: Clock,
    heading: "Business Hours",
    lines: ["Mon - Fri: 9:00 AM - 6:00 PM PST", "Sat - Sun: Closed"],
  },
];

const inputClass =
  "w-full px-4 py-3 border border-slate-200 rounded-2xl focus:border-[#0D1B2A] focus:ring-2 focus:ring-[#E8F4FD] text-sm text-slate-700";

export default function ContactPage() {
  return (
    <main className="bg-white">
      <Hero />
      <ContactSection />
    </main>
  );
}

function Hero() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <div className="max-w-4xl mx-auto px-6 space-y-6">
        <p className="text-sm uppercase tracking-[0.4em] text-[#0D1B2A]">Contact</p>
        <h1 className="text-4xl md:text-5xl font-black text-[#0D1B2A]">
          Ready to transform your business?
        </h1>
        <p className="text-lg text-slate-600">
          Share your big idea, product roadmap, or technical challenge. We&apos;ll respond within one
          business day.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div className="p-8 rounded-3xl border border-slate-100 shadow-xl">
          <h2 className="text-3xl font-black text-[#0D1B2A] mb-6">Send us a message</h2>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <Field label="First Name *">
                <input type="text" required className={inputClass} />
              </Field>
              <Field label="Last Name *">
                <input type="text" required className={inputClass} />
              </Field>
            </div>
            <Field label="Email Address *">
              <input type="email" required className={inputClass} />
            </Field>
            <Field label="Company">
              <input type="text" className={inputClass} />
            </Field>
            <Field label="Service Interested In">
              <select className={inputClass}>
                <option value="">Select a service</option>
                <option value="web-development">Web & App Development</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="design">UI/UX Design</option>
                <option value="consulting">IT Consulting</option>
              </select>
            </Field>
            <Field label="Message *">
              <textarea
                rows={4}
                required
                className={`${inputClass} resize-none`}
                placeholder="Tell us about your project"
              />
            </Field>
            <button
              type="submit"
              className="w-full bg-[#0D1B2A] text-white py-4 rounded-full font-semibold inline-flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
        <div className="space-y-8">
          <div className="grid gap-6">
            {contactDetails.map((detail) => (
              <div
                key={detail.heading}
                className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-gray-50"
              >
                <detail.icon className="w-6 h-6 text-[#0D1B2A]" />
                <div>
                  <p className="font-semibold text-[#0D1B2A]">{detail.heading}</p>
                  {detail.lines.map((line) => (
                    <p key={line} className="text-sm text-slate-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-3xl overflow-hidden border border-slate-100">
            <div
              className="h-64 bg-cover bg-center"
              style={{ backgroundImage: "url('https://public.readdy.ai/gen_page/map_placeholder_1280x720.png')" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="text-sm font-semibold text-[#0D1B2A] space-y-2 block">
      <span>{label}</span>
      {children}
    </label>
  );
}

