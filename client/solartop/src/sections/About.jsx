import { motion } from 'framer-motion'

const reviews = [
  { name: 'Rajesh Sharma', location: 'Nagpur', rating: 5, review: 'My electricity bill dropped from ₹4,500 to just ₹400 per month. Team was professional and finished in one day.' },
  { name: 'Priya Deshmukh', location: 'Wardha', rating: 5, review: 'Very honest people. They told me exactly what I needed and did not try to oversell.' },
  { name: 'Suresh Patil', location: 'Amravati', rating: 5, review: 'Got the government subsidy with their help. Saved a lot on upfront cost. Highly recommend!' },
]

export default function About() {
  return (
    <section id="about" className="py-28 px-8 md:px-16 bg-[#EEF0D8]">
      <div className="max-w-5xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-20">

          {/* Left - About */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-xs font-bold tracking-[.25em] uppercase text-[#F4B663] mb-3">Who We Are</p>
            <h2 className="text-5xl font-black uppercase text-[#1a2e1a] leading-none mb-6">
              Local. <span className="text-[#ACC6A8]">Trusted.</span> Green.
            </h2>
            <p className="text-[#7a9b7e] leading-relaxed mb-4">
              SolarTop is a local solar installation firm run by a passionate solar fitter with hands-on experience in residential and commercial setups.
            </p>
            <p className="text-[#7a9b7e] leading-relaxed mb-8">
              No middlemen, no hidden costs — just honest work and quality installations.
            </p>
            <a href="#contact" className="bg-[#1a2e1a] text-white font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:bg-[#c5f135] hover:text-[#1a2e1a] transition-colors inline-block">
              Work With Us
            </a>
          </motion.div>

          {/* Right - Values */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-3">
            {[
              { icon: '🌿', title: 'Eco First', desc: 'Every install reduces carbon footprint.' },
              { icon: '💸', title: 'Affordable', desc: 'Competitive pricing with flexible payment options.' },
              { icon: '🤝', title: 'Honest Work', desc: 'No upselling. We recommend only what you truly need.' },
              { icon: '⚡', title: 'Fast Install', desc: 'Most setups completed within 1-2 days.' },
            ].map(({ icon, title, desc }, i) => (
              <motion.div key={title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex gap-4 items-start bg-white border border-[#ACC6A8]/20 p-4 rounded-xl">
                <span className="text-2xl">{icon}</span>
                <div>
                  <h4 className="font-black uppercase text-[#1a2e1a] mb-0.5">{title}</h4>
                  <p className="text-sm text-[#7a9b7e]">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-xs font-bold tracking-[.25em] uppercase text-[#F4B663] mb-3">
          What People Say
        </motion.p>
        <motion.h3 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-4xl font-black uppercase text-[#1a2e1a] mb-10 leading-none">
          Customer <span className="text-[#ACC6A8]">Reviews</span>
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map(({ name, location, rating, review }, i) => (
            <motion.div key={name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="bg-white border border-[#ACC6A8]/20 p-6 rounded-xl">
              <div className="flex gap-1 mb-3">
                {Array.from({ length: rating }).map((_, i) => (
                  <span key={i} className="text-[#F4B663]">★</span>
                ))}
              </div>
              <p className="text-[#7a9b7e] text-sm leading-relaxed mb-4">"{review}"</p>
              <div className="border-t border-[#ACC6A8]/20 pt-3">
                <p className="font-black uppercase text-[#1a2e1a] text-sm">{name}</p>
                <p className="text-xs text-[#F4B663] tracking-widest uppercase mt-1">📍 {location}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}