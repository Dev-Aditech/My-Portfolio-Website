import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
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
import './App.css'

function App() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <>
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
    </>
  )
}

export default App