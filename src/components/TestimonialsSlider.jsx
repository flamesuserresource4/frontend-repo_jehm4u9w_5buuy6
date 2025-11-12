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
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">What our customers say</h2>
        <div className="relative overflow-hidden rounded-2xl bg-gray-50 p-8">
          <div className="whitespace-nowrap transition-transform duration-700" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((t) => (
              <div key={t.id} className="inline-block align-top w-full">
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-lg text-gray-800">“{t.quote}”</p>
                  <div className="mt-2 text-sm text-gray-600">— {t.name}, {t.role}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((t, i) => (
              <button key={t.id} onClick={() => setIndex(i)} className={`h-2 w-2 rounded-full ${i === index ? 'bg-emerald-700' : 'bg-gray-300'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
