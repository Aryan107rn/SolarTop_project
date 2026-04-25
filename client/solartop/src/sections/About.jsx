import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-16 bg-[#FEFCE8]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-bold tracking-[.25em] uppercase text-[#F4B663] mb-3">
            Who We Are
          </p>

          <h2 className="text-5xl font-black uppercase text-[#1a2e1a] leading-none mb-6">
            Local. <span className="text-[#ACC6A8]">Trusted.</span> Green.
          </h2>

          <p className="text-[#7a9b7e] leading-relaxed mb-4">
            SolarTop is a local solar installation firm run by a passionate solar fitter with hands-on experience in residential and commercial setups.
          </p>

          <p className="text-[#7a9b7e] leading-relaxed mb-8">
            We believe clean energy should be affordable for everyone. No middlemen, no hidden costs — just honest work and quality installations.
          </p>

          <a
            href="#contact"
            className="bg-[#1a2e1a] text-white font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#c5f135] hover:text-[#1a2e1a] transition-colors inline-block"
          >
            Work With Us
          </a>
        </motion.div>

        {/* Right Features */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {[
            { icon: '🌿', title: 'Eco First', desc: 'Every install reduces carbon footprint and helps the planet.' },
            { icon: '💸', title: 'Affordable', desc: 'Competitive pricing with flexible payment options.' },
            { icon: '🤝', title: 'Honest Work', desc: 'No upselling. We recommend only what you truly need.' },
            { icon: '⚡', title: 'Fast Install', desc: 'Most residential setups completed within 1–2 days.' },
          ].map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 items-start bg-white border border-[#ACC6A8]/20 p-5 rounded-xl hover:border-[#c5f135]/40 transition-colors"
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <h4 className="font-black uppercase text-[#1a2e1a] mb-1">
                  {title}
                </h4>
                <p className="text-sm text-[#7a9b7e]">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}