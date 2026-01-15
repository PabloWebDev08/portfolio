"use client";

import Image from "next/image";
import { BackLink } from "@/components/ui/BackLink";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  Layers,
  Calendar,
  Users,
  CheckCircle2,
  Info,
} from "lucide-react";
import React from "react";
import type { Project } from "@/lib/types";

interface ProjectDetailsClientProps {
  project: Project;
}

export default function ProjectDetailsClient({
  project,
}: ProjectDetailsClientProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const isGame = project.category === "games";

  return (
    <main
      className="min-h-dvh bg-background text-foreground pb-32"
      data-cursor="dark"
    >
      {/* 1. HEADER / HERO */}
      {isGame ? (
        /* HERO IMMERSIF (uniquement pour les jeux) */
        <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={project.name}
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
            </>
          ) : (
            <div className="absolute inset-0 bg-muted flex items-center justify-center">
              <Layers className="w-20 h-20 opacity-10" />
            </div>
          )}

          <div className="absolute top-8 left-4 md:left-8 z-20">
            <BackLink className="hoverable cursor-pointer flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-md rounded-full text-sm font-medium border border-white/10 hover:bg-background/40 transition-all">
              <ChevronLeft className="w-4 h-4" />
              <span>Retour</span>
            </BackLink>
          </div>

          {/* Infos Hero */}
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20 z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-5xl mx-auto"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-black/10 text-black text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm border border-black/20">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 text-black">
                {project.name}
              </h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl leading-relaxed font-light text-black/90">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="pt-32 pb-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-8">
              <BackLink className="hoverable cursor-pointer flex items-center gap-2 px-4 py-2 bg-muted/50 hover:bg-muted rounded-full text-sm font-medium border border-border transition-all w-fit">
                <ChevronLeft className="w-4 h-4" />
                <span>Retour</span>
              </BackLink>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 border border-primary/20">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
                {project.name}
              </h1>
              <p className="text-lg md:text-xl opacity-70 max-w-3xl leading-relaxed font-light">
                {project.description}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* 2. CONTENU PRINCIPAL */}
      <section className="max-w-5xl mx-auto px-6 mt-0">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="md:col-span-1 space-y-6">
            <motion.div
              variants={fadeInUp}
              className="p-6 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Layers className="w-5 h-5" />
                <h2 className="font-semibold uppercase text-xs tracking-widest">
                  Stack Technique
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-[10px] font-mono bg-secondary text-secondary-foreground border border-border"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {(project.year || project.players) && (
              <motion.div
                variants={fadeInUp}
                className="p-6 rounded-3xl border border-border bg-card/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 mb-4 text-primary">
                  <Info className="w-5 h-5" />
                  <h2 className="font-semibold uppercase text-xs tracking-widest">
                    Infos Projet
                  </h2>
                </div>
                <div className="space-y-4">
                  {project.year && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 opacity-60">
                        <Calendar className="w-4 h-4" />
                        <span>Année</span>
                      </div>
                      <span className="font-mono">{project.year}</span>
                    </div>
                  )}
                  {project.players && (
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 opacity-60">
                        <Users className="w-4 h-4" />
                        <span>Joueurs</span>
                      </div>
                      <span className="font-mono">
                        {project.players.toLocaleString()}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 opacity-60">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          project.status === "delivered"
                            ? "bg-green-500"
                            : "bg-amber-500"
                        }`}
                      />
                      <span>Statut</span>
                    </div>
                    <span className="font-mono text-xs uppercase">
                      {project.status ?? "En cours"}
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* POINTS TECHNIQUES - DROITE */}
          <div className="md:col-span-2">
            <motion.div
              variants={fadeInUp}
              className="p-8 rounded-3xl border border-border bg-card/30"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary text-sm">
                  01
                </span>
                Points Techniques
              </h2>

              {project.techPoints.length > 0 ? (
                <ul className="grid grid-cols-1 gap-4">
                  {project.techPoints.map((point, idx) => (
                    <li key={idx}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex gap-4 p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors border border-transparent hover:border-border"
                      >
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base opacity-80 leading-relaxed">
                          {point}
                        </span>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="opacity-50 italic text-center py-10">
                  Aucun point technique spécifique renseigné.
                </p>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <div className="fixed bottom-6 left-0 w-full px-6 z-50 pointer-events-none">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 1, type: "spring", stiffness: 100 }}
          className="max-w-md mx-auto flex gap-3 pointer-events-auto"
        >
          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverable flex-1 flex items-center justify-center gap-2 h-14 bg-foreground text-background rounded-2xl font-bold shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Voir la Démo</span>
            </a>
          )}
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverable flex-1 flex items-center justify-center gap-2 h-14 bg-background/80 backdrop-blur-xl text-foreground border border-border rounded-2xl font-bold shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Github className="w-5 h-5" />
              <span>Code Source</span>
            </a>
          )}
        </motion.div>
      </div>
    </main>
  );
}
