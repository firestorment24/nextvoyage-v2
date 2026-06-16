"use client";

import { useState } from "react";  
import Link from "next/link";

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [  
    { name: "The Lobby", href: "/" },  
    { name: "Archive", href: "/archive" },  
    { name: "Perspective", href: "/perspective" },  
    { name: "Journal", href: "/journal" },  
    { name: "Invitation", href: "/invitation" },  
  ];

  return (  
    <>  
      <header className="fixed top-0 left-0 right-0 z-[100] px-8 py-10 flex justify-between items-center mix-blend-difference">  
        {/* LOGO - Brass & Shadow Aesthetic */}  
        <Link href="/" className="group flex flex-col" onClick={() => setIsOpen(false)}>  
          <span className="font-serif text-2xl tracking-[0.2em] font-light text-amber-100/90 uppercase transition-all duration-700 group-hover:tracking-[0.25em]">  
            NexVoyage  
          </span>  
          <span className="font-mono text-[9px] tracking-[0.6em] text-amber-200/40 uppercase -mt-1 group-hover:text-amber-200/70 transition-colors duration-700">  
            Collective  
          </span>  
        </Link>

        {/* MENU TOGGLE */}  
        <div className="flex items-center">  
          <button   
            onClick={() => setIsOpen(!isOpen)}  
            className="group flex flex-col gap-2 p-2 relative z-[110]"  
            aria-label="Toggle Menu"  
          >  
            <span className={`h-[1px] bg-amber-100/60 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-2.5' : 'w-8'}`} />  
            <span className={`h-[1px] bg-amber-100/60 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5 self-end'}`} />  
            <span className={`h-[1px] bg-amber-100/60 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-8'}`} />  
          </button>  
        </div>  
      </header>

      {/* OVERLAY MENU - Full Brass & Shadow Treatment */}  
      <div   
        className={`fixed inset-0 z-[90] bg-[#050505] transition-all duration-[1000ms] cubic-bezier(0.77, 0, 0.175, 1) ${  
          isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"  
        }`}  
      >  
        <div className="h-full flex flex-col justify-center items-center px-6">  
          <nav className="flex flex-col space-y-10 text-center">  
            {menuLinks.map((link, i) => (  
              <Link  
                key={link.name}  
                href={link.href}  
                onClick={() => setIsOpen(false)}  
                className="group relative"  
                style={{ transitionDelay: `${i * 100}ms` }}  
              >  
                {/* Main Link - Playfair Serif */}  
                <span className="block font-serif text-4xl md:text-6xl font-extralight tracking-[0.15em] text-amber-100/20 group-hover:text-amber-100 transition-all duration-700 uppercase">  
                  {link.name}  
                </span>  
                  
                {/* Hover Underline - Brass Glow */}  
                <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-amber-200/40 group-hover:w-24 transition-all duration-700" />  
              </Link>  
            ))}  
          </nav>

          {/* BACKGROUND DECOR - The "Shadow" */}  
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">  
            <span className="font-serif text-[25vw] text-amber-100/[0.02] uppercase select-none leading-none">  
              Voyage  
            </span>  
          </div>

          {/* BRASS ACCENT FOOTER */}  
          <div className="absolute bottom-12 flex flex-col items-center gap-4">  
            <div className="w-[1px] h-12 bg-gradient-to-t from-amber-200/30 to-transparent" />  
            <span className="font-mono text-[10px] tracking-[0.4em] text-amber-200/20 uppercase">  
              Established 2026  
            </span>  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};

export default Navigation;  
