function Stats() {
  const stats = [
    { value: '3+', label: 'Years Learning & Building' },
    { value: '20+', label: 'Projects & Experiments' },
    { value: 'Multiple', label: 'Real-world Web Apps' },
    { value: '100%', label: 'Responsive Design Focus' },
  ]

  return (
    <section className="py-12 bg-white dark:bg-dark-surface border-y border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border">
              <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400 mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-slate-600 dark:text-dark-muted">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats