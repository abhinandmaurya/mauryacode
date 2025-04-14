import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function WebsiteDesignPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-mint/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
                Website Design
              </div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                Beautiful,{" "}
                <span className="gradient-text">Functional Websites</span> That
                Drive Results
              </h1>
              <p className="text-xl text-muted-foreground">
                We create stunning, responsive websites that not only look great
                but also convert visitors into customers and help you achieve
                your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-highlight hover:bg-highlight/90"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-highlight text-highlight hover:bg-highlight/10"
                >
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-50"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden border shadow-xl">
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

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Websites That <span className="text-primary">Work For You</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Our website design services focus on creating beautiful,
              functional websites that help you achieve your business goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "User-Centered Design",
                description:
                  "We design with your users in mind, creating intuitive interfaces that provide exceptional user experiences.",
                icon: "👥",
              },
              {
                title: "Responsive Design",
                description:
                  "Our websites look and function perfectly on all devices, from smartphones and tablets to desktop computers.",
                icon: "📱",
              },
              {
                title: "Conversion-Focused",
                description:
                  "We strategically design your website to guide visitors toward taking action, whether that's making a purchase, filling out a form, or calling your business.",
                icon: "🎯",
              },
              {
                title: "SEO-Friendly",
                description:
                  "Our websites are built with search engine optimization in mind, helping you rank higher in search results and attract more organic traffic.",
                icon: "🔍",
              },
              {
                title: "Fast Loading Speeds",
                description:
                  "We optimize your website for speed, ensuring it loads quickly and provides a smooth user experience.",
                icon: "⚡",
              },
              {
                title: "Brand Consistency",
                description:
                  "We ensure your website reflects your brand identity, with consistent use of colors, typography, and imagery.",
                icon: "🎨",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="service-card relative border-none shadow-lg hover-card-animation"
              >
                <CardContent className="p-8">
                  <div className="text-4xl mb-6">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-secondary-foreground/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground/80 mb-4">
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              How We <span className="text-accent">Create Your Website</span>
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              Our proven design process ensures that we deliver a website that
              meets your needs and exceeds your expectations.
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Discovery & Strategy",
                description:
                  "We start by understanding your business goals, target audience, and requirements. We analyze your competitors and industry to create a strategic roadmap for your website.",
              },
              {
                step: "02",
                title: "Wireframing & Prototyping",
                description:
                  "We create wireframes and prototypes to visualize the structure and functionality of your website, allowing you to provide feedback before we move to design.",
              },
              {
                step: "03",
                title: "Design",
                description:
                  "Our designers create high-fidelity designs that reflect your brand identity and provide an exceptional user experience. We iterate based on your feedback until you're completely satisfied.",
              },
              {
                step: "04",
                title: "Development",
                description:
                  "Our developers bring the designs to life with clean, efficient code, ensuring your website is fast, responsive, and secure.",
              },
              {
                step: "05",
                title: "Testing & Launch",
                description:
                  "We thoroughly test your website across different devices and browsers to ensure it works perfectly. Once everything is ready, we launch your website and provide training on how to use it.",
              },
              {
                step: "06",
                title: "Ongoing Support",
                description:
                  "We provide ongoing support and maintenance to ensure your website continues to perform at its best and evolves with your business.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-lg font-bold text-accent-foreground">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-secondary-foreground/80">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Websites That{" "}
              <span className="text-highlight">Make an Impact</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Take a look at some of the websites we've designed for our
              clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl hover-card-animation"
              >
                <div className="relative h-[300px] w-full overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=600&width=800`}
                    alt={`Portfolio item ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Website Project {i}
                    </h3>
                    <p className="text-white/80 mb-4">
                      Website Design & Development
                    </p>
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90"
                      asChild
                    >
                      <Link href={`/work/website-project-${i}`}>
                        View Case Study
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-highlight text-highlight hover:bg-highlight/10"
              asChild
            >
              <Link href="/work">
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-mint/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              What Our <span className="text-highlight">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our clients have to
              say about our website design services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="border-none shadow-lg hover-card-animation"
              >
                <CardContent className="p-8">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FFC107"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ))}
                  </div>
                  <p className="mb-6 text-muted-foreground">
                    "TechAgency designed a beautiful website for our business
                    that has significantly increased our online presence and
                    lead generation. Their team was professional, responsive,
                    and delivered exactly what we needed."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-muted"></div>
                    <div>
                      <h4 className="font-medium">Client Name {i}</h4>
                      <p className="text-sm text-muted-foreground">
                        CEO, Company {i}
                      </p>
                    </div>
                  </div>
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
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Find answers to common questions about our website design
              services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  question:
                    "How long does it take to design and develop a website?",
                  answer:
                    "The timeline for a website project depends on its complexity. A simple website can be completed in 2-4 weeks, while more complex projects may take 8-12 weeks. We'll provide a detailed timeline during the discovery phase of your project.",
                },
                {
                  question: "How much does a website design project cost?",
                  answer:
                    "The cost of a website depends on its complexity, features, and requirements. Our basic websites start at $2,500, while more complex projects with custom functionality may cost more. We provide detailed, transparent pricing in our proposals with no hidden fees.",
                },
                {
                  question: "Will my website be mobile-friendly?",
                  answer:
                    "Yes, all our websites are built with a mobile-first approach, ensuring they look and function perfectly on all devices—from smartphones and tablets to desktop computers.",
                },
                {
                  question: "Do you provide website hosting and maintenance?",
                  answer:
                    "Yes, we offer website hosting and maintenance services to keep your website secure, updated, and performing at its best. Our maintenance packages include regular updates, security monitoring, performance optimization, and content updates.",
                },
                {
                  question:
                    "Can you help with content creation for my website?",
                  answer:
                    "Yes, we offer professional copywriting and content creation services to help you communicate your message effectively. Our team of experienced copywriters can create compelling, SEO-friendly content that resonates with your target audience.",
                },
                {
                  question: "Do you design e-commerce websites?",
                  answer:
                    "Yes, we design and develop e-commerce websites that provide seamless shopping experiences. We can integrate various payment gateways, shipping methods, and inventory management systems to create a fully functional online store.",
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
              Ready to Create Your Dream Website?
            </h2>
            <p className="text-xl text-highlight-foreground/90 mb-8">
              Let's work together to create a beautiful, functional website that
              helps you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
                asChild
              >
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
  );
}
