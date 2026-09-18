import { useState } from 'react'

function WhyWorkWithMe() {
  const [isResumeOpen, setIsResumeOpen] = useState(false)

  const reasons = [
    { icon: 'fa-mobile-screen', title: 'Responsive-First', description: 'Designed meticulously for mobile devices, tablets, and large desktop screens.' },
    { icon: 'fa-code', title: 'Clean Code', description: 'Maintainable, modular, and semantic code built with modern best practices.' },
    { icon: 'fa-bolt', title: 'Performance', description: 'Optimized assets, minimal dependencies, and fast loading speeds.' },
    { icon: 'fa-comments', title: 'Communication', description: 'Clear, transparent, and professional communication throughout projects.' },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">07. Professional Commitment</span>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Why Work With Me?</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="p-5 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border space-y-2">
                  <div className="text-brand-600 font-bold flex items-center gap-2">
                    <i className={`fa-solid ${reason.icon}`}></i> {reason.title}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-dark-muted leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-xl space-y-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-brand-600/10 text-brand-600 dark:text-brand-400 flex items-center justify-center text-2xl mx-auto">
                <i className="fa-solid fa-file-pdf"></i>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Professional Resume</h3>
                <p className="text-sm text-slate-600 dark:text-dark-muted">
                  Review my complete professional background, experience timeline, and technical qualifications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <button onClick={() => setIsResumeOpen(true)} className="w-full sm:w-auto px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm shadow-lg transition-all">
                  <i className="fa-solid fa-eye mr-2"></i> View Resume
                </button>
                <a href="#contact" className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-sm hover:bg-slate-300 dark:hover:bg-slate-700 transition-all">
                  <i className="fa-solid fa-download mr-2"></i> Download CV
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {isResumeOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4" onClick={() => setIsResumeOpen(false)}>
          <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border rounded-3xl max-w-xl w-full p-8 shadow-2xl relative space-y-6 text-center" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setIsResumeOpen(false)} aria-label="Close resume modal" className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 dark:bg-dark-surface flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-colors">
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>
            <div className="w-16 h-16 rounded-2xl bg-brand-600/10 text-brand-600 flex items-center justify-center text-2xl mx-auto">
              <i className="fa-solid fa-file-pdf"></i>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Adisa Nureni Olaniyi — Resume</h3>
            <p className="text-sm text-slate-600 dark:text-dark-muted">
              Frontend & Backend Developer with 3+ years experience building responsive web applications, educational platforms, and full-stack integrations.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-dark-surface text-xs font-mono text-left space-y-2">
              <div><strong>Brand:</strong> Dev Aditech</div>
              <div><strong>Location:</strong> Nigeria</div>
              <div><strong>GitHub:</strong> Dev-Aditech</div>
              <div><strong>Portfolio:</strong> adisanureni.vercel.app</div>
            </div>
            <div className="flex justify-center gap-4 pt-2">
              <button onClick={() => setIsResumeOpen(false)} className="px-6 py-3 rounded-xl bg-brand-600 text-white font-semibold text-sm">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default WhyWorkWithMe