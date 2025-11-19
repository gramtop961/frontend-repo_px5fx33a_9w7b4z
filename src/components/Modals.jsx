import { useEffect, useState } from 'react'

const darkGreen = '#006400'
const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export function LoginModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    setErr('')
    try {
      const res = await fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) })
      if (!res.ok) throw new Error((await res.json()).detail || 'Erreur')
      const data = await res.json()
      onClose(data)
    } catch (e) {
      setErr(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={()=>onClose()} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-semibold mb-4" style={{ color: darkGreen }}>Se connecter</h3>
          {err && <p className="text-red-600 text-sm mb-3">{err}</p>}
          <div className="space-y-3">
            <input className="w-full px-4 py-3 rounded-xl border border-emerald-900/20" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
            <input className="w-full px-4 py-3 rounded-xl border border-emerald-900/20" placeholder="Mot de passe" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
            <button onClick={submit} disabled={loading} className="w-full px-4 py-3 rounded-xl text-white font-medium hover:opacity-90 disabled:opacity-50" style={{ background: darkGreen }}>{loading ? 'Connexion...' : 'Connexion'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SignupModal({ open, onClose }) {
  const [form, setForm] = useState({ first_name:'', last_name:'', phone:'', email:'', location:'', status:'Étudiant', reason:'', password:'' })
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    setErr('')
    try {
      const res = await fetch(`${API}/auth/signup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Erreur')
      onClose(data)
    } catch (e) {
      setErr(e.message)
    } finally {
      setLoading(false)
    }
  }

  if (!open) return null
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={()=>onClose()} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-xl max-h-[90vh] overflow-auto">
          <h3 className="text-xl font-semibold mb-4" style={{ color: darkGreen }}>Créer mon compte</h3>
          {err && <p className="text-red-600 text-sm mb-3">{err}</p>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <input className="px-4 py-3 rounded-xl border border-emerald-900/20" placeholder="Prénom" value={form.first_name} onChange={e=>setForm({...form, first_name:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-emerald-900/20" placeholder="Nom" value={form.last_name} onChange={e=>setForm({...form, last_name:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-emerald-900/20" placeholder="Téléphone" value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-emerald-900/20" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-emerald-900/20 md:col-span-2" placeholder="Localisation" value={form.location} onChange={e=>setForm({...form, location:e.target.value})} />
            <select className="px-4 py-3 rounded-xl border border-emerald-900/20 md:col-span-2" value={form.status} onChange={e=>setForm({...form, status:e.target.value})}>
              {['Étudiant','Salarié','Travailleur indépendant','TPE/PME','Auto-entrepreneur','Au chômage'].map(s=> <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea className="px-4 py-3 rounded-xl border border-emerald-900/20 md:col-span-2" rows="3" placeholder="Pourquoi souhaitez-vous utiliser PassaQui ?" value={form.reason} onChange={e=>setForm({...form, reason:e.target.value})} />
            <input className="px-4 py-3 rounded-xl border border-emerald-900/20 md:col-span-2" placeholder="Mot de passe" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
          </div>
          <button onClick={submit} disabled={loading} className="w-full px-4 py-3 rounded-xl text-white font-medium hover:opacity-90 disabled:opacity-50" style={{ background: darkGreen }}>{loading ? 'Création...' : 'Créer mon compte'}</button>
        </div>
      </div>
    </div>
  )
}
