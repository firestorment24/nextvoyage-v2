'use client'

import React from 'react'

export default function ReservePage() {  
  return (  
    <div className="min-h-screen bg-black text-zinc-400 font-light selection:bg-zinc-800 selection:text-white">  
      {/* Navigation */}  
      <nav className="p-8 flex justify-between items-center border-b border-zinc-900">  
        <div className="text-zinc-100 tracking-widest uppercase text-sm">NexVoyage / Collective</div>  
        <div className="text-[10px] tracking-widest uppercase opacity-50">Inquiry Protocol</div>  
      </nav>

      <main className="max-w-2xl mx-auto py-24 px-6">  
        <header className="mb-16">  
          <h1 className="text-zinc-100 text-3xl font-light tracking-tight mb-4">The Reserve</h1>  
          <p className="text-sm leading-relaxed max-w-md">  
            Registration for the NexVoyage Collective. Please define the parameters of your required recalibration.  
          </p>  
        </header>

        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>  
            
          {/* Sanctuary Selection */}  
          <section className="space-y-6">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
              01. Desired Sanctuary  
            </label>  
            <select className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm appearance-none cursor-pointer">  
              <option className="bg-black">Select Destination...</option>  
              <option className="bg-black">The Maybourne (Neural Decoupling)</option>  
              <option className="bg-black">RC Yacht Collection (Circadian Sync)</option>  
              <option className="bg-black">TCI Trifecta (Parasympathetic Dominance)</option>  
              <option className="bg-black">Undisclosed / Consultant's Choice</option>  
            </select>  
          </section>

          {/* Logistics: Dates & Cohort */}  
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="space-y-6">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
                02. Temporal Window  
              </label>  
              <input   
                type="text"   
                placeholder="Preferred Dates / Season"  
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm"  
              />  
            </div>  
            <div className="space-y-6">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
                03. Biological Cohort  
              </label>  
              <input   
                type="text"   
                placeholder="Number of Guests"  
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm"  
              />  
            </div>  
          </section>

          {/* The Objective */}  
          <section className="space-y-6">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500">  
              04. Primary Physiological Objective  
            </label>  
            <div className="grid grid-cols-1 gap-4 text-[10px]">  
              {['Cognitive Restoration', 'Sensory Deprivation', 'Total Environmental Reset'].map((obj) => (  
                <button   
                  key={obj}  
                  type="button"  
                  className="border border-zinc-800 p-4 text-left hover:border-zinc-100 transition-colors duration-500 uppercase tracking-[0.2em]"  
                >  
                  {obj}  
                </button>  
              ))}  
            </div>  
          </section>

          {/* Contact Details */}  
          <section className="space-y-8 pt-8">  
            <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-500 border-t border-zinc-900 pt-8">  
              05. Identification  
            </label>  
            <div className="space-y-6">  
              <input   
                type="text"   
                placeholder="Full Name"  
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm"  
              />  
              <input   
                type="email"   
                placeholder="Authorized Email Address"  
                className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors duration-500 text-sm"  
              />  
            </div>  
          </section>

          <button   
            type="submit"  
            className="w-full py-6 mt-12 bg-zinc-100 text-black text-[10px] uppercase tracking-[0.3em] hover:bg-white transition-colors"  
          >  
            Initiate Consultation  
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
