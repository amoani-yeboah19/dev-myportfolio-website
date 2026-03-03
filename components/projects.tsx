"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Restaurant Website",
    description:
      "A fully responsive restaurant website with online ordering, menu management, and WooCommerce integration for seamless e-commerce.",
    tech: ["WordPress", "WooCommerce", "PHP", "CSS"],
    image: "/images/project-1.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Fintech Insurance Platform",
    description:
      "A comprehensive fintech platform featuring research dashboards, admin panels, and a polished UI designed for insurance professionals.",
    tech: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "/images/project-2.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Luxury Restaurant Site",
    description:
      "An elegant presentation website for a luxury dining establishment, featuring smooth animations, reservation system, and gallery.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    image: "/images/project-3.jpg",
    live: "#",
    github: "#",
  },
  {
    title: "Custom Business Website",
    description:
      "A conversion-optimized business website with custom design, SEO optimization, and integrated contact and lead generation forms.",
    tech: ["WordPress", "JavaScript", "Custom Theme"],
    image: "/images/project-4.jpg",
    live: "#",
    github: "#",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-md transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-background/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center gap-4">
          <a
            href={project.live}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-110"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink size={18} />
          </a>
          <a
            href={project.github}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground transition-transform hover:scale-110"
            aria-label={`View source code for ${project.title}`}
          >
            <Github size={18} />
          </a>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative px-6 py-24 lg:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            My Work
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Featured Projects
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            A selection of my recent work across web development, design, and
            e-commerce solutions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
