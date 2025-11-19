const darkGreen = '#006400'

export default function Drawer({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        onClick={onClose}
        className={`absolute inset-0 transition ${open ? 'bg-black/30' : 'bg-transparent'} ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      <aside
        className={`absolute top-0 left-0 h-full w-80 max-w-[85%] bg-white shadow-xl transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-4 border-b border-emerald-900/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-emerald-900/90 flex items-center justify-center text-white font-bold">P</div>
            <span className="font-semibold" style={{ color: darkGreen }}>PassaQui</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-emerald-900/10" style={{ color: darkGreen }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div className="p-4 space-y-2">
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-900/60 mb-2">Découvrir</p>
            <a href="#histoire" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Notre histoire</a>
            <a href="#qui" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Qui sommes-nous</a>
            <a href="#pourquoi" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Pourquoi nous choisir</a>
            <a href="#guide" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Guide complet du covoiturage</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-900/60 mb-2">Communauté</p>
            <a href="#avis" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Avis utilisateurs</a>
            <a href="#ideas" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Boîte à idées</a>
            <a href="#news" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Actualités</a>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-emerald-900/60 mb-2">Écosystème</p>
            <a href="#partenaires" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Nos partenaires</a>
            <a href="#commercants" className="block px-3 py-2 rounded-lg hover:bg-emerald-50" style={{ color: darkGreen }}>Artisans & Commerçants</a>
          </div>
        </div>
      </aside>
    </div>
  )
}
