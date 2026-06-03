import React from 'react'

export default function StadiumSanctuary() {  
  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">  
      {/* Navigation */}  
      <nav className="p-8 border-b border-[#2a2a2a] flex justify-between items-center">  
        <span className="text-sm tracking-widest uppercase italic">NexVoyage Collective</span>  
        <span className="text-sm tracking-widest uppercase text-gray-500">The Stadium Sanctuary</span>  
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20">  
        {/* Editorial Layout */}  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">  
            
          {/* Main Content */}  
          <div className="lg:col-span-8">  
            <h1 className="text-7xl md:text-9xl font-light leading-none mb-12">  
              The <span className="block italic text-gray-100 ml-8 lg:ml-20 mt-2">Stadium</span>  
            </h1>  
              
            <div className="aspect-video overflow-hidden border border-[#2a2a2a] mb-12">  
              <img   
                src="https://cdn.marblism.com/Vx_LJO1XIwc.webp"   
                alt="Stadium Sanctuary View"   
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"  
              />  
            </div>

            <div className="max-w-2xl">  
              <h2 className="text-3xl mb-6 italic text-gray-200">The Pulse of Performance</h2>  
              <p className="font-sans text-gray-400 text-lg leading-relaxed mb-8">  
                Private inner-circle access to world-class stages. This is energy-driven travel, offering elite hospitality in the heart of the action without sacrificing the silence of luxury.  
              </p>  
            </div>  
          </div>

          {/* Side Info (Asymmetrical) */}  
          <div className="lg:col-span-4 lg:mt-64">  
            <div className="border-l border-[#d4af37] pl-8 py-4">  
              <h3 className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-8 font-sans">Exclusive Amenities</h3>  
              <ul className="space-y-12">  
                <li>  
                  <h4 className="text-xl italic mb-2 text-gray-100">Pitch-side Balcony</h4>  
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">  
                    Unrivaled views of the field from your own private terrace.  
                  </p>  
                </li>  
                <li>  
                  <h4 className="text-xl italic mb-2 text-gray-100">VIP Soundproof Lounge</h4>  
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">  
                    The roar of the crowd, only when you want to hear it.  
                  </p>  
                </li>  
                <li>  
                  <h4 className="text-xl italic mb-2 text-gray-100">Michelin-Star Catering</h4>  
                  <p className="font-sans text-sm text-gray-500 leading-relaxed">  
                    In-suite dining curated by world-renowned chefs.  
                  </p>  
                </li>  
              </ul>  
            </div>  
          </div>  
        </div>

        {/* Footer Accent */}  
        <div className="mt-32 border-t border-[#2a2a2a] pt-12 flex justify-between items-end">  
          <div className="text-[10px] tracking-[0.2em] uppercase font-sans text-gray-600">  
            05 / Sanctuary Series  
          </div>  
          <div className="text-2xl italic text-gray-400">  
            "Energy-driven, elegantly controlled."  
          </div>  
        </div>  
      </main>  
    </div>  
  )  
}  
