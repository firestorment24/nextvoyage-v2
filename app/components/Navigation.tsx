"use client"

import React, { useState } from 'react'  
import Link from 'next/link'  
import { GlobalSearch } from './GlobalSearch'

export function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">  
      <div className="max-w-7xl mx-auto px-6 lg:px-8">  
        <div className="flex justify-between h-20 items-center">  
          <Link href="/" className="text-xl font-serif tracking-tighter">NEXVOYAGE</Link>  
            
          <div className="hidden md:flex space-x-10 items-center">  
            <Link href="/sanctuaries" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors">Sanctuaries</Link>  
            <Link href="/philosophy" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black transition-colors">Philosophy</Link>  
            <GlobalSearch />  
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[10px] uppercase tracking-widest">  
            {isOpen ? 'Close' : 'Menu'}  
          </button>  
        </div>  
      </div>

      {isOpen && (  
        <div className="md:hidden bg-white border-b border-gray-100 p-8 flex flex-col space-y-6">  
          <Link href="/sanctuaries" onClick={() => setIsOpen(false)} className="text-xl font-serif">Sanctuaries</Link>  
          <Link href="/philosophy" onClick={() => setIsOpen(false)} className="text-xl font-serif">Philosophy</Link>  
          <GlobalSearch />  
        </div>  
      )}  
    </nav>  
  )  
}  
