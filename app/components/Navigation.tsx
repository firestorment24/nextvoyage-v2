"use client"

import React, { useState } from 'react'  
import Link from 'next/link'  
import { GlobalSearch } from './GlobalSearch'

export function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">  
      <div className="max-w-7xl mx-auto px-6 lg:px-8">  
        <div className="flex justify-between h-24 items-center">  
          <div className="flex-shrink-0">  
            <Link href="/" className="text-2xl font-serif tracking-tight text-black">  
              NEXVOYAGE  
            </Link>  
          </div>  
            
          <div className="hidden md:flex space-x-12 items-center">  
            <Link href="/sanctuaries" className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors">Sanctuaries</Link>  
            <Link href="/philosophy" className="text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors">Philosophy</Link>  
            <GlobalSearch />  
          </div>

          <div className="md:hidden">  
            <button onClick={() => setIsOpen(!isOpen)} className="text-black text-xs uppercase tracking-widest">  
              {isOpen ? 'Close' : 'Menu'}  
            </button>  
          </div>  
        </div>  
      </div>

      {isOpen && (  
        <div className="md:hidden bg-white border-b border-gray-100 p-8 space-y-6 flex flex-col h-screen">  
          <Link href="/sanctuaries" onClick={() => setIsOpen(false)} className="text-lg font-serif">Sanctuaries</Link>  
          <Link href="/philosophy" onClick={() => setIsOpen(false)} className="text-lg font-serif">Philosophy</Link>  
          <div className="pt-4">  
            <GlobalSearch />  
          </div>  
        </div>  
      )}  
    </nav>  
  )  
}  
