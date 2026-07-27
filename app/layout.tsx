import type { Metadata } from "next"
import { Outfit, Syne } from "next/font/google"

import "./globals.css"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: `${site.name} — ${site.ticker}`,
  description: site.description,
  openGraph: {
    title: `${site.name} — ${site.ticker}`,
    description: site.description,
    images: ["/catitude-portrait.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.ticker}`,
    description: site.description,
    images: ["/catitude-portrait.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", outfit.variable, syne.variable, "font-sans")}
    >
      <body>{children}</body>
    </html>
  )
}
