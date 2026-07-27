export type SiteConfig = {
  name: string
  ticker: string
  tagline: string
  description: string
  ca: string
  buyUrl: string
  xUrl: string
  chain: string
}

export const site: SiteConfig = {
  name: "Catitude",
  ticker: "$CATITUDE",
  tagline: "The cat with too much attitude.",
  description: "The cat with too much attitude. Liquidity optional.",
  ca: "",
  buyUrl: "#",
  xUrl: "https://x.com/catitude__",
  chain: "TBA",
}

export function hasLink(url: string) {
  return Boolean(url) && url !== "#"
}

export function truncateCa(ca: string, head = 6, tail = 4) {
  if (!ca) return ""
  if (ca.length <= head + tail + 1) return ca
  return `${ca.slice(0, head)}…${ca.slice(-tail)}`
}
