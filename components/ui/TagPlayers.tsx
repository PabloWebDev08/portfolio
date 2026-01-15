import React from "react";
import { Gamepad2 } from "lucide-react";

/**
 * Props du composant TagPlayers.
 */
export interface TagPlayersProps {
  /**
   * Nombre de joueurs ayant joué au jeu.
   * On attend un nombre brut (ex: 16000), le composant se charge du formatage.
   */
  players: number;
  /**
   * Permet d'ajouter des classes Tailwind supplémentaires selon le contexte d'affichage.
   */
  className?: string;
}

/**
 * TagPlayers
 * Affiche un badge au style "Gaming" (ex: "16K+ PLAYERS") pour indiquer le succès d'un projet.
 */
export default function TagPlayers({ players, className }: TagPlayersProps) {
  // Format compact (mobile-first): 16000 -> "16k", 6500 -> "6,5k"
  const formattedPlayers = new Intl.NumberFormat("fr-FR", {
    notation: "compact",
    maximumFractionDigits: 1,
  })
    .format(players)
    .replace(/\s/g, "")
    .toUpperCase();

  return (
    <div
      className={[
        "inline-flex items-center gap-3",
        "bg-neutral-900/90 backdrop-blur-xl border border-emerald-500/30",
        "rounded-xl px-3 py-2 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
        "group transition-all duration-300 hover:scale-105 hover:border-emerald-400/60",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={`${formattedPlayers}+ joueurs`}
    >
      {/* Icône avec effet de pulsation "Live" */}
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-emerald-500/20 blur-md rounded-full group-hover:bg-emerald-500/40 transition-colors" />
        <Gamepad2
          className="w-5 h-5 text-emerald-400 relative z-10"
          aria-hidden="true"
        />

        {/* Point indicateur "Online/Live" */}
        <span className="absolute -top-1 -right-1 flex h-2 w-2 z-20">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
      </div>

      {/* Texte avec hiérarchie gaming */}
      <div className="flex flex-col -space-y-0.5">
        <span className="text-white text-sm md:text-base font-black tracking-tighter leading-none">
          {formattedPlayers}+
        </span>
        <span className="text-emerald-400/80 text-[8px] font-bold uppercase tracking-[0.2em] leading-none">
          Players
        </span>
      </div>
    </div>
  );
}
