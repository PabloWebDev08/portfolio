"use client";

import React from "react";
import type { Project } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Interface pour les props du composant CardNoCode
 */
interface CardNoCodeProps {
  project: Project;
  index: number;
}

/**
 * Composant CardNoCode - Affiche un projet No-Code avec un style minimaliste et élégant.
 * Inspiré par le design fourni dans l'image (style liste épurée avec typographie forte).
 *
 * @param {Project} project - Les données du projet
 * @param {number} index - L'index du projet pour l'affichage du numéro
 */
const CardNoCode = ({ project, index }: CardNoCodeProps) => {
  const { name, stack, year, links } = project;

  // Formatage du numéro avec un zéro devant (ex: 01, 02, 03)
  const formattedNumber = (index + 1).toString().padStart(2, "0");

  return (
    <motion.a
      href={links.demo || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="hoverable group relative flex flex-col w-full py-10 border-t border-white/10 hover:bg-white/2 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 md:gap-16">
          <span className="font-mono text-[10px] md:text-xs text-neutral-600 mt-3 md:mt-5">
            {formattedNumber}
          </span>

          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white/90 group-hover:text-white transition-colors duration-300">
              {name}
            </h3>

            {/* Meta informations : Stack et Année */}
            <div className="flex items-center gap-6 md:gap-10 text-neutral-500 font-mono text-[10px] md:text-xs uppercase tracking-[0.2em]">
              <div className="flex items-center">
                {stack.map((item, idx) => (
                  <React.Fragment key={idx}>
                    <span>{item}</span>
                    {idx < stack.length - 1 && (
                      <span className="mx-2 text-neutral-700">/</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {year && <span className="text-neutral-600">{year}</span>}
            </div>
          </div>
        </div>

        <div className="mt-2 md:mt-4 text-neutral-600 group-hover:text-white transition-all duration-500 transform group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRight size={48} strokeWidth={1} className="md:w-16 md:h-16" />
        </div>
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-white/1 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.a>
  );
};

export default CardNoCode;
