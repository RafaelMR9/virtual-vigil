
export default function Plans() {
  return (
    <section id="plans" className="min-h-screen px-32 overflow-hidden">
      <h1 className="text-5xl font-extrabold text-center mb-4"><span className="text-violet-600">Nossos</span> Planos</h1>
      <div className="flex items-center justify-center mb-16">
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
        <div className="w-4 h-4 bg-violet-700 mx-2"></div>
        <div className="w-[25%] h-[1px] bg-violet-700"></div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="bg-slate-800 px-8 py-6">
          <h2 className="text-xl font-bold mb-2">Plano Básico</h2>
          <p className="text-5xl font-semibold mb-4">R$19.99 <span className="text-base text-gray-500">/ mês</span></p>
          <hr className="mb-4"/>
          <ul className="list-disc font-semibold pl-4">
            <li className="mb-2">Guardião Digital</li>
            <li className="mb-2">Blindagem Web</li>
            <li className="text-gray-500 line-through mb-2">Vigilante Cibernético</li>
            <li className="text-gray-500 line-through mb-2">Controle Parental</li>
            <li className="text-gray-500 line-through mb-2">Escudo de Dados</li>
            <li className="text-gray-500 line-through mb-2">Consultor de Privacidade</li>
          </ul>
          <button className="animation-colors easy-out duration-200 block w-full bg-slate-700 hover:bg-slate-500 text-white text-xl font-semibold p-4 mt-8">Comprar</button>
        </div>
        <div className="bg-violet-600 px-8 py-6">
          <h2 className="text-xl font-bold mb-2">Plano Avançado</h2>
          <p className="text-5xl font-semibold mb-4">R$29.99 <span className="text-base text-gray-500">/ mês</span></p>
          <hr className="mb-4"/>
          <ul className="list-disc font-semibold pl-4">
            <li className="mb-2">Guardião Digital</li>
            <li className="mb-2">Blindagem Web</li>
            <li className="mb-2">Vigilante Cibernético</li>
            <li className="mb-2">Controle Parental</li>
            <li className="text-gray-500 line-through mb-2">Escudo de Dados</li>
            <li className="text-gray-500 line-through mb-2">Consultor de Privacidade</li>
          </ul>
          <button className="animation-colors easy-out duration-200 block w-full bg-violet-400 hover:bg-violet-200 text-white hover:text-violet-600 text-xl font-semibold p-4 mt-8">Comprar</button>
        </div>
        <div className="bg-slate-800 px-8 py-6">
          <h2 className="text-xl font-bold mb-2">Plano Premium</h2>
          <p className="text-5xl font-semibold mb-4">R$39.99 <span className="text-base text-gray-500">/ mês</span></p>
          <hr className="mb-4"/>
          <ul className="list-disc font-semibold pl-4">
            <li className="mb-2">Guardião Digital</li>
            <li className="mb-2">Blindagem Web</li>
            <li className="mb-2">Vigilante Cibernético</li>
            <li className="mb-2">Controle Parental</li>
            <li className="mb-2">Escudo de Dados</li>
            <li className="mb-2">Consultor de Privacidade</li>
          </ul>
          <button className="animation-colors easy-out duration-200 block w-full bg-slate-700 hover:bg-slate-500 text-white text-xl font-semibold p-4 mt-8">Comprar</button>
        </div>
      </div>
    </section>
  )
}