'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Michael R.',
    vehicle: '2021 Porsche 911',
    text: 'Daniel transformed my car. The ceramic coating looks incredible and the attention to detail was amazing. Best detailing in Lafayette!',
    rating: 5,
  },
  {
    name: 'Sarah L.',
    vehicle: '2020 Mercedes S-Class',
    text: 'My car looks brand new again. The interior detail was thorough and the team was professional throughout. Highly recommend!',
    rating: 5,
  },
  {
    name: 'James T.',
    vehicle: '2019 Chevrolet Corvette',
    text: 'Paint correction exceeded my expectations. Swirl marks are gone and the shine is unreal. Worth every penny.',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const y2 = useTransform(scrollYProgress, [0, 1], [50, 0])

  return (
    <section ref={ref} className="py-24 bg-brand-black relative overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute top-20 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <motion.div style={{ y: y2 }} className="absolute bottom-20 right-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider">
            CLIENT <span className="text-brand-red">REVIEWS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="bg-brand-gray p-8 border border-brand-gray-light relative"
            >
              <Quote className="absolute top-4 right-4 w-10 h-10 text-brand-red/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-brand-red">★</span>
                ))}
              </div>
              
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              
              <div className="border-t border-brand-gray-light pt-4">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.vehicle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
