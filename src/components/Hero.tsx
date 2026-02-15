'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Sparkles, Shield, Clock } from 'lucide-react'
import { useRef } from 'react'
import Image from 'next/image'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1920&h=1080&fit=crop&q=80"
          alt="Luxury car detail"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/80 via-brand-black/50 to-brand-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-brand-black/30" />
      </motion.div>

      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(230, 57, 70, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(230, 57, 70, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <motion.div 
        style={{ opacity }}
        className="relative z-10 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">
            Professional Auto Detailing
          </p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider mb-6">
            CARS BY <span className="text-brand-red">DANIEL</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-8">
            Transforming your vehicle into a masterpiece. Premium detailing services 
            in Lafayette, LA and surrounding areas.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {[
            { icon: Sparkles, text: 'Premium Quality' },
            { icon: Shield, text: 'Fully Insured' },
            { icon: Clock, text: 'Quick Turnaround' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-400">
              <item.icon className="w-5 h-5 text-brand-red" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-brand-red text-white font-semibold tracking-wider uppercase"
            style={{ clipPath: 'polygon(5% 0, 100% 0, 100% 70%, 95% 100%, 0 100%, 0 30%)' }}
          >
            Get A Quote
          </motion.a>
          <motion.a
            href="/services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border border-white/30 text-white font-semibold tracking-wider uppercase hover:border-brand-red hover:text-brand-red transition-colors"
          >
            Our Services
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-brand-red" />
        </motion.div>
      </motion.button>
    </section>
  )
}
