import React, { useEffect, useRef, useState } from 'react'

const testimonials = [
  { id: 1, name: 'Ananya Sharma', quote: 'Loved the quality and fit. The chikankari details are beautiful!', role: 'Mumbai' },
  { id: 2, name: 'Riya Patel', quote: 'Elegant styles with a modern touch. My go-to festive store now.', role: 'Ahmedabad' },
  { id: 3, name: 'Priya Verma', quote: 'Super comfortable co-ord sets. Quick delivery too!', role: 'Delhi' },
]

export default function TestimonialsSlider() {
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => setIndex((i) => (i + 1) % testimonials.length), 4000)
    return () => clearTimeout(timeoutRef.current)
  }, [index])

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-serif text-gray-900">What our customers say</h2>
          <div className="text-sm text-gray-500">Loved by 10k+ shoppers</div>
        </div>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 to-white p-8 ring-1 ring-emerald-100">
          <div className="whitespace-nowrap transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="inline-block align-top w-full">
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-lg md:text-xl text-gray-800">“{t.quote}”</p>
                  <div className="mt-2 text-sm text-gray-600">— {t.name}, {t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((t, i) => (
              <button key={t.id} onClick={() => setIndex(i)} className={`h-2.5 w-2.5 rounded-full ${i === index ? 'bg-emerald-700' : 'bg-emerald-200'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
