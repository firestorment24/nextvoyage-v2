"use client";

import { useState } from "react";  
import Link from "next/link";

const navLinks = [  
{ label: "ARCHIVE", href: "/archive" },  
{ label: "JOURNAL", href: "/journal" },  
{ label: "INQUIRY", href: "/inquiry" },  
];

export default function Navigation() {  
const [menuOpen, setMenuOpen] = useState(false);

return (  
<>  
{/* TOP BAR */}  
<nav className="fixed top-0 left-0 w-full z-50 bg-transparent">  
<div className="w-full flex items-center justify-between px-5 h-16">  
  {/* LEFT: Brand */}  
  <Link href="/" className="text-[#C9A96E] no-underline">  
    <span  
      className="text-[1.25rem] tracking-[0.15em]"  
      style={{ fontFamily: "'Cormorant Garamond', serif" }}  
    >  
      NEXVOYAGE COLLECTIVE  
    </span>  
  </Link>

  {/* RIGHT: Menu toggle */}  
  <button  
    onClick={() => setMenuOpen(!menuOpen)}  
    className="text-white bg-transparent border-none cursor-pointer text-sm tracking-[0.2em] uppercase"  
  >  
    {menuOpen ? "CLOSE" : "MENU"}  
  </button>  
</div>  
</nav>

{/* OVERLAY MENU */}  
{menuOpen && (  
<div className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#2A2A2A]">  
  <nav className="flex flex-col items-center gap-8">  
    {navLinks.map((link) => (  
      <Link  
        key={link.href}  
        href={link.href}  
        onClick={() => setMenuOpen(false)}  
        className="text-white text-[2rem] tracking-[0.1em] no-underline transition-opacity duration-300 hover:opacity-60"  
        style={{ fontFamily: "'Cormorant Garamond', serif" }}  
      >  
        {link.label}  
      </Link>  
    ))}  
  </nav>  
</div>  
)}  
</>  
);  
}  
