import React from 'react';

export default function ReservePage() {  
  return (  
    <main className="min-h-screen bg-[#050505] flex justify-center items-center p-6 md:p-10 selection:bg-[#d4af37] selection:text-black">  
      {/* Background Gradient Overlay */}  
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#050505_100%)] pointer-events-none" />

      <section className="relative z-10 max-w-[900px] w-full border border-[#d4af37]/10 bg-black/80 p-10 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.9)]">  
          
        {/* Brass Corner Accents */}  
        <div className="absolute top-5 left-5 w-5 h-5 border-t border-l border-[#d4af37]" />  
        <div className="absolute bottom-5 right-5 w-5 h-5 border-b border-r border-[#d4af37]" />

        <header className="text-center mb-16 md:mb-20">  
          <h1 className="font-serif text-4xl md:text-6xl text-[#d4af37] uppercase tracking-[0.5em] md:tracking-[0.6em] font-light mb-6 leading-tight">  
            The Reserve  
          </h1>  
          <p className="font-sans text-[0.65rem] md:text-[0.75rem] uppercase tracking-[0.4em] text-white/40 font-extralight">  
            Beginning the Dialogue  
          </p>  
        </header>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">  
            
          {/* Full Name */}  
          <div className="group flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37] transition-colors duration-700">  
            <label className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-4">Full Name</label>  
            <input   
              type="text"   
              placeholder="Elias Thorne"  
              className="bg-transparent border-none outline-none text-[#f0f0f0] font-serif text-xl md:text-2xl font-light placeholder:text-white/10"  
            />  
          </div>

          {/* Email */}  
          <div className="group flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37] transition-colors duration-700">  
            <label className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-4">Email Address</label>  
            <input   
              type="email"   
              placeholder="e.thorne@domain.com"  
              className="bg-transparent border-none outline-none text-[#f0f0f0] font-serif text-xl md:text-2xl font-light placeholder:text-white/10"  
            />  
          </div>

          {/* Desired Dates */}  
          <div className="group flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37] transition-colors duration-700">  
            <label className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-4">Desired Dates</label>  
            <input   
              type="text"   
              placeholder="Autumn 2026"  
              className="bg-transparent border-none outline-none text-[#f0f0f0] font-serif text-xl md:text-2xl font-light placeholder:text-white/10"  
            />  
          </div>

          {/* City of Interest */}  
          <div className="group flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37] transition-colors duration-700">  
            <label className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-4">City of Interest</label>  
            <input   
              type="text"   
              placeholder="Kyoto"  
              className="bg-transparent border-none outline-none text-[#f0f0f0] font-serif text-xl md:text-2xl font-light placeholder:text-white/10"  
            />  
          </div>

          {/* The Vision */}  
          <div className="md:col-span-2 group flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37] transition-colors duration-700">  
            <label className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-4">The Vision</label>  
            <textarea   
              placeholder="Describe the journey you wish to manifest..."  
              className="bg-transparent border-none outline-none text-[#f0f0f0] font-serif text-xl md:text-2xl font-light placeholder:text-white/10 resize-none h-24"  
            />  
          </div>

          {/* Aesthetic Notes */}  
          <div className="md:col-span-2 group flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37] transition-colors duration-700">  
            <label className="text-[0.65rem] uppercase tracking-[0.25em] text-[#d4af37]/80 mb-4">Aesthetic Notes</label>  
            <textarea   
              placeholder="Textures, tones, and sensory requirements..."  
              className="bg-transparent border-none outline-none text-[#f0f0f0] font-serif text-xl md:text-2xl font-light placeholder:text-white/10 resize-none h-24"  
            />  
          </div>

          {/* Submit Button */}  
          <div className="md:col-span-2 flex justify-center mt-12">  
            <button   
              type="submit"   
              className="group relative border border-[#d4af37] px-14 py-5 overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"  
            >  
              <span className="relative z-10 text-[#d4af37] text-[0.75rem] uppercase tracking-[0.4em] transition-colors duration-500 group-hover:text-black">  
                Submit to the Ledger  
              </span>  
              <div className="absolute inset-0 bg-[#d4af37] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />  
            </button>  
          </div>

        </form>  
      </section>  
    </main>  
  );  
}  
