import React from 'react'
import { useScrollReveal } from './hooks/useScrollReveal'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ForWho from './components/ForWho'
import HowItWorks from './components/HowItWorks'
import Benefits from './components/Benefits'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  // Ativa animações de scroll em todos os elementos com classe "reveal"
  useScrollReveal()

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <ForWho />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  )
}
