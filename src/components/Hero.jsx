import { useState } from 'react'

const darkGreen = '#006400'

export default function Hero({ onSearch }) {
  const [fromCity, setFromCity] = useState('Ajaccio')
  const [toCity, setToCity] = useState('Bastia')
  const [date, setDate] = useState('')

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
        alt="Montagnes"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.55))' }} />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
          Passaqui, le covoiturage de colis qui change la donne
        </h1>
        <p className="text-white/90 max-w-2xl mx-auto mb-8">
          Livraison collaborative, réseau local et impact positif. Pour les pros comme pour les particuliers.
        </p>

        <div className="bg-white/90 rounded-2xl p-4 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <input value={fromCity} onChange={e=>setFromCity(e.target.value)} placeholder="Départ" className="px-4 py-3 rounded-xl border border-emerald-900/20 focus:outline-none"/>
            <input value={toCity} onChange={e=>setToCity(e.target.value)} placeholder="Arrivée" className="px-4 py-3 rounded-xl border border-emerald-900/20 focus:outline-none"/>
            <input value={date} onChange={e=>setDate(e.target.value)} type="date" className="px-4 py-3 rounded-xl border border-emerald-900/20 focus:outline-none"/>
            <button onClick={()=>onSearch({fromCity, toCity, date})} className="px-4 py-3 rounded-xl text-white font-medium hover:opacity-90" style={{ background: darkGreen }}>Rechercher</button>
          </div>
        </div>
      </div>
    </section>
  )
}
