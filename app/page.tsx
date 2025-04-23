"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowDown, Bell, CreditCard, PieChart, Shield, Tag, Wallet } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PhoneMockup } from "@/components/phone-mockup"
import { TransactionList } from "@/components/transaction-list"
import { cn } from "@/lib/utils"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const heroRef = useRef<HTMLElement>(null)
  const featuresRef = useRef<HTMLElement>(null)
  const howItWorksRef = useRef<HTMLElement>(null)
  const faqRef = useRef<HTMLElement>(null)
  const ctaRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Calculate scroll progress (0 to 100)
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isInView = (ref: React.RefObject<HTMLElement>, offset = 100) => {
    if (!ref.current) return false
    const rect = ref.current.getBoundingClientRect()
    return rect.top <= window.innerHeight - offset
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-primary rounded-full p-1.5">
              <Wallet className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">FinTrack</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background relative overflow-hidden"
        >
          {/* Parallax Dots Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          />

          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 animate-fade-in">
                <div
                  className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary"
                  style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
                >
                  Introducing FinTrack
                </div>
                <h1
                  className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ transform: `translateY(${-scrollY * 0.03}px)` }}
                >
                  Track All Your UPI Expenses In One Place
                </h1>
                <p
                  className="max-w-[600px] text-muted-foreground md:text-xl"
                  style={{ transform: `translateY(${-scrollY * 0.02}px)` }}
                >
                  FinTrack consolidates transactions from Google Pay, PhonePe, Paytm, and BHIM UPI into a single
                  dashboard with powerful analytics and insights.
                </p>
                <div
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                  style={{ transform: `translateY(${-scrollY * 0.01}px)` }}
                >
                  <div className="flex -space-x-1">
                    <div className="h-6 w-6 rounded-full border-2 border-background bg-primary/20"></div>
                    <div className="h-6 w-6 rounded-full border-2 border-background bg-primary/40"></div>
                    <div className="h-6 w-6 rounded-full border-2 border-background bg-primary/60"></div>
                  </div>
                  <span>Join 10,000+ users tracking their finances</span>
                </div>
              </div>
              <div
                className="mx-auto lg:mx-0 flex items-center justify-center animate-float"
                style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
              >
                <PhoneMockup>
                  <div className="p-2 bg-gray-50 h-full overflow-hidden">
                    <div className="flex items-center justify-between mb-4 px-2">
                      <h2 className="text-lg font-bold">UPI Transactions</h2>
                      <Button variant="ghost" size="sm" className="text-xs">
                        View All
                      </Button>
                    </div>
                    <TransactionList upiOnly={true} />
                  </div>
                </PhoneMockup>
              </div>
            </div>
          </div>
        </section>

        {/* Scroll Down Indicator */}
        <div className="flex justify-center -mt-10 mb-10 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="h-6 w-6" />
            <span className="sr-only">Scroll Down</span>
          </Button>
        </div>

        {/* Features Section */}
        <section id="features" ref={featuresRef} className="py-20 relative overflow-hidden">
          {/* Parallax Grid Background */}
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
              backgroundSize: "50px 50px",
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center gap-4 text-center md:gap-8">
              <div
                className={cn(
                  "space-y-2 transition-all duration-1000 transform",
                  isInView(featuresRef) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
              >
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Everything You Need to Manage Your Finances
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  FinTrack brings all your financial data together in one place, making it easy to track, analyze, and
                  optimize your spending.
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Wallet,
                    title: "UPI Integration",
                    description:
                      "Connect all your UPI apps including Google Pay, PhonePe, Paytm, and BHIM to track every transaction.",
                  },
                  {
                    icon: PieChart,
                    title: "Smart Analytics",
                    description:
                      "Get detailed insights into your spending patterns with beautiful charts and actionable recommendations.",
                  },
                  {
                    icon: CreditCard,
                    title: "Budget Management",
                    description:
                      "Create custom budgets for different categories and get alerts when you're close to your limits.",
                  },
                  {
                    icon: Tag,
                    title: "Auto Categorization",
                    description:
                      "Transactions are automatically categorized, saving you time and providing accurate spending insights.",
                  },
                  {
                    icon: Bell,
                    title: "Bill Reminders",
                    description:
                      "Never miss a payment with smart reminders for upcoming bills and subscription renewals.",
                  },
                  {
                    icon: Shield,
                    title: "Bank-Level Security",
                    description:
                      "Your data is protected with end-to-end encryption and the highest security standards.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center gap-2 text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition-all duration-700",
                      isInView(featuresRef) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                    )}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                      transform: isInView(featuresRef) ? `translateY(0) scale(1)` : `translateY(20px) scale(0.95)`,
                    }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" ref={howItWorksRef} className="py-20 bg-muted/30 relative overflow-hidden">
          {/* Parallax Wave Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='smallGrid' width='60' height='60' patternUnits='userSpaceOnUse'%3E%3Cpath d='M 60 0 L 0 0 0 60' fill='none' stroke='%23000' strokeWidth='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23smallGrid)'/%3E%3C/svg%3E\")",
              transform: `translateY(${scrollY * 0.03}px)`,
            }}
          />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div
                className={cn(
                  "space-y-2 transition-all duration-1000 transform",
                  isInView(howItWorksRef) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
              >
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Start Tracking Your Finances in 3 Simple Steps
                </h2>
              </div>
              <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3 md:gap-12 lg:gap-16 relative">
                {/* Connecting Line */}
                <div className="hidden md:block absolute top-1/2 left-[16.67%] right-[16.67%] h-0.5 bg-primary/20" />

                {[
                  {
                    step: 1,
                    title: "Download the App",
                    description: "Get FinTrack from the App Store or Google Play Store and create your account.",
                  },
                  {
                    step: 2,
                    title: "Connect Your UPI Apps",
                    description: "Securely link your Google Pay, PhonePe, Paytm, and other UPI accounts.",
                  },
                  {
                    step: 3,
                    title: "Gain Financial Insights",
                    description: "Start tracking your expenses and get personalized insights to improve your finances.",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col items-center gap-2 text-center p-6 border rounded-lg bg-background shadow-sm hover:shadow-md transition-all duration-700 relative z-10",
                      isInView(howItWorksRef) ? "opacity-100" : "opacity-0",
                    )}
                    style={{
                      transitionDelay: `${index * 200}ms`,
                      transform: isInView(howItWorksRef)
                        ? `translateY(0) scale(1)`
                        : index % 2 === 0
                          ? `translateY(40px) scale(0.95)`
                          : `translateY(-40px) scale(0.95)`,
                    }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" ref={faqRef} className="py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "20px 20px",
              transform: `translateY(${scrollY * 0.02}px)`,
            }}
          />

          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div
                className={cn(
                  "space-y-2 transition-all duration-1000 transform",
                  isInView(faqRef) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
                )}
              >
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">FAQ</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Frequently Asked Questions</h2>
              </div>
              <div
                className={cn(
                  "mx-auto max-w-3xl space-y-4 transition-all duration-1000 transform w-full",
                  isInView(faqRef) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
                )}
              >
                <Accordion type="single" collapsible className="w-full">
                  {[
                    {
                      question: "Is my financial data secure?",
                      answer:
                        "Yes, we take security very seriously. FinTrack uses bank-level encryption to protect your data. We never store your UPI PINs or passwords, and we use read-only access to your transaction history.",
                    },
                    {
                      question: "Which UPI apps are supported?",
                      answer:
                        "FinTrack currently supports Google Pay, PhonePe, Paytm, and BHIM UPI. We're constantly working to add more payment platforms and banking apps.",
                    },
                    {
                      question: "Can I export my transaction data?",
                      answer:
                        "Yes, you can export your transaction data in CSV or PDF format for record keeping or tax purposes.",
                    },
                    {
                      question: "How far back can I see my transaction history?",
                      answer:
                        "You can access up to 12 months of transaction history, depending on the data availability from your UPI apps.",
                    },
                    {
                      question: "Can I cancel my subscription anytime?",
                      answer:
                        "Yes, you can cancel your subscription at any time. Your premium features will remain active until the end of your billing period.",
                    },
                  ].map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index + 1}`}
                      className="border rounded-lg px-4 mb-4 data-[state=open]:shadow-sm transition-all duration-500"
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        transform: isInView(faqRef)
                          ? `translateX(0)`
                          : index % 2 === 0
                            ? `translateX(-20px)`
                            : `translateX(20px)`,
                        opacity: isInView(faqRef) ? 1 : 0,
                      }}
                    >
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          {/* Animated Background */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%), linear-gradient(45deg, currentColor 25%, transparent 25%), linear-gradient(315deg, currentColor 25%, transparent 25%)",
              backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
              backgroundSize: "20px 20px",
              backgroundRepeat: "repeat",
              transform: `translateY(${scrollY * 0.04}px)`,
            }}
          />

          <div className="container px-4 md:px-6 relative">
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-4 text-center transition-all duration-1000 transform",
                isInView(ctaRef) ? "opacity-100 scale-100" : "opacity-0 scale-95",
              )}
            >
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Ready to Take Control of Your Finances?
              </h2>
              <p className="mx-auto max-w-[700px] md:text-xl">
                Join thousands of users who are already tracking their UPI expenses with FinTrack.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="bg-primary rounded-full p-1.5">
                  <Wallet className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">FinTrack</span>
              </div>
              <p className="text-muted-foreground">
                The all-in-one finance tracker that helps you manage your UPI transactions and take control of your
                spending.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                    className="h-5 w-5"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                    className="h-5 w-5"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
                    className="h-5 w-5"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Download</h3>
              <div className="flex flex-col gap-2">
                <Link href="#" className="inline-block">
                  <div className="flex items-center gap-2 border rounded-lg p-2 hover:bg-muted/50 transition-colors">
                    <div className="text-left">
                      <div className="text-xs">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </div>
                </Link>
                <Link href="#" className="inline-block">
                  <div className="flex items-center gap-2 border rounded-lg p-2 hover:bg-muted/50 transition-colors">
                    <div className="text-left">
                      <div className="text-xs">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2025 FinTrack. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
