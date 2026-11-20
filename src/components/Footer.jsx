import { useEffect, useRef, useState } from 'react'

function Footer() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setVisible(true); return }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const links = [
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Tech Stack', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
  ]

  const socialClass = 'w-10 h-10 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:text-white hover:-translate-y-1.5 hover:shadow-lg flex items-center justify-center transition-all duration-300'
  const delay = (ms) => ({ transitionDelay: visible ? `${ms}ms` : '0ms' })

  return (
    <footer ref={ref} className={`relative bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border pt-14 pb-10 overflow-hidden ${visible ? 'footer-visible' : ''}`}>
      <div className="footer-line absolute top-0 left-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-200/80 dark:border-dark-border">
          <div className="footer-reveal md:col-span-5 space-y-3" style={delay(0)}>
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-brand-600 text-white flex items-center justify-center font-mono font-bold text-sm group-hover:bg-brand-600 group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                DA
              </div>
              <span className="font-extrabold text-slate-900 dark:text-white text-lg tracking-tight">Adisa (Dev Aditech)</span>
            </a>
            <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed max-w-sm">
              Full Stack Web &amp; Mobile App Developer crafting high-performance digital products with React, Next.js, Node.js, Python, and Laravel.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Available for Remote Roles &amp; Projects</span>
            </div>
          </div>

          <div className="footer-reveal md:col-span-3 space-y-2.5" style={delay(150)}>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-dark-muted">
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link hover:text-brand-600 dark:hover:text-brand-400">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-reveal md:col-span-4 space-y-3" style={delay(300)}>
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">Connect Directly</h4>
            <p className="text-sm text-slate-600 dark:text-dark-muted">Ikire, Osun State, Nigeria</p>
            <div className="flex items-center gap-3 pt-1">
              <a href="https://www.linkedin.com/in/adisa-nureni-olaniyi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${socialClass} hover:bg-blue-600 hover:border-blue-600`}>
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://wa.me/2348137565810" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={`${socialClass} hover:bg-emerald-600 hover:border-emerald-600`}>
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="mailto:adisanureni2023@gmail.com" aria-label="Email" className={`${socialClass} hover:bg-slate-900 hover:border-slate-900`}>
                <i className="fa-regular fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-reveal pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-500 dark:text-dark-muted" style={delay(450)}>
          <p>&copy; {new Date().getFullYear()} <strong className="text-slate-800 dark:text-slate-200">Adisa (Dev Aditech) Nureni Olaniyi</strong>. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="footer-top-btn inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border text-slate-700 dark:text-slate-300 hover:border-brand-500 hover:text-brand-600 dark:hover:text-brand-400 hover:-translate-y-0.5 font-semibold text-xs transition-all duration-300"
          >
            <span>Back to Top</span>
            <i className="fa-solid fa-arrow-up"></i>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer