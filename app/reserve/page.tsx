'use client';

import { useSearchParams } from 'next/navigation';  
import { useState, useEffect, Suspense } from 'react';  
import Navigation from '../Navigation';  
import Footer from '../Footer';  
import { properties } from '../../data/properties';

interface Property {  
  id: string;  
  name: string;  
  location: string;  
}

function ReserveFormContent() {  
  const searchParams = useSearchParams();  
  const propertyId = searchParams.get('property');  
    
  // Cast properties through unknown to bypass strict type check if needed  
  const propertyList = (properties as unknown as Property[]);  
  const selectedProperty = propertyList.find(p => p.id === propertyId);

  const [formData, setFormData] = useState({  
    name: '',  
    email: '',  
    property: propertyId || '',  
    dates: '',  
    cohort: '',  
    brief: ''  
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    // Simulate submission  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">  
        <h1 className="text-4xl font-light mb-4">Inquiry Received</h1>  
        <p className="text-white/50 max-w-md mx-auto leading-relaxed italic">  
          Your briefing has been logged. An advisor will contact you shortly to finalize the mission details.  
        </p>  
        <a href="/" className="mt-12 text-xs uppercase tracking-widest border-b border-white/20 pb-1 hover:border-white transition-colors">  
          Return to HQ  
        </a>  
      </div>  
    );  
  }

  return (  
    <div className="max-w-2xl mx-auto px-6 py-24">  
      <header className="mb-16">  
        <h1 className="text-xs uppercase tracking-[0.4em] text-white/40 mb-4">Request Access</h1>  
        <h2 className="text-4xl font-light tracking-tight">  
          {selectedProperty ? `Reserve ${selectedProperty.name}` : 'The Collective Reserve'}  
        </h2>  
      </header>

      <form onSubmit={handleSubmit} className="space-y-12">  
        {/* Identity Section */}  
        <div className="space-y-8">  
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 border-b border-white/10 pb-2">01. Identity</h3>  
          <div className="grid grid-cols-1 gap-8">  
            <div className="group">  
              <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Full Name</label>  
              <input   
                required  
                type="text"  
                placeholder="Daryl Clark"  
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all font-light text-lg"  
                onChange={(e) => setFormData({...formData, name: e.target.value})}  
              />  
            </div>  
            <div className="group">  
              <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Communication</label>  
              <input   
                required  
                type="email"  
                placeholder="daryl.clark@fora.travel"  
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all font-light text-lg"  
                onChange={(e) => setFormData({...formData, email: e.target.value})}  
              />  
            </div>  
          </div>  
        </div>

        {/* Mission Details */}  
        <div className="space-y-8">  
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 border-b border-white/10 pb-2">02. Mission</h3>  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
            <div className="group">  
              <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Target Property</label>  
              <select   
                value={formData.property}  
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all font-light text-lg appearance-none"  
                onChange={(e) => setFormData({...formData, property: e.target.value})}  
              >  
                <option value="" className="bg-black">Select Sanctuary</option>  
                {propertyList.map(p => (  
                  <option key={p.id} value={p.id} className="bg-black">{p.name} — {p.location}</option>  
                ))}  
              </select>  
            </div>  
            <div className="group">  
              <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2">Cohort Size</label>  
              <input   
                type="text"  
                placeholder="2 Adults, 1 Child"  
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all font-light text-lg"  
                onChange={(e) => setFormData({...formData, cohort: e.target.value})}  
              />  
            </div>  
          </div>  
        </div>

        {/* The Brief */}  
        <div className="space-y-8">  
          <h3 className="text-[10px] uppercase tracking-[0.3em] text-white/30 border-b border-white/10 pb-2">03. The Brief</h3>  
          <div className="group">  
            <label className="block text-[10px] uppercase tracking-widest text-white/40 mb-2 group-focus-within:text-white transition-colors">Objectives & Requirements</label>  
            <textarea   
              rows={4}  
              placeholder="Private terrace, wellness focus, specific arrival window..."  
              className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-white transition-all font-light text-lg resize-none"  
              onChange={(e) => setFormData({...formData, brief: e.target.value})}  
            />  
          </div>  
        </div>

        <button   
          type="submit"  
          className="w-full py-6 border border-white text-white uppercase tracking-[0.3em] text-xs hover:bg-white hover:text-black transition-all duration-500 mt-8"  
        >  
          Submit Briefing  
        </button>  
      </form>  
    </div>  
  );  
}

export default function ReservePage() {  
  return (  
    <main className="min-h-screen bg-black text-white">  
      <Navigation />  
      <Suspense fallback={<div className="h-screen bg-black" />}>  
        <ReserveFormContent />  
      </Suspense>  
      <Footer />  
    </main>  
  );  
}  
