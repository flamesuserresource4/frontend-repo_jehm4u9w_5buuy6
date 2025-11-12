import React from 'react'

const posts = [
  { id: 1, title: 'Festive Fits: Styling Velvet the Modern Way', snippet: 'Velvet is timeless. Here is how to style it for the season...' },
  { id: 2, title: 'Office Wear Essentials for Effortless Chic', snippet: 'Minimalist pieces that work 9 to 9 and beyond.' },
  { id: 3, title: 'The Art of Chikankari', snippet: 'A craft that blends heritage with contemporary silhouettes.' },
]

export default function BlogPreview() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.id} className="rounded-xl border border-gray-100 p-6 hover:shadow-sm transition-shadow bg-white">
              <h3 className="font-semibold text-gray-800">{p.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{p.snippet}</p>
              <button className="mt-3 text-emerald-700 hover:underline text-sm">Read more</button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
