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
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 ring-1 ring-emerald-400/20 shadow-[0_10px_40px_-12px_rgba(16,185,129,0.45)]">
          <div className="absolute -right-10 -bottom-12 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div>
            <h3 className="text-2xl md:text-3xl font-serif">Hot Deal: 25% off Velvet Collection</h3>
            <p className="text-white/85">Limited time offer. Upgrade your festive looks now.</p>
          </div>
          <div className="flex items-center gap-3 font-mono text-lg">
            <TimeBlock label="Hrs" value={h} />
            <span className="opacity-80">:</span>
            <TimeBlock label="Min" value={m} />
            <span className="opacity-80">:</span>
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
      <div className="px-4 py-2 rounded-xl bg-white text-emerald-700 inline-block min-w-[64px] shadow">
        {String(value).padStart(2, '0')}
      </div>
      <div className="text-xs mt-1 text-white/85">{label}</div>
    </div>
  )
}
