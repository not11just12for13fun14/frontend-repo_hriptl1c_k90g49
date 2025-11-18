import { motion } from 'framer-motion'

const tiers = [
  { name: 'Squire', price: 'Free', perks: ['Basic builder', 'Community templates', 'Starter hosting'] },
  { name: 'Knight', price: '$19/mo', perks: ['AI generation', 'Pro templates', 'Custom domains', 'Analytics'] },
  { name: 'Grand Paladin', price: '$49/mo', perks: ['Everything Pro', 'Team collaboration', 'Priority support', 'Advanced SEO'] },
]

function Pricing() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2 className="text-3xl sm:text-5xl font-extrabold text-white" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>Plans & Pricing</motion.h2>
          <motion.p className="mt-4 text-indigo-200/90" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}>Choose your rank and enter the arena.</motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} whileHover={{ y: -6 }} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 shadow-neon">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 opacity-0 hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white">{t.name}</h3>
                <p className="mt-2 text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-fuchsia-400 bg-clip-text text-transparent">{t.price}</p>
                <ul className="mt-6 space-y-2 text-indigo-200/90 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" /> {p}</li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-xl bg-gradient-to-r from-blue-500 to-fuchsia-500 text-white font-semibold py-2.5 shadow-neon active:scale-95 transition-transform">Select</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
