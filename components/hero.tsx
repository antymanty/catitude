import { BlinkingCat } from "@/components/blinking-cat"
import { CopyCaButton } from "@/components/copy-ca-button"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

export function Hero() {
  const buyReady = site.buyUrl !== "#"

  return (
    <section className="relative min-h-svh overflow-hidden bg-coral">
      <div className="pointer-events-none absolute bottom-[-6%] left-[-8%] z-0 w-[min(820px,118vw)] md:bottom-[-10%] md:left-[-4%] md:w-[min(900px,58vw)]">
        <BlinkingCat
          priority
          className="w-full"
          sizes="(max-width: 768px) 118vw, 58vw"
          alt=""
        />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-transparent via-transparent to-coral/50" />

      <div className="absolute inset-0 z-10 flex items-center justify-center px-5 pt-16 sm:px-8">
        <div className="max-w-xl text-center">
          <h1 className="font-display animate-rise text-[clamp(3.25rem,14vw,7.5rem)] leading-[0.85] font-extrabold tracking-tight text-ink">
            {site.name.toUpperCase()}
          </h1>
          <p className="animate-rise-delay mx-auto mt-5 max-w-md text-base leading-relaxed text-ink/85 sm:text-lg">
            {site.description}
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap items-center justify-center gap-3">
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
