import type { Project } from "@/lib/types";

/**
 * Liste des projets de jeux vidéo (HYTOPIA)
 */
export const GAMES_PROJECTS: Project[] = [
  {
    id: "shoot-to-learn",
    category: "games",
    name: "Shoot to Learn",
    image: "/shoot_to_learn.webp",
    stack: ["SDK HYTOPIA (moteur 3D multijoueur)", "JavaScript", "HTML", "CSS"],
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
    stack: ["SDK HYTOPIA (moteur 3D multijoueur)", "JavaScript", "HTML", "CSS"],
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
