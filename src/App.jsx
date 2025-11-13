import React from 'react'
import Spline from '@splinetool/react-spline'
import { ShoppingBag, Sparkles, ArrowRight, Gem, Shield, Truck } from 'lucide-react'

function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/40 bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-200 to-zinc-500 ring-1 ring-white/20" />
          <span className="text-white tracking-widest text-sm font-semibold">AURUM</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collection" className="text-zinc-300 hover:text-white text-sm">Collezione</a>
          <a href="#craft" className="text-zinc-300 hover:text-white text-sm">Artigianalità</a>
          <a href="#about" className="text-zinc-300 hover:text-white text-sm">Chi Siamo</a>
          <a href="#contact" className="text-zinc-300 hover:text-white text-sm">Contatti</a>
        </nav>
        <button className="inline-flex items-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition">
          <ShoppingBag size={16} />
          Shop
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden flex items-center" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/JqBuM4DcZiGXqO-1/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Subtle gradient edges for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs mb-6">
            <Sparkles size={14} className="text-white" />
            Nuova Collezione • Inverno 2025
          </div>
          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight text-white tracking-tight">
            Gioielli moderni. Eleganza senza tempo.
          </h1>
          <p className="mt-6 text-zinc-300 max-w-xl">
            Linee pulite e dettagli metallici per un look essenziale e raffinato. Realizzati a mano con materiali di alta qualità.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center gap-2 bg-white text-black px-5 py-3 rounded-full text-sm font-medium hover:bg-zinc-200 transition">
              Scopri la collezione <ArrowRight size={18} />
            </a>
            <a href="#about" className="inline-flex items-center gap-2 border border-white/20 text-white px-5 py-3 rounded-full text-sm hover:bg-white/10 transition">
              La nostra storia
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg">
            <Feature icon={Gem} title="Materiali premium" />
            <Feature icon={Shield} title="Garanzia 2 anni" />
            <Feature icon={Truck} title="Spedizione veloce" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
        <Icon size={18} className="text-white" />
      </div>
      <span className="text-sm text-white/90">{title}</span>
    </div>
  )
}

function Collection() {
  const products = [
    { id: 1, name: 'Anello Meridian', price: '€220', tone: 'from-zinc-200 to-zinc-500' },
    { id: 2, name: 'Collana Linear', price: '€340', tone: 'from-zinc-300 to-zinc-600' },
    { id: 3, name: 'Bracciale Flux', price: '€190', tone: 'from-zinc-100 to-zinc-400' },
    { id: 4, name: 'Orecchini Axis', price: '€160', tone: 'from-zinc-200 to-zinc-500' },
    { id: 5, name: 'Anello Halo', price: '€260', tone: 'from-zinc-300 to-zinc-600' },
    { id: 6, name: 'Collana Orbit', price: '€380', tone: 'from-zinc-100 to-zinc-400' },
  ]

  return (
    <section id="collection" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl text-white font-semibold">Collezione in evidenza</h2>
            <p className="text-zinc-400 mt-2">Forme architettoniche, superfici lucide e riflessi metallici.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition">
            Tutti i prodotti <ArrowRight size={16} />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-black to-zinc-900">
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.tone} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.3),transparent_60%)] opacity-0 group-hover:opacity-100 transition" />
              </div>
              <div className="p-5">
                <h3 className="text-white font-medium">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-zinc-300 text-sm">{p.price}</span>
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
    <section id="craft" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl text-white font-semibold">Artigianalità contemporanea</h2>
          <p className="mt-4 text-zinc-300">
            Ogni pezzo è lavorato con precisione per creare superfici morbide e riflessi perfetti. Design minimalista, comfort assoluto.
          </p>
          <ul className="mt-6 space-y-3 text-zinc-300">
            <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />Acciaio chirurgico e argento 925</li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />Finiture spazzolate e lucide</li>
            <li className="flex items-start gap-3"><span className="mt-1 inline-block w-2 h-2 rounded-full bg-white/70" />Produzione locale e sostenibile</li>
          </ul>
          <div className="mt-8 inline-flex items-center gap-2 text-sm text-white/90 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition">
            Scopri il processo <ArrowRight size={16} />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-zinc-100 to-zinc-500 relative">
            <div className="absolute inset-0 mix-blend-overlay bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.6),transparent_60%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(0,0,0,0.15),transparent_40%)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Newsletter() {
  return (
    <section id="about" className="bg-black py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl sm:text-3xl text-white font-semibold">Unisciti al club Aurum</h3>
        <p className="mt-3 text-zinc-400">Novità, anteprime e accesso esclusivo alle edizioni limitate.</p>
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
    <footer id="contact" className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 text-zinc-400">
          <div>
            <div className="text-white font-semibold tracking-widest">AURUM</div>
            <p className="mt-3 text-sm">Estetica industriale, finiture impeccabili e comfort quotidiano.</p>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Assistenza</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Spedizioni & Resi</a></li>
              <li><a href="#" className="hover:text-white">Guida alle taglie</a></li>
              <li><a href="#" className="hover:text-white">Garanzia</a></li>
            </ul>
          </div>
          <div>
            <div className="text-white font-medium mb-3">Contatti</div>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:hello@aurum.studio" className="hover:text-white">hello@aurum.studio</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">Pinterest</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-xs text-zinc-500">© {new Date().getFullYear()} Aurum Studio. Tutti i diritti riservati.</div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="bg-black min-h-screen">
      <NavBar />
      <Hero />
      <Collection />
      <Craft />
      <Newsletter />
      <Footer />
    </div>
  )
}
