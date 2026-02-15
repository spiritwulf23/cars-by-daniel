'use client'

import { motion } from 'framer-motion'
import { Car, Sparkles, Shield, Wind, Droplets, PaintBucket } from 'lucide-react'

const services = [
  {
    icon: Car,
    title: 'Exterior Wash',
    description: 'Complete hand wash with premium products, wheel & tire cleaning, and streak-free drying.',
    price: 'Starting at $80',
  },
  {
    icon: Sparkles,
    title: 'Interior Detailing',
    description: 'Deep clean of all interior surfaces including leather conditioning and steam cleaning.',
    price: 'Starting at $150',
  },
  {
    icon: Shield,
    title: 'Paint Correction',
    description: 'Remove swirl marks, scratches, and oxidation to restore your paint\'s original shine.',
    price: 'Starting at $400',
  },
  {
    icon: Wind,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with hydrophobic properties and enhanced gloss.',
    price: 'Starting at $800',
  },
  {
    icon: Droplets,
    title: 'Window Tinting',
    description: 'Professional window tinting for UV protection and enhanced privacy.',
    price: 'Starting at $200',
  },
  {
    icon: PaintBucket,
    title: 'Full Detail',
    description: 'Complete package including exterior, interior, engine bay, and trim restoration.',
    price: 'Starting at $500',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">What We Offer</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider mb-6">
            OUR <span className="text-brand-red">SERVICES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional detailing services tailored to bring your vehicle back to showroom condition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-brand-gray p-8 border border-brand-gray-light hover:border-brand-red transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-brand-red/0 group-hover:bg-brand-red/5 transition-colors duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-brand-gray-light group-hover:bg-brand-red transition-colors duration-300 mb-6">
                  <service.icon className="w-7 h-7 text-brand-red" />
                </div>
                <h3 className="font-display text-2xl tracking-wider mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <p className="text-brand-red font-semibold">{service.price}</p>
              </div>

              <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-brand-red/0 group-hover:border-r-brand-red transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
