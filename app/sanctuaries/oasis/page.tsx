import React from 'react'

export default function OasisSanctuary() {  
return (  
<div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">  
  {/* Navigation */}  
  <nav className="p-8 border-b border-[#2a2a2a] flex justify-between items-center">  
    <span className="text-sm tracking-widest uppercase italic">NexVoyage Collective</span>  
    <span className="text-sm tracking-widest uppercase text-gray-500">The Oasis Sanctuary</span>  
  </nav>

  <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">  
    {/* Full Width Hero Image */}  
    <div className="relative mb-24 overflow-hidden border border-[#2a2a2a]">  
      <div className="aspect-[21/9] overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/_nMQUkOxAAt.webp"   
          alt="Oasis Sanctuary at Night"   
          className="w-full h-full object-cover grayscale brightness-50 hover:grayscale-0 hover:brightness-100 transition-all duration-1000 scale-105"  
        />  
      </div>  
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />  
      <div className="absolute bottom-12 left-12">  
        <h1 className="text-6xl md:text-9xl font-light text-gray-100 leading-none">  
          The <span className="italic block mt-4">Oasis</span>  
        </h1>  
      </div>  
    </div>

    {/* Content Grid */}  
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">  
      <div className="lg:col-span-2">  
        <h2 className="text-4xl italic mb-8 text-gray-200">A Primal Reset</h2>  
        <div className="columns-1 md:columns-2 gap-12 font-sans text-gray-400 text-lg leading-relaxed">  
          <p className="mb-8">  
            In the heart of the desert, where the silence is absolute and the stars are within reach, the Oasis Sanctuary offers a return to what is essential. This is not just a destination; it is a recalibration.  
          </p>  
          <p>  
            Designed for those who seek the profound peace of the void, our desert estates blend seamlessly into the dunes, offering a modern refuge that honors the ancient landscape.  
          </p>  
        </div>  
      </div>

      <div className="border border-[#2a2a2a] p-10 bg-black/40 backdrop-blur-sm">  
        <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8 font-sans">The Amenities</h3>  
        <ul className="space-y-8">  
          <li className="border-b border-[#2a2a2a] pb-6">  
            <h4 className="text-xl italic text-gray-100 mb-2">Infinity Mirage</h4>  
            <p className="text-sm font-sans text-gray-500 leading-relaxed">A pool that vanishes into the horizon, blending sky and water.</p>  
          </li>  
          <li className="border-b border-[#2a2a2a] pb-6">  
            <h4 className="text-xl italic text-gray-100 mb-2">Celestial Lounge</h4>  
            <p className="text-sm font-sans text-gray-500 leading-relaxed">Open-air sky beds designed for world-class stargazing.</p>  
          </li>  
          <li className="pb-2">  
            <h4 className="text-xl italic text-gray-100 mb-2">Thermal Springs</h4>  
            <p className="text-sm font-sans text-gray-500 leading-relaxed">Subterranean spa rituals inspired by desert traditions.</p>  
          </li>  
        </ul>  
      </div>  
    </div>

    {/* Bottom Quote */}  
    <div className="mt-40 text-center border-t border-[#2a2a2a] pt-20">  
      <p className="text-2xl md:text-4xl italic font-light text-gray-400 max-w-3xl mx-auto leading-relaxed">  
        "Where the void becomes the view."  
      </p>  
      <p className="mt-12 text-[10px] tracking-[0.5em] uppercase text-gray-700 font-sans">Sanctuary 09 / Finale</p>  
    </div>  
  </main>

  <footer className="p-12 text-center text-gray-800 text-[10px] font-sans tracking-widest">  
    NEXVOYAGE COLLECTIVE | ALL RIGHTS RESERVED  
  </footer>  
</div>  
)  
}  
