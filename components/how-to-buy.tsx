import { site } from "@/lib/site"

const steps = [
  {
    n: "01",
    title: "Get a wallet",
    body: "Install a wallet that fits the chain. Keep your keys. Don’t share them with strangers or cats.",
  },
  {
    n: "02",
    title: `Fund it (${site.chain})`,
    body: "Grab some native gas so you can swap. Chain drops when Catitude does.",
  },
  {
    n: "03",
    title: `Buy ${site.ticker}`,
    body: "Hit Buy, paste the CA when it’s live, and join the stare-down.",
  },
]

export function HowToBuy() {
  return (
    <section id="how-to-buy" className="bg-ink text-card-foreground">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="font-display text-sm font-bold tracking-[0.2em] text-sun uppercase">
          How to buy
        </p>
        <h2 className="font-display mt-3 max-w-lg text-4xl leading-none font-extrabold tracking-tight sm:text-5xl">
          Three steps.
          <br />
          Zero excuses.
        </h2>

        <ol className="mt-12 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-sun/40 pt-6">
              <p className="font-display text-sm font-bold text-sun">{step.n}</p>
              <h3 className="font-display mt-3 text-2xl font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-card-foreground/70 sm:text-base">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
