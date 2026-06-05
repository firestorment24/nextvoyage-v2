'use client'

import { useState } from 'react'  
import Link from 'next/link'

const navLinks = [  
  { name: 'The Home', href: '/' },  
  { name: 'The Journal', href: '/journal' },  
  { name: 'The Reserve', href: '/reserve' },  
  { name: 'The Archive', href: '/archive' },  
  { name: 'Concierge', href: '/concierge' },  
]

export default function MobileMenu() {  
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (  
    <div className="md:hidden">  
      {/* Trigger Button */}  
      <button   
        onClick={toggleMenu}  
        className="p-2 text-white focus:outline-none"  
        aria-label="Open Menu"  
      >  
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">  
          <line x1="3" y1="12" x2="21" y2="12"></line>  
          <line x1="3" y1="6" x2="21" y2="6"></line>  
          <line x1="3" y1="18" x2="21" y2="18"></line>  
        </svg>  
      </button>

      {/* Full-Screen Overlay */}  
      <div className={`  
        fixed inset-0 z-50 bg-black/98 backdrop-blur-xl transition-all duration-700 ease-in-out  
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}  
      `}>  
        {/* Close Button */}  
        <div className="flex justify-end p-8">  
          <button onClick={toggleMenu} className="text-white/50 hover:text-white transition-colors">  
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">  
              <line x1="18" y1="6" x2="6" y2="18"></line>  
              <line x1="6" y1="6" x2="18" y2="18"></line>  
            </svg>  
          </button>  
        </div>

        {/* Navigation Links */}  
        <nav className="flex flex-col items-center justify-center h-[70vh]">  
          <p className="text-[10px] uppercase tracking-[0.6em] text-white/20 mb-16">Navigation</p>  
          <ul className="space-y-10 text-center">  
            {navLinks.map((link) => (  
              <li key={link.name}>  
                <Link   
                  href={link.href}   
                  onClick={toggleMenu}  
                  className="text-4xl font-serif text-white hover:text-white/40 transition-all duration-500 block"  
                >  
                  {link.name}  
                </Link>  
              </li>  
            ))}  
          </ul>  
            
          {/* Branding Footer */}  
          <div className="mt-auto pb-12 text-center">  
            <span className="text-[9px] tracking-[1em] uppercase text-white/10">  
              NexVoyage Collective  
            </span>  
          </div>  
        </nav>  
      </div>  
    </div>  
  )  
}  
