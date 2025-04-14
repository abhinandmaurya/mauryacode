import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BlurImage } from "@/components/blur-image"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function WorkPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-mint/10">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              Our Work
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
              Showcasing Our <span className="gradient-text">Creative Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects that have helped our clients achieve their business
              objectives.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-10 overflow-x-auto pb-2">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Design</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="apps">Applications</TabsTrigger>
                <TabsTrigger value="branding">Branding</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                  <ScrollReveal
                    key={i}
                    delay={(i % 3) * 100}
                    className="group relative overflow-hidden rounded-xl hover-card-animation"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <BlurImage
                        src={`/placeholder.svg?height=600&width=800`}
                        alt={`Portfolio item ${i}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Project {i}</h3>
                        <p className="text-white/80 mb-4">Web Design & Development</p>
                        <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                          <Link href={`/work/project-${i}`}>View Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4].map((i) => (
                  <ScrollReveal
                    key={i}
                    delay={(i % 3) * 100}
                    className="group relative overflow-hidden rounded-xl hover-card-animation"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <BlurImage
                        src={`/placeholder.svg?height=600&width=800`}
                        alt={`Web design portfolio item ${i}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Web Project {i}</h3>
                        <p className="text-white/80 mb-4">Web Design & Development</p>
                        <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                          <Link href={`/work/web-project-${i}`}>View Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <ScrollReveal
                    key={i}
                    delay={(i % 3) * 100}
                    className="group relative overflow-hidden rounded-xl hover-card-animation"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <BlurImage
                        src={`/placeholder.svg?height=600&width=800`}
                        alt={`E-commerce portfolio item ${i}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">E-commerce Project {i}</h3>
                        <p className="text-white/80 mb-4">Online Store Development</p>
                        <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                          <Link href={`/work/ecommerce-project-${i}`}>View Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="apps" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2].map((i) => (
                  <ScrollReveal
                    key={i}
                    delay={(i % 3) * 100}
                    className="group relative overflow-hidden rounded-xl hover-card-animation"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <BlurImage
                        src={`/placeholder.svg?height=600&width=800`}
                        alt={`App portfolio item ${i}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">App Project {i}</h3>
                        <p className="text-white/80 mb-4">Mobile Application Development</p>
                        <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                          <Link href={`/work/app-project-${i}`}>View Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="branding" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1].map((i) => (
                  <ScrollReveal
                    key={i}
                    delay={100}
                    className="group relative overflow-hidden rounded-xl hover-card-animation"
                  >
                    <div className="relative h-[300px] w-full overflow-hidden">
                      <BlurImage
                        src={`/placeholder.svg?height=600&width=800`}
                        alt={`Branding portfolio item ${i}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h3 className="text-xl font-bold text-white mb-2">Branding Project {i}</h3>
                        <p className="text-white/80 mb-4">Brand Identity Design</p>
                        <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                          <Link href={`/work/branding-project-${i}`}>View Case Study</Link>
                        </Button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Case Study Preview Section */}
      <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-secondary-foreground/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground/80 mb-4">
              Featured Case Study
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We Helped <span className="text-accent">Brand X</span> Increase Conversions by 200%
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              A deep dive into our process and the results we achieved for one of our clients.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="relative" delay={100}>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-secondary rounded-2xl overflow-hidden border border-secondary-foreground/10 shadow-xl">
                <BlurImage
                  src="/placeholder.svg?height=600&width=800"
                  alt="Case Study"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-8" delay={200}>
              <h3 className="text-2xl font-bold">The Challenge</h3>
              <p className="text-secondary-foreground/80">
                Brand X was struggling with low conversion rates on their e-commerce website. Despite having
                high-quality products and a strong brand, they were not seeing the sales they expected.
              </p>
              <h3 className="text-2xl font-bold">Our Approach</h3>
              <p className="text-secondary-foreground/80">
                We conducted a comprehensive audit of their website and identified several key issues affecting
                conversions. We then developed a strategy to address these issues, including redesigning the user
                interface, optimizing the checkout process, and implementing a new product recommendation system.
              </p>
              <h3 className="text-2xl font-bold">The Results</h3>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>• 200% increase in conversion rate</li>
                <li>• 150% increase in average order value</li>
                <li>• 300% increase in mobile conversions</li>
                <li>• 50% reduction in cart abandonment</li>
              </ul>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/work/brand-x-case-study">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's work together to create innovative digital solutions that drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-highlight hover:bg-highlight/90">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-highlight text-highlight hover:bg-highlight/10">
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
