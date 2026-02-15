import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'

const Services = dynamic(() => import('@/components/Services'), {
  ssr: true,
})

const WhyChooseUs = dynamic(() => import('@/components/WhyChooseUs'), {
  ssr: true,
})

const Testimonials = dynamic(() => import('@/components/Testimonials'), {
  ssr: true,
})

const CTASection = dynamic(() => import('@/components/CTASection'), {
  ssr: true,
})

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <CTASection />
    </>
  )
}
