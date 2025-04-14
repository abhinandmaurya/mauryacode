import Link from "next/link";
import {
  ArrowRight,
  Code,
  Cpu,
  Database,
  Globe,
  Layers,
  Rocket,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatedGradientBackground } from "@/components/animated-gradient-background";
import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { BlurImage } from "@/components/blur-image";
import { MotionSafe } from "@/components/optimized-animations";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <AnimatedGradientBackground />
        <div className="absolute inset-0 bg-grid -z-10"></div>
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-background to-transparent -z-10"></div>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal className="space-y-8 max-w-2xl">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
                <MotionSafe className="animate-pulse-glow">
                  <span className="block h-2 w-2 rounded-full bg-accent mr-2"></span>
                  Innovative Digital Solutions
                </MotionSafe>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tighter">
                We Build{" "}
                <MotionSafe
                  className="animate-text-shimmer"
                  disabledClassName="text-primary"
                >
                  Digital Experiences
                </MotionSafe>{" "}
                That Drive Results
              </h1>
              <p className="text-xl text-muted-foreground">
                Our development agency combines creativity and technology to
                deliver cutting-edge solutions that help businesses thrive in
                the digital landscape.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-highlight hover:bg-highlight/90"
                >
                  <MotionSafe className="animate-border-pulse w-full h-full flex items-center justify-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </MotionSafe>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-highlight text-highlight hover:bg-highlight/10"
                >
                  View Our Work
                </Button>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-background bg-muted flex items-center justify-center"
                    >
                      <span className="text-xs font-medium">C{i}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">
                    <AnimatedCounter end={100} suffix="+" />
                  </span>{" "}
                  clients worldwide
                </div>
              </div>
            </ScrollReveal>
            <div className="relative perspective-container">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-50">
                <MotionSafe className="animate-pulse-slow h-full w-full" />
              </div>
              <div className="relative bg-background rounded-2xl overflow-hidden border shadow-xl">
                <MotionSafe className="tilt-card animate-float-slow">
                  <BlurImage
                    src="https://ik.imagekit.io/yourAccount/digital-experience.jpg?tr=w-800,h-600,fo-auto"
                    alt="Modern digital interface"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </MotionSafe>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 bg-mint rounded-2xl shadow-lg flex items-center justify-center">
                <MotionSafe className="animate-bounce-slow">
                  <Zap className="h-10 w-10 text-secondary" />
                </MotionSafe>
              </div>
              <div
                className="absolute -top-6 -right-6 h-24 w-24 bg-accent rounded-2xl shadow-lg flex items-center justify-center"
                style={{ animationDelay: "1s" }}
              >
                <MotionSafe className="animate-float-slow">
                  <Rocket className="h-10 w-10 text-secondary" />
                </MotionSafe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-16 bg-mint/10">
        <div className="container">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-2xl font-medium text-muted-foreground">
              Trusted by innovative companies worldwide
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[1, 2, 3, 4, 5].map((i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="h-12 w-32 bg-background rounded-md shadow-sm flex items-center justify-center hover-card-animation">
                  <span className="text-muted-foreground font-medium">
                    LOGO {i}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              Our Services
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Comprehensive Digital Solutions for Modern Businesses
            </h2>
            <p className="text-xl text-muted-foreground">
              We offer a wide range of services to help your business succeed in
              the digital world.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Website Design",
                description:
                  "Beautiful, responsive websites that engage visitors and drive conversions.",
                link: "/services/website-design",
              },
              {
                icon: <Code className="h-10 w-10 text-highlight" />,
                title: "Web Development",
                description:
                  "Custom web applications built with the latest technologies for optimal performance.",
                link: "/services/web-development",
              },
              {
                icon: <Database className="h-10 w-10 text-accent" />,
                title: "E-commerce Solutions",
                description:
                  "Powerful online stores that provide seamless shopping experiences.",
                link: "/services/ecommerce",
              },
              {
                icon: <Layers className="h-10 w-10 text-mint" />,
                title: "SEO Optimization",
                description:
                  "Strategic optimization to improve your visibility in search engines.",
                link: "/services/seo",
              },
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "Website Maintenance",
                description:
                  "Ongoing support and updates to keep your website secure and performing at its best.",
                link: "/services/maintenance",
              },
              {
                icon: <Rocket className="h-10 w-10 text-highlight" />,
                title: "Digital Strategy",
                description:
                  "Comprehensive digital strategies to help you achieve your business goals.",
                link: "/services/strategy",
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 100} className="h-full">
                <Card className="service-card relative border-none shadow-lg hover-card-animation h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                    >
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-16 text-center" delay={300}>
            <Button
              asChild
              size="lg"
              className="bg-highlight hover:bg-highlight/90"
            >
              <MotionSafe className="animate-border-pulse">
                <Link href="/services" className="flex items-center">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </MotionSafe>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Showcasing Our{" "}
              <span className="text-highlight">Creative Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of successful projects that have helped our
              clients achieve their business objectives.
            </p>
          </ScrollReveal>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-10 overflow-x-auto pb-2">
              <TabsList className="bg-muted/50">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="web">Web Design</TabsTrigger>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="apps">Applications</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <ScrollReveal key={i} delay={i * 100} className="h-full">
                    <div className="group relative overflow-hidden rounded-xl hover-card-animation h-full">
                      <div className="relative h-[300px] w-full overflow-hidden">
                        <BlurImage
                          src={`/placeholder.svg?height=600&width=800`}
                          alt={`Portfolio item ${i}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold text-white mb-2">
                            Project {i}
                          </h3>
                          <p className="text-white/80 mb-4">
                            Web Design & Development
                          </p>
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90"
                          >
                            View Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="web" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <ScrollReveal key={i} delay={i * 100} className="h-full">
                    <div className="group relative overflow-hidden rounded-xl hover-card-animation h-full">
                      <div className="relative h-[300px] w-full overflow-hidden">
                        <BlurImage
                          src={`/placeholder.svg?height=600&width=800`}
                          alt={`Web design portfolio item ${i}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold text-white mb-2">
                            Web Project {i}
                          </h3>
                          <p className="text-white/80 mb-4">
                            Web Design & Development
                          </p>
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90"
                          >
                            View Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ecommerce" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2].map((i) => (
                  <ScrollReveal key={i} delay={i * 100} className="h-full">
                    <div className="group relative overflow-hidden rounded-xl hover-card-animation h-full">
                      <div className="relative h-[300px] w-full overflow-hidden">
                        <BlurImage
                          src={`/placeholder.svg?height=600&width=800`}
                          alt={`E-commerce portfolio item ${i}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold text-white mb-2">
                            E-commerce Project {i}
                          </h3>
                          <p className="text-white/80 mb-4">
                            Online Store Development
                          </p>
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90"
                          >
                            View Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="apps" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1].map((i) => (
                  <ScrollReveal key={i} delay={i * 100} className="h-full">
                    <div className="group relative overflow-hidden rounded-xl hover-card-animation h-full">
                      <div className="relative h-[300px] w-full overflow-hidden">
                        <BlurImage
                          src={`/placeholder.svg?height=600&width=800`}
                          alt={`App portfolio item ${i}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-bold text-white mb-2">
                            App Project {i}
                          </h3>
                          <p className="text-white/80 mb-4">
                            Mobile Application Development
                          </p>
                          <Button
                            size="sm"
                            className="bg-accent hover:bg-accent/90"
                          >
                            View Case Study
                          </Button>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <ScrollReveal className="mt-12 text-center" delay={300}>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-highlight text-highlight hover:bg-highlight/10"
            >
              <Link href="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
