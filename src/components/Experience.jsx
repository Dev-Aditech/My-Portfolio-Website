function Experience() {
  // Auto-updating duration for the current Aditechdata role (inclusive of the current month)
  const duration = (() => {
    const now = new Date()
    const months = (now.getFullYear() - 2025) * 12 + (now.getMonth() - 3) + 1
    const y = Math.floor(months / 12)
    const m = months % 12
    return [y ? `${y} yr${y > 1 ? 's' : ''}` : '', m ? `${m} mos` : ''].filter(Boolean).join(' ')
  })()

  const timeline = [
    {
      dot: 'bg-brand-600 ring-brand-100 dark:ring-brand-500/20 animate-pulse',
      role: 'Frontend Developer',
      present: true,
      org: 'Dual Core HQ · Internship',
      period: 'Aug 2026 – Present',
      place: 'Nigeria · Remote',
      description: 'Collaborating with the engineering team to build responsive, component-driven web interfaces, optimizing frontend performance, and implementing modern React and Next.js workflows.',
      tags: ['Next.js', 'JavaScript', 'Frontend Architecture'],
    },
    {
      dot: 'bg-emerald-600 ring-emerald-100 dark:ring-emerald-500/20',
      role: 'Web Developer',
      present: true,
      org: 'Aditechdata.com.ng · Full-time',
      period: `Apr 2025 – Present · ${duration}`,
      place: 'Nigeria · Remote',
      description: 'Serving as Full Stack Web Developer, architecting and maintaining automated digital services, user dashboards, API integrations, and secure database operations for seamless customer transactions.',
      tags: ['Python', 'React.js', 'Full Stack Development', 'API Integration'],
    },
    {
      dot: 'bg-slate-400 ring-slate-100 dark:ring-slate-500/20',
      role: 'Web Developer',
      present: false,
      org: 'Voya App',
      period: 'Full Stack & Web Engineering',
      place: '',
      description: 'Contributed to full-stack web features, interactive React.js user views, and Python backend services across a multi-technology product stack.',
      tags: ['Python', 'React.js', 'Modern Web Stack'],
    },
  ]

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">05 / Career Timeline</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Work Experience</h2>
          <p className="text-slate-600 dark:text-dark-muted text-sm sm:text-base mt-2">
            Proven track record delivering production web solutions across remote engineering teams.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 dark:border-dark-border ml-3 sm:ml-4 space-y-10">
          {timeline.map((item) => (
            <div key={item.role + item.org} className="relative pl-7 sm:pl-10">
              <span className={`absolute -left-2.25 top-1.5 w-4 h-4 rounded-full ring-4 ${item.dot}`}></span>
              <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border p-6 shadow-xs hover:-translate-y-1 hover:shadow-xl hover:border-brand-500/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                      {item.present && (
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20">Present</span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-brand-600 dark:text-brand-400 mt-0.5">{item.org}</p>
                  </div>
                  <div className="text-xs font-mono text-slate-500 dark:text-dark-muted sm:text-right">
                    <p className="font-semibold text-slate-700 dark:text-slate-300">{item.period}</p>
                    {item.place && <p>{item.place}</p>}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface text-slate-700 dark:text-slate-300 text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience