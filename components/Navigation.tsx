"use client";

import React, { useState } from 'react';  
import Link from 'next/link';  
import { Menu, X } from 'lucide-react';

export const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [  
    { name: 'Lobby', subtitle: 'Arrival & Overview', href: '/' },  
    { name: 'Archive', subtitle: 'The Elite Ledger', href: '/archive' },  
    { name: 'Perspective', subtitle: 'The Silent ROI', href: '/perspective' },  
    { name: 'Journal', subtitle: 'Recent Dispatches', href: '/journal' },  
    { name: 'Inquiry', subtitle: 'Private Consultation', href: '/inquiry' },  
  ];

  return (  
    <>  
      {/* Static Header */}  
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-items-center mix-blend-difference text-[#A69F88]">  
        <Link href="/" className="text-xl font-serif tracking-widest uppercase">  
          NexVoyage Collective  
        </Link>  
        <button   
          onClick={() => setIsOpen(true)}  
          className="flex items-center gap-2 uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"  
        >  
          Menu <Menu size={20} />  
        </button>  
      </nav>

      {/* Cinematic Overlay */}  
      {isOpen && (  
        <div className="fixed inset-0 z-[100] bg-black flex flex-col p-12 animate-in fade-in duration-500">  
          <div className="flex justify-between items-center mb-20 text-[#A69F88]">  
            <span className="text-sm tracking-[0.3em] uppercase opacity-50 italic">The Concierge</span>  
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform duration-300">  
              <X size={32} />  
            </button>  
          </div>

          <div className="flex flex-col gap-12">  
            {navLinks.map((link, index) => (  
              <Link   
                key={link.name}  
                href={link.href}  
                onClick={() => setIsOpen(false)}  
                className="group flex flex-col"  
              >  
                <div className="flex items-baseline gap-6">  
                  <span className="text-[#A69F88] text-xs font-mono opacity-50 group-hover:opacity-100">  
                    0{index + 1}  
                  </span>  
                  <span className="text-5xl md:text-7xl font-serif text-white group-hover:text-[#A69F88] transition-colors duration-300 uppercase tracking-tighter">  
                    {link.name}  
                  </span>  
                </div>  
                <span className="ml-14 text-[#A69F88] text-sm tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500 font-light italic">  
                  {link.subtitle}  
                </span>  
              </Link>  
            ))}  
          </div>

          <div className="mt-auto pt-12 border-t border-[#A69F88]/10 flex justify-between text-[#A69F88] text-[10px] tracking-[0.4em] uppercase opacity-40">  
            <span>Curating the Unreachable</span>  
            <span>© 2026 NexVoyage</span>  
          </div>  
        </div>  
      )}  
    </>  
  );  
};  
