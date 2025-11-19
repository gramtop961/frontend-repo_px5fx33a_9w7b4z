import { useState } from 'react'
import Navbar from './components/Navbar'
import Drawer from './components/Drawer'
import Hero from './components/Hero'
import { Partners, Audience, Features, BlogStyleChips } from './components/Sections'
import { LoginModal, SignupModal } from './components/Modals'
import { MessagesDemo, WalletDemo, ProfilesDemo, AchievementsDemo } from './components/Demos'

const darkGreen = '#006400'
const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function App() {
  const [drawer, setDrawer] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [results, setResults] = useState([])
  const [searched, setSearched] = useState(false)

  const onSearch = async ({ fromCity, toCity, date }) => {
    const res = await fetch(`${API}/search`, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ from_city: fromCity, to_city: toCity, date }) })
    const data = await res.json()
    setResults(data.results || [])
    setSearched(true)
  }

  return (
    <div className="min-h-screen bg-white text-emerald-950" style={{ background: '#fffef9' }}>
      <Navbar onOpenLogin={()=>setLoginOpen(true)} onOpenSignup={()=>setSignupOpen(true)} onToggleDrawer={()=>setDrawer(true)} />
      <Drawer open={drawer} onClose={()=>setDrawer(false)} />

      <main className="pt-16">
        <Hero onSearch={onSearch} />

        {searched && (
          <section className="py-10">
            <div className="max-w-5xl mx-auto px-4">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: darkGreen }}>Résultats</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {results.map(r => (
                  <div key={r.id} className="rounded-2xl border border-emerald-900/20 bg-white p-4">
                    <div className="font-semibold" style={{ color: darkGreen }}>{r.driver}</div>
                    <div className="text-emerald-900/80 text-sm">{r.from} → {r.to} • {r.date}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm">{r.rating} ★</span>
                      <button className="px-3 py-1.5 rounded-full text-white text-sm" style={{ background: darkGreen }}>Choisir</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <Features />
        <MessagesDemo />
        <WalletDemo />
        <ProfilesDemo />
        <AchievementsDemo />
        <Audience />
        <Partners />
        <BlogStyleChips />

        <section className="py-14">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-4">
              <a href="#" className="px-4 py-2 rounded-full text-white" style={{ background: darkGreen }}>Télécharger l’application</a>
              <div className="flex items-center gap-2">
                <img alt="App Store" className="h-10" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"/>
                <img alt="Google Play" className="h-10" src="https://images.unsplash.com/photo-1512149673953-1e251807ec7c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxHb29nbGUlMjBQbGF5fGVufDB8MHx8fDE3NjM1NzYzNTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80"/>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-10 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <p className="text-sm text-emerald-900/70">© {new Date().getFullYear()} PassaQui — Covoiturage de colis. Scores, avis et sécurité pour tous.</p>
          </div>
        </footer>
      </main>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </div>
  )
}
