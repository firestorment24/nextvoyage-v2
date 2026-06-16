import React from 'react';

// Archive Page: Overriding global "Warm Parchment" for a "Dark Room" aesthetic.  
// Fix: Removed 'styled-jsx' to resolve Vercel build error.

export default function ArchivePage() {  
  return (  
    <div className="min-h-screen bg-[#1C1C1C] text-[#FCFAF7] selection:bg-[#C5A059] selection:text-[#1C1C1C]">  
      <style>  
        {`  
          /* Local override for global header backgrounds */  
          h1, h2, h3, h4 {  
            background-color: transparent !important;  
            color: #C5A059 !important;  
          }  
            
          body {  
            background-color: #1C1C1C !important;  
          }  
        `}  
      </style>

      <main className="max-w-6xl mx-auto px-6 py-24">  
        <header className="mb-20 border-b border-[#C5A059]/20 pb-12">  
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-4 italic">  
            The Sanctuary Archive  
          </h1>  
          <p className="text-sm uppercase tracking-[0.3em] text-[#C5A059]/80">  
            A Curated Collection of Discontinued Journeys  
          </p>  
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-16">  
          <div className="group cursor-crosshair">  
            <div className="aspect-[4/5] bg-neutral-900 mb-6 overflow-hidden border border-[#C5A059]/10 transition-colors duration-500 group-hover:border-[#C5A059]/40">  
              <div className="w-full h-full flex items-center justify-center text-[#C5A059]/20 italic">  
                Vaulted Imagery  
              </div>  
            </div>  
            <h2 className="text-2xl font-light mb-2">The Kyoto Shadows</h2>  
            <p className="text-sm text-[#FCFAF7]/60 leading-relaxed max-w-md">  
              An exploration of twilight rituals in the Gion district. This journey has been retired to the archive to preserve its exclusivity.  
            </p>  
          </div>

          <div className="group cursor-crosshair">  
            <div className="aspect-[4/5] bg-neutral-900 mb-6 overflow-hidden border border-[#C5A059]/10 transition-colors duration-500 group-hover:border-[#C5A059]/40">  
              <div className="w-full h-full flex items-center justify-center text-[#C5A059]/20 italic">  
                Vaulted Imagery  
              </div>  
            </div>  
            <h2 className="text-2xl font-light mb-2">Atacama Desolation</h2>  
            <p className="text-sm text-[#FCFAF7]/60 leading-relaxed max-w-md">  
              High-altitude solitude in the Martian landscapes of Chile. Replaced by the 2027 Lunar Series.  
            </p>  
          </div>  
        </section>

        <footer className="mt-32 pt-12 border-t border-[#C5A059]/10 text-[10px] uppercase tracking-[0.5em] text-[#C5A059]/40">  
          NexVoyage Collective &copy; 2026 — All Rights Reserved  
        </footer>  
      </main>  
    </div>  
  );  
}  
