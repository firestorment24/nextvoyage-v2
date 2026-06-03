import React from 'react'

export default function CinematicSanctuary() {  
return (  
  <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">  
    {/* Navigation */}  
    <nav className="p-8 border-b border-[#2a2a2a] flex justify-between items-center">  
      <span className="text-sm tracking-widest uppercase">NexVoyage Collective</span>  
      <span className="text-sm tracking-widest uppercase italic text-gray-500">The Cinematic Sanctuary</span>  
    </nav>

    <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">  
      {/* Editorial Grid Layout */}  
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">  
        <div className="lg:col-span-5 order-2 lg:order-1">  
          <div className="aspect-[3/4] overflow-hidden border border-[#2a2a2a] relative group">  
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />  
            <img   
              src="https://cdn.marblism.com/QS08Ye5-snV.webp"   
              alt="The Cinematic Sanctuary"   
              className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105"  
            />  
          </div>  
          <p className="mt-6 text-[10px] tracking-[0.4em] text-gray-600 uppercase font-sans">Scene 02. Designed for Stillness</p>  
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">  
          <h1 className="text-6xl md:text-8xl font-light leading-none mb-12 relative">  
            The <br />  
            <span className="italic text-gray-200">Cinematic</span>  
            <span className="absolute -bottom-4 left-0 w-24 h-[1px] bg-[#d4af37]"></span>  
          </h1>  
            
          <div className="max-w-lg">  
            <h2 className="text-2xl mb-6 italic text-gray-300">The Art of the Frame</h2>  
            <p className="font-sans text-gray-400 leading-relaxed text-lg mb-12">  
              A sanctuary built for visual storytellers and those who live life in high-definition. Here, every window is a composition and every suite is a masterclass in quiet, atmospheric luxury.  
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-[#2a2a2a] pt-12">  
              <div>  
                <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4 font-sans">Amenities</h3>  
                <ul className="font-sans text-sm text-gray-400 space-y-3">  
                  <li>Private 8K Screening Room</li>  
                  <li>Acoustically Treated Suites</li>  
                  <li>Director's Cut Concierge</li>  
                </ul>  
              </div>  
              <div className="flex flex-col justify-end">  
                <p className="italic text-gray-500 text-sm">  
                  "Life as a masterpiece, framed in silence."  
                </p>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </main>

    <footer className="p-12 border-t border-[#2a2a2a] text-center">  
      <p className="text-[10px] tracking-[0.3em] uppercase text-gray-700 font-sans">Sanctuary 06 / Collective Works</p>  
    </footer>  
  </div>  
)  
}  
