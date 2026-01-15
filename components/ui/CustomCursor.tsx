"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";

type CursorTheme = "dark" | "light";

export const CustomCursor = () => {
  const pathname = usePathname();
  const [isCursorEnabled, setIsCursorEnabled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorTheme, setCursorTheme] = useState<CursorTheme>("dark");

  const dotX = useSpring(0, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(0, { stiffness: 1000, damping: 50 });
  const circleX = useSpring(0, { stiffness: 150, damping: 20 });
  const circleY = useSpring(0, { stiffness: 150, damping: 20 });

  useEffect(() => {
    // #region agent log (hypothesisId: ROUTE)
    fetch("http://127.0.0.1:7242/ingest/39d60c15-4a19-4d42-a20c-8045a5a80fcd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "pre-fix",
        hypothesisId: "ROUTE",
        location: "CustomCursor.tsx:route-effect",
        message: "Pathname changed",
        data: {
          pathname,
          cursorTheme,
          isCursorEnabled,
          cursorSectionsCount:
            document.querySelectorAll("[data-cursor]").length,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion
    // Intentionnel: on log uniquement sur changement de route (pas à chaque changement de state).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    /**
     * Mobile-first:
     * Sur mobile (touch), il n’y a pas de curseur “souris”. On désactive donc
     * complètement le curseur custom pour éviter des calculs/listeners inutiles.
     *
     * `(hover: hover) and (pointer: fine)` ≈ appareil avec une vraie souris/trackpad.
     */
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");

    const update = () => setIsCursorEnabled(mq.matches);
    update();

    // #region agent log (hypothesisId: ENABLE)
    fetch("http://127.0.0.1:7242/ingest/39d60c15-4a19-4d42-a20c-8045a5a80fcd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "pre-fix",
        hypothesisId: "ENABLE",
        location: "CustomCursor.tsx:matchmedia-init",
        message: "MatchMedia initialized",
        data: { pathname, matches: mq.matches },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
    // Intentionnel: cet effet doit s’exécuter une seule fois au montage (setup matchMedia).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    /**
     * Desktop-first: sur grand écran, plusieurs sections peuvent être visibles en même temps.
     * Pour éviter un "jitter" (le thème qui hésite), on choisit la section
     * qui contient le centre du viewport (50% de la hauteur).
     *
     * Les sections doivent déclarer: `data-cursor="dark"` ou `data-cursor="light"`.
     */
    if (!isCursorEnabled) return;

    const cursorSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cursor]")
    );

    // Si aucune section ne déclare un thème, on ne fait rien.
    if (cursorSections.length === 0) return;

    const applyTheme = (theme: CursorTheme) => {
      setCursorTheme(theme);
      document.documentElement.dataset.cursorTheme = theme;
      // #region agent log (hypothesisId: STALE_LIST)
      fetch(
        "http://127.0.0.1:7242/ingest/39d60c15-4a19-4d42-a20c-8045a5a80fcd",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            sessionId: "debug-session",
            runId: "pre-fix",
            hypothesisId: "STALE_LIST",
            location: "CustomCursor.tsx:applyTheme",
            message: "Applied cursor theme",
            data: {
              pathname,
              theme,
              cursorSectionsCountAtInit: cursorSections.length,
              cursorSectionsConnectedAtInit: cursorSections.filter(
                (el) => el.isConnected
              ).length,
            },
            timestamp: Date.now(),
          }),
        }
      ).catch(() => {});
      // #endregion
    };

    const pickThemeFromViewportCenter = () => {
      const centerY = window.innerHeight / 2;

      let bestSection: HTMLElement | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of cursorSections) {
        const rect = section.getBoundingClientRect();

        // Cas idéal: le centre de l'écran est à l'intérieur de la section
        if (rect.top <= centerY && rect.bottom >= centerY) {
          bestSection = section;
          bestDistance = 0;
          break;
        }

        // Sinon, on choisit la section la plus proche du centre (distance verticale)
        const distance =
          centerY < rect.top ? rect.top - centerY : centerY - rect.bottom;

        if (distance < bestDistance) {
          bestDistance = distance;
          bestSection = section;
        }
      }

      const themeFromSection = bestSection?.dataset.cursor as
        | CursorTheme
        | undefined;

      // Sécurité: on accepte uniquement "dark" ou "light".
      if (themeFromSection === "dark" || themeFromSection === "light") {
        applyTheme(themeFromSection);
      } else {
        // #region agent log (hypothesisId: STALE_LIST)
        fetch(
          "http://127.0.0.1:7242/ingest/39d60c15-4a19-4d42-a20c-8045a5a80fcd",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              sessionId: "debug-session",
              runId: "pre-fix",
              hypothesisId: "STALE_LIST",
              location: "CustomCursor.tsx:pickTheme",
              message: "No valid theme found from best section",
              data: {
                pathname,
                bestSectionExists: Boolean(bestSection),
                bestSectionConnected: bestSection?.isConnected ?? null,
                bestSectionDataCursor: bestSection?.dataset.cursor ?? null,
                cursorSectionsCountAtInit: cursorSections.length,
              },
              timestamp: Date.now(),
            }),
          }
        ).catch(() => {});
        // #endregion
      }
    };

    // Throttle via rAF pour éviter trop d'exécutions sur scroll desktop (roulette).
    let rafId: number | null = null;
    const schedulePick = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        pickThemeFromViewportCenter();
      });
    };

    // Init + écouteurs
    // #region agent log (hypothesisId: STALE_LIST)
    fetch("http://127.0.0.1:7242/ingest/39d60c15-4a19-4d42-a20c-8045a5a80fcd", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sessionId: "debug-session",
        runId: "pre-fix",
        hypothesisId: "STALE_LIST",
        location: "CustomCursor.tsx:theme-effect-init",
        message: "Theme effect initialized (captured cursorSections)",
        data: {
          pathname,
          cursorTheme,
          cursorSectionsCountAtInit: cursorSections.length,
          cursorSectionsConnectedAtInit: cursorSections.filter(
            (el) => el.isConnected
          ).length,
        },
        timestamp: Date.now(),
      }),
    }).catch(() => {});
    // #endregion

    pickThemeFromViewportCenter();
    window.addEventListener("scroll", schedulePick, { passive: true });
    window.addEventListener("resize", schedulePick);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedulePick);
      window.removeEventListener("resize", schedulePick);
    };
    /**
     * Important (Next.js App Router):
     * `CustomCursor` vit dans `layout`, donc il ne se démonte pas lors d’une navigation.
     * On relance cet effet à chaque changement de route pour recapturer les `[data-cursor]`
     * actuels (sinon on peut garder des éléments détachés du DOM après une navigation).
     */
    // Intentionnel: `cursorTheme` est utilisé seulement pour le log, on ne veut pas relancer
    // l’effet à chaque setState (sinon on ré-attache les listeners inutilement).
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCursorEnabled, pathname]);

  useEffect(() => {
    // Sécurité: si le curseur custom est désactivé (mobile), on ne pose aucun listener.
    if (!isCursorEnabled) return;

    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      circleX.set(e.clientX);
      circleY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest(".hoverable")) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY, circleX, circleY, isCursorEnabled]);

  // Couleurs adaptées au thème courant (fond clair vs fond sombre).
  // Note: Framer Motion anime très bien des couleurs RGBA, donc on évite "transparent".
  const circleBaseBorderColor =
    cursorTheme === "light"
      ? "rgba(255, 255, 255, 0.35)"
      : "rgba(0, 0, 0, 0.15)";

  const circleHoverBgColor =
    cursorTheme === "light"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 0, 0, 0.05)";

  const circleTransparentBgColor =
    cursorTheme === "light" ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)";

  const transparentBorderColor =
    cursorTheme === "light" ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0)";

  if (!isCursorEnabled) return null;

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{
          x: dotX,
          y: dotY,
        }}
      />
      <motion.div
        className="cursor-circle"
        animate={{
          width: isHovered ? 80 : 40,
          height: isHovered ? 80 : 40,
          backgroundColor: isHovered
            ? circleHoverBgColor
            : circleTransparentBgColor,
          borderColor: isHovered
            ? transparentBorderColor
            : circleBaseBorderColor,
        }}
        style={{
          x: circleX,
          y: circleY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};
