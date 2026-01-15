"use client";

import React from "react";
import { motion } from "framer-motion";
import { SECTION_GAMES } from "@/lib/constants";
import { GAMES_PROJECTS } from "@/content/projects";
import CardProject from "@/components/CardProject";

/**
 * Section GameProjects - Affiche les projets liés aux jeux vidéo (HYTOPIA).
 */
export const GameProjects = () => {
  return (
    <section
      id="games"
      data-cursor="dark"
      className="relative w-full py-24 px-4 md:px-12 lg:px-24 border-t border-(--border-color) bg-linear-to-br from-yellow-300 via-yellow-400 to-yellow-300 text-foreground overflow-hidden"
    >
      {/* Label de section flottant avec une légère touche de vert Hytopia sur la bordure */}
      <div className="section-label border-emerald-500/20! text-emerald-600/80!">
        [ {SECTION_GAMES.number}. GAMES ]
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête de section : Titre et Description */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-emerald-600 font-bold uppercase">
                [{SECTION_GAMES.number}]
              </span>
              <div className="h-px w-12 bg-emerald-500/30" />
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-foreground">
              {SECTION_GAMES.title}
            </h2>

            <p className="max-w-2xl text-base md:text-lg text-(--text-muted) leading-relaxed">
              {SECTION_GAMES.description}
            </p>
          </div>
        </div>

        {/* Grille de projets (Espace réservé) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {/* Les futurs projets de jeux viendront ici */}
          {GAMES_PROJECTS.map((project, index) => (
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
