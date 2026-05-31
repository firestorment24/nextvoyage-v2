'use client'  
import React, { useState } from 'react'  
import Link from 'next/link'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  const links = [  
    { name: 'The Archive', href: '/archive' },  
    { name: 'The Perspective', href: '/perspective' },  
    { name: 'The Reserve', href: '/reserve' },  
  ]

  return (  
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">  
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
        <Link href="/" className="text-xl font-serif tracking-tighter hover:italic transition-all">  
          NexVoyage Collective  
        </Link>

        {/* Desktop Links */}  
        <div className="hidden md:flex space-x-12">  
          {links.map((link) => (  
            <Link   
              key={link.name}   
              href={link.href}   
              className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-black transition-colors"  
            >  
              {link.name}  
            </Link>  
          ))}  
        </div>

        {/* Mobile Toggle */}  
        <button   
          className="md:hidden text-zinc-500"   
          onClick={() => setIsOpen(!isOpen)}  
        >  
          {isOpen ? 'Close' : 'Menu'}  
        </button>  
      </div>

      {/* Mobile Menu Overlay */}  
      {isOpen && (  
        <div className="md:hidden fixed inset-0 top-20 bg-white z-40 flex flex-col items-center justify-center space-y-8 animate-in fade-in duration-300">  
          {links.map((link) => (  
            <Link   
              key={link.name}   
              href={link.href}   
              onClick={() => setIsOpen(false)}  
              className="text-2xl font-serif hover:italic"  
            >  
              {link.name}  
            </Link>  
          ))}  
        </div>  
      )}  
    </nav>  
  )  
}  
