'use client'

import React from 'react'  
import { useParams, useRouter } from 'next/navigation'  
import { SANCTUARY_DATA } from '@/data/sanctuaries'  
import { Button } from '@/components/ui/button'  
import { ArrowLeft, MapPin, ShieldCheck, Waves } from 'lucide-react'

export default function SanctuaryDetail() {  
  const params = useParams()  
  const router = useRouter()  
  const id = params?.id

  // Fix: Find the sanctuary in the array rather than indexing  
  const sanctuary = SANCTUARY_DATA.find(s => s.id === id)

  if (!sanctuary) {  
    return (  
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-[#d4af37] p-4">  
        <h1 className="text-2xl font-light tracking-[0.2em] uppercase mb-4">Sanctuary Not Found</h1>  
        <Button   
          variant="outline"   
          onClick={() => router.push('/sanctuaries')}  
          className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-500"  
        >  
          Return to Collection  
        </Button>  
      </div>  
    )  
  }

  return (  
    <main className="min-h-screen bg-black text-white font-sans selection:bg-[#d4af37] selection:text-black">  
      {/* Hero Section */}  
      <section className="relative h-[80vh] w-full overflow-hidden">  
        <img   
          src={sanctuary.heroImage || sanctuary.img}   
          alt={sanctuary.name}  
          className="absolute inset-0 w-full h-full object-cover opacity-70"  
        />  
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />  
          
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">  
          <button   
            onClick={() => router.back()}  
            className="absolute top-12 left-8 flex items-center gap-2 text-[#d4af37] hover:opacity-70 transition-opacity uppercase tracking-widest text-xs"  
          >  
            <ArrowLeft className="w-4 h-4" /> Back  
          </button>  
            
          <span className="text-[#d4af37] uppercase tracking-[0.4em] text-sm mb-6 animate-pulse">  
            {sanctuary.tag || 'Exclusive Sanctuary'}  
          </span>  
          <h1 className="text-5xl md:text-7xl font-light tracking-[0.15em] uppercase mb-4 drop-shadow-2xl">  
            {sanctuary.name}  
          </h1>  
          <div className="flex items-center gap-2 text-gray-400 uppercase tracking-widest text-xs">  
            <MapPin className="w-3 h-3 text-[#d4af37]" />  
            {sanctuary.loc || sanctuary.location}  
          </div>  
        </div>  
      </section>

      {/* Philosophy Section */}  
      <section className="max-w-4xl mx-auto py-24 px-8 text-center border-b border-[#d4af37]/10">  
        <h2 className="text-[#d4af37] uppercase tracking-[0.3em] text-xs mb-12">The Philosophy</h2>  
        <p className="text-xl md:text-2xl font-light leading-relaxed tracking-wide text-gray-200">  
          "{sanctuary.philosophy || sanctuary.atmosphere}"  
        </p>  
      </section>

      {/* Details Grid */}  
      <section className="max-w-6xl mx-auto py-24 px-8 grid grid-cols-1 md:grid-cols-3 gap-16">  
        <div className="space-y-4">  
          <ShieldCheck className="w-8 h-8 text-[#d4af37] mb-6" />  
          <h3 className="uppercase tracking-[0.2em] text-[#d4af37] text-sm font-semibold">Security & Privacy</h3>  
          <p className="text-gray-400 font-light leading-relaxed">  
            Unparalleled discretion with multi-layer perimeter control and private transit corridors.  
          </p>  
        </div>  
        <div className="space-y-4">  
          <Waves className="w-8 h-8 text-[#d4af37] mb-6" />  
          <h3 className="uppercase tracking-[0.2em] text-[#d4af37] text-sm font-semibold">Atmosphere</h3>  
          <p className="text-gray-400 font-light leading-relaxed">  
            {sanctuary.atmosphere || "A curated sensory experience designed for absolute restoration."}  
          </p>  
        </div>  
        <div className="space-y-4">  
          <div className="text-[#d4af37] mb-6 text-2xl font-light tracking-tighter">ROI</div>  
          <h3 className="uppercase tracking-[0.2em] text-[#d4af37] text-sm font-semibold">Lifestyle Return</h3>  
          <p className="text-gray-400 font-light leading-relaxed">  
            {sanctuary.roi || "High-yield emotional equity and generational access to the unreachable."}  
          </p>  
        </div>  
      </section>

      {/* Footer Call to Action */}  
      <section className="py-32 bg-[#d4af37]/5 flex flex-col items-center justify-center text-center px-8 border-t border-[#d4af37]/10">  
        <h3 className="text-3xl font-light tracking-[0.2em] uppercase mb-8">Secure Your Dossier</h3>  
        <Button className="bg-[#d4af37] text-black hover:bg-white transition-all duration-500 px-12 py-6 rounded-none uppercase tracking-[0.3em] text-xs">  
          Request Private Access  
        </Button>  
      </section>  
    </main>  
  )  
}  
