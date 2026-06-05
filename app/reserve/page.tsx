'use client';

import { useState } from 'react';  
import Link from 'next/link';

export default function ReservePage() {  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    // In a real app, you'd send this to your backend or CRM  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">  
        <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-400 mb-8">  
          Received  
        </span>  
        <h1 className="text-4xl font-light tracking-tighter text-neutral-900 mb-6">  
          Your inquiry is being reviewed.  
        </h1>  
        <p className="text-neutral-500 max-w-md mx-auto mb-12 font-light leading-relaxed">  
          A dedicated specialist from the NexVoyage Collective will contact you via your preferred secure channel within 12 hours.  
        </p>  
        <Link   
          href="/sanctuaries"  
          className="text-[10px] tracking-[0.3em] uppercase font-bold text-neutral-900 border-b border-neutral-900 pb-1"  
        >  
          Return to Sanctuaries  
        </Link>  
      </main>  
    );  
  }

  return (  
    <main className="min-h-screen bg-white pt-32 pb-24 px-6">  
      <div className="max-w-3xl mx-auto">  
        <header className="mb-20">  
          <span className="text-[10px] tracking-[0.5em] uppercase text-neutral-400 mb-6 block">  
            The Reserve  
          </span>  
          <h1 className="text-5xl font-light tracking-tighter text-neutral-900 mb-6">  
            Private Inquiry  
          </h1>  
          <p className="text-xl text-neutral-500 font-light leading-relaxed">  
            Your journey begins with a conversation. Tell us about the vision for your next sanctuary.  
          </p>  
        </header>

        <form onSubmit={handleSubmit} className="space-y-16">  
          {/* Section: Identity */}  
          <div className="space-y-12">  
            <div className="group">  
              <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 mb-2 group-focus-within:text-neutral-900 transition-colors">  
                Full Name  
              </label>  
              <input   
                required  
                type="text"   
                placeholder="Ex. Alexander Sterling"  
                className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-200"  
              />  
            </div>

            <div className="group">  
              <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 mb-2 group-focus-within:text-neutral-900 transition-colors">  
                Communication  
              </label>  
              <input   
                required  
                type="email"   
                placeholder="email@example.com"  
                className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-200"  
              />  
            </div>  
          </div>

          {/* Section: The Brief */}  
          <div className="space-y-12">  
            <div className="group">  
              <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 mb-2 group-focus-within:text-neutral-900 transition-colors">  
                Requested Sanctuary  
              </label>  
              <select className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl font-light focus:outline-none focus:border-neutral-900 transition-colors appearance-none">  
                <option value="">Select a destination (optional)</option>  
                <option value="metropolitan">The Metropolitan</option>  
                <option value="coastal">The Coastal</option>  
                <option value="island">The Island</option>  
                <option value="alpine">The Alpine</option>  
                <option value="safari">The Safari</option>  
                <option value="oasis">The Oasis</option>  
                {/* ... other sanctuaries ... */}  
              </select>  
            </div>

            <div className="group">  
              <label className="block text-[10px] tracking-[0.2em] uppercase font-bold text-neutral-400 mb-2 group-focus-within:text-neutral-900 transition-colors">  
                The Brief  
              </label>  
              <textarea   
                rows={4}  
                placeholder="Share any specific requirements or desired dates..."  
                className="w-full bg-transparent border-b border-neutral-200 py-4 text-xl font-light focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-200 resize-none"  
              />  
            </div>  
          </div>

          <div className="pt-8">  
            <button   
              type="submit"  
              className="w-full md:w-auto px-12 py-5 bg-neutral-900 text-white text-[10px] tracking-[0.4em] uppercase hover:bg-neutral-800 transition-all duration-300"  
            >  
              Submit Inquiry  
            </button>  
            <p className="mt-6 text-[10px] text-neutral-400 italic">  
              Strict confidentiality is maintained for all inquiries.  
            </p>  
          </div>  
        </form>  
      </div>  
    </main>  
  );  
}  
