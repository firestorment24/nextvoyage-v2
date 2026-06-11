'use client';

import React, { useState } from 'react';  
import Link from 'next/link';

export default function ConciergePage() {  
const [submitted, setSubmitted] = useState(false);

const handleSubmit = (e: React.FormEvent) => {  
  e.preventDefault();  
  setSubmitted(true);  
};

if (submitted) {  
  return (  
    <div className="min-h-[70vh] bg-[#0A0A0A] flex items-center justify-center px-6">  
      <div className="max-w-2xl text-center">  
        <span className="text-[#A68966] text-[10px] tracking-[0.5em] uppercase mb-8 block font-bold">Request Received</span>  
        <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-8">The Guardian Layer is active.</h1>  
        <p className="text-white/40 text-lg leading-relaxed mb-12 font-light uppercase tracking-widest">  
          A Collective Advisor will reach out within 4 hours.  
        </p>  
        <Link href="/" className="text-white text-[10px] tracking-[0.3em] uppercase border-b border-[#A68966] pb-2 hover:text-[#A68966] transition-colors">  
          Return to Collection  
        </Link>  
      </div>  
    </div>  
  );  
}

return (  
  <div className="bg-[#0A0A0A] text-white pt-40 pb-24">  
    <div className="max-w-4xl mx-auto px-6">  
      <header className="mb-24">  
        <span className="text-[#A68966] text-[10px] tracking-[0.6em] uppercase block mb-4 font-bold">Protocol Initiation</span>  
        <h1 className="text-6xl md:text-8xl font-serif italic mb-8">The Concierge</h1>  
        <p className="text-white/40 text-sm tracking-[0.3em] uppercase max-w-xl leading-loose">  
          Secure, high-stakes travel management. Tell us where you are going; we will architect how you arrive.  
        </p>  
      </header>

      <form onSubmit={handleSubmit} className="space-y-24">  
        {/* Step 1: Logistics */}  
        <section>  
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#A68966] mb-12 font-bold">01. Temporal & Spatial</h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">  
            <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-6">  
              <label className="block text-[10px] uppercase text-white/30 mb-4 tracking-[0.3em]">Preferred Dates</label>  
              <input type="text" placeholder="Month / Year" className="bg-transparent w-full outline-none text-2xl font-light placeholder:text-white/5" required />  
            </div>  
            <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-6">  
              <label className="block text-[10px] uppercase text-white/30 mb-4 tracking-[0.3em]">Destination(s)</label>  
              <input type="text" placeholder="Global Archetypes" className="bg-transparent w-full outline-none text-2xl font-light placeholder:text-white/5" required />  
            </div>  
          </div>  
        </section>

        {/* Step 2: Priority Profile */}  
        <section>  
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#A68966] mb-12 font-bold">02. Priority Profile</h2>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <label className="group relative flex flex-col p-10 border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-all">  
              <input type="radio" name="priority" value="privacy" className="absolute top-6 right-6 accent-[#A68966]" defaultChecked />  
              <span className="text-2xl font-serif italic mb-4">Maximum Privacy</span>  
              <span className="text-[10px] text-white/30 leading-relaxed uppercase tracking-[0.2em]">Discreet arrivals and untraceable logistics.</span>  
            </label>  
            <label className="group relative flex flex-col p-10 border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-all">  
              <input type="radio" name="priority" value="access" className="absolute top-6 right-6 accent-[#A68966]" />  
              <span className="text-2xl font-serif italic mb-4">Elite Access</span>  
              <span className="text-[10px] text-white/30 leading-relaxed uppercase tracking-[0.2em]">VIP positioning and sold-out cultural proximity.</span>  
            </label>  
          </div>  
        </section>

        {/* Step 3: Identity */}  
        <section>  
          <h2 className="text-[10px] tracking-[0.5em] uppercase text-[#A68966] mb-12 font-bold">03. Credentials</h2>  
          <div className="space-y-16">  
            <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-6">  
              <label className="block text-[10px] uppercase text-white/30 mb-4 tracking-[0.3em]">Full Legal Name</label>  
              <input type="text" className="bg-transparent w-full outline-none text-2xl font-light" required />  
            </div>  
            <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-6">  
              <label className="block text-[10px] uppercase text-white/30 mb-4 tracking-[0.3em]">Secure Contact Email</label>  
              <input type="email" className="bg-transparent w-full outline-none text-2xl font-light" required />  
            </div>  
          </div>  
        </section>

        <div className="pt-12">  
          <button type="submit" className="w-full md:w-auto px-20 py-8 bg-[#A68966] text-white text-[10px] tracking-[0.6em] uppercase font-bold hover:bg-white hover:text-black transition-all transform hover:-translate-y-1 shadow-2xl">  
            Activate Protocol  
          </button>  
        </div>  
      </form>  
    </div>  
  </div>  
);  
}  
