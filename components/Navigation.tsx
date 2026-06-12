"use client"; // Required for the toggle state

import { useState } from 'react';  
import Link from 'next/link';

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [  
    { title: 'Lobby', subtitle: 'Arrival & Overview', href: '/' },  
    { title: 'Archive', subtitle: 'The Elite Ledger', href: '/archive' },  
    { title: 'Perspective', subtitle: 'The Silent ROI', href: '/perspective' },  
    { title: 'Journal', subtitle: 'Recent Dispatches', href: '/journal' },  
    { title: 'Inquiry', subtitle: 'Private Consultation', href: '/inquiry' },  
  ];

  return (  
    <>  
      {/* Top Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[100] py-8 px-12 flex justify-between items-center bg-transparent">  
        <div className="text-[#C5A059] font-serif text-xl tracking-widest uppercase">  
          <Link href="/">NexVoyage</Link>  
        </div>

        <button   
          onClick={() => setIsOpen(!isOpen)}  
          className="text-[#C5A059] font-sans text-xs uppercase tracking-[0.3em] transition-all duration-500 hover:tracking-[0.4em]"  
        >  
          {isOpen ? '[ Close ]' : '[ Concierge ]'}  
        </button>  
      </nav>

      {/* Hidden Dropdown Overlay */}  
      <div className={`fixed inset-0 z-[90] bg-[#000000] flex flex-col justify-center items-center transition-all duration-1000 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>  
        <div className="flex flex-col space-y-12 text-center">  
          {navItems.map((item) => (  
            <Link   
              key={item.title}   
              href={item.href}   
              onClick={() => setIsOpen(false)}  
              className="group"  
            >  
              <h2 className="text-[#C5A059] font-serif text-4xl tracking-widest uppercase transition-all duration-700 group-hover:scale-105">  
                {item.title}  
              </h2>  
              <p className="text-[#C5A059]/40 font-sans text-[10px] uppercase tracking-[0.4em] mt-2 transition-all duration-700 group-hover:text-[#C5A059]/80 group-hover:tracking-[0.5em]">  
                {item.subtitle}  
              </p>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </>  
  );  
};

export default Navigation;  
