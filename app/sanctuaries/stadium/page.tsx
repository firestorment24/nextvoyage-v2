import React from 'react'

export default function StadiumSanctuary() {  
  return (  
    <div className="bg-black text-white min-h-screen font-sans">  
      {/* Header Section: Tucked Serif Header (Maybourne Pattern) */}  
      <section className="pt-24 px-12 relative overflow-hidden">  
        <div className="absolute top-24 left-12 z-10">  
          <h1 className="text-white font-serif text-7xl mb-0 italic leading-none">  
            The Stadium  
          </h1>  
          <h1 className="text-white font-serif text-7xl mt-[-10px] ml-20 leading-none">  
            Sanctuary  
          </h1>  
        </div>  
          
        {/* High-Contrast Hero Visual */}  
        <div className="w-full h-[80vh] flex justify-end">  
          <img   
            src="https://cdn.marblism.com/Vx_LJO1XIwc.webp"   
            alt="Stadium Sanctuary"  
            className="w-3/4 h-full object-cover grayscale-[30%] contrast-[1.2]"  
          />  
        </div>  
      </section>

      {/* Content Grid: Asymmetrical Magazine Layout */}  
      <section className="px-12 py-32 max-w-7xl mx-auto">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20 items-start">  
          <div className="md:col-span-5 sticky top-24">  
            <p className="text-gray-400 text-sm uppercase tracking-[0.3em] mb-8">  
              The Pulse of Performance  
            </p>  
            <p className="text-white text-2xl font-light leading-relaxed">  
              An immersive suite designed for the elite athlete and the high-stakes spectator.   
              Absolute privacy meeting the roar of the crowd.  
            </p>  
          </div>  
            
          <div className="md:col-span-7 flex flex-col gap-32">  
            {/* Placeholder for secondary assets */}  
            <div className="bg-zinc-900 aspect-[4/5] w-full flex items-center justify-center border border-zinc-800">  
               <span className="text-zinc-600 italic">Visual asset loading...</span>  
            </div>  
              
            <div className="pl-0 md:pl-24">  
              <h3 className="text-white font-serif text-4xl italic mb-8">  
                Redefining the Box  
              </h3>  
              <p className="text-gray-300 text-lg leading-relaxed">  
                Every surface is textured to absorb the chaos of the exterior while reflecting the   
                intensity of the performance within. Brass accents catch the floodlights, casting   
                shadows that define the space as a fortress of focus.  
              </p>  
            </div>  
          </div>  
        </div>  
      </section>  
    </div>  
  )  
}  
