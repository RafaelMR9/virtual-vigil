"use client"

import Modal from '../ui/Modal'
import HamburgerMenu from '../ui/HamburgerMenu'
import { useState } from 'react'
import { FaShieldVirus, FaCartShopping } from "react-icons/fa6"
import { MdEmail } from "react-icons/md"

export default function Hero() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setModalOpen(false)
    setIsMenuOpen(true)
  }
  
  return ( 
    <section id="home" className="min-h-screen flex flex-col justify-center align-center text-center px-8 md:px-20 lg:px-32 pt-16 relative overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 -top-[42rem] z-[1] h-[76rem] w-[76rem] [mask-image:radial-gradient(closest-side,white,transparent)] -translate-x-1/2 translate-y-0">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.5" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <header className="animate-fadeup relative z-10">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
          <FaShieldVirus className="text-violet-600 brand-size"/>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold">Virtual <span className="text-violet-600">Vigil</span></h1>
        </div>
        <div className="bg-slate-800 inline-flex flex-col sm:flex-row gap-2 items-center rounded-lg px-5 py-2 mt-10 md:mt-16">
          <FaCartShopping /> 
          <p>Mais de 20 milhões de clientes satisfeitos</p>
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-5">Sua <span className="text-violet-600">Segurança</span> Digital É Nossa Prioridade Máxima <span className="text-violet-600">Sempre!</span></h2>
        <h5 className="text-lg lg:text-xl text-gray-400 mt-5">Revolucione sua segurança com nosso antivírus de última geração: inteligência artificial adaptativa, proteção em tempo real e planos sob medida para você.</h5>
        <button onClick={() => setModalOpen(true)} className="transition-colors easy-out duration-300 bg-violet-700 hover:bg-violet-800 font-bold rounded-full p-5 mt-5">Experimente Grátis</button>
      </header>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Solicitação Amostra Grátis">
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-5'>
          <div className="flex items-center gap-4">
            <MdEmail size={40} />
            <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2 w-full" type="email" placeholder="Digite seu email" required />
          </div>
          <button type='submit' className='transition-colors easy-out duration-300 font-semibold bg-violet-600 hover:bg-violet-700 rounded-lg px-4 py-3'>Solicitar Amostra</button>
        </form>
      </Modal>
      <HamburgerMenu 
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen} 
        text="Em Breve Enviaremos uma Amostra Grátis!"
      />
    </section>
  )
}