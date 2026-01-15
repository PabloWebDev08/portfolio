import type { ProjectStatus } from "./types";

export const SITE = {
  name: "Pablo",
  title: "Développeur web (Next.js / React).",
  subtitle: "Du prototype rapide au produit robuste",
  description:
    "Je conçois et développe des applications web orientées produit, de l’architecture à la mise en production.",
};

export const SECTION_CODES = {
  number: "01",
  title: "Projets Web (Next.js / React)",
  description:
    "Applications web développées en code, avec une attention particulière portée à l’architecture, l’authentification et la maintenabilité.",
};

export const SECTION_GAMES = {
  number: "02",
  title: "Vidéo Games (HYTOPIA)",
  description:
    "Projets développés de bout en bout, avec un focus sur la conception, la logique et l’amélioration continue.",
};

export const SECTION_NOCODE = {
  number: "03",
  title: "Projets livrés (No-Code)",
  description:
    "Projets réalisés avec des outils no-code, axés sur la livraison rapide, la compréhension produit et les besoins business.",
};

export const SECTION_ABOUT = {
  number: "04",
  title: "À propos",
  description:
    "Développeur web full-stack. " +
    "Anciennement no-code (Bubble.io), aujourd'hui orienté Next.js / React / MongoDB. " +
    "J'ai commencé par livrer vite, puis j'ai choisi de construire mieux. " +
    "Je développe désormais des applications web en code, avec une méthodologie claire et une attention particulière à la qualité et à la maintenabilité. " +
    "Je partage mes projets en open-source et je cherche des missions en développement web (code-first), tout en restant pragmatique quand le contexte l'exige",
};

export const SECTION_CONTACT = {
  number: "05",
  title: "Contact",
  description:
    "Contactez-moi pour discuter de votre projet ou pour toute question.",
};

export const SOCIAL_LINKS = {
  email: "mailto:pablowebdev7@gmail.com",
  github: "https://github.com/PabloWebDev08",
  linkedin: "Https://www.linkedin.com/in/pablo-f-2a33b9264/",
};

export const TECH_STACK = [
  "Next.js",
  "React",
  "Auth.js",
  "MongoDB",
  "TypeScript",
];

/**
 * Libellés centralisés pour l'affichage du statut d'un projet.
 * Objectif : éviter les chaînes "magiques" dans les composants.
 */
export const LABELS: Record<ProjectStatus, string> = {
  inProgress: "En cours de développement",
  delivered: "Projet livré",
};
