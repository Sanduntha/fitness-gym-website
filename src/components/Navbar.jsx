import React, { useState, useEffect } from 'react'
import { Moon, Sun, Search, Dumbbell, Menu, X } from 'lucide-react'
import DumbbellIconPng from '../assets/Dumble.png'

const navigationLinks = [
  { name: 'Hero', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTextColor = isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'
  const iconColor = isScrolled ? 'text-gray-900 dark:text-white hover:text-gym-gold dark:hover:text-gym-gold' : 'text-white hover:text-gym-gold'

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'bg-white/95 dark:bg-black/90 backdrop-blur-md shadow-lg dark:shadow-2xl py-4' : 'bg-transparent'
        }`}
    >
      {/* Brand Identity */}
      <div className="flex items-center gap-4">
        <img src={DumbbellIconPng} alt="Dumbbell" className="w-18 h-18 object-contain" />
        <span className="text-gym-gold font-oswald text-2xl font-bold tracking-widest uppercase">
          Fitness Gym
        </span>
      </div>

      {/* Primary Navigation */}
      <div className="hidden md:flex items-center gap-10">
        {navigationLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`${navTextColor} font-oswald text-sm tracking-[0.2em] font-bold uppercase hover:text-gym-gold dark:hover:text-gym-gold transition-colors`}
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Secondary Interface Actions */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => {
            const nextTheme = theme === 'dark' ? 'light' : 'dark'
            setTheme(nextTheme)
            if (nextTheme === 'dark') {
              document.documentElement.classList.add('dark')
              document.documentElement.removeAttribute('data-theme')
            } else {
              document.documentElement.classList.remove('dark')
              document.documentElement.setAttribute('data-theme', 'light')
            }
          }}
          className={`${iconColor} transition-colors p-1`}
          aria-label="Toggle Dark Mode"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button className={`${iconColor} transition-colors p-1`} aria-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <a
          href="#membership"
          className="hidden lg:inline-block bg-gym-gold text-black font-oswald text-xs font-extrabold px-8 py-3 rounded-md tracking-widest uppercase hover:bg-gym-gold-hover transition-all active:scale-95"
        >
          Get Membership
        </a>

        {/* Toggleable Navigation Menu for Small Screens */}
        <button
          className={`md:hidden ${iconColor} ring-0 focus:outline-none`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Navigation Backdrop Menu for Mobile View */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-lg flex flex-col items-center gap-8 py-10 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-900 dark:text-white font-oswald text-xl tracking-[0.3em] uppercase hover:text-gym-gold dark:hover:text-gym-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#membership"
            onClick={() => setIsOpen(false)}
            className="bg-gym-gold text-black font-oswald text-sm font-bold px-10 py-4 rounded-md tracking-widest uppercase hover:bg-gym-gold-hover transition-transform active:scale-95"
          >
            Get Membership
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
