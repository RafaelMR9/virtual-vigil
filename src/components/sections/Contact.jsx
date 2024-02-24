"use client"

import HamburgerMenu from '../ui/HamburgerMenu'
import { useState } from 'react'

export default function Contact() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setIsMenuOpen(true)
  }

  return (
    <section id="contact" className="relative min-h-screen px-8 md:px-20 lg:px-32 mt-24 pb-10 overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="block absolute -right-[20rem] top-18 -z-10 h-[38rem] w-[38rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1024 1024" className="hidden md:block absolute -left-[42rem] top-[12rem] -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="text-5xl font-extrabold text-center mb-4">Entre em <span className="text-violet-600">Contato</span></h1>
      <div className="flex items-center justify-center mb-10">
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
        <div className="w-4 h-4 bg-violet-700 mx-2"></div>
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
      </div>
      <form className="text-black" onSubmit={handleFormSubmit}>
        <label htmlFor="name" className="block mb-2 text-center font-medium text-gray-300">Nome</label>
        <input type="text" id="name" className="block w-full md:w-3/4 lg:w-1/2 mx-auto p-3 mb-4 border border-violet-700 rounded-md focus:outline-none focus:ring focus:ring-violet-700" required />

        <label htmlFor="email" className="block mb-2 text-center font-medium text-gray-300">E-mail</label>
        <input type="email" id="email" className="block w-full md:w-3/4 lg:w-1/2 mx-auto p-3 mb-4 border border-violet-700 rounded-md focus:outline-none focus:ring focus:ring-violet-700" required />

        <label htmlFor="subject" className="block mb-2 text-center font-medium text-gray-300">Assunto</label>
        <input type="text" id="subject" className="block w-full md:w-3/4 lg:w-1/2 mx-auto p-3 mb-4 border border-violet-700 rounded-md focus:outline-none focus:ring focus:ring-violet-700" required />

        <label htmlFor="message" className="block mb-2 text-center font-medium text-gray-300">Mensagem</label>
        <textarea id="message" className="block w-full md:w-3/4 mx-auto lg:w-1/2 p-3 mb-4 border border-violet-700 rounded-md focus:outline-none focus:ring focus:ring-violet-700" rows="5" required ></textarea>

        <button type="submit" className="transition-colors easy-out duration-300 block w-full md:w-3/4 lg:w-1/2 mx-auto font-bold p-4 bg-violet-700 hover:bg-violet-800 text-white rounded-md focus:outline-none focus:none">Enviar</button>
      </form>
      <HamburgerMenu 
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen} 
        text="Recebemos sua mensagem e logo entraremos em contato!"
      />
    </section>
  )
}