import Deposition from "../ui/Deposition"

export default function Depositions() {
  return (
    <section id="depositions" className="relative min-h-screen px-32 overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="absolute -left-[20rem] top-[8rem] -z-1 h-[40rem] w-[40rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.5" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1024 1024" className="absolute -right-[20rem] top-[8rem] -z-1 h-[40rem] w-[40rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.2" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="text-5xl font-extrabold text-center mb-4">O que <span className="text-violet-600">Nossos</span> Clientes <span className="text-violet-600">Dizem</span></h1>
      <p className="text-center text-gray-400 mb-4">
        Veja os depoimentos de alguns de nossos clientes!
      </p>
      <div className="flex items-center justify-center mb-16">
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
        <div className="w-4 h-4 bg-violet-700 mx-2"></div>
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
      </div>
      <div className="grid grid-cols 1 md:grid-cols-2 gap-10">
        <Deposition 
          profile='profile1.jpg' 
          deposition="Desde que comecei a usar Virtual Vigil, nunca mais tive problemas com malware. A proteção em tempo real realmente faz a diferença. Recomendo fortemente para quem procura tranquilidade online." 
          nome='Alex Silva'
          cargo='Desenvolvedor de Software'
        />
        <Deposition 
          profile='profile2.jpg' 
          deposition="A função de Controle Parental do Virtual Vigil é incrível. Consigo manter meus filhos seguros enquanto navegam, sem me preocupar com conteúdos impróprios ou ameaças online." 
          nome='Mario Costa'
          cargo='Engenheiro Civil'
        />
        <Deposition 
          profile='profile3.jpg' 
          deposition="O suporte ao cliente do Virtual Vigil é de primeira. Eles me ajudaram a configurar a proteção completa para minha pequena empresa, garantindo que nossos dados estejam sempre seguros." 
          nome='Roberto Nunes'
          cargo='Empresário'
        />
        <Deposition 
          profile='profile4.jpg' 
          deposition="Impressionado com a Blindagem Web do Virtual Vigil. Sites perigosos são bloqueados automaticamente, o que me dá uma grande paz de espírito enquanto faço compras ou transações bancárias online." 
          nome='Julio Martins'
          cargo='Analista Financeiro'
        />
      </div>
    </section>
  )
}