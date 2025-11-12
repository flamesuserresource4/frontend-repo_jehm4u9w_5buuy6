import React from 'react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { items, removeFromCart, total } = useCart()
  return (
    <section className="py-12">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-6">Your Cart</h1>
        {items.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
              {items.map((it) => (
                <div key={it.key} className="flex gap-4 items-center border rounded-xl p-4">
                  <img src={it.image} alt={it.title} className="h-20 w-20 object-cover rounded-md" />
                  <div className="flex-1">
                    <div className="font-medium text-gray-800">{it.title}</div>
                    <div className="text-sm text-gray-600">Size: {it.size || '—'}</div>
                    <div className="text-sm text-gray-600">Qty: {it.qty}</div>
                  </div>
                  <div className="font-semibold">₹{(it.price * it.qty).toLocaleString()}</div>
                  <button onClick={() => removeFromCart(it.key)} className="text-sm text-red-600 hover:underline">Remove</button>
                </div>
              ))}
            </div>
            <div className="border rounded-xl p-6 h-fit">
              <div className="flex items-center justify-between">
                <div className="text-gray-700">Subtotal</div>
                <div className="font-semibold">₹{total.toLocaleString()}</div>
              </div>
              <button className="mt-4 w-full px-6 py-3 rounded-md bg-emerald-700 text-white hover:bg-emerald-800">Checkout</button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
