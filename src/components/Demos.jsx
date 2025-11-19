import { useEffect, useState } from 'react'

const darkGreen = '#006400'
const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function MessagesDemo() {
  const [msgs, setMsgs] = useState([])
  const [text, setText] = useState('')
  useEffect(()=>{ fetch(`${API}/demo/messages`).then(r=>r.json()).then(d=>setMsgs(d.conversation)) },[])

  const send = () => {
    if (!text.trim()) return
    setMsgs([...msgs, { from: 'Vous', text, time: 'maintenant' }])
    setText('')
  }

  return (
    <section id="messages" className="py-14">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4" style={{ color: darkGreen }}>Exemple de messagerie</h3>
        <div className="rounded-2xl border border-emerald-900/20 overflow-hidden bg-white">
          <div className="p-4 space-y-2 h-80 overflow-auto">
            {msgs.map((m,i)=> (
              <div key={i} className={`flex ${m.from==='Vous' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-2xl max-w-[80%] ${m.from==='Vous' ? 'bg-emerald-600 text-white rounded-br-none' : 'bg-emerald-100 text-emerald-900 rounded-bl-none'}`}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-3 border-t border-emerald-900/20 flex gap-2">
            <input value={text} onChange={e=>setText(e.target.value)} placeholder="Écrire un message" className="flex-1 px-4 py-2 rounded-full border border-emerald-900/20"/>
            <button onClick={send} className="px-4 py-2 rounded-full text-white" style={{ background: darkGreen }}>Envoyer</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WalletDemo() {
  const [data, setData] = useState({ balance: 0, history: [] })
  useEffect(()=>{ fetch(`${API}/demo/wallet`).then(r=>r.json()).then(setData) },[])
  return (
    <section id="wallet" className="py-14 bg-[#f7f7f2]">
      <div className="max-w-2xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-4" style={{ color: darkGreen }}>Portefeuille</h3>
        <div className="rounded-2xl border border-emerald-900/20 bg-white p-6">
          <div className="text-3xl font-semibold mb-4" style={{ color: darkGreen }}>{data.balance.toFixed(2)}€</div>
          <div className="space-y-2">
            {data.history.map((h,i)=> (
              <div key={i} className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-50">
                <span className="text-emerald-900/80">{h.label}</span>
                <span className="font-medium" style={{ color: darkGreen }}>{h.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function ProfilesDemo() {
  const [profiles, setProfiles] = useState([])
  useEffect(()=>{ fetch(`${API}/demo/profiles`).then(r=>r.json()).then(d=>setProfiles(d.profiles)) },[])
  return (
    <section id="profiles" className="py-14">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-xl font-semibold mb-6" style={{ color: darkGreen }}>Profils & avis</h3>
        <div className="grid md:grid-cols-3 gap-4">
          {profiles.map((p,i)=> (
            <div key={i} className="rounded-2xl border border-emerald-900/20 bg-white p-4 text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-emerald-900/10 flex items-center justify-center text-2xl font-bold" style={{ color: darkGreen }}>{p.name[0]}</div>
              <div className="mt-3 font-semibold" style={{ color: darkGreen }}>{p.name}</div>
              <div className="text-sm text-emerald-900/70">{p.rating} ★ ({p.reviews} avis)</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function AchievementsDemo() {
  const [achievements, setAchievements] = useState([])
  useEffect(()=>{ fetch(`${API}/demo/achievements`).then(r=>r.json()).then(d=>setAchievements(d.achievements)) },[])
  return (
    <section id="achievements" className="py-14 bg-[#f7f7f2]">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold" style={{ color: darkGreen }}>Badges & progression</h3>
          <span className="text-sm px-3 py-2 rounded-xl" style={{ background: 'rgba(0,100,0,0.1)', color: darkGreen }}>Parrainage: gagnez 5€</span>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {achievements.map((a,i)=> (
            <div key={i} className="rounded-2xl border border-emerald-900/20 bg-white p-4">
              <div className="font-semibold" style={{ color: darkGreen }}>{a.title}</div>
              <div className="text-emerald-900/80">{a.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
