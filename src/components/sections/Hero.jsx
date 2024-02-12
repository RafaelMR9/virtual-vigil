import { FaShieldVirus, FaCartShopping } from "react-icons/fa6"

export default function Hero() {
  return ( 
    <section id="home" className="h-screen flex flex-col justify-center align-center text-center px-32 pt-16 mb-8 relative overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="absolute left-1/2 -top-[42rem] -z-1 h-[76rem] w-[76rem] [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.5" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <header>
          <div className="flex justify-center items-center gap-5">
            <FaShieldVirus className="text-violet-600" size={100}/>
            <h1 className="text-7xl font-extrabold">Virtual <span className="text-violet-600">Vigil</span></h1>
          </div>
          <div className="bg-slate-800 inline-flex gap-2 items-center rounded-lg px-5 py-2 mt-16"><FaCartShopping /> Mais de 20 milhões de clientes satisfeitos</div>
          <h2 className="text-5xl font-extrabold mt-5">Sua <span className="text-violet-600">Segurança</span> Digital É Nossa Prioridade Máxima <span className="text-violet-600">Sempre!</span></h2>
          <h5 className="text-xl text-gray-400 mt-5">Revolucione sua segurança com nosso antivírus de última geração: inteligência artificial adaptativa, proteção em tempo real e planos sob medida para você.</h5>
          <button className="transition-colors easy-out duration-300 bg-violet-700 hover:bg-violet-800 font-bold rounded-full p-5 mt-5">Experimente Grátis</button>
      </header>
    </section>
  )
}