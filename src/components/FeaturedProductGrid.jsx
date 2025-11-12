import React from 'react'
import ProductCard from './ProductCard'
import { allProducts } from '../data/products'

export default function FeaturedProductGrid() {
  return (
    <section className="py-14 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Featured</h2>
          <div className="text-sm text-gray-500">Handpicked bestsellers</div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allProducts.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
