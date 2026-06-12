"use client";

import React, { useState } from 'react';

export default function InquiryPage() {  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <div className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C] flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-700">  
        <h1 className="text-4xl font-light tracking-tight mb-4 italic">Thank You.</h1>  
        <p className="max-w-md text-zinc-500 text-sm uppercase tracking-widest mb-10">  
          Your inquiry has been received. Our team will review your details and reach out shortly.  
        </p>  
        <button   
          onClick={() => window.open('https://cal.com/daryl-clark', '_blank')}  
          className="text-[10px] bg-[#1C1C1C] text-[#FCFAF7] px-10 py-4 hover:bg-[#d4af37] transition-all duration-500 uppercase tracking-[0.3em]"  
        >  
          Schedule Discovery  
        </button>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-[#FCFAF7] text-[#1C1C1C] selection:bg-[#d4af37] selection:text-white">  
      <main className="max-w-screen-xl mx-auto px-6 pt-32 pb-24">  
        {/* Editorial Header */}  
        <div className="mb-24 text-center md:text-left">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-6">  
            Begin the <span className="italic">Journey.</span>  
          </h1>  
          <div className="h-px w-24 bg-[#d4af37] mb-8 mx-auto md:mx-0" />  
          <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 max-w-sm leading-relaxed mx-auto md:mx-0">  
            Private travel architecture for high-net-worth individuals.   
            Please provide your initial details below.  
          </p>  
        </div>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto md:mx-0">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">  
              
            {/* Full Name */}  
            <div className="group relative">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 block mb-2 transition-colors group-focus-within:text-[#d4af37]">Full Name</label>  
              <input   
                required  
                type="text"   
                placeholder="Required"  
                className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#1C1C1C] transition-all placeholder:text-zinc-200 text-sm tracking-wide"  
              />  
            </div>

            {/* Email */}  
            <div className="group relative">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 block mb-2 transition-colors group-focus-within:text-[#d4af37]">Email Address</label>  
              <input   
                required  
                type="email"   
                placeholder="Required"  
                className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#1C1C1C] transition-all placeholder:text-zinc-200 text-sm tracking-wide"  
              />  
            </div>

            {/* Destination */}  
            <div className="group relative">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 block mb-2 transition-colors group-focus-within:text-[#d4af37]">Proposed Destination</label>  
              <input   
                required  
                type="text"   
                placeholder="Optional"  
                className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#1C1C1C] transition-all placeholder:text-zinc-200 text-sm tracking-wide"  
              />  
            </div>

            {/* Timeline */}  
            <div className="group relative">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 block mb-2 transition-colors group-focus-within:text-[#d4af37]">Timeline</label>  
              <input   
                type="text"   
                placeholder="e.g. Autumn 2026"  
                className="w-full bg-transparent border-b border-zinc-200 py-3 outline-none focus:border-[#1C1C1C] transition-all placeholder:text-zinc-200 text-sm tracking-wide"  
              />  
            </div>

            {/* Notes - Full Width */}  
            <div className="md:col-span-2 group relative mt-4">  
              <label className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 block mb-2 transition-colors group-focus-within:text-[#d4af37]">Vision / Requirements</label>  
              <textarea   
                rows={4}  
                placeholder="Describe your desired experience..."  
                className="w-full bg-transparent border border-zinc-100 p-4 outline-none focus:border-[#d4af37] transition-all placeholder:text-zinc-200 text-sm tracking-wide resize-none"  
              />  
            </div>  
          </div>

          <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8">  
            <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 max-w-xs leading-loose italic">  
              Your information is handled with absolute discretion by our private advisory team.  
            </p>  
            <button   
              type="submit"  
              className="w-full md:w-auto px-16 py-5 bg-[#1C1C1C] text-[#FCFAF7] text-[10px] uppercase tracking-[0.4em] hover:bg-[#d4af37] transition-all duration-500"  
            >  
              Submit Inquiry  
            </button>  
          </div>  
        </form>  
      </main>

      <footer className="max-w-screen-xl mx-auto px-6 py-12 border-t border-zinc-100 flex justify-between items-center text-[9px] uppercase tracking-[0.3em] text-zinc-300">  
        <span>NexVoyage Collective</span>  
        <span>© 2026</span>  
      </footer>  
    </div>  
  );  
}  
