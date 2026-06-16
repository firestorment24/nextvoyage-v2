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

      <div className="flex items-center gap-8 pointer-events-auto">  
        {/* Direct Concierge Number */}  
        <div className="hidden md:flex flex-col items-end font-mono text-[9px] tracking-[0.2em] text-stone-500 uppercase">  
          <span className="text-[7px] text-amber-200/50 mb-1">Direct Concierge</span>  
          <a href="tel:+1800NEXVOYG" className="hover:text-stone-200 transition-colors tracking-[0.3em]">+1 (800) NEX-VOYG</a>  
        </div>

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

    <div className={`fixed inset-0 z-[90] transition-all duration-1000 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>  
      <div className="absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-3xl" />  
      <nav className="relative h-full flex flex-col justify-center px-8 md:px-24">  
        <div className="space-y-6 md:space-y-8">  
          {[  
            { name: 'The Lobby', href: '/' },  
            { name: 'Archive', href: '/archive' },  
            { name: 'Perspective', href: '/perspective' },  
            { name: 'Journal', href: '/journal' },  
            { name: 'Invitation', href: '/invitation' }  
          ].map((link, i) => (  
            <div key={link.name} className="overflow-hidden">  
              <Link  
                href={link.href}  
                onClick={closeMenu}  
                className="block text-4xl md:text-6xl font-serif text-stone-200 hover:text-amber-200 hover:pl-8 transition-all duration-700 tracking-tighter"  
                style={{ transitionDelay: `${i * 75}ms` }}  
              >  
                {link.name}  
              </Link>  
            </div>  
          ))}  
            
          <div className="pt-12 border-t border-white/5 mt-12">  
            <Link   
              href="/concierge"   
              onClick={closeMenu}  
              className="font-mono text-[10px] tracking-[0.4em] text-stone-500 hover:text-amber-200 transition-colors uppercase"  
            >  
              Access Private Concierge →  
            </Link>  
          </div>  
        </div>  
      </nav>  
    </div>  
  </>  
);  
}  
