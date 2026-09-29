import { useState, useEffect } from 'react'

function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 left-6 z-40 w-11 h-11 rounded-xl bg-brand-600 hover:bg-brand-700 text-white shadow-lg shadow-brand-500/30 flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  )
}

export default BackToTop