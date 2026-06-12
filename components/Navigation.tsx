"use client"

import React, { useState } from 'react'  
import Link from 'next/link'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)  
  const closeMenu = () => setIsOpen(false)

  const navLinks = [  
    { name: 'The Lobby', subtitle: 'Arrival & Overview', href: '/' },  
    { name: 'The Manifest', subtitle: 'The Elite Ledger', href: '/manifest' },  
    { name: 'The Mandate', subtitle: 'Our Philosophy', href: '/mandate' },  
    { name: 'The Reserve', subtitle: 'Private Consultation', href: '/reserve' },  
  ]

  return (  
    <>  
      {/* Static Header */}  
      <nav className="fixed top-0 left-0 w-full z-40 px-8 py-6 flex justify-between items-center bg-transparent">  
        <Link href="/" className="text-white font-extralight tracking-[0.2em] text-lg hover:text-[#d4af37] transition-colors">  
          NEXVOYAGE <span className="font-light">COLLECTIVE</span>  
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

        {/* Close Button */}  
        <button   
          onClick={closeMenu}  
          className="absolute top-8 right-8 text-[#d4af37] hover:scale-110 transition-transform z-50 p-2"  
          aria-label="Close Menu"  
        >  
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">  
            <line x1="18" y1="6" x2="6" y2="18"></line>  
            <line x1="6" y1="6" x2="18" y2="18"></line>  
          </svg>  
        </button>

        {/* Main Menu Layout */}  
        <div className="relative h-full flex flex-col justify-center items-center px-4">  
            
          {/* Nav Links with Subtitles */}  
          <div className="flex flex-col gap-10 md:gap-14 items-center">  
            {navLinks.map((link) => (  
              <Link  
                key={link.name}  
                href={link.href}  
                onClick={closeMenu}  
                className="group flex flex-col items-center text-center"  
              >  
                <span className="text-3xl md:text-5xl font-extralight tracking-[0.3em] text-white group-hover:text-[#d4af37] transition-all duration-300">  
                  {link.name.toUpperCase()}  
                </span>  
                <span className="mt-2 text-[10px] md:text-xs font-extralight tracking-[0.4em] text-[#d4af37]/60 group-hover:text-[#d4af37] transition-colors uppercase">  
                  {link.subtitle}  
                </span>  
              </Link>  
            ))}  
          </div>

          {/* Secondary Footer / Contact Section */}  
          <div className="mt-20 flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">  
            <div className="w-12 h-[1px] bg-[#d4af37]/30"></div>  
              
            <a   
              href="mailto:daryl.clark@fora.travel"  
              className="text-white/60 font-extralight tracking-widest text-[10px] hover:text-[#d4af37] transition-colors"  
            >  
              DARYL.CLARK@FORA.TRAVEL  
            </a>

            <div className="flex gap-8">  
              <a href="#" className="text-white/40 hover:text-[#d4af37] transition-colors text-[10px] tracking-widest uppercase font-extralight">Instagram</a>  
              <a href="#" className="text-white/40 hover:text-[#d4af37] transition-colors text-[10px] tracking-widest uppercase font-extralight">LinkedIn</a>  
            </div>  
          </div>  
        </div>  
      </div>  
    </>  
  )  
}  
