import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, User, Menu, X, ChevronDown, Sparkles } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { categories } from '../data/products'

const navClass = ({ isActive }) =>
  `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
    isActive ? 'text-emerald-700 bg-emerald-50' : 'text-gray-700 hover:text-emerald-700 hover:bg-gray-50'
  }`

export default function Header() {
  const { count } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      {/* Top announcement bar */}
      <div className="hidden sm:block bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center gap-2 text-xs">
          <Sparkles className="h-4 w-4" />
          <span>Festive Sale: Flat 15% off on Velvet + Free shipping over ₹999</span>
        </div>
      </div>

      <div className="bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-emerald-50 shadow-[0_10px_30px_-12px_rgba(16,185,129,0.15)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
                <Menu className="h-6 w-6" />
              </button>
              <Link to="/" className="text-2xl font-serif tracking-tight text-emerald-800">
                Aavyna
              </Link>
              <nav className="hidden lg:flex items-center gap-1 ml-6">
                <NavLink to="/" className={navClass}>
                  Home
                </NavLink>
                <div className="group relative">
                  <NavLink to="/shop" className={navClass}>
                    <span className="inline-flex items-center gap-1">
                      Shop <ChevronDown className="h-4 w-4" />
                    </span>
                  </NavLink>
                  <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-[640px] bg-white/80 backdrop-blur border border-emerald-100 rounded-2xl shadow-xl p-6 grid grid-cols-2 gap-4">
                    {categories.map((c) => (
                      <Link key={c.slug} to={`/category/${c.slug}`} className="p-3 rounded-xl hover:bg-emerald-50/60">
                        <div className="font-semibold text-gray-800">{c.name}</div>
                        <div className="text-sm text-gray-500">Explore {c.name} collection</div>
                      </Link>
                    ))}
                  </div>
                </div>
                <NavLink to="/about" className={navClass}>About</NavLink>
                <NavLink to="/contact" className={navClass}>Contact</NavLink>
                <NavLink to="/blog" className={navClass}>Blog</NavLink>
              </nav>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button aria-label="Search" onClick={() => setSearchOpen(true)}
                className="p-2 rounded-full hover:bg-emerald-50 text-gray-700 hover:text-emerald-700">
                <Search className="h-5 w-5" />
              </button>
              <Link to="/account" aria-label="Account" className="p-2 rounded-full hover:bg-emerald-50 text-gray-700 hover:text-emerald-700">
                <User className="h-5 w-5" />
              </Link>
              <Link to="/cart" aria-label="Cart" className="relative p-2 rounded-full hover:bg-emerald-50 text-gray-700 hover:text-emerald-700">
                <ShoppingBag className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center shadow-lg">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-white/90 backdrop-blur">
          <div className="max-w-3xl mx-auto px-4 pt-8">
            <div className="flex items-center gap-3 rounded-xl border border-emerald-100 bg-white shadow-sm p-3">
              <Search className="h-6 w-6 text-emerald-600" />
              <input
                autoFocus
                placeholder="Search products, categories..."
                className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400"
              />
              <button onClick={() => setSearchOpen(false)} className="p-2 rounded-full hover:bg-emerald-50">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-2xl p-6 space-y-4 rounded-r-3xl">
            <div className="flex items-center justify-between mb-2">
              <Link to="/" className="text-xl font-serif tracking-tight text-emerald-800" onClick={() => setMobileOpen(false)}>Aavyna</Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full hover:bg-emerald-50"><X className="h-6 w-6" /></button>
            </div>
            <NavLink to="/" className={navClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/shop" className={navClass} onClick={() => setMobileOpen(false)}>Shop</NavLink>
            {categories.map((c) => (
              <NavLink key={c.slug} to={`/category/${c.slug}`} className="block px-3 py-2 text-gray-600 hover:text-emerald-700 rounded-lg hover:bg-emerald-50" onClick={() => setMobileOpen(false)}>
                {c.name}
              </NavLink>
            ))}
            <NavLink to="/about" className={navClass} onClick={() => setMobileOpen(false)}>About</NavLink>
            <NavLink to="/contact" className={navClass} onClick={() => setMobileOpen(false)}>Contact</NavLink>
            <NavLink to="/blog" className={navClass} onClick={() => setMobileOpen(false)}>Blog</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
