"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/constants";

type NavbarTheme = "dark" | "light";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    /**
     * Thème de couleur du texte du Navbar (indépendant du curseur).
     * On se base sur les sections qui déclarent `data-cursor="dark|light"`,
     * mais on choisit un point d’ancrage sous la navbar pour un changement plus direct.
     *
     * Résultat: on écrit `html[data-navbar-theme="dark|light"]`.
     */
    const themedSections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-cursor]")
    );

    if (themedSections.length === 0) return;

    const applyTheme = (theme: NavbarTheme) => {
      document.documentElement.dataset.navbarTheme = theme;
    };

    const pickThemeFromNavbarAnchor = () => {
      const navEl = document.querySelector<HTMLElement>("nav");
      const navHeight = navEl?.getBoundingClientRect().height ?? 72;
      const anchorY = Math.min(window.innerHeight - 1, navHeight + 12);

      let bestSection: HTMLElement | null = null;
      let bestDistance = Number.POSITIVE_INFINITY;

      for (const section of themedSections) {
        const rect = section.getBoundingClientRect();

        // Cas idéal: le point d’ancrage est à l’intérieur de la section
        if (rect.top <= anchorY && rect.bottom >= anchorY) {
          bestSection = section;
          bestDistance = 0;
          break;
        }

        // Sinon, on choisit la section la plus proche du point d’ancrage (distance verticale)
        const distance =
          anchorY < rect.top ? rect.top - anchorY : anchorY - rect.bottom;

        if (distance < bestDistance) {
          bestDistance = distance;
          bestSection = section;
        }
      }

      const themeFromSection = bestSection?.dataset.cursor as
        | NavbarTheme
        | undefined;

      if (themeFromSection === "dark" || themeFromSection === "light") {
        applyTheme(themeFromSection);
      }
    };

    let rafId: number | null = null;
    const schedulePick = () => {
      if (rafId !== null) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = null;
        pickThemeFromNavbarAnchor();
      });
    };

    pickThemeFromNavbarAnchor();
    window.addEventListener("scroll", schedulePick, { passive: true });
    window.addEventListener("resize", schedulePick);

    return () => {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", schedulePick);
      window.removeEventListener("resize", schedulePick);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex w-full items-center justify-between transition-all duration-500 ${
        scrolled
          ? "bg-white/5 px-6 py-4 backdrop-blur-md border-b border-black/5"
          : "px-8 py-6"
      } text-foreground`}
    >
      <div className="nav-brand hoverable font-display text-xl font-semibold tracking-tighter uppercase">
        {SITE.name}.
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden gap-6 text-xs font-normal tracking-normal md:flex">
          <a
            href="#work"
            className="nav-link hoverable transition-opacity uppercase opacity-60 hover:opacity-100"
          >
            Projets
          </a>
          <a
            href="#about"
            className="nav-link hoverable transition-opacity uppercase opacity-60 hover:opacity-100"
          >
            À Propos
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
            }}
            className="nav-link hoverable transition-opacity uppercase opacity-60 hover:opacity-100"
          >
            Contact
          </a>
        </div>

        <div className="nav-dev hoverable font-display text-xl font-semibold tracking-tighter uppercase">
          .DEV
        </div>
      </div>
    </nav>
  );
};
