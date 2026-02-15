import Link from 'next/link'
import { Car, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-gray border-t border-brand-gray-light">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Car className="w-8 h-8 text-brand-red" />
              <span className="font-display text-2xl tracking-wider">
                CARS BY <span className="text-brand-red">DANIEL</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium auto detailing services in Lafayette, LA and surrounding areas. 
              We bring your vehicle back to showroom condition with our expert care.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-brand-gray-light hover:bg-brand-red transition-colors rounded">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-brand-gray-light hover:bg-brand-red transition-colors rounded">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">QUICK LINKS</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'Gallery', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-brand-red transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl tracking-wider mb-4">CONTACT</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-brand-red" />
                <a href="tel:337-555-3333" className="hover:text-brand-red transition-colors">
                  337-555-3333
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-brand-red" />
                <a href="mailto:daniel@carsbydaniel.com" className="hover:text-brand-red transition-colors">
                  daniel@carsbydaniel.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-brand-red mt-1" />
                <span>Lafayette, LA and<br/>surrounding areas</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-gray-light mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cars By Daniel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
