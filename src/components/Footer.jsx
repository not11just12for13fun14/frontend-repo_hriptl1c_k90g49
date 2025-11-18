function Footer() {
  return (
    <footer className="relative mt-10">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_50%_-10%,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-white font-extrabold text-xl">Call Knights</h3>
            <p className="text-indigo-200/80 text-sm">Build boldly. Deploy swiftly.</p>
          </div>
          <div className="flex items-center gap-5 text-white/70">
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] transition">Twitter</a>
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] transition">LinkedIn</a>
            <a href="#" className="hover:text-white hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.8)] transition">GitHub</a>
          </div>
        </div>
        <div className="mt-8 text-center text-xs text-indigo-200/60">© {new Date().getFullYear()} Call Knights. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
