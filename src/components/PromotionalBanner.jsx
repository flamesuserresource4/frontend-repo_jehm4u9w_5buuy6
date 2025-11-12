import React, { useEffect, useState } from 'react'

export default function PromotionalBanner() {
  const [timeLeft, setTimeLeft] = useState(3600)
  useEffect(() => {
    const id = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000)
    return () => clearInterval(id)
  }, [])
  const h = Math.floor(timeLeft / 3600)
  const m = Math.floor((timeLeft % 3600) / 60)
  const s = timeLeft % 60

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-emerald-700 text-white p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold">Hot Deal: 25% off Velvet Collection</h3>
            <p className="text-white/80">Limited time offer. Upgrade your festive looks now.</p>
          </div>
          <div className="flex items-center gap-3 font-mono text-lg">
            <TimeBlock label="Hrs" value={h} />
            <span>:</span>
            <TimeBlock label="Min" value={m} />
            <span>:</span>
            <TimeBlock label="Sec" value={s} />
          </div>
        </div>
      </div>
    </section>
  )
}

function TimeBlock({ label, value }) {
  return (
    <div className="text-center">
      <div className="px-4 py-2 rounded-md bg-white text-emerald-700 inline-block min-w-[64px]">{String(value).padStart(2, '0')}</div>
      <div className="text-xs mt-1 text-white/80">{label}</div>
    </div>
  )
}
