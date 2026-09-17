import { caseStudies } from '../data/projectsData'

function CaseStudyModal({ projectId, onClose }) {
  if (!projectId) return null

  const data = caseStudies[projectId]
  if (!data) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-white dark:bg-dark-card rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 space-y-6" onClick={(e) => e.stopPropagation()}>

        <div className="flex items-start justify-between">
          <span className="px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-mono font-semibold">{data.category}</span>
          <button onClick={onClose} aria-label="Close" className="text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors">
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{data.title}</h3>
        <p className="text-sm text-slate-600 dark:text-dark-muted leading-relaxed">{data.overview}</p>

        <div className="space-y-2 border-t border-slate-200 dark:border-dark-border pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Problem</h4>
          <p className="text-sm text-slate-600 dark:text-dark-muted">{data.problem}</p>
        </div>

        <div className="space-y-2 border-t border-slate-200 dark:border-dark-border pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">The Solution</h4>
          <p className="text-sm text-slate-600 dark:text-dark-muted">{data.solution}</p>
        </div>

        <div className="space-y-2 border-t border-slate-200 dark:border-dark-border pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Key Features</h4>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-dark-muted space-y-1">
            {data.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-2 border-t border-slate-200 dark:border-dark-border pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Technologies Used</h4>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {data.tech.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-dark-surface text-xs font-mono font-medium text-slate-700 dark:text-slate-300">{tech}</span>
            ))}
          </div>
        </div>

        <div className="space-y-2 border-t border-slate-200 dark:border-dark-border pt-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">Challenges & What I Learned</h4>
          <p className="text-sm text-slate-600 dark:text-dark-muted"><strong>Challenge:</strong> {data.challenges}</p>
          <p className="text-sm text-slate-600 dark:text-dark-muted"><strong>Learned:</strong> {data.learned}</p>
        </div>

      </div>
    </div>
  )
}

export default CaseStudyModal