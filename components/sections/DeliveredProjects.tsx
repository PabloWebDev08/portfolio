"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { SECTION_NOCODE } from "@/lib/constants";
import { DELIVERED_PROJECTS } from "@/content/projects";
import CardNoCode from "@/components/CardNoCode";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export const DeliveredProjects = () => {
  const testimonials = useMemo(
    () => [
      "/testimonial/anthony_testimonial1.webp",
      "/testimonial/chat_cut_testimonial1.webp",
      "/testimonial/bruno_testimonial.webp",
      "/testimonial/sayba_testimonial.webp",
      "/testimonial/axels_testimonial.webp",
    ],
    []
  );

  const shouldReduceMotion = useReducedMotion();

  // Référence vers le "track" (la ligne d'images du carrousel)
  const trackRef = useRef<HTMLDivElement | null>(null);

  // Largeur (en px) d'UNE série d'images (avant duplication).
  // Objectif : animer précisément de 0 à -loopWidth pour un défilement parfaitement seamless.
  const [loopWidth, setLoopWidth] = useState<number>(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const update = () => {
      const nextWidth = el.scrollWidth / 2;
      setLoopWidth(nextWidth);
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    return () => {
      ro.disconnect();
    };
  }, [testimonials.length]);

  // Vitesse en pixels / seconde (plus petit = plus lent).
  // Mobile-first : légèrement plus lent en mobile pour éviter une lecture "trop rapide".
  const speedPxPerSecond = 65;
  const shouldAnimate = !shouldReduceMotion && loopWidth > 0;
  const durationSeconds = loopWidth > 0 ? loopWidth / speedPxPerSecond : 0;

  return (
    <section
      id="delivered"
      data-cursor="light"
      className="relative w-full py-24 px-4 md:px-12 lg:px-24 border-t border-(--border-dark) bg-(--bg-dark) text-white overflow-hidden"
    >
      <div className="section-label bg-white/10! text-white/80! border-white/20!">
        [ {SECTION_NOCODE.number}. DELIVERED ]
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* En-tête de section : Titre et Description */}
        <div className="mb-12 md:mb-20">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-(--text-muted-dark) uppercase">
                [{SECTION_NOCODE.number}]
              </span>
              <div className="h-px w-12 bg-(--border-dark)" />
            </div>

            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-white">
              {SECTION_NOCODE.title}
            </h2>

            <p className="max-w-2xl text-base md:text-lg text-(--text-muted-dark) leading-relaxed">
              {SECTION_NOCODE.description}
            </p>
          </div>
        </div>

        <div className="flex flex-col border-b border-white/10">
          {DELIVERED_PROJECTS.map((project, index) => (
            <CardNoCode key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-xl md:text-2xl font-display font-medium mb-2 text-center text-white/80 uppercase tracking-widest">
            — Témoignages Clients
          </h3>
          <p className="text-sm md:text-base text-center text-white/60 mb-8 font-mono tracking-wider">
            (NO CODE)
          </p>

          <div
            className={
              shouldReduceMotion
                ? "relative w-full overflow-x-auto"
                : "relative w-full overflow-hidden"
            }
          >
            {/* Dégradés pour l'effet de fondu sur les bords */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-64 z-10 bg-linear-to-r from-(--bg-dark) via-(--bg-dark)/80 to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-64 z-10 bg-linear-to-l from-(--bg-dark) via-(--bg-dark)/80 to-transparent pointer-events-none" />

            {shouldReduceMotion ? (
              <div className="flex gap-4 sm:gap-6 md:gap-8 pr-4">
                {testimonials.map((src, index) => (
                  <div
                    key={`reduced-${src}-${index}`}
                    className="shrink-0 w-[340px] sm:w-[380px] md:w-[420px] aspect-video relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900/50"
                  >
                    <Image
                      src={src}
                      alt={`Témoignage client ${index + 1}`}
                      fill
                      className="object-cover opacity-90"
                      sizes="(max-width: 640px) 340px, (max-width: 768px) 380px, 420px"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <motion.div
                className="flex gap-4 sm:gap-6 md:gap-8 w-max will-change-transform"
                ref={trackRef}
                initial={false}
                animate={shouldAnimate ? { x: -loopWidth } : { x: 0 }}
                transition={
                  shouldAnimate
                    ? {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: durationSeconds,
                        ease: "linear",
                      }
                    : undefined
                }
                aria-label="Carrousel de témoignages clients"
              >
                {/*
                  J'affiche les images.
                  Si tu en as d'autres, ajoute-les dans le tableau 'testimonials' en haut.
                */}
                {[...testimonials, ...testimonials].map((src, index) => (
                  <div
                    key={`${src}-${index}`}
                    className="shrink-0 w-[340px] sm:w-[380px] md:w-[420px] aspect-video relative rounded-xl sm:rounded-2xl overflow-hidden border border-white/5 shadow-2xl bg-neutral-900/50"
                  >
                    <Image
                      src={src}
                      alt={`Témoignage client ${index + 1}`}
                      fill
                      className="object-cover opacity-90 transition-opacity"
                      sizes="(max-width: 640px) 340px, (max-width: 768px) 380px, 420px"
                      priority={index < 2}
                    />
                  </div>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        <div className="mt-12 md:mt-24 flex justify-center">
          <p className="inline-block px-6 py-3 rounded-full border border-white/10 bg-white/5 text-sm md:text-base text-(--text-muted-dark) italic text-center">
            Aujourd’hui, je privilégie le développement en code pour des
            solutions plus robustes et évolutives.
          </p>
        </div>
      </div>
    </section>
  );
};
