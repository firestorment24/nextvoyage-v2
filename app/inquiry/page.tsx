"use client";

import React, { useState } from 'react';

export default function InquiryPage() {  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  
    e.preventDefault();  
    setSubmitted(true);  
  };

  if (submitted) {  
    return (  
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-1000">  
        <h1 className="text-6xl md:text-9xl font-light tracking-tighter italic mb-8">Acknowledged.</h1>  
        <p className="max-w-md text-zinc-500 uppercase tracking-[0.4em] text-[10px] mb-12 leading-loose">  
          Your narrative has been dispatched. Rachel is reviewing the details for alignment.  
        </p>  
        <button   
          onClick={() => window.open('https://cal.com/daryl-clark', '_blank')}  
          className="text-xs border border-zinc-800 px-12 py-6 hover:bg-white hover:text-black transition-all duration-700 uppercase tracking-[0.5em]"  
        >  
          Schedule Discovery  
        </button>  
      </div>  
    );  
  }

  return (  
    <div className="min-h-screen bg-black text-white p-6 md:p-12 lg:p-24 selection:bg-white selection:text-black">  
      <main className="max-w-6xl mx-auto pt-24 md:pt-32">  
        <form onSubmit={handleSubmit} className="space-y-12 md:space-y-24">  
          <header className="mb-24">  
            <span className="text-[10px] uppercase tracking-[0.6em] text-zinc-700 mb-4 block">Intake Protocol</span>  
            <h1 className="text-7xl md:text-[12rem] font-light tracking-tighter leading-[0.8] italic uppercase opacity-90">  
              Inquiry  
            </h1>  
          </header>

          <div className="text-3xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight md:leading-[1.1]">  
            <span className="text-zinc-700">My name is</span>{" "}  
            <input   
              required  
              type="text"   
              placeholder="[ IDENTITY ]"  
              className="bg-transparent border-b border-zinc-800 focus:border-white outline-none placeholder:text-zinc-900 transition-colors inline-block w-full md:w-auto uppercase italic"  
            />  
            {" "}<span className="text-zinc-700">and I am looking to explore</span>{" "}  
            <input   
              required  
              type="text"   
              placeholder="[ DESTINATION ]"  
              className="bg-transparent border-b border-zinc-800 focus:border-white outline-none placeholder:text-zinc-900 transition-colors inline-block w-full md:w-auto uppercase italic"  
            />  
            <span className="text-zinc-700"> during </span>{" "}  
            <input   
              required  
              type="text"   
              placeholder="[ TIMEFRAME ]"  
              className="bg-transparent border-b border-zinc-800 focus:border-white outline-none placeholder:text-zinc-900 transition-colors inline-block w-full md:w-auto uppercase italic"  
            />  
            <br className="hidden md:block" />  
            <span className="text-zinc-700">You can reach me at</span>{" "}  
            <input   
              required  
              type="email"   
              placeholder="[ EMAIL ]"  
              className="bg-transparent border-b border-zinc-800 focus:border-white outline-none placeholder:text-zinc-900 transition-colors inline-block w-full md:w-auto uppercase italic"  
            />  
            {" "}<span className="text-zinc-700">to discuss further.</span>  
          </div>

          <div className="pt-12 md:pt-24 flex flex-col md:flex-row items-start md:items-center justify-between border-t border-zinc-900">  
            <div className="max-w-sm mb-8 md:mb-0">  
              <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600 leading-relaxed">  
                By submitting, you acknowledge that NexVoyage Collective operates as a private advisory. Rachel AI handles initial data processing for discovery alignment.  
              </p>  
            </div>  
            <button   
              type="submit"  
              className="text-4xl md:text-6xl font-light italic tracking-tighter hover:tracking-normal transition-all duration-700 uppercase group"  
            >  
              Submit <span className="text-zinc-800 group-hover:text-white transition-colors">→</span>  
            </button>  
          </div>  
        </form>  
      </main>

      <footer className="mt-48 flex justify-between items-end border-t border-zinc-900 pt-8">  
        <div className="space-y-1">  
          <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-800 italic">Analyst: Rachel AI</p>  
          <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-800">Station: R-01</p>  
        </div>  
        <p className="text-[9px] uppercase tracking-[0.5em] text-zinc-800">© 2026 NexVoyage</p>  
      </footer>  
    </div>  
  );  
}  
