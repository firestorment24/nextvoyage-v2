'use client';  
import Link from 'next/link';  
import { usePathname } from 'next/navigation';

export default function Navigation() {  
  const pathname = usePathname();

  return (  
    <nav className="fixed top-0 left-0 w-full z-[100] p-8 md:px-12 flex justify-between items-center pointer-events-auto">  
      {/* Brand Identity */}  
      <Link href="/" className="group">  
        <span className="font-serif text-xl md:text-2xl italic tracking-tighter text-[#d4af37]">  
          NexVoyage <span className="opacity-40 group-hover:opacity-100 transition-opacity">Collective</span>  
        </span>  
      </Link>

      {/* Navigation Links */}  
      <div className="flex gap-8 md:gap-12 items-center">  
        <Link   
          href="/journal"   
          className={`font-mono text-[10px] uppercase tracking-[0.4em] transition-all hover:opacity-100 ${pathname === '/journal' ? 'opacity-100 border-b border-[#d4af37]/30 pb-1' : 'opacity-40'}`}  
        >  
          Journal  
        </Link>  
        <Link   
          href="/invitation"   
          className={`font-mono text-[10px] uppercase tracking-[0.4em] transition-all hover:opacity-100 ${pathname === '/invitation' ? 'opacity-100 border-b border-[#d4af37]/30 pb-1' : 'opacity-40'}`}  
        >  
          Terminal  
        </Link>  
          
        {/* Status Indicator */}  
        <div className="hidden md:flex items-center gap-2 px-4 py-2 border border-[#d4af37]/10 bg-[#d4af37]/[0.02]">  
          <span className="w-1 h-1 rounded-full bg-[#d4af37] animate-pulse"></span>  
          <span className="font-mono text-[8px] uppercase tracking-[0.2em] opacity-40">System Active</span>  
        </div>  
      </div>  
    </nav>  
  );  
}  
