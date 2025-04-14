"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { useReducedMotion } from "@/components/optimized-animations";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/work", label: "Our Work" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 z-50 group">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-highlight flex items-center justify-center text-white font-bold text-xl transition-transform duration-500 group-hover:rotate-6">
            MC
          </div>
          <span className="font-bold text-xl relative overflow-hidden">
            <span
              className={`inline-block ${
                prefersReducedMotion
                  ? ""
                  : "transition-transform duration-500 group-hover:-translate-y-full"
              }`}
            >
              MauryaCode
            </span>
            <span
              className={`absolute left-0 top-0 inline-block text-primary ${
                prefersReducedMotion
                  ? "hidden"
                  : "translate-y-full transition-transform duration-500 group-hover:translate-y-0"
              }`}
            >
              MauryaCode
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative group",
                pathname === item.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {item.label}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary ${
                  prefersReducedMotion
                    ? ""
                    : "transition-all duration-300 group-hover:w-full"
                }`}
              ></span>
            </Link>
          ))}
          <ThemeToggle />
          <Button className="bg-highlight hover:bg-highlight/90 relative overflow-hidden group">
            <span
              className={`inline-block ${
                prefersReducedMotion
                  ? ""
                  : "transition-transform duration-500 group-hover:-translate-y-full"
              }`}
            >
              Get Started
            </span>
            <span
              className={`absolute left-0 top-0 inline-block ${
                prefersReducedMotion
                  ? "hidden"
                  : "translate-y-full transition-transform duration-500 group-hover:translate-y-0"
              }`}
            ></span>
          </Button>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            className="z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-foreground/80"
              )}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-highlight hover:bg-highlight/90 mt-4">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
