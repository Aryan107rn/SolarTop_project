import { motion } from 'framer-motion'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay }
})

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 relative overflow-hidden bg-[#FEFCE8]">

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ACC6A8]/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div {...fade(0)} className="flex items-center gap-2 border border-[#ACC6A8] text-[#ACC6A8] text-xs font-bold tracking-[.2em] uppercase px-4 py-2 mb-8">
        <span className="w-2 h-2 rounded-full bg-[#F4B663] animate-pulse" />
        Going Green
      </motion.div>

      <motion.h1 {...fade(0.15)} className="font-black text-[clamp(3.5rem,12vw,9rem)] leading-none tracking-tight uppercase text-[#1a2e1a]">
        Power Your <br />
        <span className="text-[#ACC6A8]">Future</span>{' '}
        <span className="text-[#F4B663]">Today</span>
      </motion.h1>

      <motion.p {...fade(0.3)} className="mt-6 text-[#7a9b7e] max-w-lg text-lg leading-relaxed">
        Affordable solar panel installation for homes & businesses. Cut your electricity bill and go green.
      </motion.p>

      <motion.div {...fade(0.45)} className="mt-10 flex gap-4 flex-wrap justify-center">
        <a href="#contact" className="bg-[#ACC6A8] text-[#1a2e1a] font-bold text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#F4B663] transition-colors">
          Get Free Quote
        </a>
        <a href="#projects" className="border border-[#ACC6A8] text-[#ACC6A8] font-bold text-sm tracking-widest uppercase px-8 py-3 hover:bg-[#ACC6A8]/10 transition-colors">
          Our Work
        </a>
      </motion.div>

      <motion.div {...fade(0.6)} className="mt-16 grid grid-cols-3 gap-12 border-t border-[#ACC6A8]/30 pt-10">
        {[
          { val: '50+', label: 'Installations' },
          { val: '500kW', label: 'Power Generated' },
          { val: '100%', label: 'Satisfaction' },
        ].map(({ val, label }) => (
          <div key={label}>
            <div className="text-3xl font-black text-[#F4B663]">{val}</div>
            <div className="text-xs text-[#7a9b7e] tracking-widest uppercase mt-1">{label}</div>
          </div>
        ))}
      </motion.div>

    </section>
  )
}