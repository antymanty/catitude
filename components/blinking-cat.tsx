"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

/** Eye centers measured on catitude2.png (percent of image). */
const EYES = [
  { cx: 51.06, cy: 41.53, w: 16.4, h: 21.8 },
  { cx: 70.58, cy: 41.93, w: 15.0, h: 20.0 },
] as const

type BlinkKind = "once" | "double"

type BlinkingCatProps = {
  className?: string
  priority?: boolean
  alt?: string
  sizes?: string
  src?: string
}

function nextBlinkDelay() {
  return 2400 + Math.random() * 3800
}

function pickBlink(): BlinkKind {
  return Math.random() < 0.38 ? "double" : "once"
}

export function BlinkingCat({
  className,
  priority = false,
  alt = "Catitude — black cat with yellow eyes",
  sizes = "(max-width: 768px) 90vw, 520px",
  src = "/catitude2.png",
}: BlinkingCatProps) {
  const [blink, setBlink] = useState<BlinkKind | null>(null)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timer = 0
    let active = true

    const schedule = (delay: number) => {
      timer = window.setTimeout(() => {
        if (!active) return
        const kind = pickBlink()
        setBlink(kind)
        timer = window.setTimeout(() => {
          if (!active) return
          setBlink(null)
          schedule(nextBlinkDelay())
        }, kind === "double" ? 480 : 260)
      }, delay)
    }

    schedule(900 + Math.random() * 700)

    return () => {
      active = false
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <div
      className={cn(
        "relative aspect-square w-full shrink-0 overflow-hidden",
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />

      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-hidden
      >
        {EYES.map((eye, i) => (
          <span
            key={i}
            className={cn(
              "cat-eyelid absolute rounded-full bg-black",
              blink === "once" && "cat-blink-once",
              blink === "double" && "cat-blink-double"
            )}
            style={{
              left: `${eye.cx}%`,
              top: `${eye.cy}%`,
              width: `${eye.w}%`,
              height: `${eye.h}%`,
              animationDelay: i === 1 ? "28ms" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  )
}
