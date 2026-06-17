'use client'

import React, { useState } from 'react'  
import Link from 'next/link'  
import { Menu, X } from 'lucide-react'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [  
    { name: 'The Lobby', href: '/', sub: 'Arrival Protocol' },  
    { name: 'Archive', href: '/archive', sub: 'The Full Ledger' },  
    { name: 'Perspective', href: '/perspective', sub: 'Editorial' },  
    { name: 'Journal', href: '/journal', sub: 'Field Notes' },  
    { name: 'Invitation', href: '/invitation', sub: 'Membership' },  
  ]

  return (  
    <>  
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center mix-blend-difference">  
        <Link href="/" className="text-[#D4AF37] font-serif text-2xl tracking-[0.3em] uppercase">  
          NexVoyage  
          NexVoyage Collective
        </Link>

        {/* The 3 Lines (Hamburger) - Forced to Brass Gold */}  
        <button   
          onClick={() => setIsOpen(true)}  
          className="text-[#D4AF37] hover:opacity-70 transition-opacity"  
          aria-label="Open Menu"  
        >  
          <Menu size={32} strokeWidth={1.5} />  
        </button>  
      </nav>

      {/* Full Screen Overlay - Shadow & Brass vibe */}  
      <div className={`fixed inset-0 z-[110] bg-[#050505] transition-all duration-700 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>  
        <div className="absolute top-8 right-6">  
          <button   
            onClick={() => setIsOpen(false)}  
            className="text-[#D4AF37] hover:rotate-90 transition-transform duration-300"  
          >  
            <X size={40} strokeWidth={1} />  
          </button>  
        </div>

        <div className="flex flex-col items-center justify-center h-full space-y-12">
