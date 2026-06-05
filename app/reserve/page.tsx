'use client';

import React, { Suspense } from 'react';  
import Link from 'next/link';  
import { useSearchParams } from 'next/navigation';

const IconArrowLeft = () => (  
<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>  
);

function ReserveForm() {  
const searchParams = useSearchParams();  
const propertyName = searchParams.get('property') || 'Bespoke Collection';

return (  
  <div className="max-w-2xl mx-auto py-24 px-8">  
    <div className="space-y-2 mb-16">  
      <h1 className="text-4xl font-extralight tracking-tight lowercase italic">Inquiry Manifest</h1>  
      <p className="text-xs uppercase tracking-[0.3em] text-stone-400">Property: {propertyName}</p>  
    </div>

    <form className="space-y-12">  
      {/* The Manifest Sections */}  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">  
        <div className="space-y-2 border-b border-stone-200 pb-2">  
          <label className="text-[10px] uppercase tracking-widest text-stone-400">Full Name</label>  
          <input   
            type="text"   
            placeholder="Daryl Clark"  
            className="w-full bg-transparent text-lg font-light outline-none placeholder:text-stone-300"  
          />  
        </div>  
        <div className="space-y-2 border-b border-stone-200 pb-2">  
          <label className="text-[10px] uppercase tracking-widest text-stone-400">Email Address</label>  
          <input   
            type="email"   
            placeholder="daryl@nexvoyage.com"  
            className="w-full bg-transparent text-lg font-light outline-none placeholder:text-stone-300"  
          />  
        </div>  
      </div>

      <div className="space-y-2 border-b border-stone-200 pb-2">  
        <label className="text-[10px] uppercase tracking-widest text-stone-400">Travel Window</label>  
        <input   
          type="text"   
          placeholder="Early Autumn 2026"  
          className="w-full bg-transparent text-lg font-light outline-none placeholder:text-stone-300"  
        />  
      </div>

      <div className="space-y-2 border-b border-stone-200 pb-2">  
        <label className="text-[10px] uppercase tracking-widest text-stone-400">Party Size & Preferences</label>  
        <textarea   
          rows={4}  
          placeholder="Two adults. Prefer high-floor suites with sunset views. Interested in private wellness sessions."  
          className="w-full bg-transparent text-lg font-light outline-none placeholder:text-stone-300 resize-none"  
        />  
      </div>

      <div className="pt-8">  
        <button   
          type="submit"  
          className="w-full bg-[#1a1a1a] text-white py-6 uppercase text-xs tracking-[0.4em] hover:bg-stone-800 transition-all duration-500"  
        >  
          Submit to The Ledger  
        </button>  
        <p className="text-[9px] text-center mt-6 text-stone-400 uppercase tracking-widest leading-loose">  
          By submitting, you initiate a private consultation.<br/>Our team will review the manifest and contact you within 4 hours.  
        </p>  
      </div>  
    </form>  
  </div>  
);  
}

export default function ReservePage() {  
return (  
  <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a]">  
    <nav className="p-8 flex justify-between items-center">  
      <Link href="/" className="flex items-center gap-2 hover:opacity-70 transition-opacity">  
        <IconArrowLeft />  
        <span className="text-xs uppercase tracking-widest font-light">Exit</span>  
      </Link>  
      <div className="text-xl tracking-[0.2em] font-extralight uppercase">NexVoyage</div>  
    </nav>

    <Suspense fallback={<div className="flex justify-center py-24 text-xs uppercase tracking-widest text-stone-400">Initializing Manifest...</div>}>  
      <ReserveForm />  
    </Suspense>

    <footer className="py-12 text-center">  
      <p className="text-[10px] uppercase tracking-[0.4em] text-stone-300">NexVoyage Collective &copy; 2026</p>  
    </footer>  
  </main>  
);  
}  
