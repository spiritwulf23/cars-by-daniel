'use client'

import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Phone } from 'lucide-react'

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLButtonElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 })
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: xSpring, y: ySpring }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  )
}

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-brand-red to-brand-red-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-wider mb-6">
            READY TO TRANSFORM YOUR RIDE?
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Book your appointment today and experience the Cars By Daniel difference. 
            Free estimates for all services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-black text-white font-semibold tracking-wider uppercase hover:bg-brand-gray transition-colors"
              >
                Get A Free Quote <ArrowRight className="w-5 h-5" />
              </a>
            </MagneticButton>

            <a
              href="tel:337-555-3333"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-white text-white font-semibold tracking-wider uppercase hover:bg-white hover:text-brand-red transition-colors"
            >
              <Phone className="w-5 h-5" /> 337-555-3333
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
