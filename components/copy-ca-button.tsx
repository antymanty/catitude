"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

import { Button } from "@/components/ui/button"
import { site, truncateCa } from "@/lib/site"

type CopyCaButtonProps = {
  variant?: "default" | "outline" | "secondary"
  size?: "default" | "lg" | "sm"
  className?: string
  showAddress?: boolean
}

export function CopyCaButton({
  variant = "outline",
  size = "lg",
  className,
  showAddress = true,
}: CopyCaButtonProps) {
  const [copied, setCopied] = useState(false)
  const hasCa = Boolean(site.ca)

  async function handleCopy() {
    if (!hasCa) return
    try {
      await navigator.clipboard.writeText(site.ca)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={handleCopy}
      disabled={!hasCa}
      aria-label={hasCa ? "Copy contract address" : "Contract address coming soon"}
    >
      {copied ? <Check data-icon="inline-start" /> : <Copy data-icon="inline-start" />}
      {hasCa
        ? showAddress
          ? truncateCa(site.ca)
          : "Copy CA"
        : "CA coming soon"}
    </Button>
  )
}
