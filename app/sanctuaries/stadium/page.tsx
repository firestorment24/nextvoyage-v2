import React from 'react'  
export default function StadiumSanctuary() {  
  return (  
    <div className="bg-black text-white min-h-screen font-sans">  
      <section className="pt-24 px-12 relative overflow-hidden">  
        <div className="absolute top-24 left-12 z-10">  
          <h1 className="text-white font-serif text-7xl mb-0 italic leading-none">The Stadium</h1>  
          <h1 className="text-white font-serif text-7xl mt-[-10px] ml-20 leading-none">Sanctuary</h1>  
        </div>  
        <div className="w-full h-[80vh] flex justify-end">  
          <img src="https://cdn.marblism.com/Vx_LJO1XIwc.webp" alt="Stadium" className="w-3/4 h-full object-cover grayscale-[30%] contrast-[1.2]"/>  
        </div>  
      </section>  
      <section className="px-12 py-32 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">  
          <div className="md:col-span-5 sticky top-24">  
            <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-8">The Pulse of Performance</p>  
            <p className="text-white text-2xl font-light leading-relaxed">Absolute privacy meeting the roar of the crowd.</p>  
          </div>  
          <div className="md:col-span-7 pl-0 md:pl-24">  
            <h3 className="text-white font-serif text-4xl italic mb-8">Redefining the Box</h3>  
            <p className="text-gray-300 text-lg leading-relaxed">Every surface is textured to absorb chaos while reflecting performance intensity.</p>  
          </div>  
        </div>  
      </section>  
    </div>  
  )  
}  
