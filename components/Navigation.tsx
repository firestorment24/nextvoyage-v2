'use client'

import React, { useState, useEffect } from 'react'  
import Link from 'next/link'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

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

  // Brass & Shadow Color Palette  
  const brass = '#C5A059'  
  const shadow = '#0A0A0A'

  return (  
    <>  
      {/* Header Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[999] px-8 py-10 flex justify-between items-center bg-transparent pointer-events-none">  
        <div className="pointer-events-auto">  
          <Link   
            href="/"   
            className="text-white text-xl font-light tracking-[0.3em] uppercase hover:opacity-70 transition-opacity"  
            style={{ color: brass }}  
          >  
            NexVoyage Collective  
          </Link>  
        </div>

        {/* Mobile Toggle */}  
<button   
  className="md:hidden p-2 focus:outline-none relative z-[1001]"  
  onClick={() => setIsOpen(!isOpen)}  
  aria-label="Toggle Menu"  
  style={{   
    color: '#C5A059',   
    display: 'flex',   
    alignItems: 'center',   
    justifyContent: 'center',  
    background: 'rgba(10, 10, 10, 0.4)', // Subtle dark circle to make icons pop  
    borderRadius: '50%'   
  }}  
>  
  {isOpen ? (  
    <X size={28} color="#C5A059" strokeWidth={2.5} />  
  ) : (  
    <Menu size={28} color="#C5A059" strokeWidth={2.5} />  
  )}  
</button>  
          {/* Hamburger Lines with inline background to override "Nuclear" CSS */}  
          <span   
            className={`block w-8 h-[1px] transition-all duration-500 ease-in-out ${isOpen ? 'rotate-45 translate-y-[9px]' : ''}`}  
            style={{ backgroundColor: brass }}  
          ></span>  
          <span   
            className={`block w-8 h-[1px] transition-all duration-500 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}  
            style={{ backgroundColor: brass }}  
          ></span>  
          <span   
            className={`block w-8 h-[1px] transition-all duration-500 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}  
            style={{ backgroundColor: brass }}  
          ></span>  
        </button>  
      </nav>

      {/* Fullscreen Overlay Menu */}  
      <div   
        className={`fixed inset-0 z-[998] flex flex-col items-center justify-center transition-all duration-700 ease-in-out ${  
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'  
        }`}  
        style={{ backgroundColor: `${shadow}f2`, backdropFilter: 'blur(10px)' }}  
      >  
        <div className="flex flex-col items-center justify-center h-full space-y-16">  
          {navLinks.map((link, index) => (  
            <Link  
              key={link.name}  
              href={link.href}  
              onClick={() => setIsOpen(false)}  
              className="group flex flex-col items-center no-underline"  
              style={{ transitionDelay: `${index * 50}ms` }}  
            >  
              <span   
                className="text-4xl md:text-6xl font-extralight tracking-[0.2em] uppercase transition-all duration-500 group-hover:tracking-[0.4em] group-hover:opacity-70"  
                style={{ color: brass }}  
              >  
                {link.name}  
              </span>  
              <span   
                className="text-[10px] md:text-xs tracking-[0.5em] uppercase mt-4 opacity-40 group-hover:opacity-100 transition-all duration-500"  
                style={{ color: '#A69F88' }}  
              >  
                {link.subtitle}  
              </span>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </>  
  )  
}  
