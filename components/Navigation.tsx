'use client'

import React, { useState, useEffect } from 'react'  
import Link from 'next/link'  
import { Menu, X } from 'lucide-react'

const Navigation = () => {  
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
    { name: 'Lobby', path: '/', subtitle: 'Arrival Protocol' },  
    { name: 'Mandate', path: '/mandate', subtitle: 'The Philosophy' },  
    { name: 'Perspective', path: '/perspective', subtitle: 'The Intelligence' },  
    { name: 'Archive', path: '/archive', subtitle: 'Registry of Significance' },  
    { name: 'Journal', path: '/journal', subtitle: 'Seasonal Intelligence' },  
    { name: 'Inquiry', path: '/inquiry', subtitle: 'Begin Consultation' },  
  ]

  return (  
    <>  
      {/* Header Bar - High Z-Index to stay above Hero */}  
      <header className="fixed top-0 left-0 w-full z-[10000] flex justify-between items-center px-6 py-8 md:px-12 bg-transparent pointer-events-none">  
        <Link   
          href="/"   
          className="text-2xl font-serif tracking-[0.2em] text-[#C5A059] hover:opacity-80 transition-opacity pointer-events-auto"  
        >  
          NEXVOYAGE COLLECTIVE  
        </Link>

        <button  
          onClick={() => setIsOpen(!isOpen)}  
          className="p-3 bg-[#0A0A0A]/60 rounded-full border border-[#C5A059]/30 text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A0A0A] transition-all pointer-events-auto"  
          aria-label="Toggle Menu"  
        >  
          {isOpen ? <X size={28} /> : <Menu size={28} />}  
        </button>  
      </header>

      {/* Full-Screen Overlay Menu */}  
      <div  
        className={`fixed inset-0 z-[9999] bg-[#0A0A0A] transition-all duration-700 ease-in-out ${  
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'  
        }`}  
      >  
        {/* Background Watermark */}  
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">  
          <span className="text-[20vw] font-serif text-[#C5A059]/[0.02] uppercase tracking-[0.1em] select-none">  
            Voyage  
          </span>  
        </div>

        <nav className="relative h-full flex flex-col justify-center items-center text-center px-6">  
          <ul className="space-y-8 md:space-y-12">  
            {navLinks.map((link) => (  
              <li key={link.name} className="group">  
                <Link  
                  href={link.path}  
                  onClick={() => setIsOpen(false)}  
                  className="block"  
                >  
                  <span className="block text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-[#C5A059]/60 group-hover:text-[#C5A059] transition-colors mb-2">  
                    {link.subtitle}  
                  </span>  
                  <span className="block text-3xl md:text-6xl font-serif text-[#C5A059] group-hover:scale-110 transition-transform duration-500">  
                    {link.name}  
                  </span>  
                </Link>  
              </li>  
            ))}  
          </ul>  
        </nav>  
      </div>

      {/* Background Dimmer - Lower Z than Nav, Higher than Page */}  
      <div   
        className={`fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${  
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'  
        }`}  
        onClick={() => setIsOpen(false)}  
      />  
    </>  
  )  
}

export default Navigation  
