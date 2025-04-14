"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X, Phone, Mail } from "lucide-react"
import { useReducedMotion } from "@/components/optimized-animations"

import { Button } from "@/components/ui/button"

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-3">
      {isOpen && (
        <div className={`flex flex-col gap-3 ${prefersReducedMotion ? "" : "animate-fade-up"}`}>
          <Button size="icon" className="h-12 w-12 rounded-full bg-accent hover:bg-accent/90 shadow-lg" asChild>
            <Link href="tel:+15551234567" aria-label="Call us">
              <Phone className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="icon" className="h-12 w-12 rounded-full bg-primary hover:bg-primary/90 shadow-lg" asChild>
            <Link href="mailto:hello@mauryacode.com" aria-label="Email us">
              <Mail className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="icon" className="h-12 w-12 rounded-full bg-highlight hover:bg-highlight/90 shadow-lg" asChild>
            <Link href="/contact" aria-label="Contact page">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      )}
      <Button
        size="icon"
        className="h-14 w-14 rounded-full bg-highlight hover:bg-highlight/90 shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  )
}
