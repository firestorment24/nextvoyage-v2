"use client";

import React, { useState, useEffect } from 'react';  
import Link from 'next/link';  
import { Menu, X } from 'lucide-react';

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when menu is open  
  useEffect(() => {  
    if (isOpen) {  
      document.body.style.overflow = 'hidden';  
    } else {  
      document.body.style.overflow = 'unset';  
    }  
  }, [isOpen]);

  const navLinks = [  
    { name: 'LOBBY', href: '/', sub: 'The Beginning' },  
    { name: 'ARCHIVE', href: '/archive', sub: 'Curated Collection' },  
    { name: 'JOURNAL', href: '/journal', sub: 'Travel Stories' },  
    { name: 'INVITATION', href: '/invitation', sub: 'Direct Inquiry' },  
  ];

  const brass = '#C5A059';  
  const shadow = '#0A0A0A';

  return (  
    <>  
      {/* Top Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[1001] h-24 flex items-center justify-between px-8 md:px-12 pointer-events-none">  
        {/* Logo - Stays visible or hides depending on vibe */}  
        <Link   
          href="/"   
          className="text-[#C5A059] text-2xl font-serif tracking-[0.3em] hover:opacity-80 transition-opacity pointer-events-auto"  
        >  
          NEXVOYAGE COLLECTIVE  
        </Link>

        {/* The Toggle Button */}  
        <button   
          onClick={() => setIsOpen(!isOpen)}  
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-[#0A0A0A]/40 backdrop-blur-sm border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all group"  
          aria-label="Toggle Menu"  
        >  
          {isOpen ? (  
            <X size={24} color={brass} strokeWidth={1.5} />  
          ) : (  
            <Menu size={24} color={brass} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />  
          )}  
        </button>  
      </nav>

      {/* Fullscreen Overlay */}  
      <div   
        className={`fixed inset-0 z-[1000] bg-[#0A0A0A] transition-all duration-700 ease-in-out ${  
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'  
        }`}  
      >  
        

        <div className="relative h-full flex flex-col items-center justify-center px-6">  
          <div className="flex flex-col space-y-10 md:space-y-12 text-center">  
            {navLinks.map((link, i) => (  
              <Link  
                key={link.name}  
                href={link.href}  
                onClick={() => setIsOpen(false)}  
                className={`group flex flex-col items-center transform transition-all duration-700 delay-[${i * 100}ms] ${  
                  isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'  
                }`}  
              >  
                <span className="text-[#C5A059] text-xs tracking-[0.4em] mb-2 font-mono opacity-60 group-hover:opacity-100 transition-opacity">  
                  {link.sub}  
                </span>  
                <span className="text-white text-4xl md:text-6xl font-serif tracking-widest group-hover:text-[#C5A059] transition-colors duration-500">  
                  {link.name}  
                </span>  
              </Link>  
            ))}  
          </div>

          {/* Bottom Menu Info */}  
          <div className={`absolute bottom-12 text-center transition-all duration-1000 delay-500 ${  
            isOpen ? 'opacity-100' : 'opacity-0'  
          }`}>  
            <p className="text-[#C5A059]/40 text-xs tracking-[0.3em] uppercase">  
              Member Services | Private Collection  
            </p>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};

export default Navigation;  
