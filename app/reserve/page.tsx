'use client'

import React, { useState } from 'react'

export default function ReservePage() {  
  const [hasTrip, setHasTrip] = useState(false)

  return (  
    <div className="min-h-screen bg-black text-zinc-400 font-light selection:bg-zinc-800 selection:text-white">  
      {/* Navigation */}  
      <nav className="p-8 flex justify-between items-center border-b border-zinc-900">  
        <div className="text-zinc-100 tracking-widest uppercase text-sm font-medium">NexVoyage / Collective</div>  
        <div className="text-[10px] tracking-[0.3em] uppercase opacity-50">Private Member Intake</div>  
      </nav>

      <main className="max-w-3xl mx-auto py-24 px-6">  
        <header className="mb-20">  
          <h1 className="text-zinc-100 text-4xl font-extralight tracking-tight mb-6 italic">The Reserve</h1>  
          <p className="text-sm leading-relaxed max-w-lg opacity-70">  
            Welcome to the Collective. Provide your details below to establish your profile and begin curating your next private expedition with Daryl Clark.  
          </p>  
        </header>

        <form className="space-y-16" onSubmit={(e) => e.preventDefault()}>  
            
          {/* Section 01: Personal Profile */}  
          <section className="space-y-10">  
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#B5A642] border-b border-zinc-900 pb-2">01. Personal Profile</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <input type="text" placeholder="First Name *" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" required />  
              <input type="text" placeholder="Last Name *" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" required />  
              <input type="email" placeholder="Email Address *" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" required />  
              <input type="tel" placeholder="Phone Number *" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" required />  
            </div>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <div className="space-y-2">  
                <label className="text-[9px] uppercase tracking-widest opacity-40">Date of Birth *</label>  
                <input type="date" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm invert opacity-70" required />  
              </div>  
              <div className="space-y-2">  
                <label className="text-[9px] uppercase tracking-widest opacity-40">Preferred Communication</label>  
                <select className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm appearance-none cursor-pointer">  
                  <option className="bg-black">Email</option>  
                  <option className="bg-black">Text Message</option>  
                  <option className="bg-black">WhatsApp</option>  
                  <option className="bg-black">Phone Call</option>  
                </select>  
              </div>  
            </div>  
          </section>

          {/* Section 02: Preferences */}  
          <section className="space-y-10">  
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#B5A642] border-b border-zinc-900 pb-2">02. Preferences</h2>  
            <div className="space-y-8">  
              <input type="text" placeholder="Where are you based right now?" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" />  
              <textarea rows={2} placeholder="What are your favorite hotels or brands?" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm resize-none" />  
            </div>  
          </section>

          {/* Section 03: Trip Inquiry */}  
          <section className="space-y-10">  
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#B5A642] border-b border-zinc-900 pb-2">03. Expedition Status</h2>  
            <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase">  
              <button   
                type="button"  
                onClick={() => setHasTrip(true)}  
                className={`pb-2 border-b-2 transition-all ${hasTrip ? 'border-zinc-100 text-white' : 'border-transparent opacity-40'}`}  
              >  
                I have a trip in mind  
              </button>  
              <button   
                type="button"  
                onClick={() => setHasTrip(false)}  
                className={`pb-2 border-b-2 transition-all ${!hasTrip ? 'border-zinc-100 text-white' : 'border-transparent opacity-40'}`}  
              >  
                Just establishing profile  
              </button>  
            </div>

            {hasTrip && (  
              <div className="grid grid-cols-1 gap-8 animate-in fade-in duration-700">  
                <input type="text" placeholder="Destination(s)" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" />  
                <div className="grid grid-cols-2 gap-8">  
                  <input type="text" placeholder="Approximate Dates" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" />  
                  <input type="text" placeholder="Number of Travelers" className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm" />  
                </div>  
                <textarea rows={3} placeholder="Tell us more about your vision for this trip..." className="w-full bg-transparent border-b border-zinc-800 py-4 focus:outline-none focus:border-zinc-100 transition-colors text-sm resize-none" />  
              </div>  
            )}  
          </section>

          <button   
            type="submit"  
            className="w-full py-6 mt-12 bg-zinc-100 text-black text-[10px] uppercase tracking-[0.4em] hover:bg-white transition-all duration-500 font-medium"  
          >  
            Submit Application  
          </button>  
        </form>

        <footer className="mt-32 pt-12 border-t border-zinc-900 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] opacity-30">  
          <div>NexVoyage Collective / Global Concierge</div>  
          <div>EST. 2026</div>  
        </footer>  
      </main>

      {/* Decorative Accents */}  
      <div className="fixed top-0 right-0 w-[1px] h-full bg-zinc-900" />  
      <div className="fixed bottom-0 left-0 w-full h-[1px] bg-zinc-900" />  
      <div className="fixed bottom-12 right-12 w-24 h-[1px] bg-[#B5A642] opacity-30" />  
    </div>  
  )  
}  
