import { useState } from 'react'

const darkGreen = '#006400'

export default function Navbar({ onOpenLogin, onOpenSignup, onToggleDrawer }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/70 border-b border-emerald-900/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label="Menu"
            onClick={onToggleDrawer}
            className="p-2 rounded-full hover:bg-emerald-900/10 transition"
            style={{ color: darkGreen }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-900/90 flex items-center justify-center text-white font-bold">P</div>
            <span className="font-semibold text-lg" style={{ color: darkGreen }}>PassaQui</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#histoire" className="text-sm hover:opacity-80" style={{ color: darkGreen }}>Notre histoire</a>
          <a href="#guide" className="text-sm hover:opacity-80" style={{ color: darkGreen }}>Guide complet</a>
          <a href="#partenaires" className="text-sm hover:opacity-80" style={{ color: darkGreen }}>Nos partenaires</a>
          <a href="#cible" className="text-sm hover:opacity-80" style={{ color: darkGreen }}>Public cible</a>
          <a href="#features" className="text-sm hover:opacity-80" style={{ color: darkGreen }}>Fonctionnalités</a>
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={onOpenLogin} className="px-3 py-2 rounded-full border border-emerald-900/40 text-sm hover:bg-emerald-50" style={{ color: darkGreen }}>Se connecter</button>
          <button onClick={onOpenSignup} className="px-4 py-2 rounded-full text-sm text-white hover:opacity-90" style={{ background: darkGreen }}>Créer un compte</button>
        </div>
      </div>
    </header>
  )
}
