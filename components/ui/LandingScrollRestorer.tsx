"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

const STORAGE_KEY = "landingScrollY";

function readSavedScrollY(): number | null {
  const raw = sessionStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  const value = Number(raw);
  if (!Number.isFinite(value) || value < 0) return null;

  return value;
}

/**
 * Permet de:
 * - Sauvegarder la position de scroll de la landing (dans `sessionStorage`)
 * - Restaurer cette position uniquement si l'URL contient `?restoreScroll=1`
 *
 * Note: composant volontairement "client" car il dépend du navigateur (scroll + storage).
 */
export function LandingScrollRestorer() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const hasRestoredRef = useRef(false);

  // Sauvegarde de la position de scroll pendant la navigation sur la landing.
  useEffect(() => {
    let rafId = 0;

    const save = () => {
      // Important: on évite des écritures trop fréquentes en regroupant via rAF.
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        // On sauvegarde uniquement tant qu'on est bien sur la landing.
        // Sinon, pendant une transition de route, Next peut scroller en haut et réduire la hauteur du document,
        // ce qui écraserait la dernière position utile par `0`.
        const pathname = window.location.pathname;
        if (pathname !== "/") {
          rafId = 0;
          return;
        }

        sessionStorage.setItem(STORAGE_KEY, String(window.scrollY));
        rafId = 0;
      });
    };

    window.addEventListener("scroll", save, { passive: true });
    return () => {
      window.removeEventListener("scroll", save);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  // Restauration uniquement quand on revient via `BackLink` (flag `restoreScroll=1`).
  useEffect(() => {
    const shouldRestore = searchParams.get("restoreScroll") === "1";
    if (!shouldRestore) return;
    if (hasRestoredRef.current) return;

    hasRestoredRef.current = true;

    const savedY = readSavedScrollY();

    // On nettoie toujours l'URL pour éviter de restaurer à nouveau lors d'un refresh.
    // `scroll: false` empêche Next.js de forcer un scroll en haut.
    router.replace("/", { scroll: false });

    if (savedY === null) return;

    // On laisse un tick au navigateur pour que le layout soit prêt avant de scroller.
    window.requestAnimationFrame(() => {
      window.scrollTo({ top: savedY, left: 0, behavior: "auto" });
    });
  }, [router, searchParams]);

  return null;
}
