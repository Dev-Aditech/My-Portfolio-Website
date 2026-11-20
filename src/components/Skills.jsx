import { useState } from 'react'

const skillsData = [
  { name: 'JavaScript', category: 'frontend', icon: 'fa-brands fa-js', color: 'text-amber-500' },
  { name: 'TypeScript', category: 'frontend', icon: 'fa-solid fa-code', color: 'text-blue-600' },
  { name: 'React.js', category: 'frontend', icon: 'fa-brands fa-react', color: 'text-sky-500' },
  { name: 'Next.js', category: 'frontend', icon: 'fa-solid fa-n', color: 'text-slate-900 dark:text-white' },
  { name: 'HTML5', category: 'frontend', icon: 'fa-brands fa-html5', color: 'text-orange-600' },
  { name: 'CSS3', category: 'frontend', icon: 'fa-brands fa-css3-alt', color: 'text-blue-500' },
  { name: 'Tailwind CSS', category: 'frontend', icon: 'fa-solid fa-wind', color: 'text-cyan-500' },
  { name: 'SCSS', category: 'frontend', icon: 'fa-brands fa-sass', color: 'text-pink-500' },
  { name: 'Bootstrap', category: 'frontend', icon: 'fa-brands fa-bootstrap', color: 'text-purple-600' },
  { name: 'Redux', category: 'frontend', icon: 'fa-solid fa-layer-group', color: 'text-violet-600' },
  { name: 'jQuery', category: 'frontend', icon: 'fa-solid fa-dollar-sign', color: 'text-sky-600' },
  { name: 'Node.js', category: 'backend', icon: 'fa-brands fa-node-js', color: 'text-emerald-600' },
  { name: 'Express.js', category: 'backend', icon: 'fa-solid fa-server', color: 'text-slate-700 dark:text-slate-300' },
  { name: 'Python', category: 'backend', icon: 'fa-brands fa-python', color: 'text-blue-600' },
  { name: 'PHP', category: 'backend', icon: 'fa-brands fa-php', color: 'text-indigo-600' },
  { name: 'Laravel', category: 'backend', icon: 'fa-brands fa-laravel', color: 'text-rose-600' },
  { name: 'MongoDB', category: 'database', icon: 'fa-solid fa-leaf', color: 'text-emerald-600' },
  { name: 'MySQL', category: 'database', icon: 'fa-solid fa-database', color: 'text-blue-700' },
  { name: 'Firebase', category: 'database', icon: 'fa-solid fa-fire', color: 'text-amber-500' },
  { name: 'Supabase', category: 'database', icon: 'fa-solid fa-bolt', color: 'text-emerald-500' },
]

const filters = [
  { key: 'all', label: `All Stack (${skillsData.length})` },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend', label: 'Backend' },
  { key: 'database', label: 'Database & BaaS' },
]

function Skills() {
  const [active, setActive] = useState('all')
  const visible = active === 'all' ? skillsData : skillsData.filter((s) => s.category === active)

  return (
    <section id="skills" className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">03 / Technical Arsenal</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Languages, Frameworks &amp; Databases</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 dark:text-dark-muted text-sm sm:text-base mt-4">
            A versatile full-stack toolkit enabling rapid prototyping, robust backend engineering, and modern user interfaces.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={
                active === f.key
                  ? 'px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold shadow-md transition-all'
                  : 'px-4 py-2 rounded-xl bg-slate-200 dark:bg-dark-card text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-800 transition-all'
              }
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {visible.map((skill) => (
            <div key={skill.name} className="bg-slate-50 dark:bg-dark-card rounded-xl border border-slate-200 dark:border-dark-border p-4 flex items-center gap-3 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg transition-all duration-300">
              <div className="w-9 h-9 rounded-lg bg-white dark:bg-dark-surface border border-slate-100 dark:border-dark-border flex items-center justify-center shrink-0">
                <i className={`${skill.icon} ${skill.color} text-base`}></i>
              </div>
              <div>
                <p className="font-semibold text-slate-900 dark:text-white text-sm leading-tight">{skill.name}</p>
                <p className="text-[11px] text-slate-400 dark:text-dark-muted capitalize mt-0.5">{skill.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills