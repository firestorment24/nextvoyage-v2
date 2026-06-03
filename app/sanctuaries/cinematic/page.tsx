import React from 'react'

export default function CinematicSanctuary() {  
return (  
  <div className="bg-black text-white min-h-screen font-sans">  
    <section className="pt-24 px-12 relative overflow-hidden">  
      <div className="absolute top-24 left-12 z-10">  
        <h1 className="text-white font-serif text-7xl mb-0 italic leading-none">The Cinematic</h1>  
        <h1 className="text-white font-serif text-7xl mt-[-10px] ml-20 leading-none">Sanctuary</h1>  
      </div>  
      <div className="w-full h-[80vh] flex justify-end">  
        <img src="https://cdn.marblism.com/QS08Ye5-snV.webp" alt="Cinematic Sanctuary" className="w-3/4 h-full object-cover grayscale-[20%] contrast-[1.1]"/>  
      </div>  
    </section>  
    <section className="px-12 py-32 max-w-7xl mx-auto">  
      <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">  
        <div className="md:col-span-5 sticky top-24">  
          <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-8">Designed for Stillness</p>  
          <p className="text-white text-2xl font-light leading-relaxed">Curated for storytelling and absolute immersion. A theater where the world outside ceases to exist.</p>  
        </div>  
        <div className="md:col-span-7 flex flex-col gap-32">  
          <div className="pl-0 md:pl-24 pt-40">  
            <h3 className="text-white font-serif text-4xl italic mb-8">Visual Silence</h3>  
            <p className="text-gray-300 text-lg leading-relaxed">Deep shadows and soft brass highlights frame the narrative. The space is a vacuum of noise, leaving only the rhythm of light and shadow.</p>  
          </div>  
        </div>  
      </div>  
    </section>  
  </div>  
)  
}  
