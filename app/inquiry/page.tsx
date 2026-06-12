"use client";

import React, { useState } from 'react';  
import Link from 'next/link';

export default function InquiryPage() {  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">  
        <h1 className="text-4xl md:text-6xl font-light tracking-tighter mb-8 italic">INTENT RECEIVED.</h1>  
        <p className="max-w-md text-zinc-500 uppercase tracking-widest text-xs leading-relaxed">  
          The desk is reviewing your profile. If aligned, a private link to our calendar will be dispatched to your email.  
        </p>  
        <Link href="/archive" className="mt-12 text-xs border-b border-zinc-800 pb-1 hover:text-zinc-400 transition-colors uppercase tracking-widest">  
          Return to Archive  
        </Link>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 flex flex-col">  
      <nav className="flex justify-between items-start mb-24">  
        <Link href="/" className="text-xl font-bold tracking-tighter hover:italic transition-all">NV / COLLECTIVE</Link>  
        <Link href="/archive" className="text-xs uppercase tracking-widest text-zinc-500 hover:text-white">Back</Link>  
      </nav>

      <main className="max-w-3xl">  
        <header className="mb-16">  
          <h1 className="text-5xl md:text-8xl font-light tracking-tighter mb-4 italic leading-none">INQUIRY</h1>  
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">  
            Vetting Desk / Private Intake 2026  
          </p>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="group border-b border-zinc-800 focus-within:border-white transition-colors pb-2">  
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Legal Identity</label>  
              <input   
                required  
                type="text"   
                placeholder="FULL NAME"  
                className="bg-transparent w-full outline-none text-sm tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>  
            <div className="group border-b border-zinc-800 focus-within:border-white transition-colors pb-2">  
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Direct Channel</label>  
              <input   
                required  
                type="email"   
                placeholder="EMAIL ADDRESS"  
                className="bg-transparent w-full outline-none text-sm tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>  
          </div>

          <div className="group border-b border-zinc-800 focus-within:border-white transition-colors pb-2">  
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Source / Endorsement</label>  
            <input   
              type="text"   
              placeholder="HOW DID YOU FIND US?"  
              className="bg-transparent w-full outline-none text-sm tracking-widest placeholder:text-zinc-800 uppercase"  
            />  
          </div>

          <div className="group border-b border-zinc-800 focus-within:border-white transition-colors pb-2">  
            <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Brief Narrative</label>  
            <textarea   
              required  
              rows={3}  
              placeholder="STATE YOUR INTENT / PREFERRED REGION"  
              className="bg-transparent w-full outline-none text-sm tracking-widest placeholder:text-zinc-800 uppercase resize-none"  
            />  
          </div>

          <button   
            type="submit"  
            className="group flex items-center space-x-4 hover:italic transition-all pt-8"  
          >  
            <span className="text-2xl md:text-4xl font-light tracking-tighter uppercase italic">Initialize Vetting</span>  
            <span className="text-xl md:text-2xl text-zinc-700 group-hover:translate-x-2 transition-transform">→</span>  
          </button>  
        </form>  
      </main>

      <footer className="mt-auto pt-24 text-[10px] text-zinc-800 uppercase tracking-widest">  
        NexVoyage Collective / Strictly Confidential  
      </footer>  
    </div>  
  );  
}  
