'use client';

import { useState } from 'react';  
import Link from 'next/link';

const navLinks = [  
{ name: 'Lobby', path: '/', subtitle: 'Arrival Protocol' },  
{ name: 'Mandate', path: '/mandate', subtitle: 'The Philosophy' },  
{ name: 'Services', path: '/services', subtitle: 'Private Advisory' },  
{ name: 'Perspective', path: '/perspective', subtitle: 'The Intelligence' },  
{ name: 'Archive', path: '/archive', subtitle: 'Registry of Significance' },  
{ name: 'Journal', path: '/journal', subtitle: 'Seasonal Intelligence' },  
{ name: 'Events', path: '/events', subtitle: 'Global Gatherings' },  
{ name: 'Inquiry', path: '/inquiry', subtitle: 'Begin Consultation' },  
];

export default function Navigation() {  
const [isOpen, setIsOpen] = useState(false);

return (  
  <>  
    {/* Top Header Bar */}  
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-2 py-4">  
      <div className="w-full flex items-center justify-between">  
        <Link   
          href="/"   
          className="font-serif text-[#D4AF37] text-xl md:text-2xl tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"  
        >  
          NEXVOYAGE COLLECTIVE  
        </Link>  
        <button  
          onClick={() => setIsOpen(!isOpen)}  
          className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium px-4 py-2 hover:opacity-80 transition-opacity flex items-center gap-2"  
        >  
          <span>{isOpen ? 'Close' : 'Menu'}</span>  
          <span className="text-base">{isOpen ? '✕' : '☰'}</span>  
        </button>  
      </div>  
    </header>

    {/* Full-Screen Overlay Menu */}  
    {isOpen && (  
      <div className="fixed inset-0 z-40 bg-[#2A2A2A]/90 backdrop-blur-md flex flex-col justify-between px-8 md:px-16 pt-32 pb-16 animate-fadeIn">  
        <div className="max-w-3xl w-full mx-auto space-y-8">  
          <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">Navigation Directory</p>  
            
          <nav className="flex flex-col space-y-3 md:space-y-4">  
            {navLinks.map((link) => (  
              <Link  
                key={link.name}  
                href={link.path}  
                onClick={() => setIsOpen(false)}  
                className="group flex items-baseline justify-between py-1 border-b border-white/5 hover:border-[#D4AF37]/40 transition-colors"  
              >  
                <span className="text-xl md:text-2xl font-light text-white group-hover:text-[#D4AF37] transition-colors">  
                  {link.name}  
                </span>  
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-hover:text-[#D4AF37]/80 transition-colors">  
                  {link.subtitle}  
                </span>  
              </Link>  
            ))}  
          </nav>  
        </div>

        <div className="max-w-3xl w-full mx-auto pt-6 border-t border-white/10 flex items-center justify-between text-xs text-white/40">  
          <span>Private • Discreet • Curated</span>  
          <span>NexVoyage Collective © 2026</span>  
        </div>  
      </div>  
    )}  
  </>  
);  
}  
