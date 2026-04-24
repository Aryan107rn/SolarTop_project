import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-16 bg-[#080f08]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[.25em] uppercase text-[#c5f135] mb-3">Who We Are</p>
          <h2 className="text-5xl font-black uppercase text-white leading-none mb-6">
            Local. <span className="text-[#c5f135]">Trusted.</span> Green.
          </h2>
          <p className="text-white/40 leading-relaxed mb-4">
            SolarTop is a local solar installation firm run by a passionate solar fitter with hands-on experience in residential and commercial setups.
          </p>
          <p className="text-white/40 leading-relaxed mb-8">
            We believe clean energy should be affordable for everyone. No middlemen, no hidden costs — just honest work and quality installations.
          </p>
          <a href="#contact" className="bg-[#c5f135] text-[#080f08] font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:opacity-80 transition-opacity inline-block">
            Work With Us
          </a>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-col gap-4">
          {[
            { icon: '🌿', title: 'Eco First', desc: 'Every install reduces carbon footprint and helps the planet.' },
            { icon: '💸', title: 'Affordable', desc: 'Competitive pricing with flexible payment options.' },
            { icon: '🤝', title: 'Honest Work', desc: 'No upselling. We recommend only what you truly need.' },
            { icon: '⚡', title: 'Fast Install', desc: 'Most residential setups completed within 1-2 days.' },
          ].map(({ icon, title, desc }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start bg-[#0f1a0f] border border-white/5 p-5 rounded-xl hover:border-[#c5f135]/30 transition-colors">
              <span className="text-2xl">{icon}</span>
              <div>
                <h4 className="font-black uppercase text-white mb-1">{title}</h4>
                <p className="text-sm text-white/40">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}