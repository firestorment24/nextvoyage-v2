"use client"

import './globals.css'  
import React, { useState, useEffect } from 'react'  
import Link from 'next/link'

/**   
 * NEXVOYAGE CORE ENGINE (Self-Contained)  
 * This file contains the Layout, Navigation, and Search in one place to bypass path errors.  
 */

function GlobalSearch() {  
  const [query, setQuery] = useState('')  
  const [results, setResults] = useState<string[]>([])  
  const sanctuaries = ["Alpine Retreat", "Island Fort", "Desert Oasis", "Jungle Hideaway", "Coastal Villa", "Manor House", "Sky Penthouse", "Arctic Lodge", "Safari Camp"]  
    
  useEffect(() => {  
    if (query.length > 0) {  
      setResults(sanctuaries.filter(s => s.toLowerCase().includes(query.toLowerCase())))  
    } else { setResults([]) }  
  }, [query])

  return (  
    <div className="relative group">  
      <input   
        type="text" placeholder="Find a Sanctuary..." value={query}  
        onChange={(e) => setQuery(e.target.value)}  
        className="bg-transparent border-b border-gray-200 py-1 text-[10px] uppercase tracking-widest focus:ring-0 focus:border-black w-32 transition-all"  
      />  
      {results.length > 0 && (  
        <div className="absolute top-full right-0 w-56 bg-white shadow-2xl mt-4 p-2 border border-gray-50 z-[100]">  
          {results.map(name => (  
            <div key={name} className="p-3 text-[10px] uppercase tracking-widest hover:bg-gray-50 cursor-pointer" onClick={() => setQuery(name)}>  
              {name}  
            </div>  
          ))}  
        </div>  
      )}  
    </div>  
  )  
}

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  const [isOpen, setIsOpen] = useState(false)

  return (  
    <html lang="en">  
      <body className="antialiased bg-white text-black">  
        {/* Navigation */}  
        <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">  
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">  
            <Link href="/" className="text-xl font-serif tracking-tighter">NEXVOYAGE</Link>  
              
            <div className="hidden md:flex space-x-10 items-center">  
              <Link href="/sanctuaries" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black">Sanctuaries</Link>  
              <GlobalSearch />  
            </div>

            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[10px] uppercase tracking-widest">  
              {isOpen ? 'Close' : 'Menu'}  
            </button>  
          </div>

          {isOpen && (  
            <div className="md:hidden bg-white border-b border-gray-100 p-8 flex flex-col space-y-8 h-screen">  
              <Link href="/sanctuaries" onClick={() => setIsOpen(false)} className="text-2xl font-serif">Sanctuaries</Link>  
              <div className="pt-4 border-t border-gray-50"><GlobalSearch /></div>  
            </div>  
          )}  
        </nav>

        {/* Content */}  
        <main className="min-h-screen pt-20">  
          {children}  
        </main>

        {/* Footer */}  
        <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 text-center">  
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">© 2026 NexVoyage Collective</p>  
        </footer>  
      </body>  
    </html>  
  )  
}  
