'use client'

import React from 'react'

export default function ReservePage() {  
  return (  
    <div className="min-h-screen bg-black text-zinc-400 font-light selection:bg-zinc-800 selection:text-white">  
      {/* Navigation */}  
      <nav className="p-8 flex justify-between items-center border-b border-zinc-900">  
        <div className="text-zinc-100 tracking-widest uppercase text-sm">NexVoyage / Collective</div>  
        <div className="text-[10px] tracking-widest uppercase opacity-50">Private Access Protocol</div>  
      </nav>

      <main className="max-w-2xl mx-auto py-24 px-6">  
        <header className="mb-16">  
          <h1 className="text-zinc-100 text-3xl font-light tracking-tight mb-4">The Reserve</h1>  
          <p className="text-sm leading-relaxed max-w-md">  
            Membership is restricted to individuals requiring specific biological recalibration.   
            Access is granted based on physiological alignment and destination capacity.  
          </p>  
        </header>

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>  
          {/* Objective Section */}  
          <section className="space-y-6">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
              01. Primary Objective  
            </label>  
            <div className="grid grid-cols-1 gap-4 text-xs">  
              {['Neural Decoupling', 'Circadian Synchronization', 'Parasympathetic Dominance'].map((obj) => (  
                <button   
                  key={obj}  
                  type="button"  
                  className="border border-zinc-800 p-4 text-left hover:border-zinc-100 transition-colors duration-500 uppercase tracking-widest"  
                >  
                  {obj}  
                </button>  
              ))}  
            </div>  
          </section>

          {/* Biological Intent */}  
          <section className="space-y-6">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
              02. Biological Intent  
            </label>  
            <textarea   
              rows={4}   
              placeholder="Define the specific cognitive or physiological output required..."  
              className="w-full bg-transparent border border-zinc-800 p-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm placeholder:opacity-30"  
            />  
          </section>

          {/* Identification */}  
          <section className="space-y-6">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
              03. Identification  
            </label>  
            <input   
              type="email"   
              placeholder="Encrypted Email Address"  
              className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm"  
            />  
          </section>

          <button   
            type="submit"  
            className="w-full py-6 mt-12 bg-zinc-100 text-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-colors"  
          >  
            Request Calibration  
          </button>  
        </form>

        <footer className="mt-32 pt-8 border-t border-zinc-900 flex justify-between text-[10px] uppercase tracking-widest opacity-40">  
          <div>Status: Verification Pending</div>  
          <div>EST. 2026</div>  
        </footer>  
      </main>

      {/* Decorative Brass Accent */}  
      <div className="fixed bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-[#B5A642] to-transparent opacity-20" />  
    </div>  
  )  
}  
