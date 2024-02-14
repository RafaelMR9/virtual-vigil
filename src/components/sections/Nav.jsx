"use client"

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaShieldVirus } from "react-icons/fa6"

export default function Nav() {

  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    let debounceTimer
    const handleScroll = () => {
      if (debounceTimer) clearTimeout(debounceTimer)
      debounceTimer = setTimeout(() => {
        const sections = ['home', 'services', 'plans', 'depositions', 'contact']
        const scrollPosition = window.scrollY + 100

        const selectedSection = sections.find(section => {
          const element = document.getElementById(section)

          if (element)
            return scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight

          return false
        })

        if (selectedSection)
          setActiveSection(selectedSection)

      }, 5)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(debounceTimer)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      let offsetTop = section.offsetTop - 100

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })

      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="bg-slate-800 rounded-full shadow-xl flex justify-between items-center fixed top-0 left-0 right-0 px-8 py-4 mt-4 mx-10 z-[999]">
      <Link href="#home" className="flex items-center gap-1 font-bold text-2xl"><FaShieldVirus /> Virtual Vigil</Link>
      <button 
        type="button" 
        className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        aria-controls="navbar-default" 
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className={`lg:flex gap-12 mt-1 font-semibold ${isMenuOpen ? 'flex flex-col' : 'hidden'}`} id="navbar-default">
        <Link 
          href="#home" 
          onClick={(e) => handleScrollToSection(e, 'home')}
          className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 cursor-pointer ${activeSection === 'home' ? 'after:w-full' : 'hover:after:w-full'}`}>
          Home
        </Link>
        <Link 
          href="#services" 
          onClick={(e) => handleScrollToSection(e, 'services')}
          className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 cursor-pointer ${activeSection === 'services' ? 'after:w-full' : 'hover:after:w-full'}`}>
          Serviços
        </Link>
        <Link 
          href="#plans" 
          onClick={(e) => handleScrollToSection(e, 'plans')}
          className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 cursor-pointer ${activeSection === 'plans' ? 'after:w-full' : 'hover:after:w-full'}`}>
          Planos
        </Link>
        <Link 
          href="#contact" 
          onClick={(e) => handleScrollToSection(e, 'contact')}
          className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 after:transition-all after:duration-300 cursor-pointer ${activeSection === 'contact' ? 'after:w-full' : 'hover:after:w-full'}`}>
          Contato
        </Link>
      </div>
    </nav>
  )
}