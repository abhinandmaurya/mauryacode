"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useReducedMotion } from "@/components/optimized-animations"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const prefersReducedMotion = useReducedMotion()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      <Sun
        className={`h-5 w-5 ${
          prefersReducedMotion
            ? theme === "dark"
              ? "hidden"
              : "block"
            : "rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
        }`}
      />
      <Moon
        className={`absolute h-5 w-5 ${
          prefersReducedMotion
            ? theme === "dark"
              ? "block"
              : "hidden"
            : "rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
        }`}
      />
    </Button>
  )
}
