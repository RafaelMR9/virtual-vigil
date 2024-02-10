import Link from 'next/link'
import { FaShieldVirus } from "react-icons/fa6"

export default function Nav() {
  return (
    <nav className="bg-slate-800 rounded-full flex justify-between items-center fixed top-0 left-0 right-0 px-8 py-4 mt-4 mx-10 z-[999]">
      <Link href="#home" className="flex items-center gap-1 font-bold text-2xl"><FaShieldVirus /> Virtual Vigil</Link>
      <div className="flex gap-12">
        <Link href="#services">Serviços</Link>
        <Link href="#plans">Planos</Link>
        <Link href="#depositions">Depoimentos</Link>
        <Link href="#contact">Contato</Link>
      </div>
      <div />
    </nav>
  )
}