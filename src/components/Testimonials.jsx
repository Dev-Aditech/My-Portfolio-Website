function Testimonials() {
  const testimonials = [
    {
      quote: 'Client testimonials will appear here as I complete more collaborative projects and professional engagements.',
      name: 'Awaiting Feedback',
      role: 'Slot Reserved',
    },
    {
      quote: 'Working with clients closely to deliver clean, responsive, and reliable web solutions is the goal — reviews from those collaborations will be featured in this space.',
      name: 'Awaiting Feedback',
      role: 'Slot Reserved',
    },
    {
      quote: 'Every project is approached with the same care and communication a great testimonial is built on. Check back soon as more client stories are added here.',
      name: 'Awaiting Feedback',
      role: 'Slot Reserved',
    },
    {
      quote: 'This space is reserved for genuine feedback from freelance clients, employers, and collaborators as those relationships grow.',
      name: 'Awaiting Feedback',
      role: 'Slot Reserved',
    },
  ]

  // Duplicate the list once so the CSS animation can loop seamlessly (see index.css)
  const loopedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-24 bg-white dark:bg-dark-surface border-t border-slate-200 dark:border-dark-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-600 dark:text-brand-400 font-mono text-xs uppercase tracking-widest block mb-2">08. Client Feedback</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Testimonials</h2>
          <div className="w-16 h-1.5 bg-brand-600 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>

      <div className="relative group">
        <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
          {loopedTestimonials.map((testimonial, index) => (
            <div key={index} className="w-80 sm:w-96 shrink-0 p-8 rounded-3xl bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-dark-border space-y-4">
              <div className="w-10 h-10 rounded-full bg-brand-600/10 text-brand-600 dark:text-brand-400 flex items-center justify-center text-base">
                <i className="fa-solid fa-quote-left"></i>
              </div>
              <p className="text-slate-600 dark:text-dark-muted text-sm italic leading-relaxed">"{testimonial.quote}"</p>
              <div className="pt-2 border-t border-slate-200 dark:border-dark-border">
                <div className="text-sm font-semibold text-slate-800 dark:text-slate-200">{testimonial.name}</div>
                <div className="text-xs font-mono text-slate-400 dark:text-dark-muted">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges so cards don't appear to cut off abruptly */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-white dark:from-dark-surface to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-white dark:from-dark-surface to-transparent"></div>
      </div>
    </section>
  )
}

export default Testimonials