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
    { name: 'INQUIRY', href: '/inquiry', sub: 'Direct Inquiry' },  
  ];

  const brass = '#C5A059';  
  const shadow = '#0A0A0A';

  return (  
    <>  
      {/* Top Bar — fully transparent */}  
      {/* Top Bar — fully transparent, flush to edges */}  
<nav  
  className="fixed top-0 left-0 right-0 z-50"  
  style={{ background: 'transparent' }}  
>  
  <div className="flex items-center justify-between w-full px-2 py-6">  
    <Link  
      href="/"  
      className="tracking-[0.15em] text-sm"  
      style={{  
        fontFamily: "'Cormorant Garamond', serif",  
        color: '#C5A059',  
      }}  
    >  
      NEXVOYAGE COLLECTIVE  
    </Link>  
    <button  
      onClick={() => setIsOpen(!isOpen)}  
      className="text-white hover:text-[#C5A059] transition-colors duration-300"  
    >  
      {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}  
    </button>  
  </div>  
</nav> 
      
      {/* Fullscreen Overlay — solid black */}  
      <div  
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center transition-opacity duration-500 ${  
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'  
        }`}  
        style={{ backgroundColor: shadow }}  
      >  
        <div className="flex flex-col items-center gap-12">  
          {navLinks.map((link, i) => (  
            <Link  
              key={link.name}  
              href={link.href}  
              onClick={() => setIsOpen(false)}  
              className="group flex flex-col items-center transform transition-all duration-700"  
              style={{  
                transitionDelay: `${i * 100}ms`,  
                opacity: isOpen ? 1 : 0,  
                transform: isOpen ? 'translateY(0)' : 'translateY(2.5rem)',  
              }}  
            >  
              <span  
                className="text-xs tracking-[0.3em] uppercase mb-2"  
                style={{ color: brass, fontFamily: "'Cormorant Garamond', serif" }}  
              >  
                {link.sub}  
              </span>  
              <span  
                className="text-4xl tracking-[0.2em] font-light"  
                style={{  
                  color: '#ffffff',  
                  fontFamily: "'Cormorant Garamond', serif",  
                }}  
              >  
                {link.name}  
              </span>  
            </Link>  
          ))}  
        </div>  
      </div>

      {/* Bottom Menu Info — visible only when overlay is open */}  
      <div  
        className={`fixed bottom-8 left-0 right-0 z-50 text-center transition-opacity duration-700 delay-500 ${  
          isOpen ? 'opacity-100' : 'opacity-0'  
        }`}  
      >  
        <span  
          className="text-xs tracking-[0.2em] uppercase"  
          style={{ color: brass, fontFamily: "'Cormorant Garamond', serif" }}  
        >  
          Member Services | Private Collection  
        </span>  
      </div>  
    </>  
  );  
};

export default Navigation;  
