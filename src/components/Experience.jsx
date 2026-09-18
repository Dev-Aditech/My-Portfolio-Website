function Experience() {
  const timeline = [
    {
      dotColor: 'bg-brand-600',
      role: 'Frontend / Web Developer',
      period: '2023 — Present',
      periodColor: 'bg-brand-500/10 text-brand-600 dark:text-brand-400',
      org: 'Dev Aditech (Independent Practice & Freelance)',
      description: 'Designing and developing responsive web applications, educational platforms like Al-Fardyeen Academy, digital service portals (ADITECHDATA), and e-commerce projects. Integrating Firebase BaaS for secure authentication and database storage.',
    },
    {
      dotColor: 'bg-cyan-500',
      role: 'Backend & Full-Stack Development',
      period: '2024 — Present',
      periodColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400',
      org: 'Expanding into Full-Stack Engineering',
      description: 'Extending frontend expertise into backend development — building RESTful APIs and server-side logic with Node.js and Express, working with PHP for server-rendered applications, and using Next.js API routes to power full-stack React projects.',
    },
    {
      dotColor: 'bg-indigo-500',
      role: 'Web Development Projects & Client Solutions',
      period: '2024 — Present',
      periodColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400',
      org: 'Freelance & Collaborative Web Development',
      description: 'Delivering robust frontend solutions, website redesigns, and interactive dashboards for clients. Focus on clean code architecture, performance optimization, and rigorous testing across all devices.',
    },
    {
      dotColor: 'bg-emerald-500',
      role: 'Coding Journey Began & Core Mastery',
      period: '2023',
      periodColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      org: 'Intensive Learning & Skill Acquisition',
      description: 'Started coding in 2023, building foundational expertise in HTML5, CSS3, and JavaScript. Progressed rapidly into building real-world projects, mastering responsive design principles, and exploring backend integration.',
    },
  ]

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">05. Professional Journey</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Experience & Milestones</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative border-l-2 border-slate-200 dark:border-dark-border pl-6 sm:pl-8 space-y-12">
            {timeline.map((item) => (
              <div key={item.role} className="relative">
                <div className={`absolute -left-[35px] sm:-left-[41px] top-0 w-6 h-6 rounded-full ${item.dotColor} border-4 border-slate-50 dark:border-dark-bg`}></div>
                <div className="p-6 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.role}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${item.periodColor}`}>{item.period}</span>
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{item.org}</p>
                  <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience