import React from 'react'

export default function FortressSanctuary() {  
  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-[#d4af37] font-serif selection:bg-[#d4af37] selection:text-black">  
      {/* Navigation */}  
      <nav className="p-8 border-b border-[#2a2a2a] flex justify-between items-center">  
        <span className="text-sm tracking-widest uppercase">NexVoyage Collective</span>  
        <span className="text-sm tracking-widest uppercase italic text-gray-500">The Fortress Sanctuary</span>  
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 lg:py-32">  
        {/* Asymmetrical Hero Section */}  
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">  
          <div className="lg:col-span-7">  
            <h1 className="text-6xl md:text-8xl font-light leading-tight mb-8">  
              The <span className="italic block -mt-2 ml-12 lg:ml-24 text-gray-200">Fortress</span>  
            </h1>  
            <p className="text-xl md:text-2xl text-gray-400 font-sans max-w-xl leading-relaxed">  
              Discretion is the ultimate asset. Where heritage meets heavy-duty privacy, providing the luxury of invisibility for those who require absolute security.  
            </p>  
          </div>  
          <div className="lg:col-span-5">  
            <div className="aspect-[4/5] overflow-hidden border border-[#2a2a2a]">  
              <img   
                src="https://cdn.marblism.com/hvsJKd2n3Vn.webp"   
                alt="The Fortress Sanctuary"   
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"  
              />  
            </div>  
            <p className="mt-4 text-[10px] tracking-[0.2em] text-right text-gray-600 uppercase font-sans">Fig 03. Brutalist Cliffside Villa</p>  
          </div>  
        </div>

        {/* Content Grid (Maybourne Pattern) */}  
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-16">  
          <div className="border-t border-[#2a2a2a] pt-8">  
            <h2 className="text-2xl mb-6 italic text-gray-200">Absolute Security</h2>  
            <p className="font-sans text-gray-400 leading-relaxed text-sm">  
              Our anchor sanctuary is a stronghold of history, redesigned for modern discretion. It is not just a home, but a legacy vetted by security specialists.  
            </p>  
          </div>  
            
          <div className="border-t border-[#2a2a2a] pt-8 lg:mt-24">  
            <h2 className="text-2xl mb-6 italic text-gray-200">Exclusive Amenities</h2>  
            <ul className="font-sans text-gray-400 space-y-4 text-sm">  
              <li className="flex items-center gap-4">  
                <span className="w-1 h-[1px] bg-[#d4af37]" />  
                Reinforced Armored Glass  
              </li>  
              <li className="flex items-center gap-4">  
                <span className="w-1 h-[1px] bg-[#d4af37]" />  
                Autonomous Perimeter Security  
              </li>  
              <li className="flex items-center gap-4">  
                <span className="w-1 h-[1px] bg-[#d4af37]" />  
                Deep-Storage Private Vault  
              </li>  
            </ul>  
          </div>

          <div className="border-t border-[#2a2a2a] pt-8">  
            <h2 className="text-2xl mb-6 italic text-gray-200">Private Legacy</h2>  
            <p className="font-sans text-gray-400 leading-relaxed text-sm">  
              A sanctuary that honors the past while securing your future. Every detail is calibrated for those who define success by the silence they command.  
            </p>  
          </div>  
        </div>

        {/* Quote Section */}  
        <div className="mt-40 text-center">  
          <p className="text-3xl md:text-5xl italic font-light text-gray-300 max-w-4xl mx-auto leading-tight">  
            "Privacy as the Ultimate Asset."  
          </p>  
        </div>  
      </main>

      <footer className="p-12 border-t border-[#2a2a2a] text-center">  
        <p className="text-[10px] tracking-[0.3em] uppercase text-gray-700 font-sans">© 2026 NexVoyage Collective</p>  
      </footer>  
    </div>  
  )  
}  
