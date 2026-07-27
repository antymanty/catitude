import Image from "next/image"

import { cn } from "@/lib/utils"

/** Eye centers measured on the 1024² mascot (percent of image). */
const EYES = [
  { cx: 51.05, cy: 41.5, size: 17.8 },
  { cx: 70.56, cy: 41.9, size: 16.2 },
] as const

type BlinkingCatProps = {
  className?: string
  priority?: boolean
  alt?: string
  sizes?: string
}

export function BlinkingCat({
  className,
  priority = false,
  alt = "Catitude — black cat with yellow eyes",
  sizes = "(max-width: 768px) 90vw, 520px",
}: BlinkingCatProps) {
  return (
    <div
      className={cn(
        "relative aspect-square w-full shrink-0 overflow-hidden",
        className
      )}
    >
      <Image
        src="/catitude-cat.jpg"
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-center"
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        {EYES.map((eye, i) => (
          <span
            key={i}
            className="cat-eyelid absolute rounded-full bg-ink"
            style={{
              left: `${eye.cx}%`,
              top: `${eye.cy}%`,
              width: `${eye.size}%`,
              height: `${eye.size}%`,
              animationDelay: i === 1 ? "40ms" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  )
}
