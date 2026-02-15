'use client'

import { motion } from 'framer-motion'
import { Award, Target, Heart, Users } from 'lucide-react'

const values = [
  {
    icon: Award,
    title: 'Excellence',
    description: 'We never settle for good enough. Every detail matters in our pursuit of perfection.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Meticulous attention to detail ensures every vehicle receives the care it deserves.',
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Cars aren\'t just our job—they\'re our passion. We treat every vehicle like our own.',
  },
  {
    icon: Users,
    title: 'Trust',
    description: 'Building lasting relationships through honest work and exceptional results.',
  },
]

export default function AboutPage() {
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
            <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">About Us</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
              MEET <span className="text-brand-red">DANIEL</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Bringing 15+ years of experience and passion to every car I detail.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-brand-red" />
                <img
                  src="https://images.unsplash.com/photo-1612544448445-b8232cff3b6c?w=600&h=700&fit=crop"
                  alt="Daniel's detailing work"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-brand-red" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl tracking-wider mb-6">
                THE STORY BEHIND<br /><span className="text-brand-red">CARS BY DANIEL</span>
              </h2>
              <div className="space-y-4 text-gray-400">
                <p>
                  What started as a passion for keeping my own vehicles looking pristine has 
                  evolved into one of Lafayette's premier auto detailing services.
                </p>
                <p>
                  Over the past 15+ years, I've dedicated myself to mastering the art and science 
                  of automotive detailing. From paint correction to ceramic coating, every service 
                  I offer is backed by years of hands-on experience and continuous learning.
                </p>
                <p>
                  I believe that every vehicle deserves to look its best, whether it's a daily 
                  driver or a weekend show car. My commitment to quality and customer satisfaction 
                  has built a reputation that keeps customers coming back.
                </p>
                <p>
                  When you choose Cars By Daniel, you're not just getting a detail—you're getting 
                  a partner in maintaining your vehicle's beauty and value.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-4xl tracking-wider mb-4">OUR <span className="text-brand-red">VALUES</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-brand-gray-light border border-brand-gray-light hover:border-brand-red transition-colors">
                  <value.icon className="w-8 h-8 text-brand-red" />
                </div>
                <h3 className="font-display text-xl tracking-wider mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
