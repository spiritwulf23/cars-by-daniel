import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  image?: string
  url?: string
}

export function generateMetadata({ title, description, image, url }: SEOProps): Metadata {
  const siteName = 'Cars By Daniel'
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`
  
  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: url || 'https://carsbydaniel.com',
      siteName,
      images: image ? [{ url: image }] : [],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function JsonLD({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
