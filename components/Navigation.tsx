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
  <header className="fixed top-0 left-0 w-full z-50 bg-transparent px-4 py-4">  
    <div className="w-full flex items-center justify-between">  
      <Link   
        href="/"   
        className="font-serif text-[#D4AF37] text-xl md:text-2xl tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"  
      >  
        NEXVOYAGE COLLECTIVE  
      </Link>  
      <button  
        onClick={() => setIsOpen(!isOpen)}  
        className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] font-medium px-4 py-2 hover:opacity-80 transition-opacity flex items-center gap-2 bg-black/40 border border-[#D4AF37]/30 backdrop-blur-sm"  
      >  
        <span>{isOpen ? 'Close' : 'Menu'}</span>  
        <span className="text-base">{isOpen ? '✕' : '☰'}</span>  
      </button>  
    </div>  
  </header>

  {/* Backdrop */}  
  {isOpen && (  
    <div   
      onClick={() => setIsOpen(false)}  
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity"  
    />  
  )}

  {/* Right-Side Slide-Out Drawer */}  
  <div className={`fixed top-0 right-0 h-full w-full max-w-md z-50 bg-[#2A2A2A] border-l border-[#D4AF37]/20 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col justify-between p-8 md:p-12 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>  
      
    {/* Drawer Header */}  
    <div className="flex items-center justify-between border-b border-white/10 pb-6">  
      <div>  
        <p className="text-[#D4AF37] text-[10px] uppercase tracking-[0.3em]">Navigation Directory</p>  
        <h2 className="text-white font-serif text-lg tracking-wider mt-1">NexVoyage Collective</h2>  
      </div>  
      <button  
        onClick={() => setIsOpen(false)}  
        className="text-[#D4AF37] text-sm uppercase tracking-widest px-3 py-1 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 transition-colors"  
      >  
        ✕ Close  
      </button>  
    </div>

    {/* Navigation Links */}  
    <nav className="flex flex-col space-y-3 my-auto py-6 overflow-y-auto">  
      {navLinks.map((link) => (  
        <Link  
          key={link.name}  
          href={link.path}  
          onClick={() => setIsOpen(false)}  
          className="group flex items-baseline justify-between py-2 border-b border-white/5 hover:border-[#D4AF37]/40 transition-colors"  
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

    {/* Drawer Footer */}  
    <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40">  
      <span>Private • Discreet • Curated</span>  
      <span>© 2026</span>  
    </div>

  </div>  
</>  
);  
}  
