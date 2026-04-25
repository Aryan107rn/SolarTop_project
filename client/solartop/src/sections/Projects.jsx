import { motion } from 'framer-motion'

const projects = [
  { title: 'Residential Home', location: 'Nagpur, MH', panels: 12, capacity: '4kW', saving: '₹3,200/month' },
  { title: 'Small Office', location: 'Wardha, MH', panels: 20, capacity: '7kW', saving: '₹5,800/month' },
  { title: 'Farm Setup', location: 'Amravati, MH', panels: 30, capacity: '10kW', saving: '₹8,500/month' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-8 md:px-16 bg-[#EEF0D8]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[.25em] uppercase text-[#c5f135] mb-3"
        >
          Past Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase text-[#1a2e1a] mb-16 leading-none"
        >
          Our <span className="text-[#c5f135]">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map(({ title, location, panels, capacity, saving }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white border border-[#ACC6A8]/20 p-8 rounded-xl cursor-default hover:border-[#c5f135]/40 transition-colors"
            >
              {/* Placeholder */}
              <div className="w-full h-36 bg-[#c5f135]/10 rounded-lg flex items-center justify-center mb-6 text-5xl">
                ☀️
              </div>

              {/* Title */}
              <h3 className="text-xl font-black uppercase text-[#1a2e1a] mb-1">
                {title}
              </h3>

              {/* Location */}
              <p className="text-xs text-[#F4B663] font-bold tracking-widest uppercase mb-4">
                📍 {location}
              </p>

              {/* Details */}
              <div className="flex flex-col gap-2 text-sm text-[#7a9b7e]">
                <span>🔲 {panels} Panels Installed</span>
                <span>⚡ {capacity} Capacity</span>
                <span>💰 Saving {saving}</span>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}