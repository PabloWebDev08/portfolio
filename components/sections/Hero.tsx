"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";
import { HeroParticles } from "@/components/ui/HeroParticles";
import { TechStack } from "@/components/TechStack";

export const Hero = () => {
  return (
    <header
      id="hero"
      data-cursor="dark"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background px-4 py-16 md:px-12 md:py-24"
    >
      {/* Système de particules en arrière-plan */}
      <HeroParticles />

      {/* Label de section - optimisé mobile */}
      <div className="section-label mt-[60px]">[ 00. PROFILE ]</div>

      {/* Container principal - mobile-first: colonne, puis grid sur desktop */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-8 md:grid md:grid-cols-[auto_1fr] md:items-center md:gap-16 lg:gap-24">
        {/* Image de profil - mobile-first: centrée, puis alignée à gauche sur desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center md:justify-start"
        >
          <div className="group relative h-32 w-32 rounded-full border border-(--border-color) p-1 transition-shadow duration-500 md:h-56 md:w-56 lg:h-64 lg:w-64">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-(--glass-bg)">
              <Image
                src="/me.webp"
                alt={SITE.name}
                fill
                className="img-zoom object-cover"
                priority
                quality={75}
                sizes="(max-width: 768px) 128px, (max-width: 1024px) 224px, 256px"
              />
            </div>
          </div>
        </motion.div>

        {/* Contenu textuel - mobile-first: centré, puis aligné à gauche sur desktop */}
        <div className="flex w-full flex-col text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
            className="font-display mb-4 text-3xl font-semibold leading-[1.1] tracking-tighter text-foreground sm:text-4xl md:mb-6 md:text-6xl lg:text-8xl"
          >
            {SITE.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
            className="mb-6 max-w-2xl text-base leading-relaxed text-(--text-muted) mx-auto md:mb-10 md:mx-0 md:text-lg"
          >
            {SITE.description}
          </motion.p>

          {/* Badges de compétences et sous-titre - mobile-first: centrés, puis alignés à gauche sur desktop */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col items-center gap-3 md:items-start md:gap-4"
          >
            <TechStack />
            <p className="text-xs font-medium text-(--text-muted) text-center md:text-left md:text-sm">
              {SITE.subtitle}
            </p>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
