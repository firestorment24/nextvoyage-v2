import React from 'react';  
import Link from 'next/link';

export default function Footer() {  
  return (  
    <footer className="bg-[#050505] border-t border-white/5 pt-32 pb-20">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">  
            
          {/* Brand Pillar */}  
          <div className="md:col-span-5">  
            <h2 className="font-serif text-3xl md:text-4xl italic text-white mb-8">  
              NexVoyage Collective  
            </h2>  
            <p className="text-white/40 text-sm tracking-widest uppercase leading-loose max-w-sm">  
              Architecting sanctuaries for the global soul. Part of the NexVoyage "Guardian Layer" — where privacy meets unprecedented access.  
            </p>  
          </div>

          {/* Navigation Columns */}  
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">  
            <div className="space-y-6">  
              <h3 className="text-[#A68966] text-[10px] tracking-[0.4em] uppercase font-bold">The Portfolio</h3>  
              <ul className="space-y-4 text-xs tracking-widest uppercase text-white/60">  
                <li><Link href="/sanctuaries" className="hover:text-white transition-colors">All Sanctuaries</Link></li>  
                <li><Link href="/concierge" className="hover:text-white transition-colors">The Concierge</Link></li>  
              </ul>  
            </div>  
              
            <div className="space-y-6">  
              <h3 className="text-[#A68966] text-[10px] tracking-[0.4em] uppercase font-bold">Legal</h3>  
              <ul className="space-y-4 text-xs tracking-widest uppercase text-white/60">  
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>  
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>  
              </ul>  
            </div>

            <div className="space-y-6">  
              <h3 className="text-[#A68966] text-[10px] tracking-[0.4em] uppercase font-bold">Connect</h3>  
              <ul className="space-y-4 text-xs tracking-widest uppercase text-white/60">  
                <li><a href="mailto:daryl.clark@fora.travel" className="hover:text-white transition-colors">Secure Inquiry</a></li>  
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>  
              </ul>  
            </div>  
          </div>  
        </div>

        {/* Bottom Bar */}  
        <div className="pt-12 border-t border-white/5 flex flex-col md:row items-center justify-between gap-8">  
          <div className="flex items-center gap-4">  
            <div className="h-1 w-1 bg-[#A68966] rounded-full animate-pulse" />  
            <span className="text-[9px] tracking-[0.5em] text-white/20 uppercase font-bold">  
              Guardian Response Active  
            </span>  
          </div>  
          <p className="text-[9px] tracking-[0.3em] text-white/10 uppercase">  
            © 2026 NexVoyage Collective. All Rights Reserved.  
          </p>  
        </div>  
      </div>  
    </footer>  
  );  
}  
