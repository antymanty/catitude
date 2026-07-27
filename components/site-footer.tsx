import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function SiteFooter() {
  const xReady = site.xUrl !== "#"

  return (
    <footer className="bg-coral">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 sm:flex-row sm:items-end sm:justify-between sm:px-8 sm:py-16">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight text-ink">
            {site.name.toUpperCase()}
          </p>
          <p className="mt-2 max-w-sm text-sm text-ink/70">
            Not financial advice. Memes are dangerous. Cats are worse. DYOR.
          </p>
        </div>

        <Button
          nativeButton={false}
          render={
            <a
              href={site.xUrl}
              target={xReady ? "_blank" : undefined}
              rel={xReady ? "noreferrer" : undefined}
            />
          }
          variant="secondary"
          size="lg"
          className="w-fit font-semibold"
          aria-disabled={!xReady}
        >
          Follow on X
        </Button>
      </div>
    </footer>
  )
}
