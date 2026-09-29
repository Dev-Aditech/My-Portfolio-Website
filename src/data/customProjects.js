import { collection, doc, getDocs, setDoc, deleteDoc, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { projects as builtInProjects } from './projectsData'

const COLLECTION = 'portfolioProjects'

// Tailwind needs full class names in source, so the presets are spelled out here.
export const CATEGORY_OPTIONS = [
  { key: 'firebase', label: 'Firebase / BaaS' },
  { key: 'ecommerce', label: 'E-Commerce & Apps' },
  { key: 'frontend', label: 'Frontend / UI' },
]

export const COLOR_OPTIONS = [
  { key: 'indigo', label: 'Indigo', gradient: 'from-brand-900 to-indigo-800', accentText: 'group-hover:text-brand-300', badgeColor: 'bg-brand-500/20 text-brand-200 border-brand-400/30' },
  { key: 'emerald', label: 'Emerald', gradient: 'from-emerald-900 to-teal-800', accentText: 'group-hover:text-emerald-300', badgeColor: 'bg-emerald-500/20 text-emerald-200 border-emerald-400/30' },
  { key: 'rose', label: 'Rose', gradient: 'from-rose-900 to-pink-800', accentText: 'group-hover:text-rose-300', badgeColor: 'bg-rose-500/20 text-rose-200 border-rose-400/30' },
  { key: 'blue', label: 'Blue', gradient: 'from-blue-900 to-indigo-900', accentText: 'group-hover:text-blue-300', badgeColor: 'bg-blue-500/20 text-blue-200 border-blue-400/30' },
  { key: 'purple', label: 'Purple', gradient: 'from-purple-900 to-indigo-900', accentText: 'group-hover:text-purple-300', badgeColor: 'bg-purple-500/20 text-purple-200 border-purple-400/30' },
  { key: 'slate', label: 'Slate', gradient: 'from-slate-900 to-slate-700', accentText: 'group-hover:text-slate-300', badgeColor: 'bg-slate-500/20 text-slate-200 border-slate-400/30' },
]

export const ICON_OPTIONS = [
  { key: 'fa-code', label: 'Code' },
  { key: 'fa-cart-shopping', label: 'Cart' },
  { key: 'fa-graduation-cap', label: 'Education' },
  { key: 'fa-building-columns', label: 'Finance' },
  { key: 'fa-bolt', label: 'Bolt' },
  { key: 'fa-layer-group', label: 'Layers' },
  { key: 'fa-mobile-screen', label: 'Mobile' },
  { key: 'fa-database', label: 'Database' },
  { key: 'fa-globe', label: 'Web' },
]

// Returns [{ project, caseStudy }] for every project stored in Firestore, oldest first.
export async function fetchCustomProjects() {
  const snapshot = await getDocs(query(collection(db, COLLECTION), orderBy('createdAt', 'asc')))
  return snapshot.docs.map((d) => {
    const data = d.data()
    return { project: data.project, caseStudy: data.caseStudy || null }
  })
}

export async function addCustomProject(project, caseStudy) {
  await setDoc(doc(db, COLLECTION, project.id), {
    project,
    caseStudy: caseStudy || null,
    createdAt: serverTimestamp(),
  })
}

export async function deleteCustomProject(id) {
  await deleteDoc(doc(db, COLLECTION, id))
}

export function slugify(text) {
  return text.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'project'
}

export function makeUniqueId(title, existingIds = []) {
  const taken = new Set([...builtInProjects.map((p) => p.id), ...existingIds])
  const base = slugify(title)
  let id = base
  let n = 2
  while (taken.has(id)) id = `${base}-${n++}`
  return id
}