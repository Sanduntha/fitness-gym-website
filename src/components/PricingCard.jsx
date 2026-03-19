import React from 'react'
import { CheckIcon } from 'lucide-react'

export function PricingCard({
  title,
  price,
  features,
  isPopular,
}) {
  return (
    <div
      className={`relative flex flex-col p-8 rounded-xl bg-gym-card border ${isPopular ? 'border-gym-gold shadow-[0_0_30px_rgba(212,160,23,0.1)] z-10' : 'border-gym-border'}`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gym-gold text-black font-oswald text-xs font-bold px-4 py-1.5 rounded tracking-wider uppercase whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className="text-center mb-10">
        <h3 className="text-white font-oswald text-2xl font-medium tracking-widest uppercase">
          {title}
        </h3>
        <div className="mt-6 mb-2">
          <span className="text-gym-gold font-oswald text-6xl font-medium">
            ${price}
          </span>
        </div>
        <p className="text-gray-400 text-xs tracking-[0.2em] uppercase">
          Per Month
        </p>
      </div>

      <ul className="flex-1 space-y-5 mb-10">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-gray-300 text-sm">
            <CheckIcon
              className="w-5 h-5 text-gym-gold mr-4 shrink-0 mt-0.5"
              strokeWidth={2.5}
            />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-4 rounded font-oswald text-sm font-medium tracking-widest uppercase transition-all duration-200 ${isPopular ? 'bg-gym-gold text-black hover:brightness-110' : 'bg-transparent border border-gym-border text-gym-gold hover:border-gym-gold hover:bg-gym-gold/5'}`}
      >
        Choose Plan
      </button>
    </div>
  )
}