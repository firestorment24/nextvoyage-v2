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
      <header className="fixed top-0 left-0 right-0 z-[100] px-6 py-8 flex justify-between items-center mix-blend-difference">  
        {/* LOGO */}  
        <Link href="/" className="group flex flex-col" onClick={() => setIsOpen(false)}>  
          <span className="text-xl tracking-[0.3em] font-light text-amber-100/90 uppercase">  
            NexVoyage  
          </span>  
          <span className="text-[10px] tracking-[0.5em] text-amber-200/40 uppercase -mt-1 group-hover:text-amber-200/70 transition-colors">  
            Collective  
          </span>  
        </Link>

        {/* MENU TOGGLE */}  
        <div className="flex items-center">  
          <button   
            onClick={() => setIsOpen(!isOpen)}  
            className="group flex flex-col gap-1.5 p-2 relative z-[110]"  
            aria-label="Toggle Menu"  
          >  
            <span className={`h-[1px] bg-amber-100/70 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />  
            <span className={`h-[1px] bg-amber-100/70 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'opacity-0' : 'w-5'}`} />  
            <span className={`h-[1px] bg-amber-100/70 group-hover:bg-amber-100 transition-all duration-500 ${isOpen ? 'w-8 -rotate-45 -translate-y-2' : 'w-8'}`} />  
          </button>  
        </div>  
      </header>

      {/* OVERLAY MENU */}  
      <div   
        className={`fixed inset-0 z-[90] bg-[#0a0a0a] transition-all duration-[800ms] ease-in-out ${  
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"  
        }`}  
      >  
        <div className="h-full flex flex-col justify-center items-center px-6">  
          <nav className="flex flex-col space-y-8 text-center">  
            {menuLinks.map((link) => (  
              <Link  
                key={link.name}  
                href={link.href}  
                onClick={() => setIsOpen(false)}  
                className="group relative"  
              >  
                <span className="text-3xl md:text-5xl font-light tracking-[0.2em] text-amber-100/40 group-hover:text-amber-100 transition-colors duration-500 uppercase">  
                  {link.name}  
                </span>  
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-amber-200/30 group-hover:w-full transition-all duration-700" />  
              </Link>  
            ))}  
          </nav>

          {/* BRASS ACCENT FOOTER */}  
          <div className="absolute bottom-12 left-0 right-0 flex justify-center">  
            <div className="w-12 h-[1px] bg-amber-200/20" />  
          </div>  
        </div>  
      </div>  
    </>  
  );  
};

export default Navigation;
