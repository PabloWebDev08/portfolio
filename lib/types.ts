import { TECH_STACK } from "./constants";

export type TechStackItem = (typeof TECH_STACK)[number] | string;

export type ProjectLinks = {
  demo?: string;
  code?: string;
};

export type ProjectStatus = "inProgress" | "delivered";

export type ProjectCategory = "code" | "games" | "delivered";

export type Project = {
  id: string;
  category: ProjectCategory;
  name: string;
  image?: string;
  stack: TechStackItem[];
  description: string;
  techPoints: string[];
  links: ProjectLinks;
  status?: ProjectStatus;
  players?: number;
  year?: string;
};
