'use client';

import React, { useState } from 'react';  
import Navigation from '../Navigation';  
import Footer from '../Footer';

export default function ConciergePage() {  
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');  
  const [formData, setFormData] = useState({  
    objective: '',  
    narrative: '',  
    identity: '',  
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  
    const { name, value } = e.target;  
    setFormData((prev) => ({ ...prev, [name]: value }));  
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();  
    setStatus('sending');

    try {  
      const response = await fetch('/api/send', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify(formData),  
      });

      if (response.ok) {  
        setStatus('success');  
      } else {  
        setStatus('error');  
      }  
    } catch (err) {  
      setStatus('error');  
    }  
  };

  if (status === 'success') {  
    return (  
      <main className="min-h-screen bg-white text-black flex flex-col">  
        <Navigation />  
        <div className="flex-grow flex flex-col items-center justify-center px-6 text-center">  
          <h1 className="text-3xl font-serif mb-4">Connection Initiated</h1>  
          <p className="text-neutral-500 max-w-md mx-auto">  
            Your inquiry has been received. Our concierge team is reviewing your narrative and will reach out shortly.  
          </p>  
        </div>  
        <Footer />  
      </main>  
    );  
  }

  return (  
    <main className="min-h-screen bg-white text-black flex flex-col">  
      <Navigation />  
        
      <div className="flex-grow max-w-3xl mx-auto px-6 py-20 w-full">  
        <header className="mb-16">  
          <span className="text-xs uppercase tracking-widest text-neutral-400 mb-4 block">The Gatekeeper</span>  
          <h1 className="text-4xl md:text-5xl font-serif leading-tight">  
            Tell us where you want to go, <br />and who you want to be there.  
          </h1>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-12">  
          {/* Objective */}  
          <div className="group">  
            <label className="text-xs uppercase tracking-widest text-neutral-500 block mb-4">  
              01. The Objective  
            </label>  
            <input  
              required  
              type="text"  
              name="objective"  
              value={formData.objective}  
              onChange={handleInputChange}  
              placeholder="e.g. A restorative escape in the Amalfi Coast"  
              className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"  
            />  
          </div>

          {/* Narrative */}  
          <div className="group">  
            <label className="text-xs uppercase tracking-widest text-neutral-500 block mb-4">  
              02. The Narrative  
            </label>  
            <textarea  
              required  
              name="narrative"  
              value={formData.narrative}  
              onChange={handleInputChange}  
              placeholder="Describe the rhythm of your ideal day..."  
              rows={4}  
              className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl focus:outline-none focus:border-black transition-colors resize-none placeholder:text-neutral-300"  
            />  
          </div>

          {/* Identity */}  
          <div className="group">  
            <label className="text-xs uppercase tracking-widest text-neutral-500 block mb-4">  
              03. The Identity  
            </label>  
            <input  
              required  
              type="email"  
              name="identity"  
              value={formData.identity}  
              onChange={handleInputChange}  
              placeholder="your@email.com"  
              className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl focus:outline-none focus:border-black transition-colors placeholder:text-neutral-300"  
            />  
          </div>

          <div className="pt-8 flex items-center justify-between">  
            <button  
              type="submit"  
              disabled={status === 'sending'}  
              className="bg-black text-white px-12 py-4 text-sm uppercase tracking-widest hover:bg-neutral-800 transition-all disabled:bg-neutral-300"  
            >  
              {status === 'sending' ? 'Sending...' : 'Initiate Contact'}  
            </button>  
              
            <div className="flex items-center space-x-2 text-neutral-400">  
              <span className="text-[10px] uppercase tracking-tighter italic">Secure Connection Established</span>  
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>  
            </div>  
          </div>  
            
          {status === 'error' && (  
            <p className="text-red-500 text-sm mt-4">Something went wrong. Please try again.</p>  
          )}  
        </form>  
      </div>

      <Footer />  
    </main>  
  );  
}  
