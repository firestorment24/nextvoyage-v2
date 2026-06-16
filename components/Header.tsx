"use client";

import Link from 'next/link';  
import { useState } from 'react';

export function Header() {  
  // Logic to toggle the menu state  
  const toggleMenu = () => {  
    // We use a class on the body to trigger the 'Soul' menu transitions  
    if (typeof document !== 'undefined') {  
      document.body.classList.toggle('menu-active');  
    }  
  };

  return (  
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-10 md:px-16 pointer-events-none">  
      <div className="pointer-events-auto">  
        <Link   
          href="/"   
          className="text-stone-200 font-serif text-lg md:text-xl tracking-[0.3em] hover:text-amber-200 transition-all duration-700 uppercase"  
        >  
          NexVoyage Collective  
        </Link>  
      </div>

      <div className="pointer-events-auto">  
        <button   
          onClick={toggleMenu}  
          aria-label="Toggle Menu"  
          className="group flex flex-col items-end gap-2 p-2 focus:outline-none"  
        >  
          <span className="w-8 h-[1px] bg-amber-200/40 group-hover:bg-amber-200 group-hover:w-10 transition-all duration-500"></span>  
          <span className="w-5 h-[1px] bg-amber-200/40 group-hover:bg-amber-200 group-hover:w-10 transition-all duration-500"></span>  
          <span className="w-10 h-[1px] bg-amber-200/40 group-hover:bg-amber-200 transition-all duration-500"></span>  
        </button>  
      </div>  
    </header>  
  );  
}  
