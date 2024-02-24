"use client"

import Slider from 'react-slick'
import Plan from '../ui/Plan'
import Modal from '../ui/Modal'
import HamburgerMenu from '../ui/HamburgerMenu'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { MdEmail, MdPerson, MdCreditCard, MdLock, MdDateRange } from "react-icons/md"
import { useState } from 'react'

export default function Plans() {
  
  const [modalOpen, setModalOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setModalOpen(false)
    setIsMenuOpen(true)
  }

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  }

  const plans = [
    <Plan key="plano-basico" title='Plano Básico' price={19.99} serv1 serv2 onClick={() => setModalOpen(true)} />,
    <Plan key="plano-avancado" title='Plano Avançado' price={29.99} serv1 serv2 serv3 serv4 highlighted onClick={() => setModalOpen(true)} />,
    <Plan key="plano-premium" title='Plano Premium' price={39.99} serv1 serv2 serv3 serv4 serv5 serv6 onClick={() => setModalOpen(true)} />
  ]

  return (
    <section id="plans" className="relative px-8 mt-8 overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="hidden sm:block lg:hidden absolute -left-[42rem] top-[12rem] z-[1] h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="text-5xl font-extrabold text-center mb-4 relative z-[10]"><span className="text-violet-600">Nossos</span> Planos</h1>
      <div className="flex items-center justify-center mb-10 relative z-[10]">
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
        <div className="w-4 h-4 bg-violet-700 mx-2"></div>
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
      </div>
      <div className="block sm:hidden mx-auto relative z-[10]">
        <Slider {...settings}>
          {plans}
        </Slider>
      </div>
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-[10]">
        {plans}
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Dados de Pagamento">
        <form onSubmit={handleFormSubmit} className='flex flex-col gap-5'>
          <div className="flex items-center gap-4">
              <MdEmail size={40} />
              <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2 w-full" type="email" placeholder="Digite seu email" required />
          </div>
          <div className="flex items-center gap-4">
              <MdPerson size={40} />
              <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2 w-full" type="text" placeholder="Nome no Cartão" required />
          </div>
          <div className="flex items-center gap-4">
              <MdCreditCard size={40} />
              <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2 w-full" type="text" placeholder="Número do Cartão" required />
          </div>
          <div className="flex items-center gap-4">
              <MdDateRange size={40} />
              <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2 w-full" type="text" placeholder="Data de Validade (MM/AA)" required />
          </div>
          <div className="flex items-center gap-4">
              <MdLock size={40} />
              <input className="text-black rounded-md focus:outline-none focus:ring focus:ring-violet-700 p-2 w-full" type="text" placeholder="CVV" required />
          </div>
          <button type='submit' className='transition-colors easy-out duration-300 font-semibold bg-violet-600 hover:bg-violet-700 rounded-lg px-4 py-3'>Finalizar Compra</button>
        </form>
      </Modal>
      <HamburgerMenu 
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen} 
        text="Compra Realizada com Sucesso!"
      />
    </section>
  )
}