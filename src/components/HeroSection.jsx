import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 -left-20 h-72 w-72 bg-emerald-300/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 bg-teal-300/30 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">
            New Season • SS25
          </span>
          <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900 tracking-tight leading-tight">
            Effortless Elegance for Everyday
          </h1>
          <p className="mt-4 text-gray-600 max-w-xl">
            Discover handpicked ethnic wear crafted with love. From timeless chikankari to plush velvet, elevate your wardrobe with modern silhouettes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/shop" className="px-6 py-3 rounded-lg bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm">Shop Now</Link>
            <Link to="/category/chikankari" className="px-6 py-3 rounded-lg border border-emerald-100 bg-white hover:bg-emerald-50">Explore Chikankari</Link>
          </div>

          {/* Stats bar */}
          <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
            {["Premium Fabric","Handcrafted","Free Returns"].map((t) => (
              <div key={t} className="text-center">
                <div className="text-lg font-semibold text-emerald-700">{t}</div>
                <div className="text-xs text-gray-500">Trusted by 10k+ customers</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-1 ring-emerald-100">
            <img className="rounded-3xl" src="https://images.unsplash.com/photo-1513384312027-9fa69a360337?auto=format&fit=crop&w=1600&q=80" alt="Hero" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur rounded-xl shadow-lg p-4 hidden md:block ring-1 ring-emerald-100">
            <div className="text-emerald-700 font-semibold">New Arrivals</div>
            <div className="text-sm text-gray-600">Co-Ord Sets • Velvet • Chikankari</div>
          </div>
        </div>
      </div>
    </section>
  )
}
