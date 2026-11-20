function Learning() {
  const courses = [
    {
      icon: 'fa-free-code-camp',
      brand: true,
      iconBg: 'bg-slate-900 text-white',
      title: 'freeCodeCamp',
      subtitle: 'Full Stack & Algorithms Curriculum',
      description: 'Interactive coding challenges and certification projects covering Responsive Web Design, JavaScript Algorithms & Data Structures, Front End Development Libraries, and Backend APIs.',
      footerLeft: 'Verified Track',
      footerRight: 'Active Learner',
    },
    {
      icon: 'fa-code',
      iconBg: 'bg-brand-600 text-white',
      title: 'Sololearn',
      subtitle: 'Multi-Language Programming Mastery',
      description: 'Foundational and intermediate certifications across Python, JavaScript, TypeScript, PHP, SQL, HTML5, and CSS3 through daily problem-solving and peer code reviews.',
      footerLeft: 'Core Languages',
      footerRight: 'Certified',
    },
    {
      icon: 'fa-graduation-cap',
      iconBg: 'bg-purple-600 text-white',
      title: 'Udemy & Specialized Courses',
      subtitle: 'Production Web & Mobile Engineering',
      description: 'Project-based bootcamps in React.js, Next.js, Node.js/Express, Laravel, MongoDB, Firebase, and Supabase — translating theory directly into deployed applications.',
      footerLeft: 'Project Bootcamps',
      footerRight: 'Continuous Growth',
    },
  ]

  return (
    <section id="learning" className="py-24 bg-slate-50 dark:bg-dark-bg border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">07 / Education &amp; Certifications</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Continuous Learning &amp; Developer Training</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.title} className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className={`w-12 h-12 rounded-xl ${course.iconBg} flex items-center justify-center text-xl mb-5`}>
                  <i className={`${course.brand ? 'fa-brands' : 'fa-solid'} ${course.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{course.title}</h3>
                <p className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold mt-1">{course.subtitle}</p>
                <p className="text-sm text-slate-600 dark:text-dark-muted mt-3 leading-relaxed">{course.description}</p>
              </div>
              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-dark-border flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span>{course.footerLeft}</span>
                <span className="text-emerald-600 dark:text-emerald-400"><i className="fa-solid fa-circle-check mr-1"></i>{course.footerRight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Learning