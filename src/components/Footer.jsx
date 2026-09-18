function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
  ]

  const serviceLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
    { name: 'GitHub Profile', href: 'https://github.com/Nureni-2023', external: true },
  ]

  return (
    <footer className="py-12 bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-slate-800">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-600 flex items-center justify-center text-white font-bold">
                DA
              </div>
              <span className="text-white font-extrabold text-lg">Dev Aditech</span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              Professional portfolio of Adisa Nureni Olaniyi. Frontend and backend developer specializing in responsive websites, full-stack web applications, and modern user experiences.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}><a href={link.href} className="hover:text-white transition-colors">{link.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm">Services & Contact</h4>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{link.name}</a>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2026 Adisa Nureni Olaniyi. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dev Aditech</span>
            <span>•</span>
            <span>Frontend & Backend Developer</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer