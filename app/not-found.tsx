"use client";

import Link from 'next/link';

export default function NotFound() {  
return (  
  <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-center px-8">  
    <div className="space-y-4">  
      <p className="font-mono text-[10px] tracking-[0.5em] text-amber-200 uppercase">Error 404 // Lost in Transit</p>  
      <h1 className="text-6xl md:text-8xl font-serif italic tracking-tighter text-stone-200">Invalid Route.</h1>  
      <p className="font-mono text-[11px] text-stone-500 uppercase tracking-widest max-w-xs mx-auto leading-relaxed">  
        The coordinates you requested do not exist within the NexVoyage Collective registry.  
      </p>  
      <div className="pt-12">  
        <Link   
          href="/"   
          className="px-8 py-3 border border-stone-800 hover:border-amber-200 text-stone-400 hover:text-amber-200 font-mono text-[10px] tracking-[0.3em] uppercase transition-all duration-700"  
        >  
          Return to Lobby  
        </Link>  
      </div>  
    </div>  
  </div>  
);  
}  
