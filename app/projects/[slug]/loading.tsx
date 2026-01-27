export default function Loading() {
  /**
   * `loading.tsx` s’affiche pendant le streaming / la transition de route.
   * On propose un skeleton simple, mobile-first, sans dépendre de JS.
   */
  return (
    <main
      className="min-h-dvh bg-background text-foreground px-6 pt-32 pb-24"
      data-cursor="dark"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="h-10 w-28 rounded-full bg-muted/40 animate-pulse" />

        <div className="mt-8 h-10 md:h-14 w-[85%] max-w-2xl rounded-2xl bg-muted/40 animate-pulse" />
        <div className="mt-4 space-y-3">
          <div className="h-4 w-full max-w-3xl rounded bg-muted/30 animate-pulse" />
          <div className="h-4 w-[92%] max-w-3xl rounded bg-muted/30 animate-pulse" />
          <div className="h-4 w-[76%] max-w-3xl rounded bg-muted/30 animate-pulse" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="h-44 rounded-3xl border border-border bg-card/30 animate-pulse" />
            <div className="h-52 rounded-3xl border border-border bg-card/30 animate-pulse" />
          </div>
          <div className="md:col-span-2 h-[520px] rounded-3xl border border-border bg-card/20 animate-pulse" />
        </div>
      </div>
    </main>
  );
}
