import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CodeProjects } from "@/components/sections/CodeProjects";
import { GameProjects } from "@/components/sections/GameProjects";
import { DeliveredProjects } from "@/components/sections/DeliveredProjects";
import { About } from "@/components/sections/About";
import { CTA } from "@/components/sections/CTA";
import { NoiseOverlay } from "@/components/ui/NoiseOverlay";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { LandingScrollRestorer } from "@/components/ui/LandingScrollRestorer";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <NoiseOverlay />
      <ScrollProgress />
      {/* Nécessaire car `LandingScrollRestorer` utilise `useSearchParams()` (Next.js exige un boundary Suspense). */}
      <Suspense fallback={null}>
        <LandingScrollRestorer />
      </Suspense>

      <Navbar />

      {/* 
          Le contenu principal a une marge inférieure de 100vh pour laisser l'espace au CTA 
          qui est fixé en arrière-plan. L'ombre portée crée l'effet de profondeur.
      */}
      <main className="relative z-10 bg-background pt-0 pb-0 mb-[100vh] shadow-[0_50px_50px_rgba(0,0,0,0.5)]">
        <Hero />
        <CodeProjects />
        <GameProjects />
        <DeliveredProjects />
        <About />
        {/* On pourra ajouter d'autres sections ici par la suite */}
      </main>

      <CTA />
    </>
  );
}
