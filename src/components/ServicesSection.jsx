import React, { useState } from 'react'
import { Dumbbell, ClipboardCheck, CalendarRange } from 'lucide-react'

const services = [
  {
    icon: <Dumbbell className="w-7 h-7 text-gym-gold" />,
    title: 'Powerlifting Center',
    description:
      'State-of-the-art powerlifting equipment including competition-grade bars, bumper plates, and lifting platforms. Train like the pros.',
    category: 'strength',
  },
  {
    icon: <ClipboardCheck className="w-7 h-7 text-gym-gold" />,
    title: 'Elite Personal Coaching',
    description:
      'One-on-one training with certified coaches who specialize in strength training, bodybuilding, and athletic performance.',
    category: 'coaching',
  },
  {
    icon: <CalendarRange className="w-7 h-7 text-gym-gold" />,
    title: 'Legacy Strength Plans',
    description:
      'Custom-designed training programs tailored to your goals. Progressive overload systems that deliver real results.',
    category: 'plans',
  },
]

const tabs = [
  { label: 'All Services', value: 'all' },
  { label: 'Strength', value: 'strength' },
  { label: 'Coaching', value: 'coaching' },
  { label: 'Plans', value: 'plans' },
]

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState('all')

  const filtered =
    activeTab === 'all'
      ? services
      : services.filter((s) => s.category === activeTab)

  return (
    <section id="services" className="bg-gray-50 dark:bg-gym-dark py-24 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-gym-gold font-oswald text-4xl md:text-5xl font-medium tracking-[0.1em] uppercase text-center mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-14 leading-relaxed">
          Premium facilities and expert guidance to help you achieve your
          strength goals.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`font-oswald text-sm tracking-widest uppercase px-8 py-3 rounded transition-all duration-200 ${activeTab === tab.value ? 'bg-gym-gold text-black font-medium' : 'bg-gray-200 dark:bg-gym-card text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-300 dark:hover:bg-[#3a3a3a]'}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((service) => (
            <div
              key={service.title}
              className="bg-white dark:bg-gym-card border border-gray-200 dark:border-gym-border rounded-xl p-8 flex flex-col transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-lg border border-gym-gold flex items-center justify-center mb-8">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-gray-900 dark:text-white font-oswald text-xl font-medium tracking-wider uppercase mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
