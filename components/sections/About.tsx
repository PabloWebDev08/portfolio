"use client";

import React from "react";
import { motion } from "framer-motion";
import { SECTION_ABOUT } from "@/lib/constants";
import { HeroParticles } from "@/components/ui/HeroParticles";

/**
 * Section À propos modernisée.
 * Focus sur la typographie, les animations de révélation et la hiérarchie visuelle.
 */
export const About = () => {
  // Fonction pour mettre en valeur certains mots clés
  const renderDescription = (text: string) => {
    const keywords = [
      "Next.js",
      "React",
      "MongoDB",
      "full-stack",
      "No-code",
      "Bubble.io",
      "open-source",
      "qualité",
      "maintenabilité",
    ];

    let highlightedText = text;
    keywords.forEach((word) => {
      const regex = new RegExp(`(${word})`, "gi");
      highlightedText = highlightedText.replace(
        regex,
        `<span class="text-foreground font-semibold underline decoration-(--border-color) decoration-2 underline-offset-4">$1</span>`
      );
    });

    return <div dangerouslySetInnerHTML={{ __html: highlightedText }} />;
  };

  return (
    <section
      id="about"
      data-cursor="dark"
      className="relative w-full py-24 px-4 md:px-12 lg:px-24 overflow-hidden bg-background"
    >
      <HeroParticles />

      <div className="section-label">[ {SECTION_ABOUT.number}. ABOUT ]</div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col gap-12 md:gap-20">
          {/* En-tête avec animation */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-(--text-muted) uppercase">
                [{SECTION_ABOUT.number}]
              </span>
              <div className="h-px w-12 bg-(--border-color)" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter uppercase text-foreground">
              {SECTION_ABOUT.title}
            </h2>
          </motion.div>

          {/* Grille de contenu modernisée */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
            {/* Colonne gauche : Statut & Info (Desktop focus) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col gap-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-600 text-xs font-medium w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Disponible pour des missions
              </div>

              <div className="space-y-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-(--text-muted)">
                  Location
                </p>
                <p className="text-sm font-medium">
                  Nice, France (Remote-friendly)
                </p>
              </div>
            </motion.div>

            {/* Colonne droite : Description avec mise en valeur */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="lg:col-span-8"
            >
              <div className="text-lg md:text-2xl lg:text-3xl leading-relaxed text-(--text-muted) font-light">
                {renderDescription(SECTION_ABOUT.description)}
              </div>

              {/* Petite note finale style signature */}
              <div className="mt-12 pt-8 border-t border-(--border-color)">
                <p className="font-display text-xl italic text-foreground opacity-60">
                  Construire mieux, pour durer.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
