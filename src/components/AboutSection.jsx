import React from 'react'
export function AboutSection() {
  return (
    <section id="about" className="bg-gym-dark py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Image */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gym-gold/20 blur-xl rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative rounded-xl overflow-hidden border-2 border-gym-gold/50 shadow-[0_0_20px_rgba(212,160,23,0.1)]">
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&grayscale=true"
              alt="Gym weights"
              className="w-full h-auto object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col">
          <h2 className="text-gym-gold font-oswald text-4xl md:text-5xl font-medium tracking-[0.1em] uppercase mb-8">
            Who We Are
          </h2>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-12">
            <p>
              Fitness Sports Center is more than just a gym—it's a community of
              dedicated athletes, powerlifters, and fitness enthusiasts who push
              their limits every single day.
            </p>
            <p>
              Founded in 2023, we've built our reputation on three pillars:{' '}
              <span className="text-gym-gold">elite equipment</span>,{' '}
              <span className="text-gym-gold">expert coaching</span>, and an{' '}
              <span className="text-gym-gold">unmatched community</span> that
              supports each other's journey to greatness.
            </p>
            <p>
              Whether you're a seasoned powerlifter or just beginning your
              fitness journey, our state-of-the-art facility and experienced
              trainers will help you forge your legacy.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gym-border/50">
            <div className="text-center md:text-left">
              <div className="text-gym-gold font-oswald text-4xl md:text-5xl font-medium mb-2">
                500+
              </div>
              <div className="text-gray-400 text-xs tracking-[0.2em] uppercase">
                Members
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-gym-gold font-oswald text-4xl md:text-5xl font-medium mb-2">
                15+
              </div>
              <div className="text-gray-400 text-xs tracking-[0.2em] uppercase">
                Trainers
              </div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-gym-gold font-oswald text-4xl md:text-5xl font-medium mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-xs tracking-[0.2em] uppercase">
                Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
