"use client"

import React, { useState } from 'react'  
import Link from 'next/link'

export default function Navigation() {  
const [isOpen, setIsOpen] = useState(false)

const toggleMenu = () => setIsOpen(!isOpen)  
const closeMenu = () => setIsOpen(false)

const navLinks = [  
  { name: 'Home', href: '/' },  
  { name: 'The Manifest', href: '/manifest' },  
  { name: 'The Reserve', href: '/reserve' },  
]

return (  
  <>  
    {/* Static Header */}  
    <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center bg-transparent">  
      <Link href="/" className="text-white font-extralight tracking-[0.2em] text-lg hover:text-[#d4af37] transition-colors">  
        NEXTVOYAGE <span className="font-light">COLLECTIVE</span>  
      </Link>

      {/* Concierge Trigger */}  
      <button   
        onClick={toggleMenu}  
        className="text-[#d4af37] font-extralight tracking-widest text-sm hover:opacity-80 transition-opacity flex items-center gap-2"  
      >  
        <span className="w-8 h-[1px] bg-[#d4af37]"></span>  
        CONCIERGE  
      </button>  
    </nav>

    {/* Cinematic Overlay Menu */}  
    <div   
      className={`fixed inset-0 z-50 bg-black transition-all duration-700 ease-in-out ${  
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'  
      }`}  
    >  
      {/* Blurred Background Image */}  
      <div   
        className="absolute inset-0 bg-cover bg-center opacity-40 grayscale"  
        style={{ backgroundImage: "url('https://cdn.marblism.com/5gKSV_IRXVD.webp')" }}  
      ></div>  
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Close Button (Custom SVG) */}  
      <button   
        onClick={closeMenu}  
        className="absolute top-8 right-8 text-[#d4af37] hover:scale-110 transition-transform z-50 p-2"  
        aria-label="Close Menu"  
      >  
        <svg   
          width="32"   
          height="32"   
          viewBox="0 0 24 24"   
          fill="none"   
          stroke="currentColor"   
          strokeWidth="1"   
          strokeLinecap="round"   
          strokeLinejoin="round"  
        >  
          <line x1="18" y1="6" x2="6" y2="18"></line>  
          <line x1="6" y1="6" x2="18" y2="18"></line>  
        </svg>  
      </button>

      {/* Menu Links */}  
      <div className="relative h-full flex flex-col justify-center items-center gap-12">  
        {navLinks.map((link) => (  
          <Link  
            key={link.name}  
            href={link.href}  
            onClick={closeMenu}  
            className="text-4xl md:text-6xl font-extralight tracking-[0.3em] text-white hover:text-[#d4af37] transition-all duration-300"  
          >  
            {link.name.toUpperCase()}  
          </Link>  
        ))}  
          
        <div className="mt-12 text-[#d4af37]/50 font-extralight tracking-widest text-xs uppercase">  
          Curating the Unforgettable  
        </div>  
      </div>  
    </div>  
  </>  
)  
}  
