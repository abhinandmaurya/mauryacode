"use client"

import type React from "react"

import { useEffect, useState } from "react"

// This hook checks if the user prefers reduced motion
export function useReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => {
      setPrefersReducedMotion(mediaQuery.matches)
    }

    mediaQuery.addEventListener("change", handleChange)
    return () => {
      mediaQuery.removeEventListener("change", handleChange)
    }
  }, [])

  return prefersReducedMotion
}

// This component wraps animations and disables them if user prefers reduced motion
interface MotionSafeProps {
  children: React.ReactNode
  className?: string
  disabledClassName?: string
}

export function MotionSafe({ children, className = "", disabledClassName = "" }: MotionSafeProps) {
  const prefersReducedMotion = useReducedMotion()

  return <div className={prefersReducedMotion ? disabledClassName : className}>{children}</div>
}
