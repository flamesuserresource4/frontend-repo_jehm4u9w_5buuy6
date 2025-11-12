import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-xl font-serif text-emerald-800 mb-3">Aavyna</div>
            <p className="text-sm text-gray-600">Classic Sophistication, Modern Style.</p>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/about" className="hover:text-emerald-700">About Us</Link></li>
              <li><Link to="/policies" className="hover:text-emerald-700">Policies</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-700">Contact</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-3">Shop Categories</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link to="/category/chikankari" className="hover:text-emerald-700">Chikankari</Link></li>
              <li><Link to="/category/co-ord-sets" className="hover:text-emerald-700">Co-Ord Sets</Link></li>
              <li><Link to="/category/office-wear" className="hover:text-emerald-700">Office Wear</Link></li>
              <li><Link to="/category/velvet" className="hover:text-emerald-700">Velvet</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-gray-800 mb-3">Contact</div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>123 Aavyna Street, Jaipur</li>
              <li>+91 90000 12345</li>
              <li>support@aavyna.com</li>
            </ul>
            <div className="flex gap-3 mt-4 text-gray-600">
              <a href="#" aria-label="Facebook" className="hover:text-emerald-700"><Facebook className="h-5 w-5"/></a>
              <a href="#" aria-label="Instagram" className="hover:text-emerald-700"><Instagram className="h-5 w-5"/></a>
              <a href="#" aria-label="Twitter" className="hover:text-emerald-700"><Twitter className="h-5 w-5"/></a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <form className="flex w-full md:w-auto">
            <input placeholder="Subscribe to newsletter" className="w-full md:w-80 px-4 py-2 rounded-l-md border border-gray-200 outline-none focus:border-emerald-500" />
            <button className="px-4 py-2 rounded-r-md bg-emerald-600 text-white">Subscribe</button>
          </form>
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Aavyna. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
