'use client'

import React, { useState } from 'react'  
import Link from 'next/link'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [  
    { name: 'Lobby', path: '/', subtitle: 'THE BEGINNING' },  
    { name: 'Archive', path: '/archive', subtitle: 'THE COLLECTION' },  
    { name: 'Perspective', path: '/perspective', subtitle: 'OUR PHILOSOPHY' },  
    { name: 'Journal', path: '/journal', subtitle: 'EDITORIAL STORIES' },  
    { name: 'Invitation', path: '/invitation', subtitle: 'PRIVATE ACCESS' },  
  ]

  return (  
    <nav className="fixed top-0 left-0 w-full z-50 p-8 flex justify-between items-center bg-transparent">  
      {/* Brand - Cormorant Garamond style */}  
      <Link   
        href="/"   
        className="text-[#d4af37] font-serif text-3xl tracking-tighter hover:opacity-80 transition-opacity z-50"  
        style={{ fontFamily: 'Cormorant Garamond, serif' }}  
      >  
        NexVoyage  
      </Link>

      {/* Trigger - Minimalist Mono */}  
      <button   
        onClick={() => setIsOpen(!isOpen)}  
        className="text-[#d4af37] font-mono text-xs tracking-[0.3em] uppercase hover:opacity-70 transition-all z-50"  
      >  
        {isOpen ? '[ CLOSE ]' : '[ CONCIERGE ]'}  
      </button>

      {/* Full Screen Shadow Overlay */}  
      <div   
        className={`fixed inset-0 bg-black flex flex-col justify-center items-center gap-12 transition-all duration-700 ease-in-out z-40 ${  
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'  
        }`}  
      >  
        {navItems.map((item) => (  
          <Link   
            key={item.path}  
            href={item.path}  
            onClick={() => setIsOpen(false)}  
            className="group flex flex-col items-center"  
          >  
            {/* Main Menu Item - Editorial Serif */}  
            <span   
              className="text-[#d4af37] text-6xl md:text-7xl font-serif tracking-tight transition-all duration-500 group-hover:italic group-hover:tracking-normal"  
              style={{ fontFamily: 'Cormorant Garamond, serif' }}  
            >  
              {item.name}  
            </span>  
              
            {/* Subtitle - Luxury Sans Ledger */}  
            <span className="text-[#d4af37]/40 font-sans text-[10px] md:text-xs uppercase tracking-[0.4em] mt-4 transition-colors group-hover:text-[#d4af37]/80">  
              {item.subtitle}  
            </span>  
          </Link>  
        ))}

        {/* Decorative Brass Line */}  
        <div className="absolute bottom-12 w-24 h-[1px] bg-[#d4af37]/20" />  
      </div>  
    </nav>  
  )  
}  
