import React from 'react'

export default function SafariSanctuary() {  
return (  
  <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">  
    {/* Navigation */}  
    <nav className="p-8 border-b border-[#2a2a2a] flex justify-between items-center">  
      <span className="text-sm tracking-widest uppercase">NexVoyage Collective</span>  
      <span className="text-sm tracking-widest uppercase italic text-gray-500">The Safari Sanctuary</span>  
    </nav>

    <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">  
      {/* Editorial Split */}  
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">  
          
        {/* Left Side: Content */}  
        <div>  
          <h1 className="text-7xl md:text-9xl font-light leading-none mb-8">  
            The <br />  
            <span className="italic text-gray-200 -ml-2">Safari</span>  
          </h1>  
          <div className="w-20 h-[1px] bg-[#d4af37] mb-12"></div>  
            
          <h2 className="text-2xl mb-6 italic text-gray-300">Raw Elegance</h2>  
          <p className="font-sans text-gray-400 text-lg leading-relaxed mb-12 max-w-md">  
            A primal reset in the heart of the wild. Experience the untamed world from a position of absolute refinement, where the boundary between nature and luxury dissolves at dusk.  
          </p>

          <div className="space-y-8 border-l border-[#2a2a2a] pl-8">  
            <div>  
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-600 mb-2 font-sans">The Vibe</h3>  
              <p className="text-gray-300 italic text-xl">"Untamed, yet perfectly composed."</p>  
            </div>  
            <div>  
              <h3 className="text-[10px] tracking-[0.4em] uppercase text-gray-600 mb-4 font-sans">Amenities</h3>  
              <ul className="font-sans text-sm text-gray-500 grid grid-cols-1 gap-2">  
                <li className="flex items-center gap-3">  
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />  
                  Open-Air Fire Pit at Dusk  
                </li>  
                <li className="flex items-center gap-3">  
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />  
                  Private Tracking Specialist  
                </li>  
                <li className="flex items-center gap-3">  
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]/40" />  
                  Starlit Sky Observatories  
                </li>  
              </ul>  
            </div>  
          </div>  
        </div>

        {/* Right Side: Visual */}  
        <div className="relative">  
          <div className="aspect-[4/5] overflow-hidden border border-[#2a2a2a]">  
            <img   
              src="https://cdn.marblism.com/q4D43M9hfum.webp"   
              alt="Safari Sanctuary Fire Pit"   
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"  
            />  
          </div>  
          {/* Tucked Caption (Maybourne Style) */}  
          <div className="absolute -bottom-8 right-0 bg-[#0a0a0a] p-4 border-l border-t border-[#2a2a2a]">  
             <p className="text-[10px] tracking-[0.2em] uppercase text-gray-500 font-sans">Loc: The Great Rift</p>  
          </div>  
        </div>  
      </div>  
    </main>

    <footer className="p-12 mt-20 border-t border-[#2a2a2a] flex justify-between">  
      <p className="text-[10px] tracking-[0.3em] uppercase text-gray-700 font-sans">© 2026 NexVoyage</p>  
      <p className="text-[10px] tracking-[0.3em] uppercase text-gray-700 font-sans italic">08 / Sanctuary</p>  
    </footer>  
  </div>  
)  
}  
