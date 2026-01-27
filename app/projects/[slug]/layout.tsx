import type { ReactNode } from "react";

type ProjectSlugLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function ProjectSlugLayout({ children }: ProjectSlugLayoutProps) {
  /**
   * Layout volontairement minimal :
   * - La structure principale (header/hero, contenu, etc.) est gérée dans `ProjectDetailsClient`.
   * - Ici, on garde uniquement un wrapper pour éviter de dupliquer le HTML/CSS.
   */
  return children;
}