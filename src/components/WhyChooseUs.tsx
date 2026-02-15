'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Award, Users, Car, Star } from 'lucide-react'

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  { icon: Award, value: 15, suffix: '+', label: 'Years Experience' },
  { icon: Car, value: 5000, suffix: '+', label: 'Cars Detailed' },
  { icon: Users, value: 98, suffix: '%', label: 'Satisfaction Rate' },
  { icon: Star, value: 5, suffix: '★', label: 'Average Rating' },
]

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">Why Choose Us</p>
          <h2 className="font-display text-5xl md:text-6xl tracking-wider">
            THE <span className="text-brand-red">CARS BY DANIEL</span> DIFFERENCE
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-brand-gray-light rounded-full border border-brand-gray-light group-hover:border-brand-red transition-colors">
                <stat.icon className="w-8 h-8 text-brand-red" />
              </div>
              <div className="font-display text-5xl md:text-6xl text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
