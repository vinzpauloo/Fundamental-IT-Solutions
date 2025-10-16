import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import LayoutContainer from "@/components/layout/LayoutContainer";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  ArrowRight,
  Star,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    description: "Speak directly with our team",
    value: "+1 (555) 123-4567",
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us a detailed message",
    value: "hello@fundamental-it.com",
    action: "Send Email",
  },
  {
    icon: Calendar,
    title: "Schedule",
    description: "Book a consultation call",
    value: "Free 30-minute consultation",
    action: "Schedule Call",
  },
];

const officeInfo = [
  {
    title: "Main Office",
    location: "San Francisco, CA",
    address: "123 Tech Street, San Francisco, CA 94105",
    phone: "+1 (555) 123-4567",
    hours: "Mon-Fri: 9AM-6PM PST",
  },
  {
    title: "Development Hub",
    location: "Austin, TX",
    address: "456 Innovation Blvd, Austin, TX 78701",
    phone: "+1 (555) 123-4568",
    hours: "Mon-Fri: 8AM-5PM CST",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO, TechCorp",
    content:
      "Working with Fundamental IT was a game-changer for our business. They delivered exactly what we needed, on time and within budget.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder, StartupXYZ",
    content:
      "The team's expertise and professionalism exceeded our expectations. Highly recommend their services!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateCo",
    content:
      "Outstanding communication and technical skills. They made complex development look effortless.",
    rating: 5,
  },
];

export default function ContactFormSection() {
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
          {/* Contact form and info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

              <div className="relative p-8 sm:p-12 space-y-6 sm:space-y-8">
                <div className="space-y-4 sm:space-y-6">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    Get In <span className="text-slate-200">Touch</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
                    Ready to start your next project? Fill out the form below
                    and we&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-2">
                      <label className="text-slate-200 font-medium text-sm sm:text-base">
                        First Name
                      </label>
                      <Input
                        type="text"
                        placeholder="John"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-200 font-medium text-sm sm:text-base">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        placeholder="Doe"
                        className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-200 font-medium text-sm sm:text-base">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-200 font-medium text-sm sm:text-base">
                      Company
                    </label>
                    <Input
                      type="text"
                      placeholder="Your Company"
                      className="bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 focus:border-slate-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-200 font-medium text-sm sm:text-base">
                      Project Type
                    </label>
                    <select className="w-full p-3 sm:p-4 bg-slate-800/50 border border-slate-600 text-white rounded-lg focus:border-slate-500 focus:outline-none">
                      <option value="">Select project type</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="ai">AI & Machine Learning</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-slate-200 font-medium text-sm sm:text-base">
                      Project Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project, timeline, and requirements..."
                      className="w-full p-3 sm:p-4 bg-slate-800/50 border border-slate-600 text-white placeholder:text-slate-400 rounded-lg focus:border-slate-500 focus:outline-none resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 sm:py-4 text-base sm:text-lg transition-all duration-500"
                  >
                    <span className="flex items-center justify-center">
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                    </span>
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact methods */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900">
                  Other Ways to <span className="text-slate-700">Connect</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
                  Choose the method that works best for you. We&apos;re always ready
                  to help.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {contactMethods.map((method, index) => (
                  <Card
                    key={index}
                    className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <CardHeader className="pb-3 sm:pb-4">
                      <div className="flex items-center space-x-4 sm:space-x-6">
                        <div className="inline-flex p-3 sm:p-4 rounded-xl bg-slate-700 group-hover:scale-110 transition-all duration-300">
                          <method.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                            {method.title}
                          </CardTitle>
                          <CardDescription className="text-slate-600 group-hover:text-slate-700 transition-colors">
                            {method.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3 sm:space-y-4">
                        <p className="text-slate-800 font-semibold text-sm sm:text-base">
                          {method.value}
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-slate-300 text-slate-700 hover:text-white hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300"
                        >
                          {method.action}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Office locations */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl sm:rounded-3xl border border-slate-700/30"></div>

            <div className="relative p-8 sm:p-12 space-y-6 sm:space-y-8">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  Our <span className="text-slate-200">Locations</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300">
                  Find us in multiple locations across the United States
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {officeInfo.map((office, index) => (
                  <div
                    key={index}
                    className="relative p-6 sm:p-8 bg-slate-800/50 rounded-xl border border-slate-700/50 hover:border-slate-600/30 transition-all duration-300"
                  >
                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                          {office.title}
                        </h4>
                        <p className="text-slate-300 font-semibold">
                          {office.location}
                        </p>
                      </div>

                      <div className="space-y-3 sm:space-y-4 text-slate-200">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base">
                            {office.address}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                          <span className="text-sm sm:text-base">
                            {office.phone}
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                          <span className="text-sm sm:text-base">
                            {office.hours}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="space-y-8 sm:space-y-12">
            <div className="text-center space-y-4 sm:space-y-6">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight">
                <span className="text-slate-900">What Our</span>
                <span className="block text-slate-700">Clients Say</span>
              </h2>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 font-medium leading-relaxed px-4">
                Don&apos;t just take our word for it. Here&apos;s what our clients have to
                say about working with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                >
                  <CardHeader className="pb-4 sm:pb-6">
                    <div className="flex items-center space-x-1 mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <CardDescription className="text-slate-600 text-base sm:text-lg leading-relaxed group-hover:text-slate-700 transition-colors italic">
                      &ldquo;{testimonial.content}&rdquo;
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1">
                      <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-slate-500 text-sm sm:text-base">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="relative text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>

            <div className="relative p-8 sm:p-12 md:p-16 lg:p-20 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                  Ready to Get
                  <span className="block text-slate-200">Started?</span>
                </h3>
                <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
                  Join hundreds of satisfied clients who chose us to bring their
                  vision to life.
                  <span className="block mt-2 font-semibold text-slate-200">
                    Your next big project starts here.
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
                <Button
                  size="lg"
                  className="group bg-slate-800 hover:bg-slate-700 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-slate-900/25 w-full sm:w-auto"
                >
                  <span className="flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full transition-all duration-500 w-full sm:w-auto"
                >
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    </section>
  );
}
