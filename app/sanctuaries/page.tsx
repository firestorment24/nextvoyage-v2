import Link from 'next/link'  
import Image from 'next/image'  
import { sanctuaries } from '@/data/sanctuaries'

export default function SanctuaryIndex() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-6">  
      <div className="max-w-7xl mx-auto">  
        <header className="mb-16">  
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tighter">The Collection</h1>  
          <p className="text-xl text-zinc-400 max-w-2xl font-light leading-relaxed">  
            A curated selection of private redoubts and sensory sanctuaries designed for total neurological restoration.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">  
          {sanctuaries.map((sanctuary) => (  
            <Link   
              href={`/sanctuaries/${sanctuary.id}`}   
              key={sanctuary.id}  
              className="group block relative overflow-hidden md:col-span-4"  
            >  
              <div className="aspect-[4/5] relative overflow-hidden bg-zinc-900 transition-all duration-700 group-hover:scale-[1.02]">  
                <Image  
                  src={sanctuary.img}  
                  alt={sanctuary.name}  
                  fill  
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-100"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />  
                  
                <div className="absolute bottom-8 left-8 right-8">  
                  <div className="flex items-center gap-3 mb-2">  
                    <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-400">{sanctuary.loc}</span>  
                    <div className="h-[1px] w-8 bg-zinc-700" />  
                  </div>  
                  <h3 className="text-2xl font-light tracking-tight">{sanctuary.name}</h3>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </main>  
  )  
}  
