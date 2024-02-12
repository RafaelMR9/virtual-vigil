export default function Service({ icon, title, description }) {
    return (
      <div className="flex items-center gap-5 rounded-lg bg-slate-800 hover:bg-violet-700 hover:cursor-pointer hover:drop-shadow-glow p-5">
        {icon}
        <div>
          <h3 className="font-bold text-2xl">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    )
}