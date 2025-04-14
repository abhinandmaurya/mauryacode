import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-mint/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
              Latest <span className="gradient-text">Insights</span> & News
            </h1>
            <p className="text-xl text-muted-foreground">
              Stay updated with the latest trends, insights, and news from the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Categories Section */}
      <section className="py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <Input type="search" placeholder="Search articles..." className="pl-10" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Button variant="outline" size="sm" className="rounded-full">
                All
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Web Design
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Development
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                E-commerce
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                SEO
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Technology
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post Section */}
      <section className="py-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0">
              <Image src="/placeholder.svg?height=800&width=1600" alt="Featured post" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 to-secondary/60"></div>
            </div>
            <div className="relative p-8 md:p-12 lg:p-16 text-white">
              <div className="max-w-2xl">
                <div className="inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent mb-4">
                  Featured
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  The Future of Web Development: Trends to Watch in 2023
                </h2>
                <p className="text-white/80 mb-6 text-lg">
                  Discover the latest web development trends that are shaping the digital landscape in 2023 and beyond.
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-10 w-10 rounded-full bg-white/20"></div>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-white/60">April 12, 2023 • 10 min read</div>
                  </div>
                </div>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link href="/blog/future-web-development">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <Card key={i} className="overflow-hidden border-none shadow-lg hover-card-animation">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`Blog post ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                      Category
                    </div>
                    <div className="text-xs text-muted-foreground">April 12, 2023</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3">
                    <Link href={`/blog/post-${i}`} className="hover:text-primary transition-colors">
                      10 Web Design Trends to Watch in 2023
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Discover the latest web design trends that are shaping the digital landscape in 2023.
                  </p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-8 w-8 rounded-full bg-muted"></div>
                    <div className="text-sm text-muted-foreground">By John Doe</div>
                  </div>
                  <Link
                    href={`/blog/post-${i}`}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" size="icon" disabled>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span className="sr-only">Previous</span>
              </Button>
              <Button variant="outline" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline" size="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-highlight text-highlight-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-highlight-foreground/90 mb-8">
              Get the latest insights and news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-highlight-foreground/10 border-highlight-foreground/20 text-highlight-foreground placeholder:text-highlight-foreground/60"
              />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
