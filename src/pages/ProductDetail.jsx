import React, { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { allProducts } from '../data/products'
import ProductCard from '../components/ProductCard'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const product = useMemo(() => allProducts.find((p) => p.id === id) || allProducts[0], [id])
  const [size, setSize] = useState(product.sizes?.[0])
  const [active, setActive] = useState(0)
  const { addToCart } = useCart()

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden border">
              <img src={product.images?.[active]} alt={product.title} className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {product.images?.map((img, i) => (
                <button key={i} onClick={() => setActive(i)} className={`h-20 w-20 rounded-md overflow-hidden border ${i===active?'ring-2 ring-emerald-600':''}`}>
                  <img src={img} alt="thumb" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{product.title}</h1>
            <div className="mt-2 flex items-center gap-2">
              <div className="text-emerald-700 font-semibold">₹{product.salePrice?.toLocaleString() || product.price.toLocaleString()}</div>
              {product.salePrice && <div className="text-sm text-gray-400 line-through">₹{product.price.toLocaleString()}</div>}
            </div>
            <p className="mt-4 text-gray-600">{product.description}</p>

            {product.sizes && (
              <div className="mt-6">
                <div className="text-sm text-gray-700 mb-2">Select Size</div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 rounded border ${size===s?'bg-emerald-600 text-white border-emerald-600':'hover:bg-gray-50'}`}>{s}</button>
                  ))}
                </div>
                <button className="mt-2 text-sm text-emerald-700 underline">Size Guide</button>
              </div>
            )}

            <div className="mt-6 flex gap-3">
              <button onClick={() => addToCart(product, size)} className="px-6 py-3 rounded-md bg-emerald-700 text-white hover:bg-emerald-800">Add to Cart</button>
              <button className="px-6 py-3 rounded-md border border-gray-200 hover:bg-gray-50">Buy Now</button>
            </div>

            <div className="mt-12">
              <h2 className="text-lg font-semibold mb-4">Related Products</h2>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0,3).map((rp) => (
                  <ProductCard key={rp.id} product={rp} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Link to="/shop" className="text-sm text-emerald-700 hover:underline">Back to shop</Link>
        </div>
      </div>
    </section>
  )
}
