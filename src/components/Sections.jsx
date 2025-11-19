const darkGreen = '#006400'

export function Partners() {
  return (
    <section id="partenaires" className="py-14 bg-[#f7f7f2]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6" style={{ color: darkGreen }}>Nos partenaires</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
          <Logo label="Université de Corse"/>
          <Logo label="Collectivité de Corse"/>
          <Logo label="CAPA"/>
          <Logo label="CCI de Corse"/>
        </div>
      </div>
    </section>
  )
}

function Logo({ label }) {
  return (
    <div className="h-20 rounded-xl border border-emerald-900/20 bg-white flex items-center justify-center text-center text-sm font-medium text-emerald-900/80">
      {label}
    </div>
  )
}

export function Audience() {
  return (
    <section id="cible" className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6" style={{ color: darkGreen }}>Pour qui ?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card title="Entreprises locales" desc="TPE/PME, artisans, auto-entrepreneurs : expédiez à moindre coût en profitant des trajets existants."/>
          <Card title="Particuliers" desc="Rentabilisez vos trajets en transportant des colis sécurisés près de chez vous."/>
        </div>
      </div>
    </section>
  )
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl border border-emerald-900/20 p-6 bg-white">
      <h3 className="text-lg font-semibold mb-2" style={{ color: darkGreen }}>{title}</h3>
      <p className="text-emerald-900/80">{desc}</p>
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="py-14 bg-[#f7f7f2]">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-6">
        <FeatureBox title="Messagerie intégrée" badge="Nouveau">
          <p className="mb-4">Discutez comme sur Messenger. Essayez une conversation fictive.</p>
          <a href="#messages" className="inline-flex px-4 py-2 rounded-full text-white" style={{ background: darkGreen }}>Voir un exemple</a>
        </FeatureBox>
        <FeatureBox title="Paiement sécurisé">
          <p className="mb-4">Portefeuille protégé pour expéditeur et livreur.</p>
          <a href="#wallet" className="inline-flex px-4 py-2 rounded-full text-white" style={{ background: darkGreen }}>Voir mon portefeuille</a>
        </FeatureBox>
        <FeatureBox title="Notes & avis">
          <p className="mb-4">Un système de confiance inspiré de Vinted.</p>
          <a href="#profiles" className="inline-flex px-4 py-2 rounded-full text-white" style={{ background: darkGreen }}>Voir des profils</a>
        </FeatureBox>
        <FeatureBox title="Gamification & Parrainage">
          <p className="mb-4">Gagnez des points, badges et 5€ via le parrainage.</p>
          <a href="#achievements" className="inline-flex px-4 py-2 rounded-full text-white" style={{ background: darkGreen }}>Voir mes trophées</a>
        </FeatureBox>
      </div>
    </section>
  )
}

function FeatureBox({ title, badge, children }) {
  return (
    <div className="rounded-2xl p-6 border border-emerald-900/20 bg-white">
      <div className="flex items-center gap-3 mb-2">
        {badge && <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-900">{badge}</span>}
        <h3 className="text-lg font-semibold" style={{ color: darkGreen }}>{title}</h3>
      </div>
      <div className="text-emerald-900/80">
        {children}
      </div>
    </div>
  )
}

export function BlogStyleChips() {
  return (
    <section id="news" className="py-14">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap gap-3">
          {['Blog', 'Actualités', 'Conseils', 'Success stories'].map((t) => (
            <span key={t} className="px-3 py-2 rounded-xl" style={{ background: 'rgba(0,100,0,0.1)', color: darkGreen }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
