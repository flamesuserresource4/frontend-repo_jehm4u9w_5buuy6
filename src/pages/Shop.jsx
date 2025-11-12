import React from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { allProducts, categories } from '../data/products'

export default function Shop() {
  const { slug } = useParams()
  const filtered = slug ? allProducts.filter((p) => p.category === slug) : allProducts

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1 space-y-6">
            <div>
              <div className="font-semibold mb-2">Categories</div>
              <ul className="space-y-1 text-sm">
                {categories.map((c) => (
                  <li key={c.slug}>
                    <a href={`/category/${c.slug}`} className={`hover:text-emerald-700 ${slug === c.slug ? 'text-emerald-700 font-medium' : 'text-gray-700'}`}>{c.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">Price Range</div>
              <div className="text-sm text-gray-600">₹2000 - ₹6000</div>
            </div>
            <div>
              <div className="font-semibold mb-2">Size</div>
              <div className="flex flex-wrap gap-2">
                {['S','M','L','XL'].map((s) => (
                  <span key={s} className="px-2 py-1 rounded border text-sm">{s}</span>
                ))}
              </div>
            </div>
          </aside>
          <main className="lg:col-span-3">
            <h1 className="text-2xl font-semibold text-gray-900 mb-4">{slug ? categories.find(c=>c.slug===slug)?.name : 'All Products'}</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}
