import { useState, useEffect } from 'react'

function Navbar({ isDark, toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header id="navbar" className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${isScrolled ? 'glass-panel shadow-sm border-slate-200/60 dark:border-dark-border' : 'border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        <a href="#home" className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1">
          <div className="w-10 h-10 rounded-xl bg-linear-to-tr from-brand-600 to-indigo-400 flex items-center justify-center text-white font-bold shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            DA
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight bg-linear-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">Dev Aditech</span>
            <span className="block text-xs font-mono text-slate-500 dark:text-dark-muted">Adisa Nureni O.</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link px-3 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 rounded-lg transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/60 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500">
            {isDark ? (
              <i className="fa-solid fa-sun text-amber-400"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          <a href="#contact" className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold shadow-lg shadow-brand-500/25 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-brand-500">
            <span>Let's Work Together</span>
            <i className="fa-solid fa-arrow-right text-xs"></i>
          </a>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open mobile menu" className="md:hidden w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/60 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-500">
            <i className="fa-solid fa-bars text-lg"></i>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-slate-200 dark:border-dark-border shadow-xl px-6 py-6 transition-all">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="mobile-link py-2.5 px-4 rounded-xl text-base font-medium hover:bg-slate-100 dark:hover:bg-dark-card transition-colors">
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-200 dark:border-dark-border">
              <a href="#contact" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-brand-600 text-white font-semibold shadow-lg">
                <span>Let's Work Together</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Navbar