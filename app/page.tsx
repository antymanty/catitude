import { About } from "@/components/about"
import { Hero } from "@/components/hero"
import { HowToBuy } from "@/components/how-to-buy"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { TokenStrip } from "@/components/token-strip"

export default function Page() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <About />
      <TokenStrip />
      <HowToBuy />
      <SiteFooter />
    </main>
  )
}
