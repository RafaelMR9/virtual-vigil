"use client"

import Slider from 'react-slick'
import Plan from '../ui/Plan'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Plans() {
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    speed: 500
  }

  const plans = [
    <Plan key="plano-basico" title='Plano Básico' price={19.99} serv1 serv2 />,
    <Plan key="plano-avancado" title='Plano Avançado' price={29.99} serv1 serv2 serv3 serv4 highlighted />,
    <Plan key="plano-premium" title='Plano Premium' price={39.99} serv1 serv2 serv3 serv4 serv5 serv6 />
  ]

  return (
    <section id="plans" className="relative px-8 mt-8 overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="hidden sm:block lg:hidden  absolute -left-[42rem] top-[12rem] -z-10 h-[64rem] w-[64rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.3" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="text-5xl font-extrabold text-center mb-4"><span className="text-violet-600">Nossos</span> Planos</h1>
      <div className="flex items-center justify-center mb-10">
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
        <div className="w-4 h-4 bg-violet-700 mx-2"></div>
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
      </div>
      <div className="block sm:hidden mx-auto">
        <Slider {...settings}>
          {plans}
        </Slider>
      </div>
      <div className="hidden sm:grid grid-cols-1 lg:grid-cols-3 gap-8">
        {plans}
      </div>
    </section>
  )
}