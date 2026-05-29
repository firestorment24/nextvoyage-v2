import React, { useState } from 'react';  
import Link from 'next/link';  
import { Menu, X, Search } from 'lucide-react';  
import GlobalSearch from './GlobalSearch';

const Navigation = () => {  
  const [isMenuOpen, setIsMenuOpen] = useState(false);  
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [  
    { name: 'The Home', href: '/' },  
    { name: 'The 9 Sanctuaries', href: '/#sanctuaries' },  
    { name: 'Private Concierge', href: '/concierge' },  
    { name: 'Impact & Safety', href: '/safety' },  
  ];

  return (  
    <>  
      {/* Top Right Controls */}  
      <div className="fixed top-8 right-8 z-50 flex items-center space-x-6 mix-blend-difference text-white">  
        {/* Search Trigger */}  
        <button   
          onClick={() => setIsSearchOpen(true)}  
          className="hover:opacity-70 transition-opacity flex items-center"  
          aria-label="Search"  
        >  
          <Search size={22} strokeWidth={1} />  
          <span className="hidden md:inline ml-2 text-[10px] uppercase tracking-[0.2em] font-light">Search</span>  
        </button>

        {/* Menu Trigger */}  
        <button   
          onClick={() => setIsMenuOpen(true)}  
          className="p-1 hover:opacity-70 transition-opacity"  
          aria-label="Open Menu"  
        >  
          <Menu size={24} strokeWidth={1} />  
        </button>  
      </div>

      {/* Global Search Component - Controls its own logic + Cmd+K */}  
      {isSearchOpen && <GlobalSearch isOpenOverride={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}

      {/* Slide-over Ghost Menu */}  
      <div className={`fixed inset-0 z-[60] bg-black transition-transform duration-700 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>  
        <button   
          onClick={() => setIsMenuOpen(false)}  
          className="absolute top-8 right-8 text-white hover:opacity-70 transition-opacity"  
        >  
          <X size={24} strokeWidth={1} />  
        </button>

        <nav className="flex flex-col items-center justify-center h-full space-y-12">  
          {navLinks.map((link) => (  
            <Link   
              key={link.name}   
              href={link.href}  
              onClick={() => setIsMenuOpen(false)}  
              className="text-white text-3xl md:text-5xl font-light tracking-widest hover:italic transition-all duration-300"  
            >  
              {link.name}  
            </Link>  
          ))}  
            
          <div className="pt-12 text-center">  
            <p className="text-zinc-500 text-[10px] tracking-[0.4em] uppercase">NexVoyage Collective</p>  
            <p className="text-zinc-700 text-[8px] mt-2 uppercase tracking-[0.2em]">Refined Exploration</p>  
          </div>  
        </nav>  
      </div>  
    </>  
  );  
};

export default Navigation;  
