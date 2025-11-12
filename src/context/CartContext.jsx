import React, { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([])

  const addToCart = (product, size = null, qty = 1) => {
    setItems((prev) => {
      const id = `${product.id}-${size || 'na'}`
      const existing = prev.find((i) => i.key === id)
      if (existing) {
        return prev.map((i) => (i.key === id ? { ...i, qty: i.qty + qty } : i))
      }
      return [
        ...prev,
        {
          key: id,
          id: product.id,
          title: product.title,
          price: product.salePrice ?? product.price,
          size,
          qty,
          image: product.images?.[0] || product.image,
        },
      ]
    })
  }

  const removeFromCart = (key) => setItems((prev) => prev.filter((i) => i.key !== key))

  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])
  const total = useMemo(() => items.reduce((sum, i) => sum + i.qty * i.price, 0), [items])

  const value = { items, addToCart, removeFromCart, count, total }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
