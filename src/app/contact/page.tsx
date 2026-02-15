'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your inquiry! We will contact you soon.')
  }

  return (
    <div className="pt-24">
      <section className="py-20 bg-brand-gray relative overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">Get In Touch</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
              CONTACT <span className="text-brand-red">US</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Ready to transform your vehicle? Get in touch for a free quote.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl tracking-wider mb-8">GET IN TOUCH</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red flex-shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:337-555-3333" className="text-gray-400 hover:text-brand-red transition-colors">
                      337-555-3333
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a href="mailto:daniel@carsbydaniel.com" className="text-gray-400 hover:text-brand-red transition-colors">
                      daniel@carsbydaniel.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-400">Lafayette, LA and surrounding areas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-red flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-gray-400">Mon - Sat: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-400">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="bg-brand-gray p-8 border border-brand-gray-light">
                <h2 className="font-display text-3xl tracking-wider mb-8">REQUEST A QUOTE</h2>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-light focus:border-brand-red outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-light focus:border-brand-red outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-light focus:border-brand-red outline-none transition-colors"
                      placeholder="337-555-3333"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Service Interest</label>
                    <select
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-light focus:border-brand-red outline-none transition-colors"
                    >
                      <option>Select a service...</option>
                      <option>Exterior Detailing</option>
                      <option>Interior Detailing</option>
                      <option>Paint Correction</option>
                      <option>Ceramic Coating</option>
                      <option>Window Tinting</option>
                      <option>Full Detail Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-brand-black border border-brand-gray-light focus:border-brand-red outline-none transition-colors resize-none"
                      placeholder="Tell us about your vehicle and what services you're interested in..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-brand-red text-white font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-brand-red-dark transition-colors"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
