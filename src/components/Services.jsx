function Services() {
  const services = [
    {
      icon: 'fa-globe',
      iconColor: 'bg-brand-600/10 text-brand-600 dark:text-brand-400',
      title: 'Website Development',
      description: 'Responsive websites tailored for businesses, organizations, schools, and personal brands with clean aesthetics and fast loading speeds.',
      cta: 'Request Service',
    },
    {
      icon: 'fa-laptop-code',
      iconColor: 'bg-indigo-600/10 text-indigo-600 dark:text-indigo-400',
      title: 'Frontend Development',
      description: 'Modern user interfaces built using HTML5, CSS3, JavaScript, and modern frontend frameworks with meticulous attention to detail.',
      cta: 'Request Service',
    },
    {
      icon: 'fa-server',
      iconColor: 'bg-cyan-600/10 text-cyan-600 dark:text-cyan-400',
      title: 'Backend Development',
      description: 'Server-side development and API integration using Node.js, Express, Next.js API routes, and PHP — handling authentication, business logic, and data processing to power dynamic, full-stack applications.',
      cta: 'Request Service',
    },
    {
      icon: 'fa-diagram-project',
      iconColor: 'bg-emerald-600/10 text-emerald-600 dark:text-emerald-400',
      title: 'Web App Development',
      description: 'Interactive web applications equipped with user authentication, real-time dashboards, APIs, and Firebase backend services.',
      cta: 'Request Service',
    },
    {
      icon: 'fa-wand-magic-sparkles',
      iconColor: 'bg-amber-600/10 text-amber-600 dark:text-amber-400',
      title: 'Website Redesign',
      description: 'Transform outdated, slow, or non-responsive websites into modern, sleek, high-performing digital experiences.',
      cta: 'Request Service',
    },
    {
      icon: 'fa-graduation-cap',
      iconColor: 'bg-purple-600/10 text-purple-600 dark:text-purple-400',
      title: 'Web Development Training',
      description: 'One-on-one or small-group mentorship and training sessions for aspiring developers looking to master frontend engineering, JavaScript fundamentals, and real-world project building.',
      cta: 'Inquire About Training',
    },
  ]

  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">04. Professional Offerings</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Services I Offer</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border flex flex-col justify-between hover:shadow-xl transition-all group">
              <div className="space-y-4">
                <div className={`w-14 h-14 rounded-2xl ${service.iconColor} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">{service.description}</p>
              </div>
              <div className="pt-6">
                <a href="#contact" className="text-xs font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1.5 hover:underline">
                  <span>{service.cta}</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services