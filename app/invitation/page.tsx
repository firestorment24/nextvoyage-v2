import React from 'react';  
import Navigation from '../components/Navigation';  
import Footer from '../components/Footer';

export default function InvitationPage() {  
  return (  
    <main className="bg-[#0a0a0a] text-[#d4af37] min-h-screen font-serif selection:bg-[#d4af37] selection:text-black">  
      <Navigation current="Invitation // The Initial Dialogue" />  
        
      <section className="max-w-4xl mx-auto px-6 pt-32 pb-20">  
        <div className="text-center mb-16">  
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest mb-6">  
            THE BEGINNING OF A COLLABORATION  
          </h1>  
          <p className="text-lg md:text-xl text-[#a0a0a0] max-w-2xl mx-auto leading-relaxed italic">  
            This is not an inquiry; it is the opening of a conversation. Tell us where your imagination is leading you.  
          </p>  
        </div>

        <form className="space-y-12 max-w-2xl mx-auto border-t border-[#d4af37]/20 pt-12">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="flex flex-col border-b border-[#d4af37]/30 py-2">  
              <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#d4af37]/60">Full Name</label>  
              <input   
                type="text"   
                placeholder="Identity"  
                className="bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#333] text-lg"  
              />  
            </div>  
            <div className="flex flex-col border-b border-[#d4af37]/30 py-2">  
              <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#d4af37]/60">Email Address</label>  
              <input   
                type="email"   
                placeholder="Communication Channel"  
                className="bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#333] text-lg"  
              />  
            </div>  
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="flex flex-col border-b border-[#d4af37]/30 py-2">  
              <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#d4af37]/60">Preferred Dates</label>  
              <input   
                type="text"   
                placeholder="The Timing"  
                className="bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#333] text-lg"  
              />  
            </div>  
            <div className="flex flex-col border-b border-[#d4af37]/30 py-2">  
              <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#d4af37]/60">Departure City</label>  
              <input   
                type="text"   
                placeholder="The Origin"  
                className="bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#333] text-lg"  
              />  
            </div>  
          </div>

          <div className="flex flex-col border-b border-[#d4af37]/30 py-2">  
            <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#d4af37]/60">The Vision</label>  
            <textarea   
              rows={3}  
              placeholder="What defines this journey?"  
              className="bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#333] text-lg resize-none"  
            />  
          </div>

          <div className="flex flex-col border-b border-[#d4af37]/30 py-2">  
            <label className="text-[10px] uppercase tracking-[0.3em] mb-2 text-[#d4af37]/60">Aesthetic Notes</label>  
            <textarea   
              rows={2}  
              placeholder="Atmosphere, texture, and silence..."  
              className="bg-transparent border-none outline-none focus:ring-0 placeholder:text-[#333] text-lg resize-none"  
            />  
          </div>

          <div className="pt-8 text-center">  
            <button className="group relative px-12 py-4 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-all duration-500 tracking-[0.4em] uppercase text-xs">  
              Begin the Dialogue  
            </button>  
          </div>  
        </form>  
      </section>

      <Footer />  
    </main>  
  );  
}  
