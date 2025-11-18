import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const modes = [
  { key: 'layout', label: 'Layout' },
  { key: 'style', label: 'Style' },
  { key: 'ai', label: 'AI' },
]

function SwordSlash({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={{ clipPath: 'inset(0 0% 0 0)' }}
          exit={{ clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-white/40 to-blue-500/20 mix-blend-screen"
        />
      )}
    </AnimatePresence>
  )
}

function Demo() {
  const [mode, setMode] = useState('layout')
  const [slash, setSlash] = useState(false)

  const switchMode = (m) => {
    if (m === mode) return
    setSlash(true)
    setTimeout(() => {
      setMode(m)
      setSlash(false)
    }, 260)
  }

  return (
    <section id="demo" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Interactive Demo</h2>
          <p className="mt-3 text-indigo-200/90">Hover and click to see the builder in action.</p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="flex justify-center gap-3 mb-6">
            {modes.map((m) => (
              <button
                key={m.key}
                onClick={() => switchMode(m.key)}
                className={`px-4 py-2 rounded-full border backdrop-blur-md text-sm font-semibold transition-all ${mode === m.key ? 'border-fuchsia-400/60 text-white bg-white/10' : 'border-white/10 text-white/70 hover:text-white hover:border-white/30'}`}
              >
                {m.label}
              </button>
            ))}
          </div>

          <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 sm:p-6 overflow-hidden shadow-neon">
            <SwordSlash active={slash} />
            <div className="grid grid-cols-12 gap-3">
              {/* Sidebar blocks */}
              <motion.div className="col-span-4 space-y-3" initial={{ x: -12, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                {[1,2,3,4].map((i)=> (
                  <motion.div key={i} whileHover={{ x: 2 }} className="h-10 rounded-lg bg-gradient-to-r from-white/10 to-transparent border border-white/10" />
                ))}
              </motion.div>

              {/* Canvas area */}
              <div className="col-span-8">
                <div className="aspect-[16/10] rounded-xl border border-white/10 bg-black/40 overflow-hidden">
                  <AnimatePresence mode="wait">
                    {mode === 'layout' && (
                      <motion.div key="layout" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-4 grid grid-cols-3 gap-3">
                        {[...Array(6)].map((_,i)=> (
                          <motion.div key={i} whileHover={{ scale: 1.02 }} className="rounded-md bg-gradient-to-br from-blue-500/20 to-fuchsia-500/20 border border-white/10" />
                        ))}
                      </motion.div>
                    )}
                    {mode === 'style' && (
                      <motion.div key="style" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-6 flex flex-col gap-3">
                        <div className="h-6 w-3/5 rounded bg-white/10" />
                        <div className="h-6 w-2/5 rounded bg-white/10" />
                        <div className="mt-2 grid grid-cols-6 gap-3">
                          {[...Array(12)].map((_,i)=> (
                            <motion.div key={i} whileHover={{ rotate: 2 }} className="h-12 rounded bg-gradient-to-br from-fuchsia-500/20 to-transparent border border-white/10" />
                          ))}
                        </div>
                      </motion.div>
                    )}
                    {mode === 'ai' && (
                      <motion.div key="ai" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full p-6">
                        <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-indigo-100/90 text-sm">
                          "Create a startup landing page with hero, features, pricing, and testimonials in neon blue and purple."
                        </div>
                        <motion.div initial={{ width: '10%' }} animate={{ width: '90%' }} transition={{ duration: 1.4, ease: 'easeInOut' }} className="mt-4 h-2 rounded bg-gradient-to-r from-blue-500 via-fuchsia-500 to-cyan-400" />
                        <p className="mt-3 text-indigo-200/80 text-sm">AI is forging your page components...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Demo
