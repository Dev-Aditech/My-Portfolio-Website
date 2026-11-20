import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'Are you currently available for full-time remote roles or freelance projects?',
      a: 'Yes! I am actively open to full-time Senior Web Developer, Frontend Developer, and Full Stack Developer roles, as well as contract and freelance web or mobile app projects globally.',
    },
    {
      q: 'Which technologies do you specialize in for new web or mobile builds?',
      a: 'On the frontend, I specialize in React.js, Next.js, TypeScript, JavaScript, Tailwind CSS, and SCSS. On the backend, I build with Node.js, Express.js, Python, PHP, and Laravel, backed by MongoDB, MySQL, Firebase, or Supabase.',
    },
    {
      q: 'How can we start discussing a project or job opportunity?',
      a: 'Message me on WhatsApp at +234 813 756 5810, email adisanureni2023@gmail.com, or use the contact form below to send your project brief.',
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">10 / Common Questions</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Frequently Asked Questions</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i
            return (
              <div key={item.q} className="rounded-2xl bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-dark-border overflow-hidden hover:border-brand-500/50 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-white text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  <i className={`fa-solid fa-chevron-down text-slate-400 text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
                </button>
                {isOpen && (
                  <div className="px-6 pb-4 pt-3 border-t border-slate-200 dark:border-dark-border text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