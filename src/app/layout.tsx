import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { JsonLD } from '@/components/SEO'

export const metadata: Metadata = {
  title: 'Cars By Daniel | Premium Auto Detailing Lafayette LA',
  description: 'Expert car detailing services in Lafayette, LA and surrounding areas. Ceramic coating, paint correction, interior & exterior detailing. Call 337-555-3333.',
  keywords: 'car detailing, auto detailing, Lafayette LA, ceramic coating, paint correction, car wash, car detailer Lafayette',
  authors: [{ name: 'Cars By Daniel' }],
  openGraph: {
    title: 'Cars By Daniel | Premium Auto Detailing Lafayette LA',
    description: 'Expert car detailing services in Lafayette, LA. Ceramic coating, paint correction, interior & exterior detailing.',
    url: 'https://carsbydaniel.com',
    siteName: 'Cars By Daniel',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Cars By Daniel - Premium Auto Detailing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailingBusiness',
  name: 'Cars By Daniel',
  description: 'Premium auto detailing services in Lafayette, LA and surrounding areas.',
  telephone: '+1-337-555-3333',
  email: 'daniel@carsbydaniel.com',
  url: 'https://carsbydaniel.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lafayette',
    addressRegion: 'LA',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 30.2241,
      longitude: -92.0198,
    },
    radius: '50 miles',
  },
  priceRange: '$$',
  openingHours: ['Mo-Sa 08:00-18:00'],
  sameAs: [
    'https://www.facebook.com/carsbydaniel',
    'https://www.instagram.com/carsbydaniel',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-black text-white">
        <JsonLD data={jsonLd} />
        <div className="noise-overlay" />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
