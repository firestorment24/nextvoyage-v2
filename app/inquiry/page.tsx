'use client';

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
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">  
        <div className="max-w-md text-center">  
          <h1 className="text-4xl font-light tracking-tighter uppercase mb-6">Received</h1>  
          <p className="text-sm text-neutral-500 leading-relaxed mb-12">  
            The Collective is currently reviewing new entries. <br />   
            A specialist will reach out if a vacancy aligns with your profile.  
          </p>  
          <Link href="/archive" className="text-xs uppercase tracking-widest border-b border-black pb-1">  
            Back to Archive  
          </Link>  
        </div>  
      </main>  
    );  
  }

  return (  
    <main className="min-h-screen bg-white pt-32 pb-20 px-6 sm:px-12">  
      <div className="max-w-screen-md mx-auto">  
        <header className="mb-24">  
          <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 block mb-4">  
            Membership Application  
          </span>  
          <h1 className="text-6xl md:text-8xl font-light tracking-tighter uppercase leading-[0.9]">  
            Begin the <br /> Vetting  
          </h1>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-16">  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
            <div className="flex flex-col gap-2">  
              <label className="text-[10px] uppercase tracking-widest text-neutral-400">Full Name</label>  
              <input   
                required  
                type="text"   
                className="bg-transparent border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors text-lg font-light"   
              />  
            </div>  
            <div className="flex flex-col gap-2">  
              <label className="text-[10px] uppercase tracking-widest text-neutral-400">Digital Address</label>  
              <input   
                required  
                type="email"   
                className="bg-transparent border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors text-lg font-light"   
              />  
            </div>  
          </div>

          <div className="flex flex-col gap-2">  
            <label className="text-[10px] uppercase tracking-widest text-neutral-400">Sanctuary of Interest</label>  
            <select className="bg-transparent border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors text-lg font-light appearance-none rounded-none">  
              <option value="">General Collective Inquiry</option>  
              <option value="metropolitan">The Metropolitan</option>  
              <option value="island">The Island</option>  
              <option value="fortress">The Fortress</option>  
              {/* Add more as needed or map SANCTUARIES_DATA here */}  
            </select>  
          </div>

          <div className="flex flex-col gap-2">  
            <label className="text-[10px] uppercase tracking-widest text-neutral-400">Intent & Requirements</label>  
            <textarea   
              rows={4}  
              placeholder="Tell us what you seek..."  
              className="bg-transparent border-b border-neutral-200 py-3 outline-none focus:border-black transition-colors text-lg font-light resize-none"   
            />  
          </div>

          <div className="pt-12 flex justify-between items-center">  
            <p className="text-xs text-neutral-400 max-w-[200px] leading-relaxed">  
              *Membership is subject to internal review and availability.  
            </p>  
            <button   
              type="submit"  
              className="group flex items-center gap-4 text-2xl font-light tracking-tight hover:italic transition-all"  
            >  
              Submit Application  
              <span className="text-sm transition-transform group-hover:translate-x-2">→</span>  
            </button>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}  
