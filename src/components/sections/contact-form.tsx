"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, ChevronDown } from "lucide-react";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animated-text";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { COMPANY_INFO } from "@/lib/constants";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: COMPANY_INFO.email,
    href: `mailto:${COMPANY_INFO.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY_INFO.phone,
    href: `tel:${COMPANY_INFO.phone}`,
  },
  {
    icon: MapPin,
    label: "Office",
    value: COMPANY_INFO.address,
    href: undefined,
  },
];

const serviceOptions = [
  "IT Consulting",
  "Software Development",
  "AI & ML Solutions",
  "Data Analytics",
  "Cloud Services",
  "Cybersecurity",
  "Digital Transformation",
  "DevOps",
  "Other",
];

const inputBaseStyles = cn(
  "w-full rounded-xl border border-border bg-surface px-4 py-3",
  "text-foreground placeholder:text-muted-foreground",
  "transition-colors duration-200",
  "focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20",
  "aria-[invalid=true]:border-red-500 aria-[invalid=true]:focus:border-red-500 aria-[invalid=true]:focus:ring-red-500/20",
);

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
}

function validateForm(form: FormData): FormErrors {
  const errors: FormErrors = {};
  const firstName = form.get("firstName") as string;
  const lastName = form.get("lastName") as string;
  const email = form.get("email") as string;
  const message = form.get("message") as string;

  if (!firstName || firstName.trim().length < 2) {
    errors.firstName = "First name must be at least 2 characters.";
  }
  if (!lastName || lastName.trim().length < 2) {
    errors.lastName = "Last name must be at least 2 characters.";
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!message || message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
  }

  function clearFieldError(field: keyof FormErrors) {
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Contact Info Sidebar */}
        <FadeIn className="lg:col-span-2">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Get in Touch
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                Have a project in mind or need technology guidance? We&apos;d
                love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const Content = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="mt-0.5 font-medium text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block rounded-lg transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 -mx-2 px-2 py-2"
                    >
                      {Content}
                    </a>
                  );
                }

                return (
                  <div key={item.label} className="px-2 py-2">
                    {Content}
                  </div>
                );
              })}
            </div>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn direction="right" className="lg:col-span-3">
          <div className="rounded-2xl border border-border bg-surface p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-700">
                  <Send size={28} />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Thank You for Your Interest
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Our contact form will be fully active soon. In the meantime,
                  please reach out directly at{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="font-medium text-primary-700 underline"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </p>
                <Button
                  variant="secondary"
                  className="mt-6"
                  onClick={() => {
                    setSubmitted(false);
                    setErrors({});
                  }}
                >
                  Back to Form
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <FormField
                    id="firstName"
                    label="First Name"
                    error={errors.firstName}
                  >
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      placeholder="John"
                      aria-invalid={!!errors.firstName}
                      aria-describedby={
                        errors.firstName ? "firstName-error" : undefined
                      }
                      onChange={() => clearFieldError("firstName")}
                      className={inputBaseStyles}
                    />
                  </FormField>
                  <FormField
                    id="lastName"
                    label="Last Name"
                    error={errors.lastName}
                  >
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      placeholder="Doe"
                      aria-invalid={!!errors.lastName}
                      aria-describedby={
                        errors.lastName ? "lastName-error" : undefined
                      }
                      onChange={() => clearFieldError("lastName")}
                      className={inputBaseStyles}
                    />
                  </FormField>
                </div>

                <FormField id="email" label="Email Address" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="john@company.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    onChange={() => clearFieldError("email")}
                    className={inputBaseStyles}
                  />
                </FormField>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your Company Inc."
                    className={inputBaseStyles}
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      className={cn(inputBaseStyles, "appearance-none pr-10")}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select a service...
                      </option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <ChevronDown
                      size={18}
                      className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </div>
                </div>

                <FormField id="message" label="Message" error={errors.message}>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your project or what you're looking for..."
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                    onChange={() => clearFieldError("message")}
                    className={cn(inputBaseStyles, "resize-none")}
                  />
                </FormField>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-medium text-foreground"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
