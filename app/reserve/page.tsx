'use client';

import { useState } from 'react';

export default function ReservePage() {  
  const [hasTrip, setHasTrip] = useState(false);

  return (  
    <main className="min-h-screen bg-black text-white font-light selection:bg-neutral-800">  
      {/* Minimal Navigation */}  
      <nav className="p-8 flex justify-between items-center border-b border-white/5">  
        <div className="flex items-center gap-2">  
          <span className="text-xl tracking-tighter uppercase font-bold">NexVoyage</span>  
          <span className="opacity-20">/</span>  
          <span className="text-xl tracking-tighter uppercase opacity-60">Collective</span>  
        </div>  
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-40">Private Member Intake</span>  
      </nav>

      <section className="max-w-2xl mx-auto py-24 px-8">  
        <header className="mb-16">  
          <h1 className="text-5xl tracking-tighter mb-4">Establish Your Profile</h1>  
          <p className="text-neutral-500 text-lg leading-relaxed">  
            Membership is by invitation or application. Please provide your details to begin the vetting process.  
          </p>  
        </header>

        <form className="space-y-12">  
          {/* Identity Section */}  
          <div className="space-y-8">  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <div className="space-y-2">  
                <label className="text-[10px] uppercase tracking-widest opacity-40">Full Name</label>  
                <input type="text" placeholder="Daryl Clark" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors" />  
              </div>  
              <div className="space-y-2">  
                <label className="text-[10px] uppercase tracking-widest opacity-40">Email Address</label>  
                <input type="email" placeholder="daryl@nexvoyage.com" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors" />  
              </div>  
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">  
              <div className="space-y-2">  
                <label className="text-[10px] uppercase tracking-widest opacity-40">Date of Birth</label>  
                <input type="text" placeholder="MM / DD / YYYY" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors" />  
              </div>  
              <div className="space-y-2">  
                <label className="text-[10px] uppercase tracking-widest opacity-40">Current Location</label>  
                <input type="text" placeholder="New York, NY" className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors" />  
              </div>  
            </div>  
          </div>

          {/* Preferences */}  
          <div className="space-y-2">  
            <label className="text-[10px] uppercase tracking-widest opacity-40">Favorite Brands / Aesthetics</label>  
            <textarea placeholder="Aman, Loro Piana, Vitra..." className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors h-24 resize-none" />  
          </div>

          {/* Trip Toggle */}  
          <div className="pt-8 space-y-6">  
            <div className="flex items-center gap-4">  
              <button   
                type="button"  
                onClick={() => setHasTrip(!hasTrip)}  
                className={`w-12 h-6 rounded-full border border-white/20 relative transition-colors ${hasTrip ? 'bg-white' : 'bg-transparent'}`}  
              >  
                <div className={`absolute top-1 w-4 h-4 rounded-full transition-all ${hasTrip ? 'right-1 bg-black' : 'left-1 bg-white/20'}`} />  
              </button>  
              <span className="text-sm tracking-tight opacity-80">I have a specific sanctuary or trip in mind</span>  
            </div>

            {hasTrip && (  
              <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-500">  
                <label className="text-[10px] uppercase tracking-widest opacity-40">Trip Details</label>  
                <textarea placeholder="Dates, party size, and specific requirements..." className="w-full bg-transparent border-b border-white/10 py-2 focus:outline-none focus:border-white transition-colors h-24 resize-none" />  
              </div>  
            )}  
          </div>

          <button className="w-full py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-bold hover:bg-neutral-200 transition-colors">  
            Submit Application  
          </button>  
        </form>  
      </section>

      <footer className="p-8 border-t border-white/5 flex justify-between items-center opacity-20 text-[10px] uppercase tracking-widest mt-24">  
        <span>Est. 2026</span>  
        <span>© NexVoyage Collective</span>  
      </footer>  
    </main>  
  );  
}  
