import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Search, ShoppingBag, User, Menu, X, ChevronDown } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { categories } from '../data/products'

const navClass = ({ isActive }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
    isActive ? 'text-emerald-700' : 'text-gray-700 hover:text-emerald-700'
  }`

export default function Header() {
  const { count } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setMobileOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="text-xl font-serif tracking-wide text-emerald-800">
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
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-2 w-[560px] bg-white border border-gray-100 rounded-xl shadow-lg p-6 grid grid-cols-2 gap-4">
                  {categories.map((c) => (
                    <Link key={c.slug} to={`/category/${c.slug}`} className="p-3 rounded-md hover:bg-gray-50">
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

          <div className="flex items-center gap-4">
            <button aria-label="Search" onClick={() => setSearchOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100">
              <Search className="h-5 w-5" />
            </button>
            <Link to="/account" aria-label="Account" className="p-2 rounded-full hover:bg-gray-100">
              <User className="h-5 w-5" />
            </Link>
            <Link to="/cart" aria-label="Cart" className="relative p-2 rounded-full hover:bg-gray-100">
              <ShoppingBag className="h-5 w-5" />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs rounded-full h-5 min-w-[20px] px-1 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-white/95">
          <div className="max-w-3xl mx-auto px-4 pt-8">
            <div className="flex items-center gap-3">
              <Search className="h-6 w-6 text-gray-500" />
              <input
                autoFocus
                placeholder="Search products, categories..."
                className="w-full bg-transparent outline-none text-lg placeholder:text-gray-400"
              />
              <button onClick={() => setSearchOpen(false)} className="p-2 rounded-full hover:bg-gray-100">
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMobileOpen(false)} />
          <div className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl p-6 space-y-4">
            <button className="mb-2" onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6" />
            </button>
            <NavLink to="/" className={navClass} onClick={() => setMobileOpen(false)}>Home</NavLink>
            <NavLink to="/shop" className={navClass} onClick={() => setMobileOpen(false)}>Shop</NavLink>
            {categories.map((c) => (
              <NavLink key={c.slug} to={`/category/${c.slug}`} className="block px-3 py-2 text-gray-600 hover:text-emerald-700" onClick={() => setMobileOpen(false)}>
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
