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
    <nav className="flex rounded-lg items-center justify-between flex-wrap bg-slate-800 shadow-nav fixed top-0 left-0 right-0 z-[999] px-8 py-4 mt-4 mx-10">
      <Link 
        href="#home"
        onClick={(e) => handleScrollToSection(e, 'home')} 
        className="flex flex-shrink-0 items-center gap-1 font-bold text-2xl mr-0 lg:mr-[20rem]">
        <FaShieldVirus /> Virtual Vigil
      </Link>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded border-white hover:text-violet-400 hover:border-violet-400"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full ${isMenuOpen ? 'hidden' : 'block'} flex-grow lg:flex lg:items-center lg:w-auto`}>
        <div className="lg:flex-grow">
          <Link 
            href="#home" 
            onClick={(e) => handleScrollToSection(e, 'home')}
            className='block mt-4 lg:inline-block lg:mt-0 text-center lg:text-start mr-0 lg:mr-12'>
            <span className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-[0.25rem] after:left-0 after:transition-all after:duration-300 ${activeSection === 'home' ? 'after:w-full' : 'hover:after:w-full'}`}>Home</span>
          </Link>
          <Link 
            href="#services" 
            onClick={(e) => handleScrollToSection(e, 'services')}
            className='block mt-4 lg:inline-block lg:mt-0 text-center lg:text-start mr-0 lg:mr-12'>
            <span className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-[0.25rem] after:left-0 after:transition-all after:duration-300 ${activeSection === 'services' ? 'after:w-full' : 'hover:after:w-full'}`}>Serviços</span>
          </Link>
          <Link 
            href="#plans" 
            onClick={(e) => handleScrollToSection(e, 'plans')}
            className='block mt-4 lg:inline-block lg:mt-0 text-center lg:text-start mr-0 lg:mr-12'>
            <span className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-[0.25rem] after:left-0 after:transition-all after:duration-300 ${activeSection === 'plans' ? 'after:w-full' : 'hover:after:w-full'}`}>Planos</span>
          </Link>
          <Link 
            href="#contact" 
            onClick={(e) => handleScrollToSection(e, 'contact')}
            className='block mt-4 lg:inline-block lg:mt-0 text-center lg:text-start'>
            <span className={`relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-[0.25rem] after:left-0 after:transition-all after:duration-300 ${activeSection === 'contact' ? 'after:w-full' : 'hover:after:w-full'}`}>Contato</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}