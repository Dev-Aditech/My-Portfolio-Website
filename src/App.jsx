import { useState, useEffect } from 'react'
import AdminProjects from './components/AdminProjects'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Experience from './components/Experience'
import Process from './components/Process'
import WhyWorkWithMe from './components/WhyWorkWithMe'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
    } catch { /* storage unavailable */ }
    return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? true
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try { localStorage.setItem('theme', isDark ? 'dark' : 'light') } catch { /* ignore */ }
  }, [isDark])

  const [route, setRoute] = useState(window.location.hash)

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  if (route === '#/admin') {
    return <AdminProjects isDark={isDark} toggleTheme={toggleTheme} />
  }

  return (
    <>
      <ScrollProgress />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Process />
      <WhyWorkWithMe />
      <Testimonials />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default App