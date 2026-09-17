function About() {
  const infoRows = [
    { label: 'Location:', value: 'Nigeria' },
    { label: 'Experience:', value: '3+ Years (Since 2023)' },
    { label: 'Core Expertise:', value: 'Frontend & BaaS' },
    { label: 'Specialty:', value: 'Responsive Web Apps' },
  ]

  const badges = ['Responsive-First', 'Clean Architecture', 'Firebase Integration']

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">01. About Me</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Crafting Web Solutions with Purpose</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-600 to-indigo-400 rounded-3xl opacity-20 blur-xl"></div>
              <div className="relative rounded-3xl bg-white dark:bg-dark-card p-8 border border-slate-200 dark:border-dark-border shadow-xl space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
                    DA
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Adisa Nureni Olaniyi</h3>
                    <p className="text-xs font-mono text-brand-600 dark:text-brand-400">Dev Aditech Brand</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-slate-600 dark:text-dark-muted border-t border-slate-200 dark:border-dark-border pt-4">
                  {infoRows.map((row) => (
                    <div key={row.label} className="flex justify-between">
                      <span className="font-semibold text-slate-800 dark:text-slate-200">{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-2">
                  <a href="#contact" className="w-full py-3 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-brand-600 dark:hover:bg-brand-600 transition-colors">
                    <span>Get in Touch</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 text-slate-600 dark:text-dark-muted text-base leading-relaxed">
            <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
              Hello! I am Adisa Nureni Olaniyi, the developer behind <span className="text-brand-600 dark:text-brand-400 font-semibold">Dev Aditech</span>. Since I began my coding journey in 2023, I have been dedicated to mastering the craft of modern web development.
            </p>
            <p>
              I build real-world websites and web applications with a strong emphasis on clean code, responsive layouts, performance optimization, and robust accessibility. Whether it's crafting educational platforms like Al-Fardyeen Academy, data services like ADITECHDATA, or e-commerce and banking apps, I approach every project with meticulous attention to detail.
            </p>
            <p>
              My technical toolkit spans modern HTML5, CSS3, JavaScript, and React, coupled with backend-as-a-service (BaaS) integration via Firebase for authentication, database management, and hosting. I believe in continuous learning, structured problem-solving, and building digital products that genuinely solve user problems.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-white dark:bg-dark-card px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <i className="fa-solid fa-check text-brand-600"></i> {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About