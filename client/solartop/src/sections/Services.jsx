import { motion } from 'framer-motion'

const services = [
  { icon: '🏠', title: 'Home Installation', desc: 'Complete rooftop solar setup for residential homes. Save up to 90% on electricity bills.' },
  { icon: '🏭', title: 'Business Installation', desc: 'Large scale solar solutions for offices, factories and commercial buildings.' },
  { icon: '🔧', title: 'Maintenance & Repair', desc: 'Regular servicing, cleaning and repair of existing solar panel systems.' },
  { icon: '📊', title: 'Free Site Survey', desc: 'We visit your site, assess your needs and give you a detailed cost estimate — for free.' },
]

export default function Services() {
  return (
    <section id="services" className="py-28 px-8 md:px-16 bg-[#080f08]">
      <div className="max-w-5xl mx-auto">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-bold tracking-[.25em] uppercase text-[#c5f135] mb-3">
          What We Do
        </motion.p>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-5xl font-black uppercase text-white mb-16 leading-none">
          Our <span className="text-[#c5f135]">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map(({ icon, title, desc }, i) => (
            <motion.div key={title}
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-[#0f1a0f] border border-white/5 p-8 rounded-xl cursor-default hover:border-[#c5f135]/30 transition-colors">
              <div className="text-4xl mb-4">{icon}</div>
              <h3 className="text-xl font-black uppercase text-white mb-2">{title}</h3>
              <p className="text-white/40 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}