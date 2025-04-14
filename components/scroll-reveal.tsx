"use client"

import { useRef, useEffect, type ReactNode } from "react"
import { useReducedMotion } from "@/components/optimized-animations"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  distance?: string
  duration?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = "20px",
  duration = 800,
  once = true,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const hasAnimatedRef = useRef(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    // If user prefers reduced motion, show content immediately without animation
    if (prefersReducedMotion) {
      element.style.opacity = "1"
      element.style.transform = "translate(0, 0)"
      return
    }

    // Set initial styles
    let translateValue = ""
    switch (direction) {
      case "up":
        translateValue = `translateY(${distance})`
        break
      case "down":
        translateValue = `translateY(-${distance})`
        break
      case "left":
        translateValue = `translateX(${distance})`
        break
      case "right":
        translateValue = `translateX(-${distance})`
        break
    }

    element.style.opacity = "0"
    element.style.transform = translateValue
    element.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`
    element.style.transitionDelay = `${delay}ms`
    element.style.willChange = "opacity, transform"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && (!once || !hasAnimatedRef.current)) {
            hasAnimatedRef.current = true
            element.style.opacity = "1"
            element.style.transform = "translate(0, 0)"
          } else if (!entry.isIntersecting && !once && hasAnimatedRef.current) {
            element.style.opacity = "0"
            element.style.transform = translateValue
            hasAnimatedRef.current = false
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [delay, direction, distance, duration, once, prefersReducedMotion])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
