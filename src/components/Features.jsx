import { motion } from 'framer-motion'
import { Shield, Wand2, LayoutPanelTop, Globe, Sparkles, BarChart3 } from 'lucide-react'

const features = [
  {
    title: 'Drag & Drop Builder',
    desc: 'Craft layouts with precision and flow using magnetic snapping blocks.',
    icon: <LayoutPanelTop className="w-6 h-6" />,
    variant: 'flip'
  },
  {
    title: 'AI Website Generation',
    desc: 'Describe it once. Get a full site with sections, styles, and content.',
    icon: <Wand2 className="w-6 h-6" />,
    variant: 'pulse'
  },
  {
    title: 'Full Customization',
    desc: 'Design systems, tokens, animations — control every pixel.',
    icon: <Sparkles className="w-6 h-6" />,
    variant: 'slide'
  },
  {
    title: 'Hosting & Domains',
    desc: 'One-click deploy with global edge hosting and SSL included.',
    icon: <Shield className="w-6 h-6" />,
    variant: 'shield'
  },
  {
    title: 'Smart Templates',
    desc: 'Premium templates that adapt to your brand and content.',
    icon: <Globe className="w-6 h-6" />,
    variant: 'carousel'
  },
  {
    title: 'SEO + Analytics',
    desc: 'Track, optimize, and grow with built‑in insights.',
    icon: <BarChart3 className="w-6 h-6" />,
    variant: 'chart'
  },
]

function FeatureCard({ item, index }) {
  const variants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <motion.div
      className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-lg hover:shadow-neon transition-transform"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      variants={variants}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="shrink-0 p-3 rounded-xl bg-gradient-to-br from-white/10 to-white/5 text-white/90 shadow-inner">
          {item.icon}
        </div>
        <div>
          <h3 className="text-white font-semibold text-lg">{item.title}</h3>
          <p className="text-indigo-200/80 mt-1 text-sm leading-relaxed">{item.desc}</p>
        </div>
      </div>
      {/* Decorative glowing border sweep */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/20">
        <span className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" style={{
          background: 'linear-gradient(90deg, rgba(59,130,246,0), rgba(59,130,246,0.6), rgba(168,85,247,0))',
          WebkitMask: 'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }} />
      </span>
    </motion.div>
  )
}

function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.h2
            className="text-3xl sm:text-5xl font-extrabold text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Armor‑grade Features
          </motion.h2>
          <motion.p
            className="mt-4 text-indigo-200/90"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            From blade‑sharp AI to shield‑strong hosting — everything you need to conquer the web.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <FeatureCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
