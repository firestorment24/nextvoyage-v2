"use client";  
import { useState } from 'react';  
import Link from 'next/link';  
import GlobalSearch from './GlobalSearch';

export default function Navigation() {  
const [isSearchOpen, setIsSearchOpen] = useState(false);

return (  
  <>  
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6">  
      <Link href="/" className="text-xl font-light tracking-[0.3em] hover:opacity-60 transition-opacity">  
        NV/C  
      </Link>  
        
      <div className="flex items-center gap-8">  
        <button   
          onClick={() => setIsSearchOpen(true)}  
          className="text-[10px] tracking-[0.2em] text-white/40 hover:text-white uppercase transition-colors flex items-center gap-2"  
        >  
          <span>Search</span>  
          <span className="opacity-30">[⌘K]</span>  
        </button>  
          
        <Link href="/contact" className="text-[10px] tracking-[0.2em] text-white/40 hover:text-white uppercase transition-colors">  
          Contact  
        </Link>  
      </div>  
    </nav>

    <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />  
  </>  
);  
}  
