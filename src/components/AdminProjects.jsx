import { useState, useEffect } from 'react'
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider, ADMIN_EMAIL } from '../firebase'
import {
  CATEGORY_OPTIONS,
  COLOR_OPTIONS,
  ICON_OPTIONS,
  fetchCustomProjects,
  addCustomProject,
  deleteCustomProject,
  makeUniqueId,
} from '../data/customProjects'

const emptyForm = {
  title: '',
  badge: '',
  category: 'frontend',
  color: 'indigo',
  icon: 'fa-code',
  description: '',
  tags: '',
  liveUrl: '',
  githubUrl: '',
  overview: '',
  problem: '',
  solution: '',
  features: '',
  challenges: '',
  learned: '',
}

const inputClass = (hasError) =>
  `w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-dark-surface border ${hasError ? 'border-rose-500' : 'border-slate-200 dark:border-dark-border'} text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500 text-sm`

const labelClass = 'block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider'

const splitList = (text, separator) => text.split(separator).map((item) => item.trim()).filter(Boolean)

const isValidUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}

function Field({ id, label, error, hint, children }) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className={labelClass}>{label}</label>
      {children}
      {hint && !error && <p className="text-xs text-slate-400 dark:text-dark-muted">{hint}</p>}
      {error && <p className="text-xs text-rose-500">{error}</p>}
    </div>
  )
}

