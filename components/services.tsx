"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Palette,
  Code2,
  ShoppingCart,
  Gauge,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Custom, pixel-perfect designs that capture your brand identity and engage visitors from the first scroll.",
  },
  {
    icon: Code2,
    title: "WordPress Development",
    description:
      "Custom themes, plugins, and full WordPress builds tailored to your business needs with clean, maintainable code.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Setup",
    description:
      "WooCommerce and Shopify stores built for conversion, with seamless checkout flows and inventory management.",
  },
  {
    icon: Gauge,
    title: "Website Optimization",
    description:
      "Performance audits, speed optimization, and SEO improvements to ensure your site loads fast and ranks high.",
  },
  {
    icon: Sparkles,
    title: "AI-powered Solutions",
    description:
      "Integrate AI tools and automation into your web projects for smarter workflows and enhanced user experiences.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative px-6 py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute left-0 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Services
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            What I Can Do For You
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            End-to-end web solutions from concept to deployment, optimized for performance and results.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
