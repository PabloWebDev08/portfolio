"use client";

import { useEffect } from "react";
import Link from "next/link";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    /**
     * On log l’erreur côté client pour aider au debug en dev.
     * En prod, tu peux remplacer ça par un outil de monitoring (Sentry, etc.).
     */
    console.error(error);
  }, [error]);

  return (
    <main
      className="min-h-dvh bg-background text-foreground px-6 py-24"
      data-cursor="dark"
    >
      <div className="mx-auto w-full max-w-2xl">
        <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">
          Une erreur est survenue
        </p>
        <h1 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
          Impossible d’afficher ce projet
        </h1>
        <p className="mt-4 text-sm md:text-base opacity-70 leading-relaxed">
          Le chargement a échoué. Tu peux réessayer ou revenir à l’accueil.
        </p>

        {/* On affiche le digest si Next en fournit un (utile pour diagnostiquer en prod). */}
        {error.digest ? (
          <p className="mt-4 text-xs font-mono opacity-60">
            Digest: {error.digest}
          </p>
        ) : null}

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={reset}
            className="hoverable inline-flex items-center justify-center h-12 px-5 rounded-2xl bg-foreground text-background font-bold shadow-sm active:scale-[0.99] transition"
          >
            Réessayer
          </button>

          <Link
            href="/"
            className="hoverable inline-flex items-center justify-center h-12 px-5 rounded-2xl border border-border bg-background/60 backdrop-blur text-foreground font-bold shadow-sm active:scale-[0.99] transition"
          >
            Retour à l’accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
