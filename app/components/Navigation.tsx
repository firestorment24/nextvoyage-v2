import React, { useState } from 'react';  
import Link from 'next/link';  
import { Menu, X } from 'lucide-react';

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [  
    { name: 'The Home', href: '/' },  
    { name: 'The 9 Sanctuaries', href: '/#sanctuaries' },  
    { name: 'Private Concierge', href: '/concierge' },  
    { name: 'Impact & Safety', href: '/safety' },  
  ];

  return (  
    <>  
      {/* Trigger - Floating "Ghost" Button */}  
      <button   
        onClick={() => setIsOpen(true)}  
        className="fixed top-8 right-8 z-50 p-2 mix-blend-difference text-white hover:opacity-70 transition-opacity"  
        aria-label="Open Menu"  
      >  
        <Menu size={24} strokeWidth={1} />  
      </button>

      {/* Overlay Menu */}  
      <div className={`fixed inset-0 z-[60] bg-black transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>  
        <button   
          onClick={() => setIsOpen(false)}  
          className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity"  
        >  
          <X size={24} strokeWidth={1} />  
        </button>

        <nav className="flex flex-col items-center justify-center h-full space-y-12">  
          {navLinks.map((link) => (  
            <Link   
              key={link.name}   
              href={link.href}  
              onClick={() => setIsOpen(false)}  
              className="text-white text-3xl md:text-5xl font-light tracking-widest hover:italic transition-all duration-300"  
            >  
              {link.name}  
            </Link>  
          ))}  
            
          <div className="pt-12">  
            <p className="text-zinc-500 text-sm tracking-[0.3em] uppercase">NexVoyage Collective</p>  
          </div>  
        </nav>  
      </div>  
    </>  
  );  
};

export default Navigation;  
