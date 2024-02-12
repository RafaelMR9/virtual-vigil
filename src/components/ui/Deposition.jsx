import Image from 'next/image'

export default function Deposition({ profile, deposition, nome, cargo }) {
    return (
      <div className="flex flex-col justify-between bg-slate-700 rounded-lg px-10 py-8">
        <span className='text-9xl text-violet-600 quote-height pt-6'>❝</span>
        <p className='italic'>{deposition}</p>
        <div className="flex items-center gap-6 mt-6">
          <Image src={`/avatars/${profile}`} alt={profile} width={64} height={64} className='rounded-full'/>
          <div>
            <p className='font-bold text-xl'>{nome}</p>
            <p className='text-lg text-gray-400'>{cargo}</p>
          </div>
        </div>
      </div>
    )
}