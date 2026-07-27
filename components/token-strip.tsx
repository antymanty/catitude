import { CopyCaButton } from "@/components/copy-ca-button"
import { Button } from "@/components/ui/button"
import { hasLink, site, truncateCa } from "@/lib/site"

export function TokenStrip() {
  const buyReady = hasLink(site.buyUrl)
  const hasCa = Boolean(site.ca)

  return (
    <section id="token" className="bg-coral">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-ink/70 uppercase">
          Token
        </p>
        <h2 className="font-display mt-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {site.ticker}
        </h2>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-stretch">
          <div className="flex min-w-0 flex-1 items-center justify-between gap-4 bg-ink px-5 py-4 text-card-foreground">
            <div className="min-w-0">
              <p className="text-xs tracking-wide text-card-foreground/55 uppercase">
                Contract
              </p>
              <p className="mt-1 truncate font-mono text-sm sm:text-base">
                {hasCa ? truncateCa(site.ca, 8, 6) : "Coming soon"}
              </p>
            </div>
            <CopyCaButton
              variant="default"
              size="default"
              showAddress={false}
              className="shrink-0 font-semibold"
            />
          </div>

          <div className="flex items-center justify-between gap-4 bg-ink px-5 py-4 text-card-foreground sm:w-44 sm:flex-col sm:items-start sm:justify-center">
            <p className="text-xs tracking-wide text-card-foreground/55 uppercase">
              Chain
            </p>
            <p className="font-display text-xl font-bold">{site.chain}</p>
          </div>
        </div>

        <div className="mt-6">
          <Button
            nativeButton={false}
            render={<a href={site.buyUrl} />}
            size="lg"
            className="h-11 px-6 font-bold transition-transform active:scale-[0.98]"
            aria-disabled={!buyReady}
          >
            {buyReady ? `Buy on DEX` : "Buy link soon"}
          </Button>
        </div>
      </div>
    </section>
  )
}
