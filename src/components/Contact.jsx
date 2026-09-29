import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [toast, setToast] = useState(null)
  const [isSending, setIsSending] = useState(false)
  const [errors, setErrors] = useState({})
  const [honeypot, setHoneypot] = useState('')
  const [lastSent, setLastSent] = useState(0)
  const MAX_MESSAGE = 1000

  const validate = (data) => {
    const next = {}
    if (data.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) next.email = 'Please enter a valid email address.'
    if (data.subject.trim().length < 3) next.subject = 'Please add a short subject.'
    if (data.message.trim().length < 10) next.message = 'Message should be at least 10 characters.'
    return next
  }

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 4000)
    return () => clearTimeout(timer)
  }, [toast])

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData((prev) => ({ ...prev, [id]: id === 'message' ? value.slice(0, MAX_MESSAGE) : value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (honeypot) return // bots fill hidden fields

    const found = validate(formData)
    if (Object.keys(found).length) {
      setErrors(found)
      setToast({ message: 'Please fix the highlighted fields.', type: 'error' })
      return
    }

    if (Date.now() - lastSent < 30000) {
      setToast({ message: 'Please wait a few seconds before sending another message.', type: 'error' })
      return
    }

    setIsSending(true)

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    }

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      .then(() => {
        setToast({ message: 'Thank you! Your message has been sent successfully.', type: 'success' })
        setFormData({ name: '', email: '', subject: '', message: '' })
        setErrors({})
        setLastSent(Date.now())
      })
      .catch((error) => {
        console.error('EmailJS error:', error)
        setToast({ message: 'Something went wrong sending your message. Please try again or email me directly.', type: 'error' })
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('adisanureni2023@gmail.com')
    setToast({ message: 'Email copied to clipboard!', type: 'success' })
  }

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">09. Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Let's Build Something Meaningful</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Contact Information</h3>
              <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                Available for employment opportunities, freelance projects, collaborations, and web development training. Feel free to reach out directly.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-600/10 text-brand-600 dark:text-brand-400 flex items-center justify-center text-lg">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400 dark:text-dark-muted">Email Me</span>
                    <button onClick={copyEmail} className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-brand-600 transition-colors flex items-center gap-2">
                      <span>adisanureni2023@gmail.com</span>
                      <i className="fa-regular fa-copy text-xs"></i>
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                    <i className="fa-brands fa-whatsapp"></i>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400 dark:text-dark-muted">WhatsApp</span>
                    <a href="https://wa.me/2348137565810" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition-colors">
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
                    <i className="fa-brands fa-github"></i>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-400 dark:text-dark-muted">GitHub</span>
                    <a href="https://github.com/Dev-Aditech" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors">
                      Dev-Aditech
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} noValidate className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-6">
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} className="hidden" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Adisa Nureni" aria-invalid={!!errors.name} className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border ${errors.name ? 'border-rose-500' : 'border-slate-200 dark:border-dark-border'} text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm`} />
                  {errors.name && <p className="text-xs text-rose-500">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" aria-invalid={!!errors.email} className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border ${errors.email ? 'border-rose-500' : 'border-slate-200 dark:border-dark-border'} text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm`} />
                  {errors.email && <p className="text-xs text-rose-500">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Subject</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry / Job Opportunity / Training" aria-invalid={!!errors.subject} className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border ${errors.subject ? 'border-rose-500' : 'border-slate-200 dark:border-dark-border'} text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm`} />
                  {errors.subject && <p className="text-xs text-rose-500">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message</label>
                <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or inquiry..." aria-invalid={!!errors.message} className={`w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border ${errors.message ? 'border-rose-500' : 'border-slate-200 dark:border-dark-border'} text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none`}></textarea>
                <div className="flex justify-between text-xs">
                  <span className="text-rose-500">{errors.message}</span>
                  <span className="text-slate-400 dark:text-dark-muted font-mono">{formData.message.length}/{MAX_MESSAGE}</span>
                </div>
              </div>

              <button type="submit" disabled={isSending} className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2">
                <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                <i className={`fa-solid ${isSending ? 'fa-spinner fa-spin' : 'fa-paper-plane'} text-xs`}></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold text-white flex items-center gap-2 max-w-sm ${toast.type === 'error' ? 'bg-rose-600' : 'bg-emerald-600'}`}>
          <i className={`fa-solid ${toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}`}></i>
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  )
}

export default Contact