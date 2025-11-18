import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* subtle starfield background */}
      <div className="fixed inset-0 pointer-events-none [background-image:radial-gradient(1px_1px_at_10px_10px,rgba(255,255,255,0.08),transparent_1px)] [background-size:20px_20px] opacity-30" />

      <header className="relative z-20">
        <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-fuchsia-500 shadow-neon" />
            <span className="font-extrabold tracking-tight">Call Knights</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#demo" className="hover:text-white">Demo</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
          <a href="#demo" className="hidden sm:inline-block rounded-lg bg-white/10 px-4 py-2 text-sm">Launch</a>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <div id="features"><Features /></div>
        <div id="demo"><Demo /></div>
        <div id="pricing"><Pricing /></div>
        <Testimonials />
      </main>

      <Footer />
    </div>
  )
}

export default App
