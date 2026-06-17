"use client";

import React, { useState, useEffect } from 'react';  
import Link from 'next/link';  
import { usePathname } from 'next/navigation';

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false);  
  const pathname = usePathname();

  // Close menu when route changes  
  useEffect(() => {  
    setIsOpen(false);  
  }, [pathname]);

  const navLinks = [  
    { name: 'The Lobby', href: '/', subtitle: 'Arrival Protocol' },  
    { name: 'Archive', href: '/archive', subtitle: 'Historical Ledger' },  
    { name: 'Perspective', href: '/perspective', subtitle: 'Curated Sight' },  
    { name: 'Journal', href: '/journal', subtitle: 'Tactical Intel' },  
    { name: 'Invitation', href: '/invitation', subtitle: 'Private Access' },  
  ];

  return (  
    <>  
      {/* Top Navigation Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[100] bg-[#050505] border-b border-[#D4AF37]/10 h-20 px-6 md:px-12 flex items-center justify-between">  
        <Link href="/" className="group">  
          <span className="text-[#D4AF37] font-serif text-xl tracking-[0.2em] uppercase group-hover:opacity-70 transition-opacity">  
            NexVoyage  
          </span>  
        </Link>

        {/* Desktop Links */}  
        <div className="hidden md:flex items-center space-x-12">  
          {navLinks.map((link) => (  
            <Link key={link.href} href={link.href} className="group flex flex-col items-end">  
              <span className={`text-[10px] uppercase tracking-[0.3em] mb-1 transition-colors ${pathname === link.href ? 'text-[#D4AF37]' : 'text-[#D4AF37]/40 group-hover:text-[#D4AF37]'}`}>  
                {link.subtitle}  
              </span>  
              <span className={`font-serif text-sm tracking-widest uppercase transition-colors ${pathname === link.href ? 'text-[#D4AF37]' : 'text-stone-400 group-hover:text-[#D4AF37]'}`}>  
                {link.name}  
              </span>  
            </Link>  
          ))}  
          <div className="pl-4 border-l border-[#D4AF37]/20">  
            <span className="text-[9px] uppercase tracking-[0.2em] text-[#D4AF37]/60 block">Direct Concierge</span>  
            <span className="text-xs font-mono text-[#D4AF37]">+1 (888) VOYAGE-0</span>  
          </div>  
        </div>

        {/* Mobile Toggle */}  
        <button   
          onClick={() => setIsOpen(!isOpen)}  
          className="md:hidden text-[#D4AF37] focus:outline-none p-2"  
        >  
          <div className="w-6 h-px bg-current mb-1.5 transition-all"></div>  
          <div className="w-4 h-px bg-current ml-auto transition-all"></div>  
        </button>  
      </nav>

      {/* Full Screen Overlay Menu */}  
      <div className={`fixed inset-0 z-[99] bg-[#050505] transition-transform duration-700 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>  
        <div className="h-full flex flex-col items-center justify-center space-y-8">  
          {navLinks.map((link) => (  
            <Link   
              key={link.href}   
              href={link.href}   
              className="group text-center"  
              onClick={() => setIsOpen(false)}  
            >  
              <span className="block text-[10px] uppercase tracking-[0.5em] text-[#D4AF37]/40 mb-2">{link.subtitle}</span>  
              <span className="text-3xl md:text-5xl font-serif uppercase tracking-[0.2em] text-stone-300 group-hover:text-[#D4AF37] transition-colors">  
                {link.name}  
              </span>  
            </Link>  
          ))}  
        </div>  
          
        {/* Background Watermark */}  
        <div className="absolute bottom-10 left-10 pointer-events-none opacity-[0.03] select-none">  
          <span className="text-[15vw] font-serif uppercase tracking-tighter text-[#D4AF37]">VOYAGE</span>  
        </div>  
      </div>

      {/* Spacer to prevent content from hiding under the fixed nav */}  
      <div className="h-20 w-full" />  
    </>  
  );  
}  
