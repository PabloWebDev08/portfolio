import { TECH_STACK } from "./constants";

/**
 * Types pour les projets du portfolio
 */

/**
 * Élément de la stack technique
 * Permet d'utiliser les technologies de TECH_STACK ou des technologies personnalisées
 */
export type TechStackItem = (typeof TECH_STACK)[number] | string;

/**
 * Liens associés à un projet
 */
export type ProjectLinks = {
  /** URL de la démo en ligne (optionnel) */
  demo?: string;
  /** URL du repository GitHub (optionnel) */
  code?: string;
};

/**
 * Statut d'un projet
 */
export type ProjectStatus = "inProgress" | "delivered";

/**
 * Catégorie de projet (utile pour filtrer + router proprement)
 */
export type ProjectCategory = "code" | "games" | "delivered";

/**
 * Structure d'un projet du portfolio
 */
export type Project = {
  /** ID unique du projet */
  id: string;
  /** Catégorie du projet (sert au filtrage + routing) */
  category: ProjectCategory;
  /** Nom du projet */
  name: string;
  /** Image du projet (URL ou chemin local) */
  image?: string;
  /** Stack technique utilisée (peut inclure des technologies de TECH_STACK ou des technologies personnalisées) */
  stack: TechStackItem[];
  /** Description du projet (3-4 lignes maximum) */
  description: string;
  /** Liste des points techniques mis en avant */
  techPoints: string[];
  /** Liens vers la démo et le code source */
  links: ProjectLinks;
  /** Statut du projet (optionnel, par défaut "inProgress") */
  status?: ProjectStatus;
  /** Nombre de joueurs*/
  players?: number;
  /** Année de réalisation (ex: "2023") */
  year?: string;
};
