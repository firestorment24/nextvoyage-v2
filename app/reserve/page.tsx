import React from 'react';

export default function ReservePage() {  
  return (  
    <main className="min-h-screen bg-black text-[#f5f5f5] font-inter flex justify-center items-center p-10">  
      <div className="max-w-3xl w-full border border-[#d4af37]/20 p-10 md:p-14 bg-gradient-to-br from-[#0a0a0a] to-black shadow-2xl">  
          
        <header className="text-center mb-16">  
          <h1 className="font-cormorant text-5xl md:text-6xl text-[#d4af37] uppercase tracking-[0.4em] font-light mb-4">  
            The Reserve  
          </h1>  
          <p className="font-inter uppercase tracking-[0.3em] text-xs text-white/60">  
            Beginning the Dialogue  
          </p>  
        </header>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">  
          <div className="flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37]">  
            <label className="text-[0.7rem] uppercase tracking-widest text-[#d4af37] mb-2">Full Name</label>  
            <input type="text" className="bg-transparent border-none text-[#f5f5f5] font-cormorant text-xl outline-none" placeholder="Elias Thorne" />  
          </div>

          <div className="flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37]">  
            <label className="text-[0.7rem] uppercase tracking-widest text-[#d4af37] mb-2">Email Address</label>  
            <input type="email" className="bg-transparent border-none text-[#f5f5f5] font-cormorant text-xl outline-none" placeholder="e.thorne@domain.com" />  
          </div>

          <div className="flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37]">  
            <label className="text-[0.7rem] uppercase tracking-widest text-[#d4af37] mb-2">Desired Dates</label>  
            <input type="text" className="bg-transparent border-none text-[#f5f5f5] font-cormorant text-xl outline-none" placeholder="Autumn 2026" />  
          </div>

          <div className="flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37]">  
            <label className="text-[0.7rem] uppercase tracking-widest text-[#d4af37] mb-2">City of Interest</label>  
            <input type="text" className="bg-transparent border-none text-[#f5f5f5] font-cormorant text-xl outline-none" placeholder="Kyoto" />  
          </div>

          <div className="md:col-span-2 flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37]">  
            <label className="text-[0.7rem] uppercase tracking-widest text-[#d4af37] mb-2">The Vision</label>  
            <textarea className="bg-transparent border-none text-[#f5f5f5] font-cormorant text-xl outline-none resize-none h-20" placeholder="Describe the journey..."></textarea>  
          </div>

          <div className="md:col-span-2 flex flex-col border-b border-[#d4af37]/30 pb-2 focus-within:border-[#d4af37]">  
            <label className="text-[0.7rem] uppercase tracking-widest text-[#d4af37] mb-2">Aesthetic Notes</label>  
            <textarea className="bg-transparent border-none text-[#f5f5f5] font-cormorant text-xl outline-none resize-none h-20" placeholder="Textures, tones..."></textarea>  
          </div>

          <div className="md:col-span-2 flex justify-center mt-10">  
            <button className="border border-[#d4af37] text-[#d4af37] px-12 py-4 uppercase tracking-[0.3em] text-sm hover:bg-[#d4af37] hover:text-black transition-all duration-500">  
              Submit to the Ledger  
            </button>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}  
