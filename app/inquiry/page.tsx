"use client";

import React, { useState } from 'react';  
import Link from 'next/link';

export default function InquiryPage() {  
const [isSubmitting, setIsSubmitting] = useState(false);  
const [isSuccess, setIsSuccess] = useState(false);

const handleSubmit = async (e: React.FormEvent) => {  
  e.preventDefault();  
  setIsSubmitting(true);  
  await new Promise(resolve => setTimeout(resolve, 1500));  
  setIsSubmitting(false);  
  setIsSuccess(true);  
};

if (isSuccess) {  
  return (  
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6 font-serif">  
      <div className="max-w-xl text-center animate-in fade-in duration-1000">  
        <h1 className="text-5xl md:text-7xl font-light italic tracking-tighter mb-8 leading-tight">The journey begins.</h1>  
        <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] mb-12">  
          Your narrative has been logged. Let's align on the details.  
        </p>  
        <button   
          onClick={() => window.open('https://cal.com/daryl-clark', '_blank')}  
          className="inline-block border border-white px-12 py-5 text-[10px] uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500"  
        >  
          Book Discovery Session  
        </button>  
      </div>  
    </div>  
  );  
}

return (  
  <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row overflow-hidden">  
    {/* Left: Atmospheric Visual */}  
    <div className="hidden lg:block lg:w-1/2 relative group overflow-hidden">  
      <img   
        src="https://images.unsplash.com/photo-1505833115364-e28a4a3950f2?q=80&w=2000&auto=format&fit=crop"   
        alt="Atmospheric Landscape"  
        className="object-cover w-full h-full grayscale opacity-60 group-hover:scale-105 transition-transform duration-[3000ms] ease-out"  
      />  
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />  
      <div className="absolute bottom-12 left-12 max-w-sm">  
        <p className="text-xs uppercase tracking-[0.5em] text-zinc-400 mb-2">Current Exhibition</p>  
        <h2 className="text-3xl font-light italic tracking-tighter leading-tight opacity-80">  
          "Where the unreachable becomes your reality."  
        </h2>  
      </div>  
    </div>

    {/* Right: The Inquiry Form */}  
    <div className="flex-1 flex flex-col p-6 md:p-12 lg:p-24 overflow-y-auto">  
      <nav className="flex justify-between items-start mb-16 lg:mb-24">  
        <Link href="/" className="text-xl font-bold tracking-tighter hover:italic transition-all">NV / COLLECTIVE</Link>  
        <Link href="/archive" className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 hover:text-white transition-colors">Archive</Link>  
      </nav>

      <div className="max-w-lg mx-auto lg:mx-0 w-full">  
        <header className="mb-12">  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter italic leading-none mb-6">Inquiry</h1>  
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] leading-relaxed">  
            Personalize your travel narrative. Our lead analyst, Rachel, will review your submission to ensure perfect alignment.  
          </p>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-10">  
          <div className="space-y-8">  
            <div className="group border-b border-zinc-800 focus-within:border-white transition-all duration-500 pb-2">  
              <label className="block text-[9px] uppercase tracking-[0.3em] text-zinc-600 mb-1">Identity</label>  
              <input   
                required  
                type="text"   
                placeholder="FULL NAME"  
                className="bg-transparent w-full outline-none text-xl tracking-widest placeholder:text-zinc-900 uppercase"  
              />  
            </div>

            <div className="group border-b border-zinc-800 focus-within:border-white transition-all duration-500 pb-2">  
              <label className="block text-[9px] uppercase tracking-[0.3em] text-zinc-600 mb-1">Channel</label>  
              <input   
                required  
                type="email"   
                placeholder="EMAIL ADDRESS"  
                className="bg-transparent w-full outline-none text-xl tracking-widest placeholder:text-zinc-900 uppercase"  
              />  
            </div>

            <div className="group border-b border-zinc-800 focus-within:border-white transition-all duration-500 pb-2">  
              <label className="block text-[9px] uppercase tracking-[0.3em] text-zinc-600 mb-1">Narrative</label>  
              <textarea   
                required  
                rows={4}  
                placeholder="WHAT ARE YOU SEEKING?"  
                className="bg-transparent w-full outline-none text-sm leading-relaxed tracking-widest placeholder:text-zinc-900 uppercase resize-none"  
              />  
            </div>  
          </div>

          <div className="pt-8">  
            <button   
              type="submit"  
              disabled={isSubmitting}  
              className="group flex items-center space-x-6 hover:italic transition-all"  
            >  
              <span className="text-3xl md:text-4xl font-light tracking-tighter uppercase italic">Dispatch</span>  
              <span className="text-2xl text-zinc-700 group-hover:translate-x-4 transition-transform duration-500">→</span>  
            </button>  
          </div>  
        </form>  
      </div>

      <footer className="mt-auto pt-24 text-[9px] text-zinc-800 uppercase tracking-[0.4em] flex justify-between font-mono">  
        <span>Station: Rachel AI</span>  
        <span>© 2026 NexVoyage</span>  
      </footer>  
    </div>  
  </div>  
);  
}  
