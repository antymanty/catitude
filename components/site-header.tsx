import Link from "next/link"

import { Button } from "@/components/ui/button"
import { hasLink, site } from "@/lib/site"

export function SiteHeader() {
  const buyReady = hasLink(site.buyUrl)
  const xReady = hasLink(site.xUrl)

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-extrabold tracking-tight text-ink sm:text-xl"
        >
          {site.name.toUpperCase()}
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <Button
            nativeButton={false}
            render={<a href={site.buyUrl} />}
            size="sm"
            className="font-semibold"
            aria-disabled={!buyReady}
          >
            Buy
          </Button>
          <Button
            nativeButton={false}
            render={<a href={site.xUrl} target={xReady ? "_blank" : undefined} rel={xReady ? "noreferrer" : undefined} />}
            variant="secondary"
            size="sm"
            className="font-semibold"
            aria-disabled={!xReady}
          >
            X
          </Button>
        </nav>
      </div>
    </header>
  )
}
