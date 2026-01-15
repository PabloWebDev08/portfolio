"use client";

import React from "react";
import { motion } from "framer-motion";
import { CODE_PROJECTS } from "@/content/projects";
import CardProject from "@/components/CardProject";
import { SECTION_CODES } from "@/lib/constants";

export const CodeProjects = () => {
  return (
    <section
      id="work"
      data-cursor="light"
      className="relative w-full py-24 px-4 md:px-12 lg:px-24 border-t border-(--border-dark) bg-(--bg-dark) text-(--text-dark)"
    >
      <div className="section-label bg-white/10! text-white/80! border-white/20!">
        [ {SECTION_CODES.number}. CODE ]
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Titre de section */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-(--text-muted-dark) uppercase">
                [{SECTION_CODES.number}]
              </span>
              <div className="h-px w-12 bg-(--border-dark)" />
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-white">
              {SECTION_CODES.title}
            </h2>

            <p className="max-w-2xl text-base md:text-lg text-(--text-muted-dark) leading-relaxed">
              {SECTION_CODES.description}
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {CODE_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1],
                delay: 0.1 * index,
              }}
            >
              <CardProject project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
