"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import { SECTION_CONTACT, SOCIAL_LINKS, SITE } from "@/lib/constants";

/**
 * Section CTA (Call to Action) / Contact.
 * Dernière section de la page permettant de contacter le développeur.
 * Design Mobile First : optimisé pour petits écrans, puis amélioré pour desktop.
 * Suit le design system établi : minimaliste, typographie forte, et animations fluides.
 */
export const CTA = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="contact"
      data-cursor="dark"
      /* 
         Cette section est fixée en arrière-plan (-z-10) pour créer l'effet de révélation
         lorsque l'utilisateur scrolle tout en bas de la page.
         Le contenu principal (main) remonte et laisse apparaître cette section.
         Padding mobile minimal (px-4 pt-16 pb-8) puis augmenté sur desktop.
      */
      className="fixed bottom-0 left-0 w-full h-screen -z-10 pt-16 pb-8 px-4 md:pt-24 md:pb-12 md:px-12 lg:px-24 bg-background overflow-hidden flex flex-col justify-center"
    >
      {/* Label de section flottant - Réutilisé pour la cohérence */}
      <div className="section-label">[ {SECTION_CONTACT.number}. CONTACT ]</div>

      <div className="max-w-7xl mx-auto w-full">
        {/* 
          Gap réduit sur mobile (gap-8) pour économiser l'espace vertical,
          puis augmenté sur desktop (md:gap-16 lg:gap-24)
        */}
        <div className="flex flex-col gap-8 md:gap-16 lg:gap-24">
          {/* En-tête de section avec animation de révélation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-3 md:gap-4"
          >
            {/* Numéro de section - Taille réduite sur mobile */}
            <div className="flex items-center gap-2 md:gap-4">
              <span className="font-mono text-[10px] md:text-xs tracking-widest text-(--text-muted) uppercase">
                [{SECTION_CONTACT.number}]
              </span>
              <div className="h-px w-8 md:w-12 bg-(--border-color)" />
            </div>

            {/* Titre principal - Taille mobile optimisée, puis agrandie sur desktop */}
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold tracking-tighter uppercase text-foreground leading-tight">
              {SECTION_CONTACT.title}
            </h2>

            {/* Description - Taille mobile réduite, puis augmentée sur desktop */}
            <p className="max-w-xl text-sm sm:text-base md:text-lg lg:text-xl text-(--text-muted) font-light leading-relaxed">
              {SECTION_CONTACT.description}
            </p>
          </motion.div>

          {/* 
            Liens de contact minimalistes - Mobile First
            Flex-col sur mobile pour une lecture claire, 
            puis flex-row sur desktop pour plus de discrétion.
          */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-12">
            <ContactLink
              href={SOCIAL_LINKS.email}
              label="Email"
              value="pablowebdev7@gmail.com"
              icon={<Mail size={18} />}
              delay={0.1}
            />
            <ContactLink
              href={SOCIAL_LINKS.linkedin}
              label="LinkedIn"
              value="pablo-f"
              icon={<Linkedin size={18} />}
              delay={0.2}
            />
            <ContactLink
              href={SOCIAL_LINKS.github}
              label="GitHub"
              value="PabloWebDev08"
              icon={<Github size={18} />}
              delay={0.3}
            />
          </div>

          {/* 
            Footer minimaliste - Mobile First
            Padding top réduit sur mobile (pt-12), puis augmenté sur desktop (md:pt-16 lg:pt-24)
            Flex-col sur mobile pour empiler verticalement, puis flex-row sur desktop
            Gap réduit sur mobile (gap-4), puis augmenté sur desktop (md:gap-8)
          */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-12 md:pt-16 lg:pt-24 border-t border-(--text-muted) flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-(--text-muted) text-[9px] sm:text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] md:tracking-[0.2em]"
          >
            <p className="text-center md:text-left">
              © {currentYear} {SITE.name}. Créé avec Next.js & React.
            </p>

            {/* 
              Lien retour en haut - Touch-friendly sur mobile
              Gap réduit sur mobile (gap-1.5), puis augmenté sur desktop (md:gap-2)
            */}
            <div className="flex items-center">
              <a
                href="#hero"
                className="active:text-foreground hover:text-foreground transition-colors duration-300 flex items-center gap-1.5 md:gap-2 group touch-manipulation"
                aria-label="Retour en haut de la page"
              >
                <span className="text-[9px] sm:text-[10px] md:text-xs">
                  Retour en haut
                </span>
                <ArrowUpRight
                  size={12}
                  className="md:w-[14px] md:h-[14px] group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        Élément décoratif en arrière-plan (discret)
        Taille réduite sur mobile pour ne pas surcharger l'écran
      */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 md:-bottom-24 md:-left-24 md:w-96 md:h-96 bg-foreground/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

/**
 * Sous-composant pour les liens de contact minimalistes.
 * Design discret : pas de bordures ni de fonds imposants,
 * juste une typographie propre et une interaction fluide.
 */
interface ContactLinkProps {
  href: string;
  label: string;
  value: string;
  icon: React.ReactNode;
  delay: number;
}

const ContactLink = ({ href, label, value, icon, delay }: ContactLinkProps) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      /* 
        Style minimaliste : suppression des bordures et du fond.
        Focus sur le texte et l'icône avec un changement de couleur au hover.
        Touch-friendly avec un padding vertical pour la zone de clic.
      */
      className="group flex flex-col gap-1.5 py-2 md:py-0 transition-all duration-300 touch-manipulation"
    >
      <div className="flex items-center gap-2 text-(--text-muted) group-hover:text-foreground transition-colors duration-300">
        <span className="p-1.5 rounded-lg bg-foreground/5 group-hover:bg-foreground/10 transition-colors">
          {icon}
        </span>
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest">
          {label}
        </span>
        <ArrowUpRight
          size={12}
          className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
        />
      </div>

      <span className="text-sm md:text-base font-medium text-foreground/80 group-hover:text-foreground transition-colors pl-9">
        {value}
      </span>
    </motion.a>
  );
};
