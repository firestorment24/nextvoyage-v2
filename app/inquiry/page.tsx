"use client";

import React, { useState } from 'react';  
import Link from 'next/link';

export default function InquiryPage() {  
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    setIsSubmitting(true);  
      
    // In production, this would POST to /api/lead  
    await new Promise(resolve => setTimeout(resolve, 1500));  
      
    setIsSubmitting(false);  
    setIsSuccess(true);  
  };

  if (isSuccess) {  
    return (  
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">  
        <div className="max-w-xl animate-in fade-in zoom-in duration-700">  
          <h1 className="text-4xl font-light tracking-tighter mb-4 italic uppercase">Details Received.</h1>  
          <p className="text-zinc-500 uppercase tracking-widest text-[10px] leading-relaxed mb-12">  
            The next step is a brief discovery call to align on your travel objectives.  
          </p>  
            
          {/* Calendar Integration Placeholder */}  
          <div className="bg-zinc-900 border border-zinc-800 p-8 mb-12">  
            <h2 className="text-sm uppercase tracking-widest mb-6">Schedule Discovery Session</h2>  
            <button   
              onClick={() => window.open('https://cal.com/daryl-clark', '_blank')}  
              className="bg-white text-black px-8 py-4 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-zinc-200 transition-colors"  
            >  
              Open Calendar  
            </button>  
          </div>

          <Link href="/archive" className="text-[10px] text-zinc-600 hover:text-white transition-colors uppercase tracking-widest">  
            Return to Archive  
          </Link>  
        </div>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 flex flex-col">  
      <nav className="flex justify-between items-start mb-24">  
        <Link href="/" className="text-xl font-bold tracking-tighter hover:italic transition-all">NV / COLLECTIVE</Link>  
        <Link href="/archive" className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white">Close</Link>  
      </nav>

      <main className="max-w-4xl mx-auto w-full">  
        <header className="mb-16">  
          <h1 className="text-5xl md:text-7xl font-light tracking-tighter mb-4 italic uppercase">Inquiry</h1>  
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-[10px] md:text-xs">  
            Start the conversation with NexVoyage Collective.  
          </p>  
        </header>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">  
          {/* Contact Details */}  
          <div className="space-y-12">  
            <div className="group border-b border-zinc-900 focus-within:border-white transition-colors pb-4">  
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Full Name</label>  
              <input   
                required  
                type="text"   
                placeholder="FIRST & LAST"  
                className="bg-transparent w-full outline-none text-lg tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>

            <div className="group border-b border-zinc-900 focus-within:border-white transition-colors pb-4">  
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Email Address</label>  
              <input   
                required  
                type="email"   
                placeholder="EMAIL@ADDRESS.COM"  
                className="bg-transparent w-full outline-none text-lg tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>

            <div className="group border-b border-zinc-900 focus-within:border-white transition-colors pb-4">  
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Phone (Optional)</label>  
              <input   
                type="tel"   
                placeholder="+1 (000) 000-0000"  
                className="bg-transparent w-full outline-none text-lg tracking-widest placeholder:text-zinc-800 uppercase"  
              />  
            </div>  
          </div>

          {/* Travel Details */}  
          <div className="space-y-12 flex flex-col">  
            <div className="group border-b border-zinc-900 focus-within:border-white transition-colors pb-4 flex-grow">  
              <label className="block text-[10px] uppercase tracking-widest text-zinc-600 mb-2">Travel Narrative</label>  
              <textarea   
                required  
                rows={5}  
                placeholder="WHERE ARE YOU LOOKING TO GO? WHAT IS THE OCCASION?"  
                className="bg-transparent w-full outline-none text-sm leading-relaxed tracking-widest placeholder:text-zinc-800 uppercase resize-none"  
              />  
            </div>

            <button   
              type="submit"  
              disabled={isSubmitting}  
              className="w-full bg-white text-black py-6 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-zinc-200 transition-colors"  
            >  
              {isSubmitting ? "PROCESSING..." : "SUBMIT INQUIRY"}  
            </button>  
          </div>  
        </form>  
      </main>

      <footer className="mt-auto pt-24 text-[10px] text-zinc-800 uppercase tracking-widest flex justify-between">  
        <span>NexVoyage Collective</span>  
        <span>Lead Analyst: Rachel AI</span>  
      </footer>  
    </div>  
  );  
}  
