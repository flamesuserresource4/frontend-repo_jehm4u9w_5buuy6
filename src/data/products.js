export const categories = [
  { slug: 'chikankari', name: 'Chikankari' },
  { slug: 'co-ord-sets', name: 'Co-Ord Sets' },
  { slug: 'office-wear', name: 'Office Wear' },
  { slug: 'velvet', name: 'Velvet' },
]

export const products = [
  {
    id: 'p1',
    title: 'Chikankari Suit - Noor',
    price: 4999,
    salePrice: 3799,
    category: 'chikankari',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1555529771-35a38fbab71d?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Handcrafted chikankari suit with exquisite detailing and breathable fabric.',
  },
  {
    id: 'p2',
    title: 'Co-Ord Set - Aarya',
    price: 3499,
    salePrice: 2799,
    category: 'co-ord-sets',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1548883354-94bcfe321907?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Comfort meets style in this modern co-ord set with a tailored silhouette.',
  },
  {
    id: 'p3',
    title: 'Office Wear Dress - Elina',
    price: 2999,
    salePrice: 2299,
    category: 'office-wear',
    sizes: ['S', 'M', 'L'],
    images: [
      'https://images.unsplash.com/photo-1516627145497-ae4e3cbb2e29?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Minimalist office dress with clean lines and a refined aesthetic.',
  },
  {
    id: 'p4',
    title: 'Velvet Dress - Zahra',
    price: 5599,
    salePrice: 4299,
    category: 'velvet',
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      'https://images.unsplash.com/photo-1542060748-10c28b62716b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1615529654716-2f9cd99d84f4?q=80&w=1200&auto=format&fit=crop'
    ],
    description: 'Luxurious velvet dress with a modern drape and elegant finish.',
  },
]

// Expand to at least 8 items by cloning with variations
const more = products.map((p, i) => ({
  ...p,
  id: `p${i + 5}`,
  title: p.title.replace(/-.*/, `- ${['Maya', 'Riva', 'Nora', 'Sara'][i]}`),
  price: p.price + 200,
  salePrice: p.salePrice + 150,
}))

export const allProducts = [...products, ...more]
