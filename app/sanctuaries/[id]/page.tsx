'use client'

import React from 'react'  
import { useParams, useRouter } from 'next/navigation'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'

// Zero-dependency SVG Icons  
const IconArrowLeft = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>  
const IconMapPin = () => <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>  
const IconShield = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1-1z"/></svg>  
const IconWaves = () => <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.5 0 2.5 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/></svg>

export default function SanctuaryDetail() {  
const params = useParams()  
const router = useRouter()  
const id = params?.id

// Find the data and cast to any to bypass type conflicts during build  
const sanctuary = SANCTUARY_DATA.find((s: any) => s.id === id) as any

if (!sanctuary) {  
  return (  
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-[#d4af37] p-4">  
      <h1 className="text-2xl font-light tracking-[0.2em] uppercase mb-4 text-center">Sanctuary Not Found</h1>  
      <button   
        onClick={() => router.push('/sanctuaries')}  
        className="border border-[#d4af37] px-8 py-3 text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-500 uppercase tracking-widest text-xs"  
      >  
        Return to Collection  
      </button>  
    </div>  
  )  
}

return (  
  <main className="min-h-screen bg-black text-white font-sans selection:bg-[#d4af37] selection:text-black">  
    {/* Hero Section */}  
    <section className="relative h-[80vh] w-full overflow-hidden">  
      <img   
        src={sanctuary.heroImage || sanctuary.img || sanctuary.image}   
        alt={sanctuary.name}  
        className="absolute inset-0 w-full h-full object-cover opacity-70"  
      />  
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
        
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">  
        <button   
          onClick={() => router.back()}  
          className="absolute top-12 left-8 flex items-center gap-2 text-[#d4af37] hover:opacity-70 transition-opacity uppercase tracking-widest text-xs"  
        >  
          <IconArrowLeft /> Back  
        </button>  
          
        <span className="text-[#d4af37] uppercase tracking-[0.4em] text-sm mb-6 animate-pulse">  
          {sanctuary.tag || 'Exclusive Sanctuary'}  
        </span>  
        <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] uppercase mb-4 drop-shadow-2xl">  
          {sanctuary.name}  
        </h1>  
        <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest text-xs">  
          <span className="text-[#d4af37]"><IconMapPin /></span>  
          {sanctuary.loc || sanctuary.location}  
        </div>  
      </div>  
    </section>

    {/* Philosophy Section */}  
    <section className="max-w-4xl mx-auto py-24 px-8 text-center border-b border-[#d4af37]/10">  
      <h2 className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-12">The Philosophy</h2>  
      <p className="text-xl md:text-2xl font-light leading-relaxed tracking-wide text-gray-200 italic">  
        "{sanctuary.philosophy || sanctuary.atmosphere || sanctuary.description}"  
      </p>  
    </section>

    {/* Details Grid */}  
    <section className="max-w-6xl mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-3 gap-16">  
      <div className="space-y-4">  
        <div className="text-[#d4af37] mb-6"><IconShield /></div>  
        <h3 className="uppercase tracking-[0.2em] text-[#d4af37] text-sm font-semibold">Security & Privacy</h3>  
        <p className="text-gray-400 font-light leading-relaxed">  
          Unparalleled discretion with multi-layer perimeter control and private transit corridors.  
        </p>  
      </div>  
      <div className="space-y-4">  
        <div className="text-[#d4af37] mb-6"><IconWaves /></div>  
        <h3 className="uppercase tracking-[0.2em] text-[#d4af37] text-sm font-semibold">Atmosphere</h3>  
        <p className="text-gray-400 font-light leading-relaxed">  
          {sanctuary.atmosphere || "A curated sensory experience designed for absolute restoration."}  
        </p>  
      </div>  
      <div className="space-y-4">  
        <div className="text-[#d4af37] mb-6 text-3xl font-light tracking-tighter">ROI</div>  
        <h3 className="uppercase tracking-[0.2em] text-[#d4af37] text-sm font-semibold">Lifestyle Return</h3>  
        <p className="text-gray-400 font-light leading-relaxed">  
          {sanctuary.roi || "High-yield emotional equity and generational access to the unreachable."}  
        </p>  
      </div>  
    </section>

    {/* Footer Call to Action */}  
    <section className="py-32 bg-[#d4af37]/5 flex flex-col items-center justify-center text-center px-8 border-t border-[#d4af37]/10">  
      <h3 className="text-3xl font-light tracking-[0.2em] uppercase mb-8">Secure Your Dossier</h3>  
      <button className="bg-[#d4af37] text-black hover:bg-white transition-all duration-500 px-12 py-6 rounded-none uppercase tracking-[0.3em] text-xs font-bold">  
        Request Private Access  
      </button>  
    </section>  
  </main>  
)  
}  
