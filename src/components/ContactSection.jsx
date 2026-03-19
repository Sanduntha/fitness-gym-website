import React, { useState } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'
import contactImg from '../assets/Contact.png'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for reaching out!')
  }

  return (
    <section id="contact" className="bg-gray-50 dark:bg-gym-dark py-24 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-gym-gold font-oswald text-4xl md:text-5xl font-medium tracking-[0.1em] uppercase text-center mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl mx-auto mb-20 leading-relaxed">
          Ready to start your journey? Reach out to us and let's forge your
          legacy together.
        </p>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Information */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-oswald text-2xl font-medium tracking-wider uppercase mb-10">
              Contact Information
            </h3>

            <div className="space-y-8 mb-12">
              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-gym-gold/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-gym-gold" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-oswald text-sm font-medium tracking-wider uppercase mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    123 Strength Ave, Muscle City, MC 12345
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-gym-gold/60 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-gym-gold" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-oswald text-sm font-medium tracking-wider uppercase mb-1">
                    Phone
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-base">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-full border border-gym-gold/60 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-gym-gold" />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-oswald text-sm font-medium tracking-wider uppercase mb-1">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-base">
                    info@fitnesssports.com
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative rounded-xl overflow-hidden border border-gray-200 dark:border-gym-border h-64">
              <img
                src={contactImg}
                alt="Gym location"
                className="w-full h-full object-cover brightness-[0.5]"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-gym-gold/20 border-2 border-gym-gold flex items-center justify-center animate-bounce">
                  <MapPin className="w-6 h-6 text-gym-gold" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Inquiry Form */}
          <div>
            <h3 className="text-gray-900 dark:text-white font-oswald text-2xl font-medium tracking-wider uppercase mb-10">
              Inquiry Form
            </h3>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div>
                <label className="block text-gray-900 dark:text-white font-oswald text-sm font-medium tracking-wider uppercase mb-3">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white dark:bg-transparent border border-gray-300 dark:border-gym-border rounded-lg px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-gym-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-900 dark:text-white font-oswald text-sm font-medium tracking-wider uppercase mb-3">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white dark:bg-transparent border border-gray-300 dark:border-gym-border rounded-lg px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-gym-gold focus:outline-none transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-900 dark:text-white font-oswald text-sm font-medium tracking-wider uppercase mb-3">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={5}
                  className="w-full bg-white dark:bg-transparent border border-gray-300 dark:border-gym-border rounded-lg px-5 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-gym-gold focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gym-gold text-black font-oswald text-sm font-bold py-4 rounded-lg tracking-widest uppercase hover:brightness-110 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
