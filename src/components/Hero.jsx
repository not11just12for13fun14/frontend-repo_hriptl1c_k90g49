import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function Hero() {
  const lightRef = useRef(null)
  const [cursorPos, setCursorPos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      setCursorPos({ x, y })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/ppI7eAudW7IbKhKs/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80 pointer-events-none" />
      <div
        ref={lightRef}
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px at ${cursorPos.x * 100}% ${cursorPos.y * 100}%, rgba(99,102,241,0.25), transparent 60%)`,
        }}
      />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-cyan-400 rounded-full shadow-glow animate-float" />
        <div className="absolute top-1/3 right-16 w-1.5 h-1.5 bg-fuchsia-400 rounded-full shadow-glow animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full shadow-glow animate-float" />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-purple-400 rounded-full shadow-glow animate-float-fast" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl mx-auto text-center"
        >
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]"
            whileHover={{
              textShadow: [
                '0 0 0 rgba(0,0,0,0)',
                '0 0 12px rgba(59,130,246,0.9)',
                '0 0 22px rgba(168,85,247,0.9)'
              ],
            }}
          >
            Build Websites Like a Knight — Fast. Smart. Powerful.
          </motion.h1>
          <motion.p
            className="mt-6 text-lg sm:text-xl text-indigo-200/90 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Call Knights: The AI-powered website builder with legendary speed and style.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <motion.a
              href="#demo"
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              className="group relative inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 px-7 py-3 text-white font-semibold shadow-neon"
            >
              <span className="relative z-10">Start Building</span>
              <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-5 h-5 opacity-80 group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </motion.a>

            <motion.a
              href="#features"
              whileTap={{ scale: 0.95 }}
              whileHover={{ y: -2 }}
              className="group relative inline-flex items-center gap-3 rounded-xl border border-white/20 px-7 py-3 text-white/90 backdrop-blur-md"
            >
              <span className="relative z-10">Watch Demo</span>
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <svg className="w-5 h-5 opacity-80 group-hover:rotate-6 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
