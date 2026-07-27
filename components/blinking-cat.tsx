import Image from "next/image"

import { cn } from "@/lib/utils"

/** Eye centers measured on catitude2.png (percent of image). */
const EYES = [
  { cx: 51.06, cy: 41.53, size: 18.4 },
  { cx: 70.58, cy: 41.93, size: 16.8 },
] as const

type BlinkingCatProps = {
  className?: string
  priority?: boolean
  alt?: string
  sizes?: string
  src?: string
}

export function BlinkingCat({
  className,
  priority = false,
  alt = "Catitude — black cat with yellow eyes",
  sizes = "(max-width: 768px) 90vw, 520px",
  src = "/catitude2.png",
}: BlinkingCatProps) {
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
            className="cat-eyelid absolute rounded-full bg-black"
            style={{
              left: `${eye.cx}%`,
              top: `${eye.cy}%`,
              width: `${eye.size}%`,
              height: `${eye.size}%`,
              animationDelay: i === 1 ? "45ms" : undefined,
            }}
          />
        ))}
      </div>
    </div>
  )
}
