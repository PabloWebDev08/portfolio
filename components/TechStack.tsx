"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";

export const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className="flex flex-wrap justify-center gap-2 md:justify-start"
    >
      {TECH_STACK.map((tech) => (
        <div
          key={tech}
          className="hoverable cursor-default rounded-full border border-(--border-color) bg-black/5 px-3 py-1.5 text-[10px] uppercase tracking-widest text-(--text-muted) backdrop-blur-md transition-colors duration-300 hover:bg-black/10"
        >
          [{tech}]
        </div>
      ))}
    </motion.div>
  );
};
