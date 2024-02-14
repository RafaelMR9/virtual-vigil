"use client"

import Link from 'next/link'
import { FaLinkedin, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa"
import { FaShieldVirus } from "react-icons/fa6"

export default function Footer() {

  const handleScrollToSection = (e, sectionId) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      let offsetTop = section.offsetTop - 100

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      })
    }
  }
  
  return (
    <footer className="bg-slate-700 px-10 pt-10 pb-3 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mb-6">
        <div className="flex flex-col gap-5">
          <h2 className="flex items-center gap-1 font-bold text-2xl"><FaShieldVirus /> Virtual Vigil</h2>
          <p >Comprometida em garantir sua segurança digital com soluções inovadoras e personalizadas para uma navegação online sem preocupações.</p>
        </div>
        <div className='mx-0 md:mx-auto'>
          <p className='font-medium text-lg mb-5'>Links</p>
          <nav className="font-bold flex flex-col gap-3">
            <span><Link href="#home" className='relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer' onClick={(e) => handleScrollToSection(e, 'home')}>Home</Link></span>
            <span ><Link href="#services" className='relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer' onClick={(e) => handleScrollToSection(e, 'services')}>Serviços</Link></span>
            <span><Link href="#plans" className='relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer' onClick={(e) => handleScrollToSection(e, 'plans')}>Planos</Link></span>
            <span><Link href="#contact" className='relative after:bg-violet-400 after:absolute after:h-1 after:w-0 after:-bottom-1 after:left-0 after:transition-all after:duration-300 hover:after:w-full cursor-pointer' onClick={(e) => handleScrollToSection(e, 'contact')}>Contato</Link></span>
          </nav>
        </div>
        <div>
          <p className='font-medium text-lg mb-5'>Endereço</p>
          <div className="font-bold flex flex-col gap-1">
            <p>Rua das Flores, 123</p>
            <p>São Paulo - SP</p>
            <p>virtualvigil@gmail.com</p>
          </div>
        </div>
        <div>
          <p className='font-medium text-lg mb-5'>Jornal</p>
          <div className="flex flex-col gap-8">
            <form className="flex flex-col gap-3">
              <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2" type="text" placeholder="Digite seu email"/>
              <button className='transition-colors easy-out duration-300 font-semibold bg-violet-600 hover:bg-violet-700 rounded-lg px-4 py-2'>Enviar</button>
            </form>
            <div className="flex items-center gap-4">
              <FaLinkedin size={35} className='cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/>
              <FaFacebook size={35} className='cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/>
              <FaWhatsapp size={35} className='cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/>
              <FaTwitter size={35} className='cursor-pointer transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300'/> 
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-4'/>
      <div className="font-semibold flex flex-col jusitify-center items-center gap-1">
        <p>@ Copyright 2024. Todos os direitos reservados.</p>
        <p>Desenvolvido com ❤️ por Rafael Ribeiro</p>
      </div>
    </footer>
  )
}