"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { useReducedMotion } from "@/components/optimized-animations"
import { BlurImage } from "@/components/blur-image"

interface ParallaxSectionProps {
  children: React.ReactNode
  imageUrl: string
  overlayColor?: string
  className?: string
}

export function ParallaxSection({
  children,
  imageUrl,
  overlayColor = "rgba(0, 0, 0, 0.6)",
  className = "",
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const parallaxRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Skip parallax effect if user prefers reduced motion
    if (prefersReducedMotion) return

    const handleScroll = () => {
      if (!sectionRef.current || !parallaxRef.current) return

      const scrollPosition = window.scrollY
      const sectionPosition = sectionRef.current.offsetTop
      const sectionHeight = sectionRef.current.offsetHeight
      const windowHeight = window.innerHeight

      // Only apply parallax when the section is in view
      if (scrollPosition + windowHeight > sectionPosition && scrollPosition < sectionPosition + sectionHeight) {
        const yPos = (scrollPosition - sectionPosition) * 0.4
        parallaxRef.current.style.transform = `translateY(${yPos}px)`
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [prefersReducedMotion])

  return (
    <div ref={sectionRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={parallaxRef}
        className="absolute inset-0 w-full h-full"
        style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
      >
        <BlurImage src={imageUrl || "/placeholder.svg"} alt="Background" fill className="object-cover" priority />
        <div className="absolute inset-0" style={{ backgroundColor: overlayColor }}></div>
      </div>
      <div className="relative z-10">{children}</div>
    </div>
  )
}
