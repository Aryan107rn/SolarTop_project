import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <section id="contact" className="py-28 px-8 md:px-16 bg-[#FEFCE8]">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left */}
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <p className="text-xs font-bold tracking-[.25em] uppercase text-[#F4B663] mb-3">Get In Touch</p>
          <h2 className="text-5xl font-black uppercase text-[#1a2e1a] leading-none mb-6">
            Let's Go <span className="text-[#ACC6A8]">Solar</span>
          </h2>
          <p className="text-[#7a9b7e] leading-relaxed mb-10">
            Get a free site survey and quote. We'll visit your home or business and recommend the best system for your needs.
          </p>

          <div className="flex flex-col gap-5">
            {[
              { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
              { icon: '💬', label: 'WhatsApp', value: '+91 98765 43210' },
              { icon: '📧', label: 'Email', value: 'hello@solartop.in' },
              { icon: '📍', label: 'Location', value: 'Nagpur, Maharashtra' },
            ].map(({ icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#EEF0D8] rounded-full flex items-center justify-center text-xl shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-[#7a9b7e] tracking-widest uppercase">{label}</p>
                  <p className="font-bold text-[#1a2e1a]">{value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 bg-[#25D366] text-white font-bold text-sm tracking-widest uppercase px-8 py-3 rounded-full hover:opacity-80 transition-opacity">
            <span>💬</span> Chat on WhatsApp
          </a>
        </motion.div>

        {/* Right - Form */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
          className="bg-white border border-[#ACC6A8]/20 rounded-2xl p-8">

          <h3 className="font-black uppercase text-[#1a2e1a] text-xl mb-6">Request Free Quote</h3>

          <div className="flex flex-col gap-4">
            {[
              { name: 'name', label: 'Your Name', type: 'text', placeholder: 'Rajesh Sharma' },
              { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 98765 43210' },
              { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@email.com' },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="text-xs font-bold tracking-widest uppercase text-[#7a9b7e] mb-2 block">{label}</label>
                <input
                  type={type} name={name} value={form[name]}
                  onChange={handle} placeholder={placeholder}
                  className="w-full bg-[#FEFCE8] border border-[#ACC6A8]/30 rounded-lg px-4 py-3 text-[#1a2e1a] text-sm outline-none focus:border-[#c5f135] transition-colors placeholder:text-[#7a9b7e]/50"
                />
              </div>
            ))}

            <div>
              <label className="text-xs font-bold tracking-widest uppercase text-[#7a9b7e] mb-2 block">Message</label>
              <textarea
                name="message" value={form.message} onChange={handle}
                placeholder="Tell us about your property and energy needs..."
                rows={4}
                className="w-full bg-[#FEFCE8] border border-[#ACC6A8]/30 rounded-lg px-4 py-3 text-[#1a2e1a] text-sm outline-none focus:border-[#c5f135] transition-colors placeholder:text-[#7a9b7e]/50 resize-none"
              />
            </div>

            <button
              onClick={() => alert('Thanks! We will contact you soon.')}
              className="w-full bg-[#1a2e1a] text-white font-bold text-sm tracking-widest uppercase py-4 rounded-full hover:bg-[#c5f135] hover:text-[#1a2e1a] transition-colors mt-2">
              Send Request →
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  )
}