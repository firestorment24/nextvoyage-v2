"use client";  
import React, { useState } from 'react'  
import Link from 'next/link'  
import { GlobalSearch } from './GlobalSearch'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">  
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
        <Link href="/" className="text-xl font-light tracking-widest hover:opacity-70 transition-opacity">  
          NEXVOYAGE  
        </Link>

        <div className="flex items-center gap-8">  
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-light">  
            <Link href="/sanctuaries" className="hover:text-white/60 transition-colors">Sanctuaries</Link>  
            <Link href="/philosophy" className="hover:text-white/60 transition-colors">Philosophy</Link>  
          </div>  
          <GlobalSearch />  
        </div>  
      </div>  
    </nav>  
  )  
}  
