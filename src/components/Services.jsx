function Services() {
  const services = [
    { icon: 'fa-laptop-code', box: 'bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400', foot: 'text-brand-600 dark:text-brand-400', title: 'Full Stack Web Apps', description: 'Complete web applications built with React, Next.js, Node.js, Python, and Laravel—from database schema to responsive UI.', stack: 'React · Next.js · Node · Laravel' },
    { icon: 'fa-mobile-screen', box: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400', foot: 'text-emerald-600 dark:text-emerald-400', title: 'Mobile App Development', description: 'Cross-platform mobile experiences and progressive web apps (PWAs) designed for smooth touch interaction and offline resilience.', stack: 'React Native · PWA · Responsive UI' },
    { icon: 'fa-server', box: 'bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400', foot: 'text-indigo-600 dark:text-indigo-400', title: 'API & Database Design', description: 'Secure RESTful APIs, authentication systems, payment gateway integrations, and optimized MongoDB, MySQL, Firebase, or Supabase backends.', stack: 'REST APIs · MySQL · MongoDB · Supabase' },
    { icon: 'fa-gauge-high', box: 'bg-amber-50 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400', foot: 'text-amber-600 dark:text-amber-400', title: 'Frontend Modernization', description: 'Upgrading legacy websites into fast, SEO-friendly, accessible interfaces with Tailwind CSS, TypeScript, and modern animations.', stack: 'TypeScript · Tailwind CSS · Core Web Vitals' },
  ]

  return (
    <section id="services" className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">02 / Services &amp; Capabilities</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">How I Help Startups, Businesses &amp; Teams</h2>
          <p className="text-slate-600 dark:text-dark-muted text-sm sm:text-base mt-2">
            Tailored engineering services combining clean user experience design with reliable full-stack infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-slate-50 dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border p-6 flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-xl hover:border-brand-500/50 transition-all duration-300">
              <div>
                <div className={`w-11 h-11 rounded-xl ${service.box} flex items-center justify-center text-lg mb-4`}>
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-dark-muted mt-2 leading-relaxed">{service.description}</p>
              </div>
              <div className={`mt-4 pt-3 border-t border-slate-200 dark:border-dark-border text-[11px] font-mono font-semibold ${service.foot}`}>
                {service.stack}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services