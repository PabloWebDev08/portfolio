import type { Project } from "@/lib/types";

export const ALL_PROJECTS: Project[] = [
  {
    id: "project-for-junior",
    category: "code",
    name: "Project for Junior",
    image: "/projectforjunior9.webp",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Auth.js",
      "MongoDB",
    ],
    description:
      "Application web permettant de mettre en relation des développeurs juniors avec des porteurs de projets. Les propriétaires de projets peuvent publier leurs besoins (site vitrine, annuaire, formulaire, etc.) et les juniors peuvent postuler pour travailler sur des projets concrets et enrichir leur portfolio. Gestion de l'authentification, base de données, et logique métier complète.",
    techPoints: [
      "Next.js (App Router)",
      "API / logique serveur",
      "Git & structure de projet",
      "Système de rôles : Gestion des utilisateurs OWNER et JUNIOR avec permissions différenciées",
      "Dashboards personnalisés : Interfaces distinctes pour chaque type d'utilisateur",
      "Système de candidatures : Postulation avec validation, suivi des statuts (SENT, ACCEPTED, REJECTED)",
      "Notifications email : Intégration Resend avec webhooks pour le suivi de livraison",
      "Cache Redis : Optimisation des performances avec mise en cache",
      "Rate limiting : Protection anti-spam sur les candidatures",
      "Validation côté serveur : Utilisation de Zod pour la validation des données",
      "Design responsive : Interface mobile-first avec Tailwind CSS",
    ],
    links: {
      demo: "https://projectforjunior.com",
      code: "https://github.com/PabloWebDev08/projectforjunior",
    },
    status: "delivered",
  },
  {
    id: "probabilityjournal",
    category: "code",
    name: "Probability Journal",
    image: "/probabilityJournal1.webp",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Auth.js",
      "MongoDB",
      "DaisyUI",
    ],
    description:
      "Plateforme de journalisme analytique qui analyse et interprète les signaux des marchés de prédiction (comme Polymarket) pour comprendre les dynamiques mondiales avant qu'elles ne deviennent évidentes.",
    techPoints: [
      "Next.js (App Router)",
      "API / logique serveur",
      "Git & structure de projet",
      "Interface publique avec navigation par catégories (Politique, Géopolitique, Économie, Technologie)",
      "Système d'administration sécurisé pour créer et gérer des articles",
      "Gestion des catégories dynamiques",
      "Éditeur Markdown pour le contenu des articles",
      "Design responsive : Interface mobile-first avec Tailwind CSS",
      "SEO optimisé (sitemap, robots.txt)",
    ],
    links: {
      demo: "https://probabilityjournal.com",
    },
    status: "delivered",
  },
  {
    id: "kaizen-venture",
    category: "delivered",
    name: "Kaizen Venture",
    stack: ["BUBBLE.IO", "COINMARKETCAP API"],
    description: "",
    techPoints: [],
    links: {
      demo: "https://kaizenventures.app/sign_in",
    },
    status: "delivered",
    year: "2025",
  },
  {
    id: "chatify",
    category: "delivered",
    name: "Chatify",
    stack: ["BUBBLE.IO", "STRIPE"],
    description: "",
    techPoints: [],
    links: {
      demo: "https://app.trychatify.com",
    },
    status: "delivered",
    year: "2024",
  },
  {
    id: "cutly",
    category: "delivered",
    name: "Cutly",
    stack: ["BUBBLE.IO", "STRIPE"],
    description: "",
    techPoints: [],
    links: {
      demo: "https://app.joincutly.com",
    },
    status: "delivered",
    year: "2024",
  },
  {
    id: "gatsbi",
    category: "delivered",
    name: "Gatsbi",
    stack: ["BUBBLE.IO", "STRIPE"],
    description: "",
    techPoints: [],
    links: {
      demo: "https://gatsbi.app",
    },
    status: "delivered",
    year: "2023",
  },
  {
    id: "shoot-to-learn",
    category: "games",
    name: "Shoot to Learn",
    image: "/shoot_to_learn.webp",
    stack: [
      "SDK HYTOPIA (moteur 3D multijoueur)",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    description:
      "Jeu éducatif multijoueur en 3D développé avec le SDK HYTOPIA, combinant gameplay de tir et apprentissage des langues. Les joueurs tirent sur des cibles animées pour apprendre du vocabulaire en français, anglais et espagnol.",
    techPoints: [
      "Système de tir : Raycast pour détecter les impacts sur les cibles",
      "Multilingue : Support FR/EN/ES avec prononciation audio",
      "Catégories : Couleurs, nombres, animaux, fruits et légumes",
      "Navigation : Portails entre mondes",
      "Multijoueur : Architecture avec gestion de plusieurs mondes isolés",
      "Audio : Prononciations et musique d'ambiance",
      "NPCs : Personnages non-joueurs interactifs",
      "Architecture modulaire : Pattern Singleton pour la gestion des managers",
      "Système de données : Configuration JSON pour cibles, cartes et mondes",
    ],
    links: {
      demo: "https://hytopia.com/games/shoot-to-learn",
    },
    status: "inProgress",
    players: 26000,
  },
  {
    id: "celestial-isle",
    category: "games",
    name: "Celestial Isles",
    image: "/celestial_isle.webp",
    stack: [
      "SDK HYTOPIA (moteur 3D multijoueur)",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    description:
      "Jeu multijoueur 3D de type parkour développé avec le SDK Hytopia. Les joueurs explorent des îles célestes, collectent des pièces, complètent des parcours de parkour et personnalisent leur expérience avec des effets de particules.",
    techPoints: [
      "Système de parkour avancé",
      "Parcours avec plateformes, obstacles mobiles, murs et gaps",
      "Saut à charge : maintenir la barre d'espace augmente la hauteur du saut",
      "Barre de puissance visuelle pour indiquer la force du saut",
      "Repositionnement automatique si le joueur tombe en dessous d'un seuil",
      "Système de collecte et économie",
      "Collecte de pièces d'or dispersées sur chaque île",
      "Persistance des données joueur (pièces collectées, progression)",
      "Boutique de particules : achat d'effets visuels avec les pièces collectées",
      "3 particules gratuites + système d'achat pour débloquer d'autres effets",
      "Architecture modulaire multi-îles",
      "3 îles célestes avec environnements distincts",
      "Architecture modulaire : ajout de nouvelles îles via configuration JSON",
      "Chaque île dispose de sa propre map, skybox, musique d'ambiance et configuration",
      "Système de navigation entre îles via commandes ou UI",
      "Système de progression et compétition",
      "Leaderboards par île affichant les meilleurs temps",
      "NPCs interactifs avec dialogues et cartes d'information",
      "Système de déblocage : collecter toutes les pièces d'une île pour accéder à la suivante",
      "Expérience immersive",
      "Musique d'ambiance unique par île",
      "Effets sonores contextuels (vent en altitude, éclaboussures dans l'eau)",
      "Système de particules personnalisables attachées au joueur",
      "Skyboxes dynamiques pour chaque environnement",
    ],
    links: {
      demo: "https://hytopia.com/games/the-celestial-isles",
      code: "https://github.com/PabloWebDev08/HYTOPIA_CELESTIAL_ISLES",
    },
    status: "inProgress",
    players: 7000,
  },
];

const isCategory = (project: Project, category: Project["category"]): boolean =>
  project.category === category;

export const CODE_PROJECTS: Project[] = ALL_PROJECTS.filter((p) =>
  isCategory(p, "code")
);

export const GAMES_PROJECTS: Project[] = ALL_PROJECTS.filter((p) =>
  isCategory(p, "games")
);

export const DELIVERED_PROJECTS: Project[] = ALL_PROJECTS.filter((p) =>
  isCategory(p, "delivered")
);

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((project) => project.id === slug);
}
