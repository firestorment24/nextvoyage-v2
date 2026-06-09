'use client';

import React, { Suspense } from 'react';  
import { useSearchParams } from 'next/navigation';  
import { properties } from '../../data/properties';

function ReserveFormContent() {  
  const searchParams = useSearchParams();  
  const propertyId = searchParams.get('property');  
    
  // Find the selected property  
  const selectedProperty = properties.find(p => p.id === propertyId);

  return (  
    <main className="min-h-screen bg-neutral-50 pt-32 pb-24 px-6">  
      <div className="max-w-3xl mx-auto">  
        {/* Selection Header */}  
        <div className="mb-16 text-center">  
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-4 italic">The Travel Manifest</h1>  
          <p className="text-neutral-500 tracking-[0.2em] uppercase text-xs">Secure Your Place in the Collection</p>  
        </div>

        {/* Selected Property Preview */}  
        {selectedProperty && (  
          <div className="bg-white border border-neutral-100 p-6 rounded-sm mb-12 flex items-center gap-6 shadow-sm">  
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm">  
              <img   
                src={(selectedProperty as any).image}   
                alt={selectedProperty.name}   
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"  
              />  
            </div>  
            <div>  
              <h3 className="text-sm uppercase tracking-widest text-neutral-400 mb-1">Selected Sanctuary</h3>  
              <p className="text-xl font-serif text-neutral-900">{selectedProperty.name}</p>  
              <p className="text-sm text-neutral-500 italic">{selectedProperty.location}</p>  
            </div>  
          </div>  
        )}

        {/* The Form */}  
        <form className="space-y-12 bg-white p-8 md:p-12 border border-neutral-100 shadow-xl rounded-sm">  
          {/* Section 1: Identity */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div className="space-y-2">  
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block ml-1">Full Name</label>  
              <input   
                type="text"   
                placeholder="Daryl Clark"  
                className="w-full bg-transparent border-b border-neutral-200 py-3 px-1 focus:outline-none focus:border-neutral-900 transition-colors text-neutral-800 placeholder:text-neutral-300"  
              />  
            </div>  
            <div className="space-y-2">  
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block ml-1">Private Email</label>  
              <input   
                type="email"   
                placeholder="daryl@nexvoyage.com"  
                className="w-full bg-transparent border-b border-neutral-200 py-3 px-1 focus:outline-none focus:border-neutral-900 transition-colors text-neutral-800 placeholder:text-neutral-300"  
              />  
            </div>  
          </div>

          {/* Section 2: Logistics */}  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div className="space-y-2">  
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block ml-1">Travel Window</label>  
              <input   
                type="text"   
                placeholder="August 2026"  
                className="w-full bg-transparent border-b border-neutral-200 py-3 px-1 focus:outline-none focus:border-neutral-900 transition-colors text-neutral-800 placeholder:text-neutral-300"  
              />  
            </div>  
            <div className="space-y-2">  
              <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block ml-1">The Cohort</label>  
              <select className="w-full bg-transparent border-b border-neutral-200 py-3 px-1 focus:outline-none focus:border-neutral-900 transition-colors text-neutral-800 appearance-none">  
                <option>Solo Traveler</option>  
                <option>Couples Voyage</option>  
                <option>Family Retreat</option>  
                <option>Private Party (6+)</option>  
              </select>  
            </div>  
          </div>

          {/* Section 3: The Brief */}  
          <div className="space-y-2">  
            <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 block ml-1">The Brief</label>  
            <textarea   
              rows={4}  
              placeholder="Tell us about the occasion or any specific requirements for your stay..."  
              className="w-full bg-transparent border-b border-neutral-200 py-3 px-1 focus:outline-none focus:border-neutral-900 transition-colors text-neutral-800 placeholder:text-neutral-300 resize-none"  
            />  
          </div>

          {/* Submit */}  
          <div className="pt-8 text-center">  
            <button   
              type="submit"  
              className="bg-neutral-900 text-white px-16 py-4 rounded-full text-xs uppercase tracking-[0.3em] hover:bg-neutral-800 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1 duration-300"  
            >  
              Initiate Inquiry  
            </button>  
            <p className="mt-6 text-[10px] text-neutral-400 italic">  
              A private curator will respond to your manifest within 12 hours.  
            </p>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}

export default function ReservePage() {  
  return (  
    <Suspense fallback={  
      <div className="min-h-screen flex items-center justify-center bg-white">  
        <div className="animate-pulse text-neutral-300 font-serif text-2xl italic">Loading Manifest...</div>  
      </div>  
    }>  
      <ReserveFormContent />  
    </Suspense>  
  );  
}  
