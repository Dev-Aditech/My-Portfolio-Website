function Process() {
  const steps = [
    { number: '01', icon: 'fa-compass-drafting', box: 'bg-brand-600', title: 'Discovery & Architecture', description: 'Clarifying business goals, user flows, database models, and choosing the ideal tech stack before writing code.' },
    { number: '02', icon: 'fa-pen-ruler', box: 'bg-slate-900 dark:bg-slate-700', title: 'UI/UX & Prototyping', description: 'Designing clean, mobile-first layouts and component hierarchies focused on speed, clarity, and accessibility.' },
    { number: '03', icon: 'fa-code-branch', box: 'bg-emerald-600', title: 'Full Stack Implementation', description: 'Writing modular, well-documented frontend and backend code with regular progress demos and Git version control.' },
    { number: '04', icon: 'fa-rocket', box: 'bg-indigo-600', title: 'Testing & Deployment', description: 'Rigorous cross-device QA, security checks, cloud deployment, and ongoing post-launch support.' },
  ]

  return (
    <section id="process" className="py-24 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">06 / How I Work</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">My 4-Step Engineering Workflow</h2>
          <p className="text-slate-600 dark:text-dark-muted text-sm sm:text-base mt-2">
            A transparent, milestone-driven development process that keeps your project on schedule and built to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative p-6 rounded-2xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-500/50 transition-all duration-300">
              <span className="text-3xl font-extrabold font-mono text-brand-600/20 dark:text-brand-400/20 absolute top-4 right-5">{step.number}</span>
              <div className={`w-10 h-10 rounded-xl ${step.box} text-white flex items-center justify-center text-sm mb-4 shadow-xs`}>
                <i className={`fa-solid ${step.icon}`}></i>
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white text-base">{step.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-dark-muted mt-2 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process