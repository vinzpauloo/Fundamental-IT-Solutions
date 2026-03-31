"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";

export function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-20 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-primary-700/25 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-accent-500/15 blur-[80px]" />
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary-300">
            Contact Us
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Let&apos;s Build Something Great Together
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-6 text-lg leading-relaxed text-primary-200/80 sm:text-xl"
          >
            Ready to transform your technology? Reach out and let&apos;s discuss
            how we can help your business thrive.
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
