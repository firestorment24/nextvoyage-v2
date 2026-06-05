import React from 'react';  
import Link from 'next/link';

const IconCheck = () => (  
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>  
);

export default function SuccessPage() {  
  return (  
    <main className="min-h-screen bg-[#faf9f6] text-[#1a1a1a] font-light flex flex-col">  
      {/* Minimal Nav */}  
      <nav className="p-8 flex justify-center items-center">  
        <div className="text-xl tracking-[0.2em] font-extralight uppercase">NexVoyage</div>  
      </nav>

      {/* Content */}  
      <div className="flex-1 flex flex-col items-center justify-center px-8 text-center space-y-12">  
        <div className="w-16 h-16 border border-stone-200 rounded-full flex items-center justify-center text-stone-400">  
          <IconCheck />  
        </div>

        <div className="space-y-6 max-w-md">  
          <h1 className="text-4xl font-extralight tracking-tight lowercase italic">  
            Manifest Received  
          </h1>  
          <p className="text-stone-500 leading-relaxed font-light">  
            Your inquiry has been logged in The Ledger. A member of the Collective will review your requirements and reach out via your provided coordinates within 4 hours.  
          </p>  
        </div>

        <div className="pt-12">  
          <Link   
            href="/"  
            className="text-[10px] uppercase tracking-[0.5em] text-stone-400 hover:text-[#1a1a1a] transition-colors duration-500 pb-1 border-b border-stone-200"  
          >  
            Return to Index  
          </Link>  
        </div>  
      </div>

      {/* Footer */}  
      <footer className="p-8 text-center">  
        <p className="text-[9px] uppercase tracking-widest text-stone-300">  
          Transaction ID: NV-{Math.floor(Math.random() * 1000000)}  
        </p>  
      </footer>  
    </main>  
  );  
}  
