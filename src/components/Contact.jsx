import { useState, useEffect } from 'react'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3000)
    return () => clearTimeout(timer)
  }, [toast])

  const handleChange = (event) => {
    const { id, value } = event.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setToast({ message: 'Please fill in all required fields.', type: 'error' })
      return
    }

    setToast({ message: 'Thank you! Your message has been sent successfully.', type: 'success' })
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@devaditech.com')
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
                      <span>contact@devaditech.com</span>
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
                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 transition-colors">
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
                    <a href="https://github.com/Nureni-2023" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 transition-colors">
                      Nureni-2023
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Name</label>
                  <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Adisa Nureni" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Your Email</label>
                  <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Subject</label>
                <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry / Job Opportunity / Training" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message</label>
                <textarea id="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell me about your project or inquiry..." className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm resize-none"></textarea>
              </div>

              <button type="submit" className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2">
                <span>Send Message</span>
                <i className="fa-solid fa-paper-plane text-xs"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold text-white flex items-center gap-2 ${toast.type === 'error' ? 'bg-rose-600' : 'bg-emerald-600'}`}>
          <i className={`fa-solid ${toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}`}></i>
          <span>{toast.message}</span>
        </div>
      )}
    </section>
  )
}

export default Contact