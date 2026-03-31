"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary-950 py-24 sm:py-32 lg:py-40">
      {/* Gradient mesh background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-1/4 -right-1/4 h-[600px] w-[600px] rounded-full bg-primary-700/30 blur-[120px]" />
        <div className="absolute -bottom-1/4 -left-1/4 h-[500px] w-[500px] rounded-full bg-accent-500/20 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-600/20 blur-[80px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-400/30 bg-primary-800/50 px-4 py-2 text-sm text-primary-200 backdrop-blur-sm"
          >
            <Sparkles size={16} className="text-accent-400" />
            Enterprise Technology Solutions
          </motion.div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Technology,{" "}
            <span className="bg-gradient-to-r from-primary-300 via-accent-400 to-primary-300 bg-clip-text text-transparent">
              Fundamentally
            </span>{" "}
            Right.
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 text-lg leading-relaxed text-primary-200/80 sm:text-xl lg:text-2xl"
          >
            From AI-driven solutions to cloud infrastructure, we deliver the
            consulting and engineering expertise that transforms how businesses
            operate.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Link
              href="/contact"
              className={buttonStyles({ size: "lg", className: "group" })}
            >
              Schedule a Consultation
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
              Explore Services
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
