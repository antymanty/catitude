import { BlinkingCat } from "@/components/blinking-cat"
import { site } from "@/lib/site"

export function About() {
  return (
    <section id="about" className="bg-ink text-card-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-2 md:gap-16">
        <div className="order-2 md:order-1">
          <p className="font-display text-sm font-bold tracking-[0.2em] text-sun uppercase">
            About
          </p>
          <h2 className="font-display mt-3 text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
            Pure stare.
            <br />
            Pure Catitude.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-card-foreground/75 sm:text-lg">
            {site.name} is a liquidity meme born from one look — big yellow eyes,
            zero apologies. No roadmap fluff. Just a cat that stares through the
            chart and dares you to buy the vibe.
          </p>
        </div>

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="animate-float group w-full max-w-md">
            <BlinkingCat
              className="w-full transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 90vw, 420px"
              alt={`${site.name} mascot — black cat with yellow eyes`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
