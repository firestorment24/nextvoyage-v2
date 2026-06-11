'use client'

import { useParams } from 'next/navigation'  
import Hero from '@/components/Hero'  
import { SANCTUARY_DATA } from '@/lib/data/sanctuaries'  
import Link from 'next/link'  
import Image from 'next/image'

export default function SanctuaryDetail() {  
  const { id } = useParams()  
  const sanctuary = SANCTUARY_DATA[id as string]

  if (!sanctuary) return <div className="min-h-screen bg-black flex items-center justify-center text-white">Sanctuary not found.</div>

  return (  
    <main className="min-h-screen bg-[#000] text-white selection:bg-[#d4af37]/30">  
      <Hero   
        title={sanctuary.name}  
        subtitle={sanctuary.tagline}  
        heroImage={sanctuary.heroImage || sanctuary.image}  
      />

      {/* Philosophy Section */}  
      <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 pt-12">  
          <div className="md:col-span-1">  
            <h2 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium">Philosophy</h2>  
          </div>  
          <div className="md:col-span-2">  
            <p className="text-2xl font-light leading-relaxed text-gray-200">  
              {sanctuary.philosophy || sanctuary.description}  
            </p>  
          </div>  
        </div>  
      </section>

      {/* Core Attributes */}  
      <section className="pb-24 px-6 md:px-12 max-w-5xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          <div className="p-8 bg-neutral-900/50 border border-white/5">  
            <p className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-4">Atmosphere</p>  
            <p className="text-gray-400 font-light leading-relaxed">{sanctuary.atmosphere}</p>  
          </div>  
          <div className="p-8 bg-neutral-900/50 border border-white/5">  
            <p className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-4">Yield & ROI</p>  
            <p className="text-gray-400 font-light leading-relaxed">{sanctuary.ROI}</p>  
          </div>  
          <div className="p-8 bg-neutral-900/50 border border-white/5">  
            <p className="text-[#d4af37] text-[10px] tracking-[0.4em] uppercase mb-4">Location Strategy</p>  
            <p className="text-gray-400 font-light leading-relaxed">{sanctuary.location}</p>  
          </div>  
        </div>  
      </section>

      {/* Dossiers / Sub-Properties (e.g., The Evrima for The Nautical) */}  
      {sanctuary.buckets && sanctuary.buckets.length > 0 && (  
        <section className="py-24 bg-[#0a0a0a]">  
          <div className="max-w-7xl mx-auto px-6 md:px-12">  
            <h2 className="text-[#d4af37] text-xs tracking-[0.3em] uppercase mb-16 text-center">Available Dossiers</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
              {sanctuary.buckets.map((dossier) => (  
                <div key={dossier.id} className="group relative">  
                  <div className="aspect-video relative overflow-hidden mb-6 bg-neutral-900">  
                    <Image   
                      src={dossier.imageUrl || dossier.image}   
                      alt={dossier.name}   
                      fill   
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100"  
                    />  
                  </div>  
                  <h3 className="text-xl font-light tracking-widest uppercase mb-2">{dossier.name}</h3>  
                  <p className="text-sm text-gray-500 max-w-md font-light leading-relaxed">  
                    {dossier.atmosphere}  
                  </p>  
                </div>  
              ))}  
            </div>  
          </div>  
        </section>  
      )}

      {/* Global Footer CTA */}  
      <section className="py-32 text-center border-t border-white/5">  
        <Link   
          href="/concierge"   
          className="text-[#d4af37] text-xs tracking-[0.5em] uppercase hover:text-white transition-colors"  
        >  
          Inquire for Access — Limited Allocation  
        </Link>  
      </section>  
    </main>  
  )  
}  
