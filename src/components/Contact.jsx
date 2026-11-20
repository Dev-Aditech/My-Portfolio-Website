import { useState, useEffect } from 'react'

const WHATSAPP = '2348137565810'
const EMAIL = 'adisanureni2023@gmail.com'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'Full Stack Web Development', message: '' })
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(t)
  }, [toast])

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.id]: e.target.value }))

  const handleEmail = (e) => {
    e.preventDefault()
    const name = form.name.trim()
    const subject = encodeURIComponent(`${form.subject} - from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`)
    setToast('Opening your email client to send message...')
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const handleWhatsApp = () => {
    const name = form.name.trim() || 'A Visitor'
    const message = form.message.trim() || 'Hello Dev Aditech, I would like to connect regarding a project.'
    const text = `Hello Adisa (Dev Aditech), my name is ${name}.\n*Inquiry:* ${form.subject}\n*Message:* ${message}`
    setToast('Redirecting to WhatsApp...')
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const inputClass = 'w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-sm text-slate-900 dark:text-slate-100 focus:bg-white dark:focus:bg-dark-card focus:outline-none focus:ring-2 focus:ring-brand-600/20 focus:border-brand-600 transition-all'
  const labelClass = 'block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5'

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-dark-card rounded-3xl border border-slate-200 dark:border-dark-border shadow-lg shadow-slate-200/40 dark:shadow-black/30 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">

            <div className="lg:col-span-5 bg-slate-900 text-white p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-brand-500/20 border border-brand-400/30 text-indigo-200 text-xs font-mono font-semibold mb-4">
                  11 / Get In Touch
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Ready to build your next web or mobile project?</h2>
                <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                  I am open to full-time roles, frontend/full-stack contracts, and freelance software development opportunities. Reach out directly via email, WhatsApp, or LinkedIn.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-brand-600/30 transition-colors flex items-center justify-center text-indigo-300 shrink-0">
                      <i className="fa-regular fa-envelope"></i>
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-400">Email Address</p>
                      <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-white hover:text-indigo-300 truncate block transition-colors">{EMAIL}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5 group">
                    <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-emerald-600/30 transition-colors flex items-center justify-center text-emerald-400 shrink-0">
                      <i className="fa-brands fa-whatsapp"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Phone &amp; WhatsApp</p>
                      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-emerald-300 transition-colors">+234 813 756 5810</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-indigo-300 shrink-0">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Location</p>
                      <p className="text-sm font-semibold text-white">Ikire, Osun State, Nigeria (Remote Ready)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                <a href="https://www.linkedin.com/in/adisa-nureni-olaniyi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 hover:-translate-y-0.5 text-white text-xs font-semibold transition-all">
                  <i className="fa-brands fa-linkedin"></i>
                  <span>Connect on LinkedIn</span>
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 hover:-translate-y-0.5 text-white text-xs font-semibold transition-all">
                  <i className="fa-brands fa-whatsapp"></i>
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Send a Direct Message</h3>
              <p className="text-sm text-slate-500 dark:text-dark-muted mt-1">Fill out the details below and send instantly via Email or WhatsApp.</p>

              <form onSubmit={handleEmail} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className={labelClass}>Your Name *</label>
                    <input type="text" id="name" required value={form.name} onChange={handleChange} placeholder="e.g. Sarah Johnson" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>Your Email *</label>
                    <input type="email" id="email" required value={form.email} onChange={handleChange} placeholder="you@company.com" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className={labelClass}>Inquiry Type</label>
                  <select id="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                    <option>Full Stack Web Development</option>
                    <option>Frontend / React / Next.js Role</option>
                    <option>Mobile App Development</option>
                    <option>Freelance Project Collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Project Details or Message *</label>
                  <textarea id="message" rows="4" required value={form.message} onChange={handleChange} placeholder="Tell me about your project timeline, requirements, or role..." className={inputClass}></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button type="submit" className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fa-regular fa-paper-plane"></i>
                    <span>Send via Email</span>
                  </button>
                  <button type="button" onClick={handleWhatsApp} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 hover:-translate-y-0.5 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300">
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold text-white bg-slate-900 border border-slate-700 flex items-center gap-2.5 max-w-sm" style={{ animation: 'fadeSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span>{toast}</span>
        </div>
      )}
    </section>
  )
}

export default Contact