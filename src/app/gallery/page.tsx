'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

const categories = ['All', 'Exterior', 'Interior', 'Paint Correction', 'Ceramic Coating']

const galleryItems = [
  {
    id: 1,
    category: 'Exterior',
    title: 'Full Exterior Detail',
    beforeImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&h=500&fit=crop&auto=format&sat=-80&bri=-20',
    afterImage: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&h=500&fit=crop&auto=format',
  },
  {
    id: 2,
    category: 'Interior',
    title: 'Leather Interior Restoration',
    beforeImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&auto=format&sat=-60',
    afterImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop&auto=format&sat=20&bri=10',
  },
  {
    id: 3,
    category: 'Paint Correction',
    title: 'Paint Correction & Shine',
    beforeImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&auto=format&sat=-50&con=-30',
    afterImage: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&h=500&fit=crop&auto=format&sat=30&bri=15',
  },
  {
    id: 4,
    category: 'Ceramic Coating',
    title: 'Ceramic Coating Protection',
    beforeImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop&auto=format&sat=-40',
    afterImage: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=500&fit=crop&auto=format&sat=40&bri=20',
  },
  {
    id: 5,
    category: 'Exterior',
    title: 'Wheel & Tire Detail',
    beforeImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&auto=format&sat=-70',
    afterImage: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop&auto=format&sat=20',
  },
  {
    id: 6,
    category: 'Interior',
    title: 'Complete Interior Clean',
    beforeImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d1?w=800&h=500&fit=crop&auto=format&sat=-50',
    afterImage: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d1?w=800&h=500&fit=crop&auto=format&sat=25&bri=10',
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-24">
      <section className="py-20 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <p className="text-brand-red tracking-[0.3em] text-sm uppercase mb-4">Our Work</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-6">
              GALLERY
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-brand-gray-light sticky top-16 bg-brand-black z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 text-sm font-semibold tracking-wider uppercase transition-colors ${
                  activeCategory === category
                    ? 'bg-brand-red text-white'
                    : 'bg-brand-gray text-gray-400 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedItem(item)}
                  className="cursor-pointer group relative overflow-hidden bg-brand-gray"
                >
                  <div className="aspect-video">
                    <img
                      src={item.afterImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-brand-red text-sm tracking-wider uppercase mb-1">{item.category}</p>
                    <h3 className="font-display text-2xl tracking-wider">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <BeforeAfterSlider
                beforeImage={selectedItem.beforeImage}
                afterImage={selectedItem.afterImage}
                beforeLabel="Before"
                afterLabel="After"
              />
              <div className="mt-6 text-center">
                <h3 className="font-display text-2xl tracking-wider">{selectedItem.title}</h3>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="mt-4 px-6 py-2 bg-brand-gray text-white hover:bg-brand-red transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
