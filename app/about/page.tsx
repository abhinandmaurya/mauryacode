import Link from "next/link";
import { ArrowRight, Users, Award, Clock, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlurImage } from "@/components/blur-image";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-mint/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
                About Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                We're a Team of{" "}
                <span className="gradient-text">Digital Innovators</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Founded in 2024, MauryaCode has been at the forefront of digital
                transformation, helping businesses of all sizes leverage
                technology to achieve their goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-highlight hover:bg-highlight/90"
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-highlight text-highlight hover:bg-highlight/10"
                >
                  Contact Us
                </Button>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden border shadow-xl">
                <BlurImage
                  src="/placeholder.svg?height=600&width=800"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal className="order-2 lg:order-1" delay={100}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-background rounded-2xl overflow-hidden border shadow-xl">
                  <BlurImage
                    src="/placeholder.svg?height=600&width=800"
                    alt="Our Story"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal className="space-y-8 order-1 lg:order-2" delay={200}>
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                From Startup to Industry{" "}
                <span className="text-primary">Leader</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                MauryaCode was founded with a simple mission: to help businesses
                succeed in the digital age. What started as a small team of
                passionate developers and designers has grown into a
                full-service digital agency with a global client base.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the years, we've helped hundreds of businesses transform
                their digital presence, from small local businesses to Fortune
                500 companies. Our commitment to quality, innovation, and
                results has made us a trusted partner for businesses looking to
                thrive in the digital landscape.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-highlight">2024</div>
                  <p className="text-muted-foreground">Year Founded</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-highlight">10+</div>
                  <p className="text-muted-foreground">Team Members</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-highlight">50+</div>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-highlight">15+</div>
                  <p className="text-muted-foreground">Industry Awards</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-secondary-foreground/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground/80 mb-4">
              Our Values
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              The Principles That <span className="text-accent">Guide Us</span>
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Our core values shape everything we do, from how we work with
              clients to how we develop our solutions.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "Client-Focused",
                description:
                  "We put our clients' needs first, working closely with them to understand their goals and deliver solutions that exceed their expectations.",
              },
              {
                icon: <Award className="h-10 w-10 text-accent" />,
                title: "Excellence",
                description:
                  "We strive for excellence in everything we do, from the quality of our code to the design of our interfaces and the service we provide.",
              },
              {
                icon: <Zap className="h-10 w-10 text-accent" />,
                title: "Innovation",
                description:
                  "We embrace new technologies and approaches, constantly pushing the boundaries of what's possible to deliver cutting-edge solutions.",
              },
              {
                icon: <Clock className="h-10 w-10 text-accent" />,
                title: "Reliability",
                description:
                  "We deliver on our promises, meeting deadlines and maintaining open communication throughout the project lifecycle.",
              },
            ].map((value, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="bg-secondary-foreground/5 border-secondary-foreground/10 hover-card-animation">
                  <CardContent className="p-8">
                    <div className="mb-6">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-secondary-foreground/80">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              Our Team
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Meet the <span className="text-highlight">Talented People</span>{" "}
              Behind Our Success
            </h2>
            <p className="text-xl text-muted-foreground">
              Our diverse team of experts brings together a wealth of experience
              and creativity to deliver exceptional results.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <ScrollReveal
                key={i}
                delay={(i % 4) * 100}
                className="group relative overflow-hidden rounded-xl hover-card-animation"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <BlurImage
                    src={`/placeholder.svg?height=600&width=400`}
                    alt={`Team member ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-1">
                      Team Member {i}
                    </h3>
                    <p className="text-white/80 mb-4">Position Title</p>
                    <div className="flex gap-3">
                      <Link
                        href="#"
                        className="text-white hover:text-accent"
                        aria-label="LinkedIn"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:text-accent"
                        aria-label="Twitter"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                      </Link>
                      <Link
                        href="#"
                        className="text-white hover:text-accent"
                        aria-label="Instagram"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-highlight text-highlight-foreground">
        <div className="container">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-highlight-foreground/90 mb-8">
              Let's collaborate to create innovative digital solutions that
              drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-highlight-foreground text-highlight-foreground hover:bg-highlight-foreground/10"
              >
                Contact Us
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
