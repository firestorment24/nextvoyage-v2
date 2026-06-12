// components/Navigation.tsx  
'use client';

import { useState } from 'react';  
import Link from 'next/link';

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [  
    { name: 'The Lobby', href: '/' },  
    { name: 'The Archive', href: '/archive' },  
    { name: 'The Perspective', href: '/perspective' },  
    { name: 'The Journal', href: '/journal' },  
    { name: 'The Inquiry', href: '/inquiry' },  
  ];

  return (  
    <>  
      {/* Top Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[100] px-10 py-8 flex justify-between items-center mix-blend-difference">  
        <Link href="/" className="text-white font-serif text-2xl tracking-tighter hover:opacity-70 transition-opacity">  
          NexVoyage  
        </Link>

        <button   
          onClick={() => setIsOpen(true)}  
          className="group flex items-center gap-4 text-[#A69F88] uppercase tracking-[0.3em] text-xs font-light"  
        >  
          <span className="group-hover:mr-2 transition-all">The Concierge</span>  
          <div className="w-8 h-px bg-[#A69F88] group-hover:w-12 transition-all" />  
        </button>  
      </nav>

      {/* Full-Screen Overlay */}  
      <div className={`fixed inset-0 z-[200] bg-[#0A0A0A] transition-all duration-1000 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>  
        {/* Header inside Menu */}  
        <div className="absolute top-8 left-10 w-[calc(100%-80px)] flex justify-between items-center">  
           <span className="text-white/20 font-serif text-2xl tracking-tighter">NexVoyage</span>  
           <button   
            onClick={() => setIsOpen(false)}  
            className="text-[#A69F88] uppercase tracking-[0.3em] text-xs hover:text-white transition-colors"  
          >  
            Close / Exit  
          </button>  
        </div>

        {/* Links Container */}  
        <div className="h-full flex flex-col justify-center items-center space-y-8 md:space-y-12">  
          {navLinks.map((link, idx) => (  
            <Link  
              key={link.name}  
              href={link.href}  
              onClick={() => setIsOpen(false)}  
              className="group relative overflow-hidden"  
            >  
              <span className="absolute -left-10 top-1/2 -translate-y-1/2 text-[10px] text-[#A69F88] font-mono opacity-0 group-hover:opacity-100 transition-opacity">  
                0{idx + 1}  
              </span>  
              <h2 className="text-4xl md:text-7xl font-serif text-white hover:text-[#A69F88] transition-colors duration-500 uppercase tracking-tighter">  
                {link.name}  
              </h2>  
            </Link>  
          ))}  
        </div>

        {/* Footer inside Menu */}  
        <div className="absolute bottom-12 left-0 w-full text-center">  
          <p className="text-white/20 uppercase tracking-[0.5em] text-[10px]">  
            Curating the Unreachable — 2026  
          </p>  
        </div>  
      </div>  
    </>  
  );  
}  
