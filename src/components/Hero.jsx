import Typewriter from './Typewriter'

function Hero() {
  const stackTags = ['HTML5', 'CSS3', 'JS', 'React', 'Node.js', 'Firebase']

  return (
    <section id="home" className="relative pt-16 pb-16 md:pt-24 md:pb-28 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 `w-150` `h-150` bg-brand-500/10 dark:bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Employment & Freelance Projects
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] min-h-[1.1em] sm:min-h-0">
              Hi, I'm{' '}
              <span className="bg-linear-to-r from-brand-600 to-indigo-400 bg-clip-text text-transparent">
                <Typewriter words={['Adisa Nureni O.', 'a full stack dev']} />
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300">
              Frontend & Backend Developer building modern digital experiences.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-dark-muted max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I craft high-performance, responsive websites and web applications using modern frontend technologies and robust BaaS solutions like Firebase. Passionate about clean code, accessibility, and exceptional user experience.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#projects" className="px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-lg shadow-brand-500/25 transition-all hover:scale-105 flex items-center gap-2">
                <span>View My Projects</span>
                <i className="fa-solid fa-code text-sm"></i>
              </a>
              <a href="#contact" className="px-6 py-3.5 rounded-xl bg-slate-200/80 hover:bg-slate-300 dark:bg-dark-card dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border border-slate-300 dark:border-dark-border transition-all flex items-center gap-2">
                <span>Let's Work Together</span>
                <i className="fa-solid fa-paper-plane text-sm"></i>
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start gap-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-dark-muted">Connect:</span>
              <a href="https://github.com/Nureni-2023" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/50 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all">
                <i className="fa-brands fa-github text-lg"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/50 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all">
                <i className="fa-brands fa-linkedin-in text-lg"></i>
              </a>
              <a href="mailto:contact@devaditech.com" aria-label="Email" className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/50 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all">
                <i className="fa-solid fa-envelope text-lg"></i>
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-xl bg-slate-200/70 dark:bg-dark-card border border-slate-300/50 dark:border-dark-border flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-brand-600 hover:text-white dark:hover:bg-brand-600 transition-all">
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1 rounded-2xl bg-linear-to-r from-brand-600 to-indigo-500 opacity-30 blur-lg animate-pulse-slow"></div>
              <div className="relative rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs">
                <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-400 text-[11px]">dev-aditech-profile.js</span>
                  <div className="text-slate-600"><i className="fa-solid fa-terminal"></i></div>
                </div>
                <div className="p-5 text-slate-300 space-y-3 leading-relaxed">
                  <p className="text-slate-500">// Developer Profile Configuration</p>
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
                  <p className="pl-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">"Adisa Nureni Olaniyi"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">brand</span>: <span className="text-amber-300">"Dev Aditech"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">"Frontend / Backend Web Developer"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">experience</span>: <span className="text-purple-400">"3+ Years"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">started</span>: <span className="text-orange-400">2023</span>,</p>
                  <p className="pl-4">
                    <span className="text-emerald-400">stack</span>: [
                    {stackTags.map((tag, i) => (
                      <span key={tag}>
                        <span className="text-amber-300">"{tag}"</span>{i < stackTags.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                    ],
                  </p>
                  <p className="pl-4"><span className="text-emerald-400">focus</span>: <span className="text-amber-300">"Performance & Clean UI"</span>,</p>
                  <p className="pl-4"><span className="text-emerald-400">status</span>: <span className="text-emerald-300">"Ready to build & collaborate"</span></p>
                  <p>{'}'};</p>
                  <div className="pt-2 flex items-center gap-2 text-slate-500">
                    <span className="text-emerald-400 font-bold">&gt;</span>
                    <span className="animate-pulse">Building seamless digital solutions...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero