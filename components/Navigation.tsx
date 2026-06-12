'use client'

import React, { useState } from 'react'  
import Link from 'next/link'

const Navigation = () => {  
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [  
    { name: 'Lobby', path: '/', subtitle: 'Arrival & Overview' },  
    { name: 'Archive', path: '/archive', subtitle: 'The Elite Ledger' },  
    { name: 'Perspective', path: '/perspective', subtitle: 'The Silent ROI' },  
    { name: 'Journal', path: '/journal', subtitle: 'Recent Dispatches' },  
    { name: 'Inquiry', path: '/inquiry', subtitle: 'Private Consultation' },  
  ]

  return (  
    <>  
      {/* Top Bar */}  
      <nav className="fixed top-0 left-0 w-full z-[100] px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-sm border-b border-[#C5A059]/10">  
        <Link href="/" className="text-[#C5A059] font-serif text-xl tracking-tighter">  
          NexVoyage Collective  
        </Link>

        <button   
          onClick={() => setIsOpen(!isOpen)}  
          className="text-[#C5A059] font-sans text-xs uppercase tracking-[0.3em] transition-none outline-none"  
        >  
          {isOpen ? 'Close' : 'Concierge'}  
        </button>  
      </nav>

      {/* Full-Screen Overlay */}  
      <div   
        className={`fixed inset-0 z-[90] bg-black flex flex-col justify-center items-center transition-opacity duration-700 ease-in-out ${  
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'  
        }`}  
      >  
        <div className="flex flex-col space-y-6 text-center">  
          {navItems.map((item, index) => (  
            <Link   
              key={item.name}  
              href={item.path}  
              onClick={() => setIsOpen(false)}  
              className="group flex flex-col items-center py-2"  
            >  
              <span className="text-[#C5A059]/40 font-sans text-[9px] mb-1 uppercase tracking-widest">  
                0{index + 1}  
              </span>  
              <span className="text-[#C5A059] font-serif text-4xl md:text-5xl tracking-tight transition-colors duration-300 group-hover:text-white">  
                {item.name}  
              </span>  
              <span className="text-[#C5A059]/30 font-sans text-[9px] mt-1 uppercase tracking-[0.4em]">  
                {item.subtitle}  
              </span>  
            </Link>  
          ))}  
        </div>  
      </div>  
    </>  
  )  
}

export default Navigation  
