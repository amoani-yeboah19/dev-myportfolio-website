"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "WordPress",
    detail: "Custom Themes & WooCommerce",
    level: 95,
  },
  {
    name: "React / Next.js",
    detail: "Modern Frontend Apps",
    level: 90,
  },
  {
    name: "Tailwind CSS",
    detail: "Utility-First Styling",
    level: 92,
  },
  {
    name: "JavaScript",
    detail: "ES6+ & TypeScript",
    level: 88,
  },
  {
    name: "AI Tools",
    detail: "Cursor, v0, ChatGPT",
    level: 85,
  },
  {
    name: "UI/UX Design",
    detail: "Figma & Prototyping",
    level: 87,
  },
];

function SkillCard({
  skill,
  index,
}: {
  skill: (typeof skills)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl border border-border/50 bg-card/60 p-5 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{skill.name}</h3>
        <span className="text-xs font-medium text-primary">{skill.level}%</span>
      </div>
      <p className="mb-3 text-xs text-muted-foreground">{skill.detail}</p>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.1, ease: "easeOut" }}
          className="h-full rounded-full bg-primary"
        />
      </div>
    </motion.div>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative px-6 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            About Me
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Crafting Digital Experiences That Convert
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              {"I'm a frontend developer and WordPress specialist focused on performance, UI/UX, and conversion-driven websites. With years of experience building everything from custom WordPress themes to modern React applications, I bring a unique blend of design sensibility and technical expertise to every project."}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {"I believe great websites aren't just beautiful — they're fast, accessible, and built to convert. Whether you need a stunning portfolio, a high-performance e-commerce store, or a custom web application, I've got you covered."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="rounded-lg border border-border/50 bg-secondary/50 px-5 py-3">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-xs text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-secondary/50 px-5 py-3">
                <p className="text-2xl font-bold text-primary">3+</p>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="rounded-lg border border-border/50 bg-secondary/50 px-5 py-3">
                <p className="text-2xl font-bold text-primary">100%</p>
                <p className="text-xs text-muted-foreground">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          {/* Skill Cards */}
          <div className="flex-1">
            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill, i) => (
                <SkillCard key={skill.name} skill={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
