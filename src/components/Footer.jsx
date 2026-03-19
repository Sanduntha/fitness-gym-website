import React from 'react'
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react'
const quickLinks = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Membership',
    href: '#membership',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
]
const socials = [
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook',
  },
  {
    icon: Instagram,
    href: '#',
    label: 'Instagram',
  },
  {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
  },
  {
    icon: Youtube,
    href: '#',
    label: 'YouTube',
  },
]
export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gym-dark pt-16 pb-8 px-6 transition-colors duration-300">
      {/* Top Divider */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 dark:border-gym-border mb-16"></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        {/* Brand Column */}
        <div>
  <h3 className="text-[#C69911] font-oswald text-xl font-medium tracking-wider uppercase mb-4">
  Fitness Sports Center
</h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-xs">
            Forge your legacy. Join the elite community of strength athletes and
            bodybuilders.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-oswald text-lg font-medium tracking-wider uppercase mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 text-base hover:text-gym-gold dark:hover:text-gym-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-gray-900 dark:text-white font-oswald text-lg font-medium tracking-wider uppercase mb-6">
            Follow Us
          </h3>
          <div className="flex items-center gap-5">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-600 dark:text-gray-400 hover:text-gym-gold dark:hover:text-gym-gold transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-gray-300 dark:border-gym-border pt-8">
        <p className="text-gray-500 dark:text-gray-500 text-sm text-center">
          © 2023 Fitness Sports Center. All rights reserved. Est. 2023.
        </p>
      </div>
    </footer>
  )
}
