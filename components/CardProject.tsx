"use client";

import React from "react";
import type { Project, ProjectStatus } from "@/lib/types";
import { LABELS } from "@/lib/constants";
import * as LucideIcons from "lucide-react";
import BtnDetailsProject from "./BtnDetailsProject";
import LinksDemoGit from "./LinksDemoGit";
import TagPlayers from "@/components/ui/TagPlayers";
import Image from "next/image";
import { motion } from "framer-motion";

/**
 * Interface pour les props du composant CardProject
 */
interface CardProjectProps {
  project: Project;
}

/**
 * Composant CardProject - Affiche un projet avec un style moderne et épuré.
 * Basé sur le design de référence (carte de profil élégante avec coins très arrondis).
 *
 * @param {Project} project - Les données du projet à afficher
 */
const CardProject = ({ project }: CardProjectProps) => {
  const { id, name, image, description, links, status, players } = project;
  // Statut normalisé : si absent, on considère le projet "en cours"
  const projectStatus: ProjectStatus = status ?? "inProgress";

  // Animation d'entrée pour la carte
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { y: -5, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true }}
      className="bg-white/3 backdrop-blur-2xl rounded-[2.5rem] p-5 flex flex-col w-full max-w-[400px] mx-auto shadow-2xl border border-white/10"
    >
      {/* Conteneur de l'image (Coins très arrondis comme sur l'image) */}
      <div className="relative aspect-4/3 w-full rounded-4xl overflow-hidden mb-6 group">
        {image ? (
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, 380px"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-neutral-900 flex items-center justify-center">
            <LucideIcons.Box className="w-16 h-16 text-neutral-700" />
          </div>
        )}

        {/* Tag "Players" : visible uniquement si le projet fournit `players` (donc typiquement les jeux) */}
        {typeof players === "number" &&
        Number.isFinite(players) &&
        players > 0 ? (
          <TagPlayers players={players} className="absolute top-4 right-4" />
        ) : null}

        {/* Badge "Status" style "Available for work" */}
        <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 shadow-sm">
          <div
            className={`w-2.5 h-2.5 rounded-full ${
              projectStatus === "delivered" ? "bg-[#22C55E]" : "bg-[#EAB308]"
            } animate-pulse`}
          />
          <span className="text-white text-[11px] font-semibold tracking-wide uppercase">
            {LABELS[projectStatus]}
          </span>
        </div>
      </div>

      {/* Contenu de la carte */}
      <div className="px-2 flex flex-col grow">
        {/* Titre style "Hello I am..." */}
        <h3 className="text-[28px] text-white font-medium mb-1 tracking-tight leading-tight">
          <span className="font-bold text-white/80">{name}</span>
        </h3>

        {/* Description style sous-titre */}
        <p className="text-neutral-400 text-[15px] leading-snug mb-8 line-clamp-2 font-light">
          {description}
        </p>

        {/* Icônes de liens circulaires */}
        <LinksDemoGit links={links} />

        {/* Séparateur horizontal discret */}
        <div className="h-px bg-white/10 w-full mb-8" />

        {/* Bouton d'action principal style "Glossy Dark" */}
        <BtnDetailsProject slug={id} />
      </div>
    </motion.div>
  );
};

export default CardProject;
