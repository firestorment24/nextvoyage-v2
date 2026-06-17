"use client";

import React, { useState } from 'react';  
import Link from 'next/link';  
import { Menu, X } from 'lucide-react';

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [  
    { name: 'HOME', href: '/' },  
    { name: 'THE ARCHIVE', href: '/archive' },  
    { name: 'JOURNAL', href: '/journal' },  
    { name: 'CONCIERGE', href: '/concierge' },  
  ];

  const brass = '#C5A059';

  return (  
    <nav className="fixed top-0 left-0 w-full z-[1000] bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#C5A059]/10">  
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
        {/* Logo */}  
        <Link href="/" className="text-[#C5A059] text-2xl font-serif tracking-widest hover:opacity-80 transition-opacity">  
          NEXTVOYAGE  
        </Link>

        {/* Desktop Menu */}  
        <div className="hidden md:flex space-x-12">  
          {navLinks.map((link) => (  
            <Link  
              key={link.name}  
              href={link.href}  
              className="text-[#C5A059] text-sm tracking-[0.2em] hover:text-white transition-colors"  
            >  
              {link.name}  
            </Link>  
          ))}  
        </div>

        {/* Mobile Toggle */}  
        <button   
          className="md:hidden p-2 focus:outline-none relative z-[1001]"  
          onClick={() => setIsOpen(!isOpen)}  
          aria-label="Toggle Menu"  
          style={{   
            color: brass,   
            display: 'flex',   
            alignItems: 'center',   
            justifyContent: 'center',  
            background: 'rgba(10, 10, 10, 0.6)',  
            borderRadius: '4px'  
          }}  
        >  
          {isOpen ? (  
            <X size={28} color={brass} strokeWidth={2} />  
          ) : (  
            <Menu size={28} color={brass} strokeWidth={2} />  
          )}  
        </button>  
      </div>

      {/* Mobile Menu Overlay */}  
      {isOpen && (  
        <div className="md:hidden fixed inset-0 top-20 bg-[#0A0A0A] z-[999] p-8 flex flex-col space-y-8">  
          {navLinks.map((link) => (  
            <Link  
              key={link.name}  
              href={link.href}  
              onClick={() => setIsOpen(false)}  
              className="text-[#C5A059] text-xl tracking-[0.2em] hover:text-white transition-colors border-b border-white/5 pb-4"  
            >  
              {link.name}  
            </Link>  
          ))}  
        </div>  
      )}  
    </nav>  
  );  
};

export default Navigation; 
