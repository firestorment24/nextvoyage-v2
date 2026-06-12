"use client";

import React, { useState } from 'react';  
import Link from 'next/link';

export default function RachelIntakeForm() {  
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    setIsSubmitting(true);  
      
    // Simulate data dispatch to Rachel AI Backend  
    setTimeout(() => {  
      setIsSubmitting(false);  
      setIsSuccess(true);  
    }, 2000);  
  };

  if (isSuccess) {  
    return (  
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center font-mono">  
        <div className="border border-zinc-800 p-12 max-w-xl">  
          <h1 className="text-2xl font-light tracking-widest mb-6 uppercase">INTAKE LOGGED</h1>  
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] leading-relaxed mb-8">  
            Data has been dispatched to Lead Analyst Station R-01 (Rachel AI).   
            Your profile is currently undergoing vetting. Expect a direct correspondence if alignment is confirmed.  
          </p>  
          <Link href="/archive" className="text-[10px] text-zinc-400 hover:text-white transition-colors border-b border-zinc-800 pb-1 uppercase tracking-widest">  
            Return to Archive  
          </Link>  
        </div>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 flex flex-col">  
      <nav className="flex justify-between items-start mb-24">  
        <Link href="/" className="text-xl font-bold tracking-tighter hover:italic transition-all uppercase">NV / Collective</Link>  
        <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-700">System: Inquiry Desk / Analyst: Rachel</div>  
      </nav>

      <main className="max-w-4xl mx-auto w-full">  
        <div className="mb-16 border-l border-zinc-800 pl-8">  
          <h1 className="text-4xl md:text-6xl font-light tracking-tighter italic mb-2 uppercase">Vetting Protocol</h1>  
          <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">Lead Analyst Intake / Private Collective</p>  
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">  
          {/* Section 1: Identity */}  
          <div className="space-y-12">  
            <div className="group border-b border-zinc-900 focus-within:border-zinc-500 transition-colors pb-4">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4 italic font-mono">01. Legal Identity</label>  
              <input   
                required  
                type="text"   
                placeholder="FULL NAME"  
                className="bg-transparent w-full outline-none text-xl tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>

            <div className="group border-b border-zinc-900 focus-within:border-zinc-500 transition-colors pb-4">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4 italic font-mono">02. Direct Channel</label>  
              <input   
                required  
                type="email"   
                placeholder="EMAIL@ADDRESS.COM"  
                className="bg-transparent w-full outline-none text-xl tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>

            <div className="group border-b border-zinc-900 focus-within:border-zinc-500 transition-colors pb-4">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4 italic font-mono">03. Source / Endorsement</label>  
              <input   
                type="text"   
                placeholder="HOW DID YOU FIND US?"  
                className="bg-transparent w-full outline-none text-xl tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>  
          </div>

          {/* Section 2: Intent */}  
          <div className="space-y-12 flex flex-col">  
            <div className="group border-b border-zinc-900 focus-within:border-zinc-500 transition-colors pb-4 flex-grow">  
              <label className="block text-[10px] uppercase tracking-[0.2em] text-zinc-600 mb-4 italic font-mono">04. Brief Narrative of Intent</label>  
              <textarea   
                required  
                rows={6}  
                placeholder="STATE YOUR TRAVEL OBJECTIVES OR SPECIFIC SANCTUARY INTERESTS..."  
                className="bg-transparent w-full outline-none text-sm leading-relaxed tracking-widest placeholder:text-zinc-800 uppercase resize-none"  
              />  
            </div>

            <button   
              type="submit"  
              disabled={isSubmitting}  
              className="w-full bg-white text-black py-6 text-xs uppercase tracking-[0.5em] hover:bg-zinc-200 transition-colors flex items-center justify-center space-x-4"  
            >  
              {isSubmitting ? (  
                <span className="animate-pulse italic font-mono">DISPATCHING TO RACHEL...</span>  
              ) : (  
                <>  
                  <span>Initialize Vetting</span>  
                  <span className="text-lg">→</span>  
                </>  
              )}  
            </button>  
          </div>  
        </form>  
      </main>

      <footer className="mt-auto pt-24 grid grid-cols-2 text-[10px] text-zinc-800 uppercase tracking-widest font-mono">  
        <div className="flex flex-col space-y-2">  
          <span>STATION: R-01</span>  
          <span>LOCATION: PRIVATE_COLLECTIVE</span>  
        </div>  
        <div className="text-right">  
          <span>&copy; 2026 NEXVOYAGE COLLECTIVE</span>  
        </div>  
      </footer>  
    </div>  
  );  
}  
