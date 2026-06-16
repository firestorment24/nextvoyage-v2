"use client";

import Link from 'next/link';  
import { useState, useEffect } from 'react';

export function Navigation() {  
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

  return (  
    <>  
      <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-10 md:px-16 pointer-events-none">  
        <div className="pointer-events-auto">  
          <Link   
            href="/"   
            onClick={closeMenu}  
            className="text-stone-200 font-serif text-lg md:text-xl tracking-[0.3em] hover:text-amber-200 transition-all duration-700 uppercase"  
          >  
            NexVoyage Collective  
          </Link>  
        </div>

        <div className="pointer-events-auto">  
          <button   
            onClick={toggleMenu}  
            aria-label={isOpen ? "Close Menu" : "Open Menu"}  
            className="group flex flex-col items-end gap-2 p-2 focus:outline-none"  
          >  
            <span className={`h-[1px] bg-amber-200/40 group-hover:bg-amber-200 transition-all duration-500 ${isOpen ? 'w-10 rotate-45 translate-y-[5px]' : 'w-8'}`}></span>  
            <span className={`h-[1px] bg-amber-200/40 group-hover:bg-amber-200 transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5'}`}></span>  
            <span className={`h-[1px] bg-amber-200/40 group-hover:bg-amber-200 transition-all duration-500 ${isOpen ? 'w-10 -rotate-45 -translate-y-[5px]' : 'w-10'}`}></span>  
          </button>  
        </div>  
      </header>

      {/* THE OVERLAY MENU */}  
      <div className={`fixed inset-0 z-[90] transition-all duration-1000 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>  
        <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl" />  
        <nav className="relative h-full flex flex-col justify-center px-8 md:px-24">  
          <div className="space-y-6 md:space-y-10">  
            {[  
              { name: 'The Journal', href: '/journal' },  
              { name: 'Private Invitation', href: '/invitation' },  
              { name: 'The Mandate', href: '/mandate' },  
              { name: 'Rachel AI', href: 'https://cal.com/nexvoyage/rachel' }  
            ].map((link, i) => (  
              <div key={link.name} className="overflow-hidden">  
                <Link  
                  href={link.href}  
                  onClick={closeMenu}  
                  className="block text-4xl md:text-7xl font-serif text-stone-200 hover:text-amber-200 hover:pl-8 transition-all duration-700 tracking-tighter"  
                  style={{ transitionDelay: `${i * 100}ms` }}  
                >  
                  {link.name}  
                </Link>  
              </div>  
            ))}  
          </div>  
        </nav>  
      </div>  
    </>  
  );  
}  
