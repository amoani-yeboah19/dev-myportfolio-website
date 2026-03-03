"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
  { name: "WordPress", color: "#21759B" },
  { name: "React", color: "#61DAFB" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Tailwind CSS", color: "#06B6D4" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "Figma", color: "#F24E1E" },
  { name: "Git", color: "#F05032" },
];

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Tech Stack
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Tools & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card/60 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold transition-transform duration-300 group-hover:scale-110"
                style={{ color: tech.color, backgroundColor: `${tech.color}15` }}
              >
                {tech.name.charAt(0)}
              </div>
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
