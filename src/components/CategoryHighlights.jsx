import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../data/products'

const images = {
  'chikankari': 'https://images.unsplash.com/photo-1503342217505-b0a15cf70489?q=80&w=1200&auto=format&fit=crop',
  'co-ord-sets': 'https://images.unsplash.com/photo-1520975629012-5445f4f3eec7?q=80&w=1200&auto=format&fit=crop',
  'office-wear': 'https://images.unsplash.com/photo-1520975629012-82a8d1ca09f2?q=80&w=1200&auto=format&fit=crop',
  'velvet': 'https://images.unsplash.com/photo-1603484477859-abe6a73f9363?q=80&w=1200&auto=format&fit=crop',
}

export default function CategoryHighlights() {
  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900">Explore Collections</h2>
          <Link to="/shop" className="text-sm text-emerald-700 hover:underline">View all</Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((c) => (
            <Link key={c.slug} to={`/category/${c.slug}`} className="relative group rounded-2xl overflow-hidden ring-1 ring-emerald-100">
              <img src={images[c.slug]} alt={c.name} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3 text-white font-medium backdrop-blur-sm px-2 py-1 rounded-md bg-black/20">
                {c.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
