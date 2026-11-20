import { useState, useEffect } from 'react'

const roles = [
  'Mobile App Developer',
  'React & Next.js Engineer',
  'Python & Laravel Developer',
  'Full Stack Problem Solver',
]

function useTypedRole() {
  const [text, setText] = useState(roles[0])
  useEffect(() => {
    let roleIdx = 0
    let charIdx = roles[0].length
    let isDeleting = true
    let timer
    const loop = () => {
      const current = roles[roleIdx]
      if (isDeleting) {
        charIdx--
        setText(current.substring(0, charIdx))
        if (charIdx === 0) {
          isDeleting = false
          roleIdx = (roleIdx + 1) % roles.length
          timer = setTimeout(loop, 350)
          return
        }
        timer = setTimeout(loop, 45)
      } else {
        charIdx++
        setText(current.substring(0, charIdx))
        if (charIdx === current.length) {
          isDeleting = true
          timer = setTimeout(loop, 2200)
          return
        }
        timer = setTimeout(loop, 75)
      }
    }
    timer = setTimeout(loop, 2400)
    return () => clearTimeout(timer)
  }, [])
  return text
}

function Hero() {
  const typedRole = useTypedRole()
  const [toast, setToast] = useState(null)

  useEffect(() => {
    if (!toast) return
    const t = setTimeout(() => setToast(null), 3200)
    return () => clearTimeout(t)
  }, [toast])

  const copyText = async (text, label) => {
    try {
      await navigator.clipboard.writeText(text)
      setToast(`${label} copied: ${text}`)
    } catch {
      setToast(`Could not copy ${label}`)
    }
  }

  const str = 'text-emerald-700 dark:text-emerald-400'

  return (
    <section id="home" className="relative bg-grid-pattern border-b border-slate-200/80 dark:border-dark-border overflow-hidden pt-20">
      <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-500/10 dark:bg-brand-500/5 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-0 -left-24 w-80 h-80 rounded-full bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          <div className="lg:col-span-7 space-y-6">
            <div className="hero-stagger-1 inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
              </span>
              <span>#OPENTOWORK — Senior Web, Frontend &amp; Full Stack Developer</span>
            </div>

            <div className="hero-stagger-2 space-y-3">
              <p className="text-sm font-mono font-semibold text-brand-600 dark:text-brand-400 tracking-wide uppercase">
                Ikire, Osun State, Nigeria · Available Globally (Remote)
              </p>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Adisa <span className="text-brand-600 dark:text-brand-400">(Dev Aditech)</span> Nureni Olaniyi
              </h1>
              <h2 className="text-lg sm:text-2xl font-semibold text-slate-700 dark:text-slate-300 flex flex-wrap items-center gap-2">
                <span>Full Stack Web &amp;</span>
                <span className="text-brand-600 dark:text-brand-400 typed-caret pr-1">{typedRole}</span>
              </h2>
            </div>

            <p className="hero-stagger-3 text-slate-600 dark:text-dark-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              I design, architect, and ship scalable web and mobile applications using modern JavaScript, TypeScript, React.js, Next.js, Node.js, Python, PHP, and Laravel. Dedicated to clean code, intuitive user interfaces, and continuous engineering growth.
            </p>

            <div className="hero-stagger-4 flex flex-wrap items-center gap-3.5 pt-2">
              <a href="#projects" className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 hover:-translate-y-0.5 text-white font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-300">
                <span>Explore My Projects</span>
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-dark-card hover:bg-slate-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 text-slate-900 dark:text-white border border-slate-300 dark:border-dark-border font-semibold text-sm transition-all duration-300">
                <i className="fa-regular fa-envelope text-slate-600 dark:text-slate-300"></i>
                <span>Contact Me</span>
              </a>
              <a href="https://www.linkedin.com/in/adisa-nureni-olaniyi" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-dark-card hover:bg-brand-50 dark:hover:bg-slate-800 hover:-translate-y-0.5 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-dark-border font-semibold text-sm transition-all duration-300">
                <i className="fa-brands fa-linkedin text-brand-600 dark:text-brand-400 text-base"></i>
                <span>LinkedIn</span>
              </a>
            </div>

            <div className="hero-stagger-5 pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-500 dark:text-dark-muted border-t border-slate-200/80 dark:border-dark-border">
              <button onClick={() => copyText('adisanureni2023@gmail.com', 'Email address')} className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
                <i className="fa-regular fa-envelope text-brand-600 dark:text-brand-400"></i>
                <span>adisanureni2023@gmail.com</span>
                <i className="fa-regular fa-copy text-[11px] text-slate-400"></i>
              </button>
              <button onClick={() => copyText('+2348137565810', 'Phone number')} className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white transition-colors">
                <i className="fa-solid fa-phone text-emerald-600"></i>
                <span>+234 813 756 5810</span>
                <i className="fa-regular fa-copy text-[11px] text-slate-400"></i>
              </button>
              <span className="inline-flex items-center gap-1.5 font-medium text-slate-700 dark:text-slate-300">
                <i className="fa-solid fa-users text-brand-600 dark:text-brand-400"></i>
                <span>5,421+ LinkedIn Followers</span>
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 hero-card-float">
            <div className="bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-dark-border shadow-xl shadow-slate-200/60 dark:shadow-black/30 overflow-hidden hover:border-brand-500/60 transition-colors duration-300">
              <div className="bg-slate-900 px-6 py-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="relative">
                    <div className="w-14 h-14 rounded-full bg-linear-to-tr from-brand-600 to-emerald-500 p-0.5">
                      <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center font-bold text-lg text-white">AN</div>
                    </div>
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-slate-900" title="Open to Work"></span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base leading-tight">Adisa Nureni Olaniyi</h3>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5">@DevAditech</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-semibold">#OPENTOWORK</span>
              </div>

              <div className="p-5 bg-slate-50 dark:bg-dark-surface border-b border-slate-200 dark:border-dark-border font-mono text-xs leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                  <span className="ml-2 text-[11px] text-slate-400">developer.config.ts</span>
                </div>
                <pre className="text-slate-700 dark:text-slate-300"><code>
                  <span className="text-brand-600 dark:text-brand-400">const</span> <span className="text-slate-900 dark:text-white font-semibold">devAditech</span> = {'{'}{'\n'}
                  {'  '}name: <span className={str}>"Adisa Nureni Olaniyi"</span>,{'\n'}
                  {'  '}role: <span className={str}>"Full Stack Web &amp; Mobile Dev"</span>,{'\n'}
                  {'  '}location: <span className={str}>"Ikire, Osun State, Nigeria"</span>,{'\n'}
                  {'  '}stack: [<span className={str}>"React"</span>, <span className={str}>"Next.js"</span>, <span className={str}>"Node"</span>, <span className={str}>"Python"</span>, <span className={str}>"Laravel"</span>],{'\n'}
                  {'  '}learning: [<span className={str}>"freeCodeCamp"</span>, <span className={str}>"Sololearn"</span>, <span className={str}>"Udemy"</span>],{'\n'}
                  {'  '}availableForHire: <span className="text-brand-600 dark:text-brand-400 font-semibold">true</span>{'\n'}
                  {'}'};
                </code></pre>
              </div>

              <div className="p-5 grid grid-cols-3 gap-3 text-center">
                {[
                  { value: '20+', label: 'Core Technologies', color: 'text-slate-900 dark:text-white' },
                  { value: '3+', label: 'Industry Roles', color: 'text-brand-600 dark:text-brand-400' },
                  { value: '100%', label: 'Client Focus', color: 'text-emerald-600 dark:text-emerald-400' },
                ].map((s) => (
                  <div key={s.label} className="p-3 rounded-xl bg-slate-50 dark:bg-dark-surface border border-slate-100 dark:border-dark-border hover:border-brand-500/50 transition-colors">
                    <p className={`text-lg sm:text-xl font-extrabold ${s.color}`}>{s.value}</p>
                    <p className="text-[11px] font-medium text-slate-500 dark:text-dark-muted mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {toast && (
        <div className="fixed bottom-6 right-6 z-50 px-5 py-3.5 rounded-xl shadow-xl text-sm font-semibold text-white bg-slate-900 border border-slate-700 flex items-center gap-2.5 max-w-sm" style={{ animation: 'fadeSlideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}>
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span>{toast}</span>
        </div>
      )}
    </section>
  )
}

export default Hero