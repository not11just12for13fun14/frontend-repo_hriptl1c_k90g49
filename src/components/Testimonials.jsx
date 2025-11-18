import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    quote: 'Call Knights turned our 6-week redesign into a weekend win. The animations are unreal.',
    author: 'Alyssa — Product Lead',
  },
  {
    quote: 'It feels like a creative partner that fights scope creep for you.',
    author: 'Marco — Founder',
  },
  {
    quote: 'We launched in days with a site that actually feels alive. Our conversion doubled.',
    author: 'Priya — Growth Lead',
  },
]

function Testimonials() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 4200)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Testimonials</h2>
          <p className="mt-3 text-indigo-200/90">What creators are saying</p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ x: 40, opacity: 0, rotate: 2 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              exit={{ x: -40, opacity: 0, rotate: -2 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">“{items[index].quote}”</p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-fuchsia-500" />
                <p className="text-indigo-200/90 text-sm">{items[index].author}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
