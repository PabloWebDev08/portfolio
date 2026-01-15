"use client";

import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

type BackButtonProps = {
  /**
   * Texte/ICône à afficher dans le bouton.
   */
  children: ReactNode;
  /**
   * Classes Tailwind optionnelles (pour garder ton style existant).
   */
  className?: string;
  /**
   * Si l'utilisateur arrive directement sur la page (pas d'historique),
   * on redirige vers ce chemin.
   */
  fallbackHref?: string;
};

export function BackButton({
  children,
  className,
  fallbackHref = "/",
}: BackButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        // On utilise l'historique du navigateur pour revenir à l'écran précédent.
        // Avantage: le navigateur restaure généralement la position de scroll automatiquement.
        if (typeof window !== "undefined" && window.history.length > 1) {
          router.back();
          return;
        }

        // Fallback: si la page a été ouverte directement (ex: lien externe),
        // on renvoie vers la Home.
        router.push(fallbackHref);
      }}
    >
      {children}
    </button>
  );
}

