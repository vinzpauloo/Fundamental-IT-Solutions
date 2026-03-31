"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 lg:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-primary-700/20 blur-[100px]" />
        <div className="absolute -bottom-1/3 left-0 h-[300px] w-[300px] rounded-full bg-accent-500/15 blur-[80px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to Transform Your{" "}
            <span className="text-accent-400">Technology?</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-200/80">
            Let&apos;s discuss how our expertise can help you build a stronger,
            smarter, and more scalable technology foundation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className={buttonStyles({
                size: "lg",
                className: "group bg-white text-primary-800 hover:bg-primary-50 active:bg-primary-100",
              })}
            >
              Get Started Today
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/services"
              className={buttonStyles({
                variant: "outline",
                size: "lg",
                className: "border-primary-400/40 text-primary-200 hover:bg-primary-800/50 hover:text-white",
              })}
            >
              View Our Services
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
