import { useState } from 'react'
import { projects } from '../data/projectsData'
import CaseStudyModal from './CaseStudyModal'

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [openProjectId, setOpenProjectId] = useState(null)

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'firebase', label: 'Firebase / BaaS' },
    { key: 'ecommerce', label: 'E-Commerce & Apps' },
    { key: 'frontend', label: 'Frontend / UI' },
  ]

  const visibleProjects = activeFilter === 'all'
    ? projects
    : projects.filter((project) => project.category === activeFilter)

  const getScreenshotUrl = (liveUrl) => `https://image.thum.io/get/width/800/crop/500/noanimate/${liveUrl}`

  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">03. Portfolio Showcase</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={
                activeFilter === filter.key
                  ? 'px-4 py-2 rounded-xl bg-brand-600 text-white text-xs font-semibold transition-all shadow-md'
                  : 'px-4 py-2 rounded-xl bg-slate-200 dark:bg-dark-card text-slate-700 dark:text-slate-300 text-xs font-semibold hover:bg-slate-300 dark:hover:bg-slate-800 transition-all'
              }
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project) => (
            <div key={project.id} className="project-card rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="h-48 relative overflow-hidden">
                <div className={`absolute inset-0 bg-linear-to-tr ${project.gradient}`}></div>

                {project.liveUrl && (
                  <img
                    src={getScreenshotUrl(project.liveUrl)}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                )}

                <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] bg-size-[16px_16px] opacity-30"></div>
                <div className="absolute inset-0 bg-black/35"></div>
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="relative z-10 h-full flex flex-col justify-between p-6">
                  <div className="flex justify-between items-center">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-black/40 backdrop-blur-sm text-white border border-white/20">{project.badge}</span>
                    <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white"><i className={`fa-solid ${project.icon}`}></i></span>
                  </div>
                  <h3 className="text-xl font-bold text-white transition-colors">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">{project.description}</p>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface text-[11px] font-mono font-medium text-slate-700 dark:text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-slate-100 dark:border-dark-border flex items-center justify-between">
                    <button onClick={() => setOpenProjectId(project.id)} className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1.5">
                      <span>Case Study</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </button>
                    <div className="flex items-center gap-3">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors">
                        <i className="fa-brands fa-github text-base"></i>
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo" className="text-slate-500 hover:text-brand-600 transition-colors">
                          <i className="fa-solid fa-external-link text-base"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CaseStudyModal projectId={openProjectId} onClose={() => setOpenProjectId(null)} />
    </section>
  )
}

export default Projects