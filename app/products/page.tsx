import type { Metadata } from 'next'
import { Listing } from '@/components/listing'
import { products } from '@/lib/content'

export const metadata: Metadata = { title: 'Products — Nigel' }

export default function Page() {
  return (
    <Listing
      eyebrow="products"
      title="Software products"
      intro="Software I've built and shipped."
      items={products}
      emptyTitle="No products yet"
      emptyCopy="Nothing has shipped here yet. Check back soon."
    />
  )
}
