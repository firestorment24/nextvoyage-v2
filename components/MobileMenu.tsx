'use client'

import { useState } from 'react'  
import Link from 'next/link'  
import { X, Menu } from 'lucide-react'

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
        aria-label="Toggle Menu"  
      >  
        <Menu size={24} strokeWidth={1.5} />  
      </button>

      {/* Full-Screen Overlay */}  
      <div className={`  
        fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-500 ease-in-out  
        ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}  
      `}>  
        {/* Close Button */}  
        <div className="flex justify-end p-6">  
          <button onClick={toggleMenu} className="text-white/70 hover:text-white">  
            <X size={32} strokeWidth={1} />  
          </button>  
        </div>

        {/* Navigation Links */}  
        <nav className="flex flex-col items-center justify-center h-full -mt-20">  
          <p className="text-xs uppercase tracking-[0.5em] text-white/30 mb-12">Navigation</p>  
          <ul className="space-y-8 text-center">  
            {navLinks.map((link) => (  
              <li key={link.name}>  
                <Link   
                  href={link.href}   
                  onClick={toggleMenu}  
                  className="text-3xl font-serif text-white hover:text-white/60 transition-colors duration-300"  
                >  
                  {link.name}  
                </Link>  
              </li>  
            ))}  
          </ul>  
            
          {/* Branding Footer */}  
          <div className="absolute bottom-12 text-center">  
            <span className="text-[10px] tracking-[0.8em] uppercase text-white/20">  
              NexVoyage Collective  
            </span>  
          </div>  
        </nav>  
      </div>  
    </div>  
  )  
}  
