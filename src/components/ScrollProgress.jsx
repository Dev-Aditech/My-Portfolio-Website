import { useState, useEffect } from 'react'

function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const percent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setScrollPercent(percent)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-brand-600 dark:bg-brand-500 z-50 transition-all duration-150"
      style={{ width: `${scrollPercent}%` }}
    ></div>
  )
}

export default ScrollProgress