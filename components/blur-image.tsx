"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/components/ui/skeleton"

interface BlurImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  fill?: boolean
  priority?: boolean
  sizes?: string
}

export function BlurImage({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  sizes,
}: BlurImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // Reset loading state when src changes
  useEffect(() => {
    setIsLoading(true)
    setIsError(false)
  }, [src])

  return (
    <div
      className={cn("overflow-hidden relative", isLoading && "bg-muted animate-pulse", className)}
      style={!fill ? { width, height } : undefined}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <Skeleton className="w-full h-full absolute" />
        </div>
      )}

      {isError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-muted">
          <span className="text-muted-foreground text-sm">Failed to load image</span>
        </div>
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          fill={fill}
          priority={priority}
          sizes={sizes}
          className={cn("transition-opacity duration-500", isLoading ? "opacity-0" : "opacity-100", className)}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setIsError(true)
          }}
        />
      )}
    </div>
  )
}
