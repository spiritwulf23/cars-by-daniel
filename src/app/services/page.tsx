import { Metadata } from 'next'
import ServicesContent from '@/components/ServicesContent'

export const metadata: Metadata = {
  title: 'Services | Cars By Daniel',
  description: 'Professional auto detailing services in Lafayette LA. Exterior wash, interior detailing, paint correction, ceramic coating, and more.',
}

export default function ServicesPage() {
  return <ServicesContent />
}
