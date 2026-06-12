"use client";

import React, { useState } from 'react';  
import Link from 'next/link';

/**  
 * INLINE SVG ICONS   
 * Used to eliminate the 'lucide-react' dependency and fix build errors.  
 */  
const MenuIcon = () => (  
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>  
);

const CloseIcon = () => (  
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>  
);

/**  
 * NAVIGATION COMPONENT  
 * Features:  
 * - Restore subtitles for each menu item.  
 * - Cinematic overlay with gold/brass aesthetic (#A69F88).  
 * - Dual export (named + default) to satisfy all page imports.  
 */  
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
      {/* Fixed Header */}  
      <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference text-[#A69F88]">  
        <Link href="/" className="text-xl font-serif tracking-widest uppercase">  
          NexVoyage Collective  
        </Link>  
        <button   
          onClick={() => setIsOpen(true)}  
          className="flex items-center gap-2 uppercase tracking-widest text-sm hover:opacity-70 transition-opacity"  
        >  
          Menu <MenuIcon />  
        </button>  
      </nav>

      {/* Full-Screen Overlay */}  
      {isOpen && (  
        <div className="fixed inset-0 z-[100] bg-black flex flex-col p-12 animate-in fade-in duration-500 overflow-y-auto">  
          <div className="flex justify-between items-center mb-12 text-[#A69F88]">  
            <span className="text-sm tracking-[0.3em] uppercase opacity-50 italic">The Concierge</span>  
            <button   
              onClick={() => setIsOpen(false)}   
              className="hover:rotate-90 transition-transform duration-300"  
            >  
              <CloseIcon />  
            </button>  
          </div>

          <div className="flex flex-col gap-10 md:gap-12">  
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
                  <span className="text-4xl md:text-7xl font-serif text-white group-hover:text-[#A69F88] transition-colors duration-300 uppercase tracking-tighter">  
                    {link.name}  
                  </span>  
                </div>  
                <span className="ml-14 text-[#A69F88] text-[10px] md:text-sm tracking-[0.2em] uppercase opacity-40 group-hover:opacity-100 transition-opacity duration-500 font-light italic">  
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

// Default export to support mandate/manifest pages  
export default Navigation; 
