'use client';

import React, { useState } from 'react';  
import Link from 'next/link';  
import { SANCTUARY_DATA } from '@/data/sanctuaries';  
import { useParams } from 'next/navigation';

export default function InquiryPage() {  
  const params = useParams();  
  const sanctuary = SANCTUARY_DATA.find((s) => s.id === params.id);  
  const [submitted, setSubmitted] = useState(false);

  if (!sanctuary) return null;

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <main className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-6">  
        <div className="max-w-2xl text-center">  
          <span className="text-[#A68966] text-xs tracking-[0.3em] uppercase mb-8 block">Request Received</span>  
          <h1 className="text-5xl md:text-7xl font-serif italic text-white mb-8">The Guardian Layer is now active.</h1>  
          <p className="text-white/60 text-lg leading-relaxed mb-12 font-light">  
            An advisor from the Collective will review your requirements. Expect a curated comparison focusing on both <span className="text-white">Optimal Privacy</span> and <span className="text-white">Elite Access</span> within 4 hours.  
          </p>  
          <Link href="/" className="text-white text-xs tracking-[0.2em] uppercase border-b border-[#A68966] pb-2 hover:text-[#A68966] transition-colors">  
            Return to Collection  
          </Link>  
        </div>  
      </main>  
    );  
  }

  return (  
    <main className="min-h-screen bg-[#0A0A0A] text-white pt-32 pb-24">  
      <div className="max-w-4xl mx-auto px-6">  
        <header className="mb-20">  
          <Link href={`/sanctuaries/${sanctuary.id}`} className="text-white/40 text-xs tracking-[0.2em] uppercase hover:text-white transition-colors mb-8 block">  
            ← Back to {sanctuary.name}  
          </Link>  
          <h1 className="text-5xl md:text-6xl font-serif italic mb-6">Initiate Arrangement</h1>  
          <p className="text-white/50 text-sm tracking-widest uppercase">Securing: {sanctuary.name} — {sanctuary.loc}</p>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-16">  
          {/* Step 1: Logic from our FAQ - Dates & Destination */}  
          <section>  
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#A68966] mb-10 font-bold">01. Temporal & Spatial Requirements</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
              <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-4">  
                <label className="block text-[10px] uppercase text-white/30 mb-2">Preferred Dates</label>  
                <input   
                  type="text"   
                  placeholder="e.g. Late September 2026"  
                  className="bg-transparent w-full outline-none text-xl font-light placeholder:text-white/10"  
                  required  
                />  
              </div>  
              <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-4">  
                <label className="block text-[10px] uppercase text-white/30 mb-2">Additional Destinations</label>  
                <input   
                  type="text"   
                  placeholder="Multi-stop itinerary?"  
                  className="bg-transparent w-full outline-none text-xl font-light placeholder:text-white/10"  
                />  
              </div>  
            </div>  
          </section>

          {/* Step 2: Privacy vs Access Logic */}  
          <section>  
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#A68966] mb-10 font-bold">02. Priority Profile</h2>  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <label className="relative flex flex-col p-8 border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-colors">  
                <input type="radio" name="priority" value="privacy" className="absolute top-4 right-4 accent-[#A68966]" defaultChecked />  
                <span className="text-lg font-serif italic mb-2">Maximum Privacy</span>  
                <span className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">Discreet arrivals, secluded perimeters, and untraceable logistics.</span>  
              </label>  
              <label className="relative flex flex-col p-8 border border-white/5 bg-white/[0.02] cursor-pointer hover:bg-white/[0.05] transition-colors">  
                <input type="radio" name="priority" value="access" className="absolute top-4 right-4 accent-[#A68966]" />  
                <span className="text-lg font-serif italic mb-2">Elite Access</span>  
                <span className="text-xs text-white/40 leading-relaxed uppercase tracking-wider">VIP positioning, sold-out dining, and cultural proximity.</span>  
              </label>  
            </div>  
          </section>

          {/* Step 3: Contact */}  
          <section>  
            <h2 className="text-[10px] tracking-[0.4em] uppercase text-[#A68966] mb-10 font-bold">03. Credentials</h2>  
            <div className="space-y-12">  
              <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-4">  
                <label className="block text-[10px] uppercase text-white/30 mb-2">Full Legal Name</label>  
                <input   
                  type="text"   
                  className="bg-transparent w-full outline-none text-xl font-light"  
                  required  
                />  
              </div>  
              <div className="group border-b border-white/10 focus-within:border-[#A68966] transition-colors pb-4">  
                <label className="block text-[10px] uppercase text-white/30 mb-2">Secure Email Address</label>  
                <input   
                  type="email"   
                  className="bg-transparent w-full outline-none text-xl font-light"  
                  required  
                />  
              </div>  
            </div>  
          </section>

          <div className="pt-12">  
            <button   
              type="submit"  
              className="w-full md:w-auto px-16 py-6 bg-[#A68966] text-white text-xs tracking-[0.4em] uppercase font-bold hover:bg-[#8E7455] transition-all transform hover:-translate-y-1 shadow-2xl"  
            >  
              Submit to the Collective  
            </button>  
            <p className="mt-8 text-center md:text-left text-[10px] text-white/20 uppercase tracking-[0.2em]">  
              By submitting, you activate our 4-hour guardian response protocol.  
            </p>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}  
