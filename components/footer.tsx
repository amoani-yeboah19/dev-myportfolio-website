"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Bright Kwasi. All rights reserved.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Contact
          </a>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      </div>
    </footer>
  );
}
