import React from 'react';

export default function Footer() {  
  return (  
    <footer className="bg-stone-950 py-20 px-8 border-t border-stone-900">  
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
        <div className="space-y-4">  
          <h4 className="text-amber-200/50 uppercase tracking-widest text-xs">NexVoyage Collective</h4>  
          <p className="text-stone-600 text-sm max-w-xs font-serif italic">  
            Curated isolation for the high-net-worth traveler.  
          </p>  
        </div>  
        <div className="text-stone-500 text-[10px] uppercase tracking-widest space-y-2">  
          <p>© 2026 NexVoyage</p>  
          <p>By Appointment Only</p>  
        </div>  
      </div>  
    </footer>  
  );  
} 
