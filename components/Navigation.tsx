"use client";

import Link from 'next/link';  
import { useState } from 'react';

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {  
    setIsOpen(!isOpen);  
    if (typeof document !== 'undefined') {  
      document.body.classList.toggle('menu-active');  
    }  
  };

  const closeMenu = () => {  
    setIsOpen(false);  
    if (typeof document !== 'undefined') {  
      document.body.classList.remove('menu-active');  
    }  
  };

  const navLinks = [  
    { name: 'The Lobby', sub: 'Arrival Protocol', href: '/' },  
    { name: 'Archive', sub: 'The Elite Ledger', href: '/archive' },  
    { name: 'Perspective', sub: 'Deep Intelligence', href: '/perspective' },  
    { name: 'Journal', sub: 'Master Narratives', href: '/journal' },  
    { name: 'Invitation', sub: 'Private Enrollment', href: '/invitation' }  
  ];

  return (  
    <>  
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-10 md:px-16 pointer-events-none">  
        <div className="pointer-events-auto">  
          <Link   
            href="/"   
            onClick={closeMenu}  
            className="text-stone-200 font-serif text-lg md:text-xl tracking-[0.3em] hover:text-amber-200/80 transition-all duration-700 uppercase"  
          >  
            NexVoyage Collective  
          </Link>  
        </div>

  

          <button   
            onClick={toggleMenu}  
            className="group flex flex-col items-end gap-2.5 p-2 focus:outline-none"  
          >  
            <span className={`h-[1px] bg-amber-200/30 group-hover:bg-amber-200 transition-all duration-500 ${isOpen ? 'w-10 rotate-45 translate-y-[6px]' : 'w-8'}`}></span>  
            <span className={`h-[1px] bg-amber-200/30 group-hover:bg-amber-200 transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5'}`}></span>  
            <span className={`h-[1px] bg-amber-200/30 group-hover:bg-amber-200 transition-all duration-500 ${isOpen ? 'w-10 -rotate-45 -translate-y-[6px]' : 'w-10'}`}></span>  
          </button>  
        </div>  
      </header>

      {/* OVERLAY MENU - Centered Brass & Shadow */}  
      <div className={`fixed inset-0 z-[90] transition-all duration-[1200ms] cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>  
        <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-2xl" />  
          
        {/* Subtle brass glow in the center */}  
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/5 blur-[150px] rounded-full pointer-events-none" />

        <nav className="relative h-full flex flex-col justify-center items-center text-center px-8">  
          <div className="space-y-8 md:space-y-12 max-w-4xl w-full">  
            {navLinks.map((link, i) => (  
              <div key={link.name} className="overflow-hidden group">  
                <Link  
                  href={link.href}  
                  onClick={closeMenu}  
                  className="block transition-all duration-700"  
                  style={{ transitionDelay: `${i * 100}ms` }}  
                >  
                  <span className="block font-mono text-[10px] md:text-[12px] tracking-[0.5em] text-stone-600 group-hover:text-amber-200/40 uppercase mb-2 transition-colors duration-500 italic">  
                    // {link.sub}  
                  </span>  
                  <span className="block text-4xl md:text-8xl font-serif text-stone-200 group-hover:text-amber-200 transition-all duration-700 tracking-tighter group-hover:italic group-hover:tracking-normal">  
                    {link.name}  
                  </span>  
                </Link>  
              </div>  
            ))}  
              
             
          </div>  
        </nav>  
      </div>  
    </>  
  );  
}  
