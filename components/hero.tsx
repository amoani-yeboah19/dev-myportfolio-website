"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

function FloatingCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className={`rounded-xl border border-border/50 bg-card/60 px-4 py-3 backdrop-blur-md shadow-lg ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Animated Background Blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl md:h-[500px] md:w-[500px]" />
        <div className="animate-blob animation-delay-2000 absolute -right-40 top-20 h-72 w-72 rounded-full bg-primary/8 blur-3xl md:h-[400px] md:w-[400px]" />
        <div className="animate-blob animation-delay-4000 absolute -bottom-20 left-1/3 h-64 w-64 rounded-full bg-primary/6 blur-3xl md:h-[350px] md:w-[350px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          >
            <Sparkles size={16} />
            <span>Available for freelance work</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold leading-tight tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
          >
            I Design & Build{" "}
            <span className="text-primary">Powerful</span> Web Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground lg:mx-0"
          >
            I help businesses grow with modern websites, AI tools, and smart
            design. Turning ideas into high-converting digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <a
              href="#projects"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-lg hover:shadow-primary/25"
            >
              View My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side - Floating Cards */}
        <div className="relative hidden h-[420px] w-full max-w-md flex-shrink-0 lg:block">
          <FloatingCard className="absolute left-0 top-8" delay={0.5}>
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Code2 size={18} />
              </div>
              <div>
                <p className="text-xs font-medium text-foreground">
                  React / Next.js
                </p>
                <p className="text-xs text-muted-foreground">
                  Frontend Development
                </p>
              </div>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute right-0 top-24" delay={0.7}>
            <pre className="text-xs text-primary">
              <code>
                {`const site = {\n  design: "modern",\n  speed: "blazing"\n}`}
              </code>
            </pre>
          </FloatingCard>

          <FloatingCard className="absolute left-8 top-52" delay={0.9}>
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-400" />
              <span className="text-xs font-medium text-foreground">
                Live &mdash; 99.9% Uptime
              </span>
            </div>
          </FloatingCard>

          <FloatingCard className="absolute right-4 bottom-8" delay={1.1}>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="h-7 w-7 rounded-full bg-primary/30 border-2 border-card" />
                <div className="h-7 w-7 rounded-full bg-primary/50 border-2 border-card" />
                <div className="h-7 w-7 rounded-full bg-primary/70 border-2 border-card" />
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                50+ happy clients
              </span>
            </div>
          </FloatingCard>

          {/* Central glow */}
          <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border/50 p-1.5"
        >
          <motion.div className="h-2 w-1 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
