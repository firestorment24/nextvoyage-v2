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
    {/* Concierge Trigger */}  
    <button   
      onClick={() => setIsOpen(true)}  
      className="fixed top-10 right-10 z-[100] group flex items-center gap-4 transition-all"  
    >  
      <span className="text-[10px] uppercase tracking-[0.5em] text-[#d4af37] opacity-0 group-hover:opacity-100 transition-all duration-700 translate-x-4 group-hover:translate-x-0">  
        Concierge  
      </span>  
      <div className="flex flex-col gap-2 items-end">  
        <div className="w-8 h-[1px] bg-[#d4af37] group-hover:w-12 transition-all duration-700" />  
        <div className="w-4 h-[1px] bg-[#d4af37] group-hover:w-12 transition-all duration-700" />  
      </div>  
    </button>

    {/* Fullscreen Overlay */}  
    <div className={`fixed inset-0 z-[110] bg-[#0a0a0a] transition-all duration-1000 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>  
        
      {/* Background Visual */}  
      <div className="absolute inset-0 z-0">  
        <img   
          src="https://cdn.marblism.com/5gKSV_IRXVD.webp"   
          className="w-full h-full object-cover opacity-20 grayscale brightness-50"  
          alt="Menu Backdrop"  
        />  
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />  
      </div>

      {/* Close Button */}  
      <button   
        onClick={() => setIsOpen(false)}  
        className="absolute top-10 right-10 flex items-center gap-4 text-stone-500 hover:text-[#d4af37] transition-all duration-700"  
      >  
        <span className="text-[10px] uppercase tracking-[0.5em]">Close</span>  
        <div className="relative w-8 h-8 flex items-center justify-center">  
          <div className="absolute w-8 h-[1px] bg-current rotate-45" />  
          <div className="absolute w-8 h-[1px] bg-current -rotate-45" />  
        </div>  
      </button>

      {/* Nav Links */}  
      <nav className="relative z-10 h-full flex flex-col justify-center px-12 md:px-32">  
        <div className="space-y-12">  
          {navLinks.map((link, i) => (  
            <div key={link.name} className="group overflow-hidden">  
              <Link   
                href={link.path}   
                onClick={() => setIsOpen(false)}  
                className="block space-y-2"  
              >  
                <div className="flex items-center gap-8">  
                  <span className="text-stone-700 text-xs font-mono transition-colors duration-700 group-hover:text-[#d4af37]">0{i + 1}</span>  
                  <h2 className="text-5xl md:text-8xl font-light tracking-tighter text-stone-300 group-hover:text-[#d4af37] group-hover:italic transition-all duration-1000">  
                    {link.name}  
                  </h2>  
                </div>  
                <p className="text-[10px] uppercase tracking-[0.8em] text-stone-700 ml-16 md:ml-24 transition-all duration-700 group-hover:text-[#d4af37] group-hover:opacity-80">  
                  {link.desc}  
                </p>  
              </Link>  
            </div>  
          ))}  
        </div>

        {/* Footer in Menu */}  
        <div className="absolute bottom-16 left-12 md:left-32 flex gap-16 border-t border-stone-900 pt-10 w-2/3">  
          <div className="space-y-2">  
            <span className="text-[9px] uppercase tracking-widest text-stone-700">Digital Transmission</span>  
            <p className="text-xs text-stone-500 hover:text-[#d4af37] cursor-pointer transition-colors">concierge@nexvoyage.com</p>  
          </div>  
          <div className="space-y-2">  
            <span className="text-[9px] uppercase tracking-widest text-stone-700">Presence</span>  
            <p className="text-xs text-stone-500 hover:text-[#d4af37] cursor-pointer transition-colors">Instagram / LinkedIn</p>  
          </div>  
        </div>  
      </nav>  
    </div>  
  </>  
);  
}  
