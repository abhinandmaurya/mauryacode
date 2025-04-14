import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <ScrollReveal className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-highlight flex items-center justify-center text-white font-bold text-xl transition-transform duration-500 group-hover:rotate-6">
                MC
              </div>
              <span className="font-bold text-xl">MauryaCode</span>
            </div>
            <p className="text-secondary-foreground/80 max-w-xs">
              We create innovative digital solutions that help businesses thrive in the modern world.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-secondary-foreground/80 hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground/80 hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground/80 hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-secondary-foreground/80 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/work"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Contact
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services/website-design"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Website Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ecommerce"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/maintenance"
                  className="text-secondary-foreground/80 hover:text-accent transition-colors group flex items-center"
                >
                  <span className="inline-block w-0 transition-all duration-300 group-hover:w-2 group-hover:mr-1 overflow-hidden">
                    →
                  </span>
                  Website Maintenance
                </Link>
              </li>
            </ul>
          </ScrollReveal>

          <ScrollReveal className="space-y-4" delay={300}>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            <p className="text-secondary-foreground/80">Subscribe to our newsletter to receive updates and insights.</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 text-secondary-foreground"
                aria-label="Email for newsletter"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </div>
            <div className="space-y-2 mt-6">
              <div className="flex items-center gap-2 group">
                <Mail className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-secondary-foreground/80">hello@mauryacode.com</span>
              </div>
              <div className="flex items-center gap-2 group">
                <Phone className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-secondary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2 group">
                <MapPin className="h-4 w-4 text-accent group-hover:scale-110 transition-transform" />
                <span className="text-secondary-foreground/80">123 Tech Street, San Francisco, CA</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} MauryaCode. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-sm text-secondary-foreground/60 hover:text-accent transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
