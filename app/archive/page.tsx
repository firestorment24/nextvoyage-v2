// app/archive/page.tsx  
import React from 'react'  
import Link from 'next/link'  
import Image from 'next/image'  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'

export default function ArchivePage() {  
  const items = Array.isArray(SANCTUARIES_DATA)   
    ? SANCTUARIES_DATA   
    : Object.values(SANCTUARIES_DATA)

  return (  
    <main className="min-h-screen bg-[#000000] text-[#D4AF37] selection:bg-[#D4AF37] selection:text-black">  
      {/* Editorial Hero Section */}  
      <header className="px-6 pt-32 pb-20 md:px-12 md:pt-48 border-b border-[#D4AF37]/10">  
        <div className="max-w-4xl">  
          <span className="block text-[10px] uppercase tracking-[0.6em] mb-8 opacity-60">  
            The NexVoyage Collection  
          </span>  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter leading-[0.9] mb-12">  
            The Archive<span className="text-[#D4AF37]/30 italic">.</span>  
          </h1>  
          <p className="max-w-xl text-lg md:text-xl font-light leading-relaxed opacity-80">  
            A digital exhibition of high-net-worth sanctuaries. Every blueprint is a study in shadow, texture, and the luxury of silence.  
          </p>  
        </div>  
      </header>

      {/* Staggered Exhibition Grid */}  
      <section className="px-6 py-24 md:px-12">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-32">  
          {items.map((item: any, index: number) => {  
            // This creates the staggered "Editorial" feel  
            const isEven = index % 2 === 0  
            const colSpan = isEven ? 'md:col-start-1 md:col-end-8' : 'md:col-start-5 md:col-end-13'  
              
            return (  
              <div key={item.id} className={`group relative ${colSpan}`}>  
                <Link href={`/archive/${item.id}`} className="block relative">  
                  {/* The Brass Frame / Shadow Container */}  
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0a0a0a] ring-1 ring-[#D4AF37]/10 group-hover:ring-[#D4AF37]/30 transition-all duration-1000">  
                    <Image  
                      src={item.image || item.heroImage}  
                      alt={item.name}  
                      fill  
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-out opacity-80 group-hover:opacity-100"  
                    />  
                    {/* Shadow Overlay */}  
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />  
                  </div>

                  {/* Floating Metadata */}  
                  <div className="mt-8 flex flex-col md:flex-row md:items-end justify-between gap-4">  
                    <div className="space-y-2">  
                      <span className="block text-[9px] uppercase tracking-[0.4em] opacity-40">  
                        Entry {String(index + 1).padStart(2, '0')} // {item.location}  
                      </span>  
                      <h2 className="text-3xl md:text-4xl font-light tracking-tight group-hover:italic transition-all duration-500">  
                        {item.name}  
                      </h2>  
                    </div>  
                    <div className="flex items-center gap-6 pb-2">  
                      <span className="text-[10px] uppercase tracking-[0.3em] font-bold border-b border-[#D4AF37]/20 group-hover:border-[#D4AF37] transition-all">  
                        Examine Details  
                      </span>  
                    </div>  
                  </div>  
                </Link>  
              </div>  
            )  
          })}  
        </div>  
      </section>

      {/* Narrative Footer */}  
      <footer className="px-6 py-32 md:px-12 border-t border-[#D4AF37]/10 flex justify-center text-center">  
        <div className="max-w-2xl">  
          <p className="text-[#D4AF37]/40 text-sm uppercase tracking-[0.5em] mb-8">End of Exhibition</p>  
          <h3 className="text-2xl md:text-3xl font-light mb-12">New archetypes are added as they are commissioned.</h3>  
          <Link   
            href="/contact"   
            className="inline-block border border-[#D4AF37] px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-[#D4AF37] hover:text-black transition-all duration-700"  
          >  
            Commission a Sanctuary  
          </Link>  
        </div>  
      </footer>  
    </main>  
  )  
}  
