import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CareersPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-mint/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
              Join Our Team
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter mb-6">
              Build Your <span className="gradient-text">Career</span> With Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Join our team of talented professionals and help us create innovative digital solutions that make a
              difference.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                Why Join Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Work With a Team That <span className="text-primary">Values Your Growth</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                At TechAgency, we believe in creating an environment where talented individuals can thrive, innovate,
                and grow both personally and professionally.
              </p>
              <ul className="space-y-4">
                {[
                  "Collaborative and inclusive work environment",
                  "Opportunities for professional development",
                  "Work on exciting projects for innovative clients",
                  "Competitive compensation and benefits",
                  "Work-life balance and flexible schedules",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-highlight rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-background rounded-2xl overflow-hidden border shadow-xl">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Team working together"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-secondary-foreground/10 px-4 py-1.5 text-sm font-medium text-secondary-foreground/80 mb-4">
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              We Take Care of Our <span className="text-accent">Team</span>
            </h2>
            <p className="text-xl text-secondary-foreground/80">
              We offer a comprehensive benefits package to support our team members' wellbeing and success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Health & Wellness",
                description:
                  "Comprehensive health insurance, dental and vision coverage, wellness programs, and gym membership reimbursement.",
                icon: "🏥",
              },
              {
                title: "Work-Life Balance",
                description:
                  "Flexible working hours, remote work options, generous paid time off, and parental leave policies.",
                icon: "⏰",
              },
              {
                title: "Professional Growth",
                description:
                  "Continuous learning opportunities, conference attendance, professional development budget, and mentorship programs.",
                icon: "📈",
              },
              {
                title: "Financial Benefits",
                description: "Competitive salary, performance bonuses, 401(k) matching, and employee stock options.",
                icon: "💰",
              },
              {
                title: "Team Building",
                description:
                  "Regular team events, company retreats, and a collaborative work environment that fosters creativity and innovation.",
                icon: "🤝",
              },
              {
                title: "Office Perks",
                description:
                  "Modern office space, standing desks, latest technology, free snacks and beverages, and casual dress code.",
                icon: "🏢",
              },
            ].map((benefit, i) => (
              <Card key={i} className="bg-secondary-foreground/5 border-secondary-foreground/10 hover-card-animation">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-secondary-foreground/80">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent mb-4">
              Open Positions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Join Our <span className="text-highlight">Growing Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We're always looking for talented individuals to join our team. Check out our current openings below.
            </p>
          </div>

          <div className="grid gap-6">
            {[
              {
                title: "Senior Frontend Developer",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
                description:
                  "We're looking for a Senior Frontend Developer with expertise in React, Next.js, and modern frontend technologies to join our team.",
              },
              {
                title: "UX/UI Designer",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
                description:
                  "We're seeking a talented UX/UI Designer with a strong portfolio and experience designing user-centered digital products.",
              },
              {
                title: "Backend Developer",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
                description:
                  "We're looking for a Backend Developer with experience in Node.js, Express, and database technologies to join our growing team.",
              },
              {
                title: "Digital Marketing Specialist",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
                description:
                  "We're seeking a Digital Marketing Specialist with experience in SEO, content marketing, and social media management.",
              },
              {
                title: "Project Manager",
                location: "San Francisco, CA (Remote Option)",
                type: "Full-time",
                description:
                  "We're looking for a Project Manager with experience managing digital projects and client relationships.",
              },
            ].map((position, i) => (
              <Card key={i} className="hover-card-animation">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{position.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                          </svg>
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="M12 8v4l3 3" />
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                          <span>{position.type}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{position.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <Button className="bg-highlight hover:bg-highlight/90" asChild>
                        <Link href={`/careers/job-${i + 1}`}>
                          Apply Now
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">
              Don't see a position that matches your skills? We're always interested in hearing from talented
              individuals.
            </p>
            <Button variant="outline" className="border-highlight text-highlight hover:bg-highlight/10" asChild>
              <Link href="/contact">
                Send Us Your Resume
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Culture Section */}
      <section className="py-20 bg-mint/10">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Team culture 1"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mt-8">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Team culture 2"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Team culture 3"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden mt-8">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Team culture 4"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8 order-1 lg:order-2">
              <div className="inline-flex items-center rounded-full bg-highlight/10 px-4 py-1.5 text-sm font-medium text-highlight mb-4">
                Our Culture
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                A Culture of <span className="text-highlight">Creativity</span> and{" "}
                <span className="text-primary">Collaboration</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                At TechAgency, we foster a culture that values creativity, collaboration, and continuous learning. We
                believe that the best ideas come from diverse perspectives and open communication.
              </p>
              <p className="text-lg text-muted-foreground">
                Our team members are encouraged to think outside the box, take ownership of their work, and contribute
                to the company's growth. We celebrate successes together and learn from challenges as a team.
              </p>
              <Button className="bg-highlight hover:bg-highlight/90" asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-highlight text-highlight-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Join Our Team?</h2>
            <p className="text-xl text-highlight-foreground/90 mb-8">
              Explore our current openings and take the next step in your career with TechAgency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Open Positions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-highlight-foreground text-highlight-foreground hover:bg-highlight-foreground/10"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
