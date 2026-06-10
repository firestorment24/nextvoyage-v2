import Image from 'next/image'  
import Link from 'next/link'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

export default function Home() {  
  return (  
    <main className="min-h-screen">  
      {/* Editorial Header */}  
      <nav className="p-8 flex justify-between items-center border-b border-black/5">  
        <span className="text-xl font-serif tracking-widest uppercase">NexVoyage</span>  
        <Link href="/reserve" className="text-xs uppercase tracking-[0.2em] hover:text-[#947B5C] transition-colors">  
          Inquire  
        </Link>  
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-20">  
        <header className="mb-20 text-center">  
          <p className="text-[#947B5C] text-xs uppercase tracking-[0.4em] mb-4">The Collection</p>  
          <h1 className="text-5xl md:text-7xl font-serif italic mb-6">Worldly Sanctuaries</h1>  
          <p className="text-gray-500 font-light max-w-xl mx-auto leading-relaxed">  
            A curated selection of architectural masterpieces designed for the discerning traveler.  
          </p>  
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">  
          {SANCTUARY_DATA.map((sanctuary) => (  
            <Link key={sanctuary.id} href={`/sanctuaries/${sanctuary.id}`} className="group">  
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-gray-100">  
                <Image  
                  src={sanctuary.heroImage}  
                  alt={sanctuary.name}  
                  fill  
                  className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"  
                />  
              </div>  
              <div className="space-y-2">  
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#947B5C]">{sanctuary.loc}</p>  
                <h2 className="text-2xl font-serif">{sanctuary.name}</h2>  
                <p className="text-sm text-gray-500 italic font-light">{sanctuary.tag}</p>  
                <div className="pt-4 border-t border-black/5 flex justify-between items-center">  
                   <span className="text-xs tracking-tighter text-gray-400">{sanctuary.price}</span>  
                   <span className="text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Sanctuary →</span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <footer className="py-20 border-t border-black/5 text-center">  
        <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400">© 2026 NexVoyage Collective</p>  
      </footer>  
    </main>  
  )  
}  
