'use client'

import { motion } from 'framer-motion'
import { Check, Car, Clock, Shield, Sparkles } from 'lucide-react'

const services = [
  {
    id: 'exterior',
    icon: Car,
    title: 'Exterior Detailing',
    description: 'Complete exterior transformation to restore your vehicle\'s shine and protect its finish.',
    features: [
      'Hand wash & decontamination',
      'Wheel & tire deep clean',
      'Clay bar treatment',
      'Trim restoration',
      'Glass cleaning',
      'Hand wax & sealant',
    ],
    pricing: [
      { name: 'Basic Wash', price: '$80' },
      { name: 'Premium Detail', price: '$150' },
      { name: 'Show Car Prep', price: '$250' },
    ],
  },
  {
    id: 'interior',
    icon: Sparkles,
    title: 'Interior Detailing',
    description: 'Deep cleaning and conditioning for all interior surfaces.',
    features: [
      'Vacuum & steam clean',
      'Leather conditioning',
      'Dashboard & trim detail',
      'Air vent cleaning',
      'Stain removal',
      'Odor elimination',
    ],
    pricing: [
      { name: 'Basic Interior', price: '$120' },
      { name: 'Deep Clean', price: '$200' },
      { name: 'Full Interior', price: '$300' },
    ],
  },
  {
    id: 'paint-correction',
    icon: Shield,
    title: 'Paint Correction',
    description: 'Remove imperfections and restore your paint to factory condition.',
    features: [
      'Swirl mark removal',
      'Scratch correction',
      'Oxidation removal',
      'Machine polishing',
      'Paint depth enhancement',
      'Multi-stage correction',
    ],
    pricing: [
      { name: 'Single Stage', price: '$400' },
      { name: 'Two Stage', price: '$700' },
      { name: 'Multi Stage', price: '$1200' },
    ],
  },
  {
    id: 'ceramic',
    icon: Shield,
    title: 'Ceramic Coating',
    description: 'Long-lasting protection with hydrophobic properties.',
    features: [
      '9H ceramic coating',
      'Paint preparation',
      'Chemical resistance',
      'UV protection',
      'Enhanced gloss',
      '5-year warranty',
    ],
    pricing: [
      { name: 'Partial Coat', price: '$600' },
      { name: 'Full Coat', price: '$1200' },
      { name: 'Platinum Package', price: '$1800' },
    ],
  },
]

export default function ServicesContent() {
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
            <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">Our Services</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
              PROFESSIONAL <span className="text-brand-red">DETAILING</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Premium auto detailing services tailored to your vehicle's needs. 
              From basic wash to full ceramic coating protection.
            </p>
          </motion.div>
        </div>
      </section>

      {services.map((service, index) => (
        <section key={service.id} id={service.id} className="py-20 border-b border-brand-gray-light">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-brand-red mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h2 className="font-display text-4xl tracking-wider mb-4">{service.title}</h2>
                <p className="text-gray-400 mb-8">{service.description}</p>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-brand-red flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`bg-brand-gray p-8 border border-brand-gray-light ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <h3 className="font-display text-2xl tracking-wider mb-6">PRICING</h3>
                <div className="space-y-4">
                  {service.pricing.map((tier) => (
                    <div key={tier.name} className="flex justify-between items-center py-3 border-b border-brand-gray-light last:border-0">
                      <span className="text-gray-300">{tier.name}</span>
                      <span className="text-brand-red font-semibold text-xl">{tier.price}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="/contact"
                  className="mt-8 block w-full py-4 bg-brand-red text-center text-white font-semibold tracking-wider uppercase hover:bg-brand-red-dark transition-colors"
                >
                  Book This Service
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
