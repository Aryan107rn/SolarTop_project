import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'How long does installation take?',
    a: 'First, we conduct a site survey to evaluate roof condition and load capacity. Based on that, we provide an exact installation timeline.'
  },
  {
    q: 'How much can I save on electricity bills?',
    a: 'On average, customers save 60–90% on monthly electricity bills depending on system size and usage.'
  },
  {
    q: 'Do you provide warranty?',
    a: 'Yes. Solar panels come with a performance warranty, and installation includes a workmanship warranty.'
  },
  {
    q: 'Is my roof suitable for solar?',
    a: 'We perform a free site survey to assess roof angle, shading, and structural strength before recommending a system.'
  },
  {
    q: 'What happens on cloudy days?',
    a: 'Panels still generate electricity on cloudy days at reduced efficiency. Battery storage can help maintain backup.'
  },
  {
    q: 'Do you help with government subsidies?',
    a: 'Yes. We assist with PM Surya Ghar Muft Bijli Yojana and other applicable subsidies to reduce upfront cost.'
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-28 px-8 md:px-16 bg-[#FEFCE8]">
      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[.25em] uppercase text-[#c5f135] mb-3"
        >
          Got Questions?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black uppercase text-[#1a2e1a] mb-16 leading-none"
        >
          Frequently <span className="text-[#c5f135]">Asked</span>
        </motion.h2>

        {/* FAQ List */}
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white border border-[#ACC6A8]/20 rounded-xl overflow-hidden hover:border-[#c5f135]/40 transition-colors"
            >

              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-bold text-[#1a2e1a] text-sm">
                  {q}
                </span>
                <span
                  className={`text-[#1a2e1a] text-xl font-black transition-transform duration-300 ${
                    open === i ? 'rotate-45' : ''
                  }`}
                >
                  +
                </span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-[#7a9b7e] leading-relaxed text-sm">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}