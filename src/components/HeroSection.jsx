import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-serif text-emerald-900 tracking-tight">
            Classic Sophistication, <span className="text-emerald-700">Modern Style</span>
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Discover handpicked ethnic wear crafted with love. From timeless chikankari to plush velvet, elevate your wardrobe with effortless elegance.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/shop" className="px-6 py-3 rounded-md bg-emerald-700 text-white hover:bg-emerald-800">Shop Now</Link>
            <Link to="/category/chikankari" className="px-6 py-3 rounded-md border border-gray-200 hover:bg-gray-50">Explore Chikankari</Link>
          </div>
        </div>
        <div className="relative">
          <img className="rounded-2xl shadow-lg" src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxIZXJvfGVufDB8MHx8fDE3NjI5MjQ5NTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Hero" />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow p-4 hidden md:block">
            <div className="text-emerald-700 font-semibold">New Arrivals</div>
            <div className="text-sm text-gray-600">Co-Ord Sets | Velvet | Chikankari</div>
          </div>
        </div>
      </div>
    </section>
  )
}
