'use client';  
import React, { useState } from 'react';  
import Link from 'next/link';

export default function Navigation() {  
const [isOpen, setIsOpen] = useState(false);

const navLinks = [  
{ name: 'The Lobby', path: '/', desc: 'Arrival & Overview' },  
{ name: 'The Manifest', path: '/manifest', desc: 'The Elite Ledger' },  
{ name: 'The Mandate', path: '/mandate', desc: 'Our Philosophy' },  
{ name: 'The Reserve', path: '/reserve', desc: 'Private Consultation' },  
];

return (  
<>  
  {/* Static Header & Concierge Trigger */}  
  <div className="fixed top-0 left-0 w-full z-[100] px-10 py-10 flex justify-between items-center pointer-events-none">  
    {/* Static Brand Text (No Pulse) */}  
    <div className="pointer-events-auto">  
      <Link href="/" className="text-[10px] uppercase tracking-[0.6em] text-[#d4af37] font-bold no-underline">  
        NexVoyage Collective  
      </Link>  
    </div>

    {/* Concierge Trigger */}  
    <button   
      onClick={() => setIsOpen(true)}  
      className="pointer-events-auto group flex items-center gap-4 transition-all"  
    >  
      <span className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">  
        Concierge  
      </span>  
      <div className="flex flex-col gap-2 items-end">  
        <div className="w-8 h-[1px] bg-[#d4af37] group-hover:w-12 transition-all duration-700" />  
        <div className="w-4 h-[1px] bg-[#d4af37] group-hover:w-12 transition-all duration-700" />  
      </div>  
    </button>  
  </div>

  {/* Fullscreen Overlay */}  
  <div className={`fixed inset-0 z-[110] bg-[#0a0a0a] transition-all duration-1000 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>  
      
    {/* Background Visual */}  
    <div className="absolute inset-0 z-0">  
      <img   
        src="https://cdn.marblism.com/5gKSV_IRXVD.webp"   
        className="w-full h-full object-cover opacity-20 grayscale brightness-[0.4]"  
        alt="Menu Backdrop"  
      />  
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />  
    </div>

    {/* Close Button */}  
    <button   
      onClick={() => setIsOpen(false)}  
      className="absolute top-12 right-12 flex items-center gap-4 text-[#d4af37] hover:text-white transition-all duration-700"  
    >  
      <span className="text-[10px] uppercase tracking-[0.5em]">Close</span>  
      <div className="relative w-8 h-8 flex items-center justify-center">  
        <div className="absolute w-8 h-[1px] bg-current rotate-45" />  
        <div className="absolute w-8 h-[1px] bg-current -rotate-45" />  
      </div>  
    </button>

    {/* Nav Links */}  
    <nav className="relative z-10 h-full flex flex-col justify-center px-8 md:px-24 lg:px-48">  
      <div className="space-y-16">  
        {navLinks.map((link, i) => (  
          <div key={link.name} className="group overflow-hidden">  
            <Link   
              href={link.path}   
              onClick={() => setIsOpen(false)}  
              className="block no-underline outline-none !text-[#d4af37]"  
            >  
              <div className="flex items-start md:items-center gap-10">  
                <span className="text-[#d4af37] opacity-40 text-sm font-mono transition-opacity duration-700 group-hover:opacity-100">  
                  0{i + 1}  
                </span>  
                <div className="space-y-3">  
                  <h2 className="text-5xl md:text-8xl font-extralight tracking-tighter text-stone-300 group-hover:text-[#d4af37] group-hover:italic transition-all duration-1000 ease-out">  
                    {link.name}  
                  </h2>  
                  <p className="text-[10px] uppercase tracking-[0.7em] text-[#d4af37] opacity-40 transition-all duration-700 group-hover:opacity-100">  
                    {link.desc}  
                  </p>  
                </div>  
              </div>  
            </Link>  
          </div>  
        ))}  
      </div>

      {/* Footer Details */}  
      <div className="absolute bottom-16 left-8 md:left-24 lg:left-48 flex flex-col md:flex-row gap-12 border-t border-stone-900/50 pt-12 w-full max-w-4xl">  
        <div className="space-y-3 pr-12 border-r border-stone-900/50">  
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#d4af37] opacity-60 block">Communication</span>  
          <p className="text-sm text-stone-500 hover:text-[#d4af37] transition-colors cursor-pointer">concierge@nexvoyage.com</p>  
        </div>  
        <div className="space-y-3">  
          <span className="text-[9px] uppercase tracking-[0.4em] text-[#d4af37] opacity-60 block">Social Transmission</span>  
          <div className="flex gap-8">  
            {['Instagram', 'LinkedIn'].map(s => (  
              <span key={s} className="text-sm text-stone-500 hover:text-[#d4af37] transition-colors cursor-pointer">{s}</span>  
            ))}  
          </div>  
        </div>  
      </div>  
    </nav>  
  </div>  
</>  
);  
}  
