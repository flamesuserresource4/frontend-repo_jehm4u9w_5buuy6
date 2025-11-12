import React from 'react'
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  return (
    <div className="group border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={product.images?.[0]} alt={product.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.images?.[1] && (
          <img src={product.images?.[1]} alt="alt" className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
        <div className="absolute inset-x-3 bottom-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => addToCart(product)} className="flex-1 bg-emerald-600 text-white text-sm py-2 rounded-md hover:bg-emerald-700">Add to Cart</button>
          <Link to={`/product/${product.id}`} className="flex-1 bg-white text-gray-900 text-sm py-2 rounded-md border border-gray-200 hover:bg-gray-50 text-center">Quick View</Link>
        </div>
        <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white shadow">
          <Heart className="h-4 w-4" />
        </button>
      </div>
      <div className="p-4">
        <Link to={`/product/${product.id}`} className="block font-medium text-gray-800 line-clamp-1">{product.title}</Link>
        <div className="mt-1 flex items-center gap-2">
          <div className="text-emerald-700 font-semibold">₹{product.salePrice?.toLocaleString() || product.price.toLocaleString()}</div>
          {product.salePrice && (
            <div className="text-sm text-gray-400 line-through">₹{product.price.toLocaleString()}</div>
          )}
        </div>
      </div>
    </div>
  )
}
