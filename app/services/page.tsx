import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Code, Cpu, Database, Globe, Layers, Rocket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-mint/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
              Comprehensive <span className="gradient-text">Digital Solutions</span> for Modern Businesses
            </h1>
            <p className="text-xl text-muted-foreground">
              We offer a wide range of services to help your business succeed in the digital world.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Website Design",
                description: "Beautiful, responsive websites that engage visitors and drive conversions.",
                link: "/services/website-design",
              },
              {
                icon: <Code className="h-10 w-10 text-highlight" />,
                title: "Web Development",
                description: "Custom web applications built with the latest technologies for optimal performance.",
                link: "/services/web-development",
              },
              {
                icon: <Database className="h-10 w-10 text-accent" />,
                title: "E-commerce Solutions",
                description: "Powerful online stores that provide seamless shopping experiences.",
                link: "/services/ecommerce",
              },
              {
                icon: <Layers className="h-10 w-10 text-mint" />,
                title: "SEO Optimization",
                description: "Strategic optimization to improve your visibility in search engines.",
                link: "/services/seo",
              },
              {
                icon: <Cpu className="h-10 w-10 text-primary" />,
                title: "Website Maintenance",
                description: "Ongoing support and updates to keep your website secure and performing at its best.",
                link: "/services/maintenance",
              },
              {
                icon: <Rocket className="h-10 w-10 text-highlight" />,
                title: "Digital Strategy",
                description: "Comprehensive digital strategies to help you achieve your business goals.",
                link: "/services/strategy",
              },
            ].map((service, i) => (
              <Card key={i} className="service-card relative border-none shadow-lg hover-card-animation">
                <CardContent className="p-8">
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Link
                    href={service.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-secondary-foreground/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground/80 mb-4">
                Featured Service
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Website Design & Development</h2>
              <p className="text-xl text-secondary-foreground/80">
                We create beautiful, responsive websites that engage visitors and drive conversions. Our websites are
                built with the latest technologies and best practices to ensure optimal performance and user experience.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom design tailored to your brand",
                  "Responsive design for all devices",
                  "SEO-friendly architecture",
                  "Fast loading speeds",
                  "Secure and scalable",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-secondary-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/services/website-design">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-secondary rounded-2xl overflow-hidden border border-secondary-foreground/10 shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Website Design"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We <span className="text-primary">Deliver Results</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our proven process ensures that we deliver high-quality solutions that meet your business objectives.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-border hidden md:block"></div>
            <div className="space-y-12 relative">
              {[
                {
                  step: "01",
                  title: "Discovery & Strategy",
                  description:
                    "We start by understanding your business goals, target audience, and requirements to create a strategic roadmap for your project.",
                },
                {
                  step: "02",
                  title: "Design & Prototyping",
                  description:
                    "Our designers create wireframes and prototypes to visualize the solution and gather feedback before moving to development.",
                },
                {
                  step: "03",
                  title: "Development & Testing",
                  description:
                    "Our developers bring the designs to life with clean, efficient code, ensuring your solution is fast, responsive, and secure.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  description:
                    "We launch your solution and provide ongoing support and maintenance to ensure it continues to perform at its best.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`relative grid items-start gap-8 md:grid-cols-2 ${i % 2 === 1 ? "md:rtl" : ""}`}
                >
                  <div className={`relative ${i % 2 === 1 ? "md:text-right md:ltr" : ""}`}>
                    <div className="hidden md:block absolute top-5 right-0 w-12 h-px bg-border"></div>
                    <div className="md:pr-12">
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                        {item.step}
                      </div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className={`relative ${i % 2 === 1 ? "md:ltr" : ""}`}>
                    <div className="hidden md:block absolute top-5 left-0 w-12 h-px bg-border"></div>
                    <div className="md:pl-12 h-[200px] rounded-lg bg-muted/50 flex items-center justify-center">
                      <span className="text-muted-foreground">Process illustration {i + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-mint/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Transparent <span className="text-highlight">Pricing Plans</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the plan that best fits your business needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$999",
                description: "Perfect for small businesses just getting started.",
                features: [
                  "5-page responsive website",
                  "Basic SEO optimization",
                  "Contact form",
                  "Mobile-friendly design",
                  "1 month of support",
                ],
                cta: "Get Started",
                popular: false,
              },
              {
                name: "Professional",
                price: "$2,499",
                description: "Ideal for growing businesses looking to expand their online presence.",
                features: [
                  "10-page responsive website",
                  "Advanced SEO optimization",
                  "Content management system",
                  "Blog integration",
                  "Social media integration",
                  "3 months of support",
                  "Performance analytics",
                ],
                cta: "Get Started",
                popular: true,
              },
              {
                name: "Enterprise",
                price: "Custom",
                description: "Tailored solutions for large businesses with complex requirements.",
                features: [
                  "Custom website development",
                  "E-commerce functionality",
                  "Custom integrations",
                  "Advanced security features",
                  "Performance optimization",
                  "12 months of support",
                  "Dedicated account manager",
                ],
                cta: "Contact Us",
                popular: false,
              },
            ].map((plan, i) => (
              <Card
                key={i}
                className={`relative border-none shadow-lg hover-card-animation ${
                  plan.popular ? "border-highlight" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-highlight text-highlight-foreground px-3 py-1 text-xs font-medium rounded-bl-lg rounded-tr-lg">
                    Most Popular
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground">/ project</span>}
                  </div>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.popular ? "bg-highlight hover:bg-highlight/90" : "bg-primary hover:bg-primary/90"
                    }`}
                    asChild
                  >
                    <Link href="/contact">
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked <span className="text-highlight">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">Find answers to common questions about our services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question: "How long does it take to complete a website?",
                  answer:
                    "The timeline for a website project depends on its complexity. A simple website can be completed in 2-4 weeks, while more complex projects may take 8-12 weeks. We'll provide a detailed timeline during the discovery phase of your project.",
                },
                {
                  question: "Do you offer ongoing maintenance and support?",
                  answer:
                    "Yes, we offer various maintenance and support packages to keep your website secure, updated, and performing at its best. Our support packages include regular updates, security monitoring, performance optimization, and content updates.",
                },
                {
                  question: "How much does a website cost?",
                  answer:
                    "The cost of a website depends on its complexity, features, and requirements. Our basic websites start at $999, while more complex projects with custom functionality may cost more. We provide detailed, transparent pricing in our proposals with no hidden fees.",
                },
                {
                  question: "Will my website be mobile-friendly?",
                  answer:
                    "All our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices—from smartphones and tablets to desktop computers.",
                },
                {
                  question: "Do you help with content creation?",
                  answer:
                    "Yes, we offer professional copywriting and content creation services to help you communicate your message effectively. Our team of experienced copywriters can create compelling, SEO-friendly content that resonates with your target audience.",
                },
                {
                  question: "Can you help with SEO?",
                  answer:
                    "Yes, we offer comprehensive SEO services to help improve your visibility in search engines. Our SEO services include keyword research, on-page optimization, technical SEO, content strategy, and ongoing optimization.",
                },
              ].map((item, i) => (
                <div key={i} className="border rounded-lg p-6">
                  <h3 className="text-lg font-bold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-highlight text-highlight-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-highlight-foreground/90 mb-8">
              Let's work together to create innovative digital solutions that drive results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-highlight-foreground text-highlight-foreground hover:bg-highlight-foreground/10"
                asChild
              >
                <Link href="/work">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
