import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Legal() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section id="legal" className="py-28 px-8 md:px-16 bg-[#EEF0D8]">
      <div className="max-w-5xl mx-auto">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[.25em] uppercase text-[#c5f135] mb-3"
        >
          Legal & Technical
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase text-[#1a2e1a] mb-16 leading-none"
        >
          Trust & <span className="text-[#c5f135]">Compliance</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Privacy Policy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-[#ACC6A8]/20 rounded-xl p-8 hover:border-[#c5f135]/40 transition-colors"
          >
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="font-black uppercase text-[#1a2e1a] text-lg mb-3">Privacy Policy</h3>
            <p className="text-[#7a9b7e] text-sm leading-relaxed mb-6">
              We collect only the information needed to provide our services — your name, contact details and site address. We never sell or share your data with third parties.
            </p>
            <p className="text-[#7a9b7e] text-sm leading-relaxed">
              All data is stored securely and used solely for project communication and follow-ups.
            </p>
          </motion.div>

          {/* Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white border border-[#ACC6A8]/20 rounded-xl p-8 hover:border-[#c5f135]/40 transition-colors"
          >
            <div className="text-3xl mb-4">📄</div>
            <h3 className="font-black uppercase text-[#1a2e1a] text-lg mb-3">Terms of Service</h3>
            <p className="text-[#7a9b7e] text-sm leading-relaxed mb-6">
              All installations are carried out after a signed agreement detailing scope, cost and timeline. Payments are milestone-based — no full upfront payment required.
            </p>
            <p className="text-[#7a9b7e] text-sm leading-relaxed">
              Cancellations before installation begins are fully refunded. Post-installation disputes are resolved within 7 working days.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white border border-[#ACC6A8]/20 rounded-xl p-8 hover:border-[#c5f135]/40 transition-colors"
          >
            <div className="text-3xl mb-4">🏅</div>
            <h3 className="font-black uppercase text-[#1a2e1a] text-lg mb-3">Certifications</h3>

            <div className="flex flex-col gap-3 mb-6">
              {[
                { label: 'MNRE Approved', desc: 'Ministry of New & Renewable Energy recognised installer' },
                { label: 'PM Surya Ghar', desc: 'Registered under PM Surya Ghar Muft Bijli Yojana scheme' },
                { label: 'ISO Panels', desc: 'Only ISO certified solar panels used in all installations' },
              ].map(({ label, desc }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="text-[#c5f135] font-black text-lg leading-none">✓</span>
                  <div>
                    <p className="text-[#1a2e1a] text-sm font-bold">{label}</p>
                    <p className="text-[#7a9b7e] text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="w-full bg-[#c5f135]/20 border border-[#c5f135]/40 text-[#1a2e1a] text-xs font-bold tracking-widest uppercase py-3 rounded-lg hover:bg-[#c5f135]/40 transition-colors"
            >
              View Certificate →
            </button>
          </motion.div>

        </div>
      </div>

      {/* Certificate Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white border border-[#ACC6A8]/20 rounded-2xl p-8 max-w-lg w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#7a9b7e] hover:text-[#1a2e1a] text-2xl font-black"
            >
              ✕
            </button>

            <h3 className="font-black uppercase text-[#1a2e1a] text-lg mb-6">
              Government Certificate
            </h3>

            <div className="w-full h-72 bg-[#c5f135]/10 border-2 border-dashed border-[#c5f135]/30 rounded-xl flex flex-col items-center justify-center gap-3">
              <span className="text-5xl">📋</span>
              <p className="text-[#7a9b7e] text-sm">Certificate will be displayed here</p>
              <p className="text-[#7a9b7e]/70 text-xs">Replace with actual PDF/image in src/assets/</p>
            </div>

            <p className="text-[#7a9b7e]/70 text-xs text-center mt-4">
              Issued by Ministry of New & Renewable Energy, Govt. of India
            </p>
          </div>
        </div>
      )}
    </section>
  )
}