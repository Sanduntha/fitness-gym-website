import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { ServicesSection } from './components/ServicesSection'
import { PricingPage } from './components/PricingPage'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'


export default function App() {
  return (
    <div className="bg-gray-50 dark:bg-gym-dark min-h-screen w-full font-sans text-gray-900 dark:text-white transition-colors duration-300 selection:bg-gym-gold selection:text-black">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingPage />
      <ContactSection />
      <Footer />
    </div>
  )
}
