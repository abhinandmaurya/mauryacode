"use client"

import { useEffect, useRef } from "react"
import { useReducedMotion } from "@/components/optimized-animations"

export function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    // Skip effect if user prefers reduced motion
    if (prefersReducedMotion) return

    // Throttle function to improve performance
    const throttle = (callback: Function, delay: number) => {
      let lastCall = 0
      return (...args: any[]) => {
        const now = new Date().getTime()
        if (now - lastCall < delay) {
          return
        }
        lastCall = now
        return callback(...args)
      }
    }

    const handleMouseMove = throttle((e: MouseEvent) => {
      if (!spotlightRef.current) return

      const x = e.clientX
      const y = e.clientY

      spotlightRef.current.style.background = `radial-gradient(
        600px circle at ${x}px ${y}px,
        rgba(0, 123, 255, 0.1),
        transparent 40%
      )`
    }, 30) // Throttle to 30ms for better performance

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [prefersReducedMotion])

  // Don't render the spotlight if user prefers reduced motion
  if (prefersReducedMotion) return null

  return (
    <div
      ref={spotlightRef}
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{ opacity: 0.7, willChange: "background" }}
      aria-hidden="true"
    />
  )
}
