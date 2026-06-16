'use client'

import { DESTINATIONS_DATA } from '@/lib/journal-data'  
import Link from 'next/link'

export default function JournalPage() {  
  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-[#C5A059] selection:bg-[#C5A059] selection:text-[#0A0A0A]">  
      <header className="pt-32 pb-16 px-6 max-w-7xl mx-auto border-b border-[#C5A059]/10">  
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">  
          <div>  
            <p className="font-mono text-[10px] uppercase tracking-[0.4em] opacity-50 mb-4">  
              Volume 01 // The Master Ledger  
            </p>  
            <h1 className="text-7xl md:text-9xl font-serif lowercase tracking-tighter leading-[0.8]">  
              the journal  
            </h1>  
          </div>  
          <div className="max-w-xs pb-2 text-right md:text-left">  
            <p className="font-serif italic text-lg leading-relaxed opacity-80">  
              "The world is a ledger of experiences; we simply help you curate the entries."  
            </p>  
          </div>  
        </div>  
      </header>

      <section className="px-6 py-24 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-24">  
          {DESTINATIONS_DATA.map((item) => (  
            <Link key={item.id} href={`/journal/${item.id}`} className="group block no-underline">  
              <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-[#111111] border border-[#C5A059]/5">  
                <img  
                  src={item.heroImage}  
                  alt={item.name}  
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100"  
                />  
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-60" />  
              </div>

              <div className="space-y-5 bg-transparent">  
                <p className="font-mono text-[10px] tracking-[0.3em] opacity-40 uppercase">  
                  {item.coordinates}  
                </p>  
                <div className="space-y-2">  
                  <h3 className="text-3xl font-serif lowercase tracking-tight group-hover:translate-x-3 transition-transform duration-700 ease-out">  
                    {item.name}  
                  </h3>  
                  <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#C5A059]/60">  
                    {item.title}  
                  </p>  
                </div>  
                <p className="text-sm font-serif italic leading-relaxed opacity-60 line-clamp-2 max-w-[90%]">  
                  {item.summary}  
                </p>  
                <div className="pt-6 flex items-center gap-4">  
                  <span className="h-[1px] w-12 bg-[#C5A059]/30 group-hover:w-20 group-hover:bg-[#C5A059] transition-all duration-700" />  
                  <span className="font-mono text-[9px] uppercase tracking-[0.4em] opacity-80">  
                    Read Narrative  
                  </span>  
                </div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>

      <footer className="py-32 px-6 border-t border-[#C5A059]/5 text-center">  
        <p className="font-mono text-[10px] tracking-[0.5em] opacity-30 uppercase">  
          End of Ledger // Page 01 of 01  
        </p>  
      </footer>

      <style>  
        {`  
          body { background-color: #0A0A0A !important; }  
        `}  
      </style>  
    </main>  
  )  
}  
