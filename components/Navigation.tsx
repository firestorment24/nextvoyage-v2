"use client";

import { useState } from "react";  
import Link from "next/link";  
import { Menu, X } from "lucide-react";

const navLinks = [  
  { href: "/", label: "LOBBY" },  
  { href: "/archive", label: "ARCHIVE" },  
  { href: "/journal", label: "JOURNAL" },  
  { href: "/inquiry", label: "INQUIRY" },  
];

export default function Navigation() {  
  const [menuOpen, setMenuOpen] = useState(false);

  return (  
    <>  
      {/* Top fixed bar — fully transparent, brass text */}  
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4 bg-transparent">  
        <Link  
          href="/"  
          className="text-[1.25rem] font-serif tracking-[0.15em] text-[#D4AF37]"  
        >  
          NEXVOYAGE COLLECTIVE  
        </Link>  
        <button  
          onClick={() => setMenuOpen(!menuOpen)}  
          className="text-[#D4AF37] hover:text-white transition-colors"  
          aria-label="Toggle menu"  
        >  
          {menuOpen ? <X size={24} /> : <Menu size={24} />}  
        </button>  
      </nav>

      {/* Full-screen overlay — 75% smoky gray */}  
      {menuOpen && (  
        <div className="fixed inset-0 z-40 bg-[#2A2A2A]/75 flex flex-col items-center justify-center">  
          <div className="flex flex-col items-center gap-8">  
            {navLinks.map((link) => (  
              <Link  
                key={link.href}  
                href={link.href}  
                onClick={() => setMenuOpen(false)}  
                className="text-white text-2xl font-serif tracking-[0.2em] hover:text-[#D4AF37] transition-colors"  
              >  
                {link.label}  
              </Link>  
            ))}  
          </div>  
        </div>  
      )}

      {/* Spacer */}  
      <div className="h-16" />  
    </>  
  );  
}  
