// app/invitation/page.tsx  
import React from 'react';

export default function InvitationPage() {  
  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-[#d4d4d4] font-serif selection:bg-[#c5a47e] selection:text-[#0a0a0a]">  
      <section className="max-w-4xl mx-auto pt-32 pb-20 px-6">  
        <header className="mb-16 border-l border-[#c5a47e]/30 pl-8">  
          <span className="text-[#c5a47e] uppercase tracking-[0.3em] text-xs mb-4 block">  
            Invitation // The Initial Dialogue  
          </span>  
          <h1 className="text-4xl md:text-5xl font-light text-white leading-tight">  
            The Beginning of a Collaboration  
          </h1>  
          <p className="mt-6 text-lg text-[#a1a1a1] leading-relaxed max-w-2xl">  
            At NexVoyage, we believe the finest journeys are co-created. This form is the start of that process—a way for us to understand the rhythm, aesthetic, and intent behind your next departure.  
          </p>  
        </header>

        <form className="space-y-12 bg-[#111] p-10 rounded-sm border border-white/5 shadow-2xl">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div className="space-y-2">  
              <label className="text-xs uppercase tracking-widest text-[#c5a47e]">Full Name</label>  
              <input   
                type="text"   
                placeholder="Elias Thorne"  
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#c5a47e] transition-colors placeholder:text-white/10"  
              />  
            </div>  
            <div className="space-y-2">  
              <label className="text-xs uppercase tracking-widest text-[#c5a47e]">Email Address</label>  
              <input   
                type="email"   
                placeholder="thorne@example.com"  
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#c5a47e] transition-colors placeholder:text-white/10"  
              />  
            </div>  
            <div className="space-y-2">  
              <label className="text-xs uppercase tracking-widest text-[#c5a47e]">Preferred Dates</label>  
              <input   
                type="text"   
                placeholder="Autumn 2026"  
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#c5a47e] transition-colors placeholder:text-white/10"  
              />  
            </div>  
            <div className="space-y-2">  
              <label className="text-xs uppercase tracking-widest text-[#c5a47e]">Departure City</label>  
              <input   
                type="text"   
                placeholder="London, UK"  
                className="w-full bg-transparent border-b border-white/10 py-3 focus:outline-none focus:border-[#c5a47e] transition-colors placeholder:text-white/10"  
              />  
            </div>  
          </div>

          <div className="space-y-4">  
            <label className="text-xs uppercase tracking-widest text-[#c5a47e]">The Vision</label>  
            <textarea   
              rows={4}  
              placeholder="Tell us about the atmosphere you're seeking..."  
              className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#c5a47e] transition-colors placeholder:text-white/10 resize-none"  
            />  
          </div>

          <div className="space-y-4">  
            <label className="text-xs uppercase tracking-widest text-[#c5a47e]">Aesthetic Notes</label>  
            <textarea   
              rows={3}  
              placeholder="Textures, light, specific architectural preferences..."  
              className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#c5a47e] transition-colors placeholder:text-white/10 resize-none"  
            />  
          </div>

          <div className="pt-6">  
            <button   
              type="submit"  
              className="group relative px-12 py-4 bg-[#c5a47e] text-[#0a0a0a] uppercase tracking-[0.2em] text-sm font-bold hover:bg-white transition-all duration-500"  
            >  
              Begin the Dialogue  
            </button>  
          </div>  
        </form>  
      </section>  
    </main>  
  );  
}  
