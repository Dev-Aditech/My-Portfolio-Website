function Process() {
  const steps = [
    { number: '01', title: 'Discover', description: 'Understand the core idea, project goals, target audience, and functional requirements before writing a single line of code.' },
    { number: '02', title: 'Plan', description: 'Define project structure, wireframes, component hierarchy, and technical architecture (including Firebase BaaS where applicable).' },
    { number: '03', title: 'Design', description: 'Create clean, modern, accessible, and fully responsive interfaces with thoughtful color systems and visual hierarchy.' },
    { number: '04', title: 'Develop', description: 'Write clean, maintainable code using modern JavaScript practices, semantic HTML5, and modular CSS architecture — with backend logic and APIs powered by Node.js, Express, Next.js API routes, or PHP where needed.' },
    { number: '05', title: 'Test', description: 'Rigorously test responsiveness across mobile, tablet, and desktop viewports, verifying performance, accessibility, and form validation.' },
    { number: '06', title: 'Deploy', description: 'Deploy production-ready code securely via platforms like Vercel, Netlify, or Firebase Hosting for fast global delivery.' },
  ]

  return (
    <section className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">06. Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">My Development Process</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border space-y-4">
              <div className="text-brand-600 dark:text-brand-400 font-mono text-xl font-bold">{step.number}</div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process