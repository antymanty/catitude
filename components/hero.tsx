import { BlinkingCat } from "@/components/blinking-cat"
import { CopyCaButton } from "@/components/copy-ca-button"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function Hero() {
  const buyReady = site.buyUrl !== "#"

  return (
    <section className="relative min-h-svh overflow-hidden bg-coral">
      <div className="pointer-events-none absolute inset-x-0 bottom-[-8%] flex justify-center md:inset-y-0 md:right-[-4%] md:left-auto md:bottom-auto md:w-[52%] md:items-center md:justify-end">
        <BlinkingCat
          priority
          className="w-[min(920px,135vw)] md:w-[min(920px,52vw)]"
          sizes="(max-width: 768px) 135vw, 52vw"
          alt=""
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-coral via-coral/75 to-transparent md:bg-gradient-to-r md:from-coral md:via-coral/85 md:to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-20 md:justify-center md:pb-24">
        <div className="max-w-xl">
          <h1 className="font-display animate-rise text-[clamp(3.25rem,14vw,7.5rem)] leading-[0.85] font-extrabold tracking-tight text-ink">
            {site.name.toUpperCase()}
          </h1>
          <p className="animate-rise-delay mt-5 max-w-md text-base leading-relaxed text-ink/85 sm:text-lg">
            {site.description}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <Button
              nativeButton={false}
              render={<a href={site.buyUrl} />}
              size="lg"
              className="h-11 px-6 text-base font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
              aria-disabled={!buyReady}
            >
              Buy {site.ticker}
            </Button>
            <CopyCaButton
              variant="secondary"
              className="h-11 border-0 px-5 text-base font-semibold transition-transform hover:scale-[1.02] active:scale-[0.98]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
