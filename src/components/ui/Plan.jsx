export default function Plan({highlighted, title, price, serv1, serv2, serv3, serv4, serv5, serv6}) {
    return (
        <div className={`plan ${highlighted ? 'bg-violet-600' : 'bg-slate-800'} px-8 py-6 w-full sm:w-[28rem] lg:w-full mx-auto lg:mx-0`}>
            <h2 className="text-xl font-bold mb-2">{title}</h2>
            <p className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl font-semibold mb-4">R${price} <span className="text-base text-gray-500">/ mês</span></p>
            <hr className="mb-4"/>
            <ul className="text-sm sm:text-base list-disc font-semibold pl-4">
                <li className={`${!serv1 && 'text-gray-500 line-through'} mb-2`}>Guardião Digital</li>
                <li className={`${!serv2 && 'text-gray-500 line-through'} mb-2`}>Blindagem Web</li>
                <li className={`${!serv3 && 'text-gray-500 line-through'} mb-2`}>Vigilante Cibernético</li>
                <li className={`${!serv4 && 'text-gray-500 line-through'} mb-2`}>Controle Parental</li>
                <li className={`${!serv5 && 'text-gray-500 line-through'} mb-2`}>Escudo de Dados</li>
                <li className={`${!serv6 && 'text-gray-500 line-through'} mb-2`}>Consultor de Privacidade</li>
            </ul>
            <button className={`animation-colors easy-out duration-200 block w-full ${highlighted ? 'bg-violet-400 hover:bg-violet-200  hover:text-violet-600' : 'bg-slate-700 hover:bg-slate-500'} text-white text-xl font-semibold p-4 mt-8`}>Comprar</button>
        </div>
    ) 
}