function Skills() {
  const skillGroups = [
    {
      icon: 'fa-code',
      iconBg: 'bg-brand-600/10 text-brand-600 dark:text-brand-400',
      title: 'Frontend Development',
      description: 'Building responsive, accessible, and high-performance user interfaces.',
      tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
      icon: 'fa-database',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      title: 'Backend & BaaS',
      description: 'Integrating cloud databases, user authentication, and secure hosting.',
      tags: ['Firebase', 'Firestore', 'Firebase Auth', 'Firebase Storage', 'Firebase Hosting'],
    },
    {
      icon: 'fa-toolbox',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      title: 'Tools & Workflow',
      description: 'Utilizing professional version control, deployment pipelines, and editors.',
      tags: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Netlify'],
    },
  ]

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">02. Technical Arsenal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Skills & Technologies</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.title} className="p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border hover:border-brand-500/50 transition-all group">
              <div className={`w-12 h-12 rounded-2xl ${group.iconBg} flex items-center justify-center text-xl font-bold mb-6 group-hover:scale-110 transition-transform`}>
                <i className={`fa-solid ${group.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{group.title}</h3>
              <p className="text-sm text-slate-600 dark:text-dark-muted mb-6">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-xl bg-white dark:bg-dark-surface border border-slate-200 dark:border-dark-border text-xs font-semibold text-slate-700 dark:text-slate-300">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills