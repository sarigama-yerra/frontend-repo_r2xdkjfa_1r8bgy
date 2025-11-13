import React from 'react'
import { ShoppingBag, Sparkles, ArrowRight, Gem, Shield, Truck, Star } from 'lucide-react'

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-100 via-fuchsia-200 to-sky-200 ring-1 ring-white/40 shadow-[0_0_28px_rgba(255,180,235,.55)]" />
          <span className="text-white tracking-widest text-sm font-semibold">CRISTALLA</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collection" className="text-zinc-300 hover:text-white text-sm">Collezione</a>
          <a href="#craft" className="text-zinc-300 hover:text-white text-sm">Qualità</a>
          <a href="#about" className="text-zinc-300 hover:text-white text-sm">Club</a>
          <a href="#contact" className="text-zinc-300 hover:text-white text-sm">Contatti</a>
        </nav>
        <button className="inline-flex items-center gap-2 text-sm text-black bg-white hover:bg-zinc-200 border border-white/20 px-4 py-2 rounded-full transition">
          <ShoppingBag size={16} />
          Acquista
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center" aria-label="Hero">
      {/* Background video (femminile, effetto cristallo) */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1535467882748-487002e5af3a?q=80&w=1200&auto=format&fit=crop"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pink-glitter-particles-1389-large.mp4" type="video/mp4" />
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pink-particles-on-a-dark-background-9966-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlays per leggibilità e glow cristallo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(60%_50%_at_50%_40%,rgba(255,210,240,0.25)_0%,transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(30%_30%_at_20%_15%,rgba(255,182,222,.25),transparent_60%),radial-gradient(35%_35%_at_80%_10%,rgba(160,220,255,.22),transparent_60%)] mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs mb-6">
            <Sparkles size={14} className="text-white" />
            Cristalli premium • Inverno 2025
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-fuchsia-100 to-sky-200 drop-shadow-[0_2px_20px_rgba(255,255,255,.15)]">
            Gioielli femminili dal taglio cristallo.
          </h1>
          <p className="mt-6 text-zinc-200 max-w-xl">
            Ispirati all'eleganza dei cristalli, con luce prismatico e finiture in rodio. Dettagli delicati per uno stile luminoso e raffinato.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
              Scopri i cristalli <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full text-sm hover:bg-white/10 transition">
              Unisciti al club
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <Feature icon={Gem} title="Taglio brillante" />
            <Feature icon={Shield} title="Placcatura in rodio" />
            <Feature icon={Truck} title="Consegna rapida" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,.2)]">
        <Icon size={18} className="text-white" />
      </div>
      <span className="text-sm text-white/90">{title}</span>
    </div>
  )
}

function Collection() {
  const products = [
    { id: 1, name: 'Collana Aurora', price: '€129', tone: 'from-rose-200 via-fuchsia-200 to-sky-200' },
    { id: 2, name: 'Orecchini Starlight', price: '€99', tone: 'from-fuchsia-200 via-pink-200 to-cyan-200' },
    { id: 3, name: 'Bracciale Crystal Line', price: '€119', tone: 'from-rose-100 via-rose-200 to-fuchsia-200' },
    { id: 4, name: 'Anello Lumière', price: '€89', tone: 'from-violet-200 via-fuchsia-200 to-sky-200' },
    { id: 5, name: 'Collana Prism', price: '€139', tone: 'from-cyan-200 via-sky-200 to-emerald-200' },
    { id: 6, name: 'Orecchini Halo Mini', price: '€79', tone: 'from-rose-200 via-amber-200 to-rose-300' },
  ]

  return (
    <section id="collection" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl text-white font-semibold">Collezione Cristalli</h2>
            <p className="text-zinc-300 mt-2">Luce prismatico, linee femminili e brillantezza impeccabile.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-black bg-white hover:bg-zinc-200 border border-white/20 px-4 py-2 rounded-full transition">
            Acquista ora <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black/70 to-zinc-900/70 relative">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.tone} relative overflow-hidden`}> 
                <div className="absolute inset-0 mix-blend-screen opacity-70 bg-[radial-gradient(80%_60%_at_50%_40%,rgba(255,255,255,0.85),transparent_60%)]" />
                <Star className="absolute top-4 right-4 text-white/80" size={18} />
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-zinc-200 text-sm">{p.price}</span>
                  <button className="inline-flex items-center gap-2 text-xs text-black bg-white px-3 py-1.5 rounded-full font-medium">
                    Aggiungi <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Craft() {
  return (
    <section id="craft" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">Brillantezza che dura</h2>
          <p className="mt-4 text-zinc-300">
            Realizzati con cristalli taglio brillante e finiture in rodio per una lucentezza superiore. Ogni dettaglio è pensato per valorizzare la femminilità.
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />Cristalli prismatici di qualità premium</li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />Placcatura in rodio antiossidante</li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />Design leggero, comfort quotidiano</li>
          </ul>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-black bg-white hover:bg-zinc-200 border border-white/20 px-4 py-2 rounded-full transition">
            Scopri la qualità <ArrowRight size={16} />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-rose-100/70 via-fuchsia-100/70 to-sky-200/70 relative">
            <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7),transparent_60%)]" />
            <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,rgba(255,255,255,.25),transparent_30%,rgba(255,255,255,.2))]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl text-white font-semibold">Entra nel Club Cristalla</h3>
        <p className="mt-3 text-zinc-300">Anteprime, edizioni limitate e promozioni dedicate. Brilla prima di tutti.</p>
        <form className="mt-8 max-w-md mx-auto flex gap-3">
          <input type="email" required placeholder="La tua email" className="flex-1 rounded-full bg-white/5 border border-white/15 px-5 py-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-white/20" />
          <button type="submit" className="rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-zinc-200">Iscriviti</button>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 text-zinc-300">
          <div>
            <div className="text-white font-semibold tracking-widest">CRISTALLA</div>
            <p className="mt-3 text-sm">Gioielli femminili ispirati ai cristalli: luce, colore e delicatezza.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Assistenza</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Spedizioni & Resi</a></li>
              <li><a href="#" className="hover:text-white">Cura dei gioielli</a></li>
              <li><a href="#" className="hover:text-white">Garanzia</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Contatti</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@cristalla.studio" className="hover:text-white">hello@cristalla.studio</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-zinc-400">© {new Date().getFullYear()} Cristalla Studio. Tutti i diritti riservati.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Global feminine crystal background accents (subtle, below content) */}
      <div className="pointer-events-none absolute inset-0 -z-20 [background:radial-gradient(circle_at_20%_10%,rgba(255,183,223,.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(163,224,255,.14),transparent_45%),radial-gradient(circle_at_60%_85%,rgba(255,220,255,.12),transparent_40%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[conic-gradient(from_230deg_at_50%_50%,rgba(255,255,255,.12),transparent_20%,rgba(255,255,255,.08)_40%,transparent_60%,rgba(255,255,255,.12)_80%,transparent_100%)] mix-blend-overlay" />

      <NavBar />
      <Hero />
      <Collection />
      <Craft />
      <Newsletter />
      <Footer />
    </div>
  )
}
