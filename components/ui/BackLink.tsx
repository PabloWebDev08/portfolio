"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type BackLinkProps = {
  children: ReactNode;
  className?: string;
  fallbackHref?: string;
};

export function BackLink({
  children,
  className,
  fallbackHref = "/",
}: BackLinkProps) {
  const href =
    fallbackHref === "/"
      ? { pathname: "/", query: { restoreScroll: "1" } }
      : fallbackHref;

  /**
   * On ajoute `hoverable` par défaut pour que le curseur custom sache
   * que ce lien est interactif (grossissement au survol).
   * On évite aussi les doublons si `hoverable` est déjà présent.
   */
  const mergedClassName =
    className?.includes("hoverable") === true
      ? className
      : ["hoverable", className].filter(Boolean).join(" ");

  return (
    <Link
      href={href}
      className={mergedClassName}
      // On force ce bouton à toujours renvoyer vers la landing (ex: "/").
      // Raison: un lien est plus clair qu'un bouton + navigation JS, et ne dépend pas de l'historique.
    >
      {children}
    </Link>
  );
}
