import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay }
})

const IMG = 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1600&q=80'
export default function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col justify-end overflow-hidden">

      {/* Full bleed background */}
      <div className="absolute inset-0 z-0">
        <img src={IMG} alt="Solar" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080f08] via-[#080f08]/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 pb-20 pt-40">

        {/* Badge */}
        <motion.div {...fade(0)} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-[#c5f135] text-xs font-bold tracking-[.2em] uppercase px-4 py-2 mb-6 rounded-full border border-[#c5f135]/30">
          <span className="w-2 h-2 rounded-full bg-[#c5f135] animate-pulse" />
          Next-Generation Solar
        </motion.div>

        {/* Heading */}
        <motion.h1 {...fade(0.15)} className="font-black text-[clamp(3rem,9vw,8rem)] leading-none tracking-tight uppercase max-w-5xl">
          Clean Solar <br />
          <span className="text-[#c5f135]">Energy</span>{' '}
          <span className="italic font-light text-white/60">Solutions</span>
        </motion.h1>

        <motion.p {...fade(0.3)} className="mt-6 text-white/60 max-w-lg text-lg leading-relaxed">
          Reliable, eco-friendly solar solutions designed to reduce energy costs while maximising environmental impact.
        </motion.p>

        <motion.div {...fade(0.45)} className="mt-8 flex gap-4 flex-wrap">
          <a href="#contact" className="bg-[#c5f135] text-[#080f08] font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:opacity-80 transition-opacity flex items-center gap-2">
            Explore Now ↓
          </a>
          <a href="#projects" className="border border-white/20 text-white font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            Our Work
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fade(0.6)} className="mt-16 flex gap-12 flex-wrap border-t border-white/10 pt-8">
          {[
            { val: '35%', label: 'Reduced Carbon Footprint' },
            { val: '25%', label: 'Reduced Electricity Bills' },
            { val: '50+', label: 'Installations Done' },
          ].map(({ val, label }) => (
            <div key={label}>
              <div className="text-4xl font-black text-[#c5f135]">{val}</div>
              <div className="text-xs text-white/40 tracking-widest uppercase mt-1 max-w-[120px]">{label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}