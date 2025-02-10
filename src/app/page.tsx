"use client"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { CalculatorSection } from "@/components/CalculatorSection"
import { HowItWorks } from "@/components/HowItWorks"
import { WhatWeDo } from "@/components/WhatWeDo"
import { InvestmentAdvantages } from "@/components/InvestmentAdvantages"
import { ParaguayAdvantages } from "@/components/ParaguayAdvantages"
import { FAQ } from "@/components/FAQ"
import { StartToday } from "@/components/StartToday"
import { Footer } from "@/components/Footer"
import { ContactForm } from "@/components/ContactForm"
import { useContactForm } from "@/contexts/ContactFormContext"

export default function Home() {
  const { isContactFormOpen, closeContactForm } = useContactForm()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        <section id="calculator">
          <CalculatorSection />
        </section>
        <section id="how-it-works">
          <HowItWorks />
        </section>
        <section id="what-we-do">
          <WhatWeDo />
        </section>
        <section id="advantages">
          <InvestmentAdvantages />
        </section>
        <section id="paraguay">
          <ParaguayAdvantages />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <section id="start-today">
          <StartToday />
        </section>
      </main>
      <Footer />
      <ContactForm isOpen={isContactFormOpen} onClose={closeContactForm} />
    </div>
  )
}