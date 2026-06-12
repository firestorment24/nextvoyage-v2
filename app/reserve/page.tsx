import React from 'react';

export default function TheReserve() {  
  return (  
    <div className="min-h-screen bg-[#0a0a0a] text-stone-200 flex flex-col md:flex-row font-serif">  
      {/* Left Side: The Hero (Kept as you liked it) */}  
      <div className="md:w-5/12 h-64 md:h-screen relative overflow-hidden">  
        <img   
          src="https://cdn.marblism.com/Hz7T6Y3cGTU.webp"   
          alt="The Concierge"   
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.6]"  
        />  
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0a0a0a]/50 to-[#0a0a0a]" />  
        <div className="absolute bottom-16 left-16 max-w-xs space-y-4">  
          <div className="w-12 h-[1px] bg-[#d4af37]" />  
          <h1 className="text-5xl font-light tracking-tighter text-[#d4af37]">THE RESERVE</h1>  
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-500">Secure Transmission</p>  
        </div>  
      </div>

      {/* Right Side: Refined Form */}  
      <div className="md:w-7/12 flex items-center justify-center p-8 md:p-12 lg:p-24 bg-[#0a0a0a]">  
        <div className="w-full max-w-2xl">  
            
          <form className="space-y-20">  
              
            {/* Section 01: Identity */}  
            <section className="space-y-10">  
              <div className="flex items-center gap-4">  
                <span className="text-[#d4af37] text-xs font-mono tracking-widest">01</span>  
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Identity</h2>  
                <div className="flex-grow h-[1px] bg-stone-900" />  
              </div>  
                
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
                <div className="group relative">  
                  <input   
                    type="text"   
                    className="w-full bg-transparent border-b border-stone-800 py-3 outline-none focus:border-[#d4af37] transition-all duration-700 text-lg font-light placeholder:text-stone-800"  
                    placeholder="Principal Name"  
                  />  
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] group-focus-within:w-full transition-all duration-700" />  
                </div>  
                <div className="group relative">  
                  <input   
                    type="email"   
                    className="w-full bg-transparent border-b border-stone-800 py-3 outline-none focus:border-[#d4af37] transition-all duration-700 text-lg font-light placeholder:text-stone-800"  
                    placeholder="Contact Pathway (Email)"  
                  />  
                  <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] group-focus-within:w-full transition-all duration-700" />  
                </div>  
              </div>  
            </section>

            {/* Section 02: Selection */}  
            <section className="space-y-10">  
              <div className="flex items-center gap-4">  
                <span className="text-[#d4af37] text-xs font-mono tracking-widest">02</span>  
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Scope of Interest</h2>  
                <div className="flex-grow h-[1px] bg-stone-900" />  
              </div>  
                
              <div className="flex flex-wrap gap-4">  
                {['Global Expeditions', 'Sanctuary Design', 'Private Advisory', 'Portfolio Curation'].map((item) => (  
                  <label key={item} className="cursor-pointer group">  
                    <input type="checkbox" className="hidden peer" />  
                    <span className="px-6 py-3 border border-stone-900 text-[10px] uppercase tracking-widest text-stone-500 transition-all duration-500 peer-checked:border-[#d4af37] peer-checked:text-[#d4af37] group-hover:border-stone-700">  
                      {item}  
                    </span>  
                  </label>  
                ))}  
              </div>  
            </section>

            {/* Section 03: The Brief */}  
            <section className="space-y-10">  
              <div className="flex items-center gap-4">  
                <span className="text-[#d4af37] text-xs font-mono tracking-widest">03</span>  
                <h2 className="text-[10px] uppercase tracking-[0.3em] text-stone-500">The Brief</h2>  
                <div className="flex-grow h-[1px] bg-stone-900" />  
              </div>  
                
              <div className="relative group">  
                <textarea   
                  rows={4}  
                  className="w-full bg-transparent border-b border-stone-800 py-3 outline-none focus:border-[#d4af37] transition-all duration-700 text-lg font-light placeholder:text-stone-800 resize-none"  
                  placeholder="Outline the vision or requirements..."  
                />  
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#d4af37] group-focus-within:w-full transition-all duration-700" />  
              </div>  
            </section>

            {/* Action */}  
            <div className="pt-10">  
              <button className="group flex items-center gap-8 hover:gap-12 transition-all duration-700">  
                <span className="text-[#d4af37] text-xs uppercase tracking-[0.5em] font-bold">Transmit Inquiry</span>  
                <div className="w-24 h-[1px] bg-[#d4af37] relative overflow-hidden">  
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />  
                </div>  
              </button>  
            </div>

          </form>  
        </div>  
      </div>  
    </div>  
  );  
}  
