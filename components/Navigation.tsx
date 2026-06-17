'use client'

import React, { useState, useEffect } from 'react'  
import Link from 'next/link'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open  
  useEffect(() => {  
    if (isOpen) {  
      document.body.style.overflow = 'hidden'  
    } else {  
      document.body.style.overflow = 'unset'  
    }  
    return () => {  
      document.body.style.overflow = 'unset'  
    }  
  }, [isOpen])

  const navLinks = [  
    { name: 'The Lobby', href: '/', subtitle: 'Arrival Protocol' },  
    { name: 'Archive', href: '/archive', subtitle: 'The Collections' },  
    { name: 'Perspective', href: '/perspective', subtitle: 'Our Ethos' },  
    { name: 'Journal', href: '/journal', subtitle: 'The Chronicle' },  
    { name: 'Invitation', href: '/concierge', subtitle: 'Join Us' },  
  ]

  return (  
    <>  
      {/* Header Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[100] px-6 py-8 flex justify-between items-center bg-transparent pointer-events-none">  
        <div className="pointer-events-auto">  
          <Link href="/" className="text-[#D4AF37] text-xl font-light tracking-[0.2em] uppercase hover:opacity-70 transition-opacity">  
            NexVoyage  
          </Link>  
        </div>

        <button   
          onClick={() => setIsOpen(!isOpen)}  
          className="pointer-events-auto z-[110] flex flex-col space-y-1.5 focus:outline-none group p-2"  
          aria-label="Toggle Menu"  
        >  
          <span className={`block w-8 h-0.5 bg-[#D4AF37] transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>  
          <span className={`block w-8 h-0.5 bg-[#D4AF37] transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>  
          <span className={`block w-8 h-0.5 bg-[#D4AF37] transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>  
        </button>  
      </nav>

      {/* Fullscreen Overlay Menu */}  
      <div   
        className={`fixed inset-0 bg-black z-[90] transition-transform duration-500 ease-in-out flex flex-col items-center justify-center ${  
          isOpen ? 'translate-y-0' : '-translate-y-full'  
        }`}  
      >  
        <div className="flex flex-col items-center justify-center h-full space-y-12">  
          {navLinks.map((link) => (  
            <Link  
              key={link.name}  
              href={link.href}  
              onClick={() => setIsOpen(false)}  
              className="group flex flex-col items-center"  
            >  
              <span className="text-[#D4AF37] text-3xl md:text-5xl font-light tracking-[0.15em] uppercase transition-all duration-300 group-hover:tracking-[0.25em]">  
                {link.name}  
              </span>  
              <span className="text-[#A69F88] text-[10px] md:text-xs tracking-[0.4em] uppercase mt-2 opacity-60 group-hover:opacity-100 transition-opacity">  
                {link.subtitle}  
              </span>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </>  
  )  
}  
