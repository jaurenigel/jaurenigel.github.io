import type { Metadata } from 'next'
import { Listing } from '@/components/listing'
import { projects } from '@/lib/content'

export const metadata: Metadata = { title: 'Portfolio — Nigel' }

export default function Page() {
  return (
    <Listing
      eyebrow="portfolio"
      title="Selected work"
      intro="A look at things I've designed and built."
      items={projects}
      emptyTitle="Nothing here yet"
      emptyCopy="Projects are on their way. Check back soon."
    />
  )
}
