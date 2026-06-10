import Image from 'next/image'  
import Link from 'next/link'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

export default function Home() {  
  return (  
    <main className="min-h-screen bg-[#FCFAF7]">  
      {/* Editorial Header */}  
      <nav className="p-8 flex justify-between items-center">  
        <span className="text-xl font-serif tracking-[0.2em] uppercase">NexVoyage</span>  
        <div className="flex gap-8">  
          <Link href="/reserve" className="text-[10px] uppercase tracking-[0.3em] text-[#947B5C] border-b border-[#947B5C]/30 pb-1">  
            Inquire  
          </Link>  
        </div>  
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-24">  
        {/* Hero Branding */}  
        <header className="mb-32 max-w-3xl">  
          <p className="text-[#947B5C] text-[10px] uppercase tracking-[0.5em] mb-6">The 2026 Collection</p>  
          <h1 className="text-6xl md:text-8xl font-serif italic leading-[1.1] mb-8">  
            Modern <br /> Sanctuaries.  
          </h1>  
          <p className="text-gray-500 font-light text-lg max-w-md leading-relaxed">  
            A curated portfolio of architectural retreats for those who seek silence and sophistication.  
          </p>  
        </header>

        {/* The Grid */}  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">  
          {SANCTUARY_DATA.map((sanctuary) => (  
            <Link key={sanctuary.id} href={`/sanctuaries/${sanctuary.id}`} className="group block">  
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-gray-200">  
                <Image  
                  src={sanctuary.heroImage}  
                  alt={sanctuary.name}  
                  fill  
                  className="object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"  
                />  
              </div>  
              <div className="space-y-3">  
                <div className="flex justify-between items-start">  
                  <p className="text-[9px] uppercase tracking-[0.4em] text-[#947B5C]">{sanctuary.loc}</p>  
                  <span className="text-[9px] text-gray-400 tracking-widest">{sanctuary.price}</span>  
                </div>  
                <h2 className="text-3xl font-serif font-light">{sanctuary.name}</h2>  
                <p className="text-sm text-gray-400 font-light italic leading-relaxed pt-2">  
                  {sanctuary.tag}  
                </p>  
                <div className="pt-6">  
                   <span className="text-[10px] uppercase tracking-widest text-[#1C1C1C] border-b border-black/10 pb-1 group-hover:border-black transition-colors">  
                     View Details  
                   </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <footer className="py-32 border-t border-black/5 text-center">  
        <p className="text-[9px] uppercase tracking-[0.6em] text-gray-400">© NexVoyage Collective — All Rights Reserved</p>  
      </footer>  
    </main>  
  )  
}  
