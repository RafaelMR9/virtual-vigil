import Service from "../ui/Service"
import { MdSecurity } from "react-icons/md"
import { FaShieldAlt, FaUserShield } from "react-icons/fa"
import { RiShieldKeyholeLine } from "react-icons/ri"
import { BsPersonCheck } from "react-icons/bs"
import { SiFastly } from "react-icons/si"


export default function Services() {
  return (
    <section id="services" className="min-h-screen px-32 relative overflow-hidden">
      <svg viewBox="0 0 1024 1024" className="absolute -right-[16rem] top-18 -z-1 h-[32rem] w-[32rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.5" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <svg viewBox="0 0 1024 1024" className="absolute -left-[22rem] top-[12rem] -z-1 h-[32rem] w-[32rem] [mask-image:radial-gradient(closest-side,white,transparent)]">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.2" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#7775D6" />
            <stop offset="1" stopColor="#E935C1" />
          </radialGradient>
        </defs>
      </svg>
      <h1 className="text-5xl font-extrabold text-center mb-4">Nossos <span className="text-violet-600">Serviços</span></h1>
      <p className="text-center text-gray-400 mb-4">
        A Virtual Vigil é pioneira em soluções de segurança digital, oferecendo desde proteção antivírus até criptografia avançada e 
        monitoramento de rede em tempo real. Com um compromisso inabalável com a inovação e a satisfação do cliente, nossa equipe de 
        especialistas está dedicada a desenvolver tecnologias que protegem e empoderam usuários em todo o mundo, garantindo uma 
        experiência online segura e sem preocupações. Priorizamos a personalização de nossos serviços para atender às necessidades 
        únicas de cada cliente, estabelecendo novos padrões de excelência em segurança virtual.
      </p>
      <div className="flex items-center justify-center mb-16">
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
        <div className="w-4 h-4 bg-violet-700 mx-2"></div>
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
        <Service 
          icon={<MdSecurity size={100}/>} 
          title="Guardião Digital" 
          description="Proteção 24/7 contra ameaças online, mantendo seus dispositivos seguros em tempo real." 
        />
        <Service 
          icon={<FaShieldAlt size={100}/>} 
          title="Blindagem Web" 
          description="Navegação segura e livre de malware, com bloqueio automático de sites perigosos." 
        />
        <Service 
          icon={<FaUserShield size={100}/>} 
          title="Vigilante Cibernético" 
          description="Assistência imediata para ameaças emergentes, minimizando danos e restaurando a segurança." 
        />
        <Service 
          icon={<SiFastly size={100}/>} 
          title="Controle Parental" 
          description="Ferramentas customizáveis para manter as crianças seguras online, bloqueando conteúdo impróprio." 
        />
        <Service 
          icon={<RiShieldKeyholeLine size={100}/>} 
          title="Escudo de Dados" 
          description="Criptografia avançada para proteger seus dados pessoais e financeiros de hackers." 
        />
        <Service 
          icon={<BsPersonCheck size={100}/>} 
          title="Consultor de Privacidade" 
          description="Avaliação personalizada de segurança para fortalecer sua privacidade online contra vazamentos de dados." 
        />
      </div>
    </section>
  )
}