function ProjectManager({ isDark, toggleTheme, onSignOut }) {
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [items, setItems] = useState([])
  const [loadingList, setLoadingList] = useState(true)
  const [isSaving, setIsSaving] = useState(false)
  const saved = items.map((item) => item.project)
  const [toast, setToast] = useState(null)

  useEffect(() => {
    let cancelled = false
    fetchCustomProjects()
      .then((list) => { if (!cancelled) setItems(list) })
      .catch(() => { if (!cancelled) setToast({ message: 'Could not load saved projects.', type: 'error' }) })
      .finally(() => { if (!cancelled) setLoadingList(false) })
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 3500)
    return () => clearTimeout(timer)
  }, [toast])

  const handleChange = (event) => {
    const { id, value } = event.target
    setForm((prev) => ({ ...prev, [id]: value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (form.title.trim().length < 2) next.title = 'Enter a project title.'
    if (!form.badge.trim()) next.badge = 'Enter a short label, e.g. "E-Commerce Platform".'
    if (form.description.trim().length < 20) next.description = 'Description should be at least 20 characters.'
    if (splitList(form.tags, ',').length === 0) next.tags = 'Add at least one technology.'
    if (form.liveUrl.trim() && !isValidUrl(form.liveUrl.trim())) next.liveUrl = 'Enter a valid link starting with https://'
    if (!form.githubUrl.trim() || !isValidUrl(form.githubUrl.trim())) next.githubUrl = 'Enter a valid GitHub link starting with https://'
    return next
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const found = validate()
    if (Object.keys(found).length) {
      setErrors(found)
      setToast({ message: 'Please fix the highlighted fields.', type: 'error' })
      return
    }

    const color = COLOR_OPTIONS.find((c) => c.key === form.color) || COLOR_OPTIONS[0]
    const tags = splitList(form.tags, ',')
    const project = {
      id: makeUniqueId(form.title, saved.map((p) => p.id)),
      category: form.category,
      badge: form.badge.trim(),
      icon: form.icon,
      gradient: color.gradient,
      accentText: color.accentText,
      badgeColor: color.badgeColor,
      title: form.title.trim(),
      description: form.description.trim(),
      tags,
      liveUrl: form.liveUrl.trim(),
      githubUrl: form.githubUrl.trim(),
    }

    // A case study is only created when the person fills in the problem and solution.
    const hasCaseStudy = form.problem.trim() && form.solution.trim()
    const caseStudy = hasCaseStudy
      ? {
          title: project.title,
          category: project.badge,
          overview: form.overview.trim() || project.description,
          problem: form.problem.trim(),
          solution: form.solution.trim(),
          features: splitList(form.features, '\n'),
          tech: tags,
          challenges: form.challenges.trim() || 'Not specified.',
          learned: form.learned.trim() || 'Not specified.',
        }
      : null

    setIsSaving(true)
    try {
      await addCustomProject(project, caseStudy)
      setItems((prev) => [...prev, { project, caseStudy }])
      setForm(emptyForm)
      setErrors({})
      setToast({ message: `"${project.title}" added to your portfolio.`, type: 'success' })
    } catch (error) {
      console.error('Save failed:', error)
      setToast({ message: 'Could not save. Check your Firestore rules and connection.', type: 'error' })
    } finally {
      setIsSaving(false)
    }
  }

  const handleDelete = async (project) => {
    if (!window.confirm(`Delete "${project.title}"?`)) return
    try {
      await deleteCustomProject(project.id)
      setItems((prev) => prev.filter((item) => item.project.id !== project.id))
      setToast({ message: 'Project deleted.', type: 'success' })
    } catch (error) {
      console.error('Delete failed:', error)
      setToast({ message: 'Could not delete. Check your Firestore rules and connection.', type: 'error' })
    }
  }

  const goHome = () => {
    window.location.hash = ''
    window.scrollTo({ top: 0 })
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg">
      <header className="border-b border-slate-200 dark:border-dark-border bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button onClick={goHome} className="text-sm font-semibold text-slate-700 dark:text-slate-200 hover:text-brand-600 dark:hover:text-brand-400 flex items-center gap-2 transition-colors">
            <i className="fa-solid fa-arrow-left text-xs"></i>
            <span>Back to portfolio</span>
          </button>
          <div className="flex items-center gap-3">
            <button onClick={onSignOut} className="text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors">Sign out</button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/60 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300">
              {isDark ? <i className="fa-solid fa-sun text-amber-400"></i> : <i className="fa-solid fa-moon"></i>}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        <div>
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">Project Manager</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Add a New Project</h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-dark-muted max-w-2xl leading-relaxed">
            Projects you add here are saved to your Firebase database and appear in the Featured Projects section for every visitor.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-6">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Project Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field id="title" label="Title *" error={errors.title}>
              <input id="title" type="text" value={form.title} onChange={handleChange} placeholder="My Awesome App" className={inputClass(errors.title)} />
            </Field>
            <Field id="badge" label="Badge label *" error={errors.badge}>
              <input id="badge" type="text" value={form.badge} onChange={handleChange} placeholder="E-Commerce Platform" className={inputClass(errors.badge)} />
            </Field>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Field id="category" label="Filter category">
              <select id="category" value={form.category} onChange={handleChange} className={inputClass(false)}>
                {CATEGORY_OPTIONS.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
              </select>
            </Field>
            <Field id="color" label="Card color">
              <select id="color" value={form.color} onChange={handleChange} className={inputClass(false)}>
                {COLOR_OPTIONS.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
              </select>
            </Field>
            <Field id="icon" label="Icon">
              <select id="icon" value={form.icon} onChange={handleChange} className={inputClass(false)}>
                {ICON_OPTIONS.map((o) => <option key={o.key} value={o.key}>{o.label}</option>)}
              </select>
            </Field>
          </div>

          <Field id="description" label="Short description *" error={errors.description}>
            <textarea id="description" rows="3" value={form.description} onChange={handleChange} placeholder="One or two sentences shown on the project card." className={`${inputClass(errors.description)} resize-none`}></textarea>
          </Field>

          <Field id="tags" label="Technologies *" error={errors.tags} hint="Separate with commas, e.g. React, Tailwind CSS, Firebase">
            <input id="tags" type="text" value={form.tags} onChange={handleChange} placeholder="React, Tailwind CSS, Firebase" className={inputClass(errors.tags)} />
          </Field>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Field id="liveUrl" label="Live demo link" error={errors.liveUrl} hint="Optional. A preview screenshot is generated from this link.">
              <input id="liveUrl" type="url" value={form.liveUrl} onChange={handleChange} placeholder="https://my-app.vercel.app/" className={inputClass(errors.liveUrl)} />
            </Field>
            <Field id="githubUrl" label="GitHub link *" error={errors.githubUrl}>
              <input id="githubUrl" type="url" value={form.githubUrl} onChange={handleChange} placeholder="https://github.com/Dev-Aditech/my-app" className={inputClass(errors.githubUrl)} />
            </Field>
          </div>

          <div className="pt-4 border-t border-slate-200 dark:border-dark-border space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Case Study <span className="text-xs font-normal text-slate-400">(optional)</span></h3>
              <p className="text-xs text-slate-500 dark:text-dark-muted mt-1">Fill in at least the problem and solution to show a "Case Study" button on the card.</p>
            </div>
            <Field id="overview" label="Overview">
              <textarea id="overview" rows="2" value={form.overview} onChange={handleChange} placeholder="Leave blank to reuse the short description." className={`${inputClass(false)} resize-none`}></textarea>
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field id="problem" label="The problem">
                <textarea id="problem" rows="3" value={form.problem} onChange={handleChange} className={`${inputClass(false)} resize-none`}></textarea>
              </Field>
              <Field id="solution" label="The solution">
                <textarea id="solution" rows="3" value={form.solution} onChange={handleChange} className={`${inputClass(false)} resize-none`}></textarea>
              </Field>
            </div>
            <Field id="features" label="Key features" hint="One feature per line.">
              <textarea id="features" rows="4" value={form.features} onChange={handleChange} className={`${inputClass(false)} resize-none`}></textarea>
            </Field>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Field id="challenges" label="Challenges">
                <textarea id="challenges" rows="3" value={form.challenges} onChange={handleChange} className={`${inputClass(false)} resize-none`}></textarea>
              </Field>
              <Field id="learned" label="What I learned">
                <textarea id="learned" rows="3" value={form.learned} onChange={handleChange} className={`${inputClass(false)} resize-none`}></textarea>
              </Field>
            </div>
          </div>

          <button type="submit" disabled={isSaving} className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm shadow-lg shadow-brand-500/25 transition-all flex items-center justify-center gap-2">
            <span>{isSaving ? 'Saving...' : 'Add Project'}</span>
            <i className={`fa-solid ${isSaving ? 'fa-spinner fa-spin' : 'fa-plus'} text-xs`}></i>
          </button>
        </form>

        <div className="p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm space-y-4">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Projects you've added ({saved.length})</h2>
          {loadingList ? (
            <p className="text-sm text-slate-500 dark:text-dark-muted">Loading...</p>
          ) : saved.length === 0 ? (
            <p className="text-sm text-slate-500 dark:text-dark-muted">Nothing added yet.</p>
          ) : (
            <ul className="divide-y divide-slate-200 dark:divide-dark-border">
              {saved.map((project) => (
                <li key={project.id} className="py-3 flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">{project.title}</p>
                    <p className="text-xs text-slate-500 dark:text-dark-muted truncate">{project.badge} · {project.tags.join(', ')}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button onClick={() => handleDelete(project)} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-rose-600/10 text-rose-600 hover:bg-rose-600/20">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>

      {toast && (
        <div className={`fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold text-white flex items-center gap-2 max-w-sm ${toast.type === 'error' ? 'bg-rose-600' : 'bg-emerald-600'}`}>
          <i className={`fa-solid ${toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'}`}></i>
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  )
}

function AuthShell({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-dark-card border border-slate-200 dark:border-dark-border shadow-sm text-center space-y-5">
        {children}
      </div>
    </div>
  )
}

function AdminProjects({ isDark, toggleTheme }) {
  const [user, setUser] = useState(null)
  const [authReady, setAuthReady] = useState(false)
  const [authError, setAuthError] = useState('')

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u)
      setAuthReady(true)
    })
  }, [])

  const handleSignIn = async () => {
    setAuthError('')
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (error) {
      if (error.code !== 'auth/popup-closed-by-user' && error.code !== 'auth/cancelled-popup-request') {
        console.error('Sign-in failed:', error)
        setAuthError('Sign-in failed. Make sure Google sign-in is enabled in Firebase Authentication.')
      }
    }
  }

  const handleSignOut = () => signOut(auth)

  const goHome = () => {
    window.location.hash = ''
    window.scrollTo({ top: 0 })
  }

  if (!authReady) {
    return <AuthShell><p className="text-sm text-slate-500 dark:text-dark-muted">Checking sign-in...</p></AuthShell>
  }

  if (!user) {
    return (
      <AuthShell>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Project Manager</h1>
        <p className="text-sm text-slate-600 dark:text-dark-muted">Sign in with the owner's Google account to add or remove projects.</p>
        <button onClick={handleSignIn} className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm flex items-center justify-center gap-2">
          <i className="fa-brands fa-google"></i><span>Sign in with Google</span>
        </button>
        {authError && <p className="text-xs text-rose-500">{authError}</p>}
        <button onClick={goHome} className="text-xs text-slate-500 dark:text-dark-muted hover:underline">Back to portfolio</button>
      </AuthShell>
    )
  }

  if (user.email !== ADMIN_EMAIL) {
    return (
      <AuthShell>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">Not authorized</h1>
        <p className="text-sm text-slate-600 dark:text-dark-muted">{user.email} does not have permission to manage projects.</p>
        <button onClick={handleSignOut} className="w-full py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-sm">Sign out</button>
      </AuthShell>
    )
  }

  return <ProjectManager isDark={isDark} toggleTheme={toggleTheme} onSignOut={handleSignOut} />
}

export default AdminProjects