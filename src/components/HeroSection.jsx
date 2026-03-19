import React from 'react'
import { ChevronDown } from 'lucide-react'
import heroBg from '../assets/Hero.png'

export function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-stone-900"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gym-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto mt-16">
        <h1 className="text-white font-oswald text-6xl md:text-8xl lg:text-[120px] font-bold tracking-tight uppercase leading-none mb-6">
          Forge Your Legacy.
        </h1>

        <div className="text-gym-gold font-oswald text-2xl md:text-3xl tracking-[0.2em] font-medium mb-8">
          EST. 2023
        </div>

        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          Where champions are made. Elite equipment. <br className="hidden md:block" />
          Expert coaching. Unmatched community.
        </p>

        <button className="bg-gym-gold text-black font-oswald text-lg font-bold px-10 py-4 rounded tracking-widest uppercase hover:brightness-110 transition-all shadow-[0_0_20px_rgba(212,160,23,0.3)]">
          Join The Movement
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="text-gym-gold w-8 h-8" />
      </div>
    </section>
  )
}

export default HeroSection

