import './globals.css'  
import React, { useState, useEffect } from 'react'  
import Link from 'next/link'

// --- INTERNAL COMPONENTS (Solving the path issue) ---

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
    <div className="relative">  
      <input   
        type="text" placeholder="Search..." value={query}  
        onChange={(e) => setQuery(e.target.value)}  
        className="bg-transparent border-b border-gray-200 py-1 text-[10px] uppercase tracking-widest focus:ring-0 focus:border-black w-32"  
      />  
      {results.length > 0 && (  
        <div className="absolute top-full right-0 w-48 bg-white shadow-xl mt-2 border border-gray-50 z-50 p-2">  
          {results.map(name => <div key={name} className="p-2 text-[10px] uppercase hover:bg-gray-50 cursor-pointer">{name}</div>)}  
        </div>  
      )}  
    </div>  
  )  
}

function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)  
  return (  
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-50">  
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">  
        <Link href="/" className="text-xl font-serif tracking-tighter">NEXVOYAGE</Link>  
        <div className="hidden md:flex space-x-10 items-center">  
          <Link href="/sanctuaries" className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-black">Sanctuaries</Link>  
          <GlobalSearch />  
        </div>  
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[10px] uppercase">{isOpen ? 'Close' : 'Menu'}</button>  
      </div>  
      {isOpen && (  
        <div className="md:hidden bg-white p-8 flex flex-col space-y-6">  
          <Link href="/sanctuaries" className="text-xl font-serif">Sanctuaries</Link>  
          <GlobalSearch />  
        </div>  
      )}  
    </nav>  
  )  
}

// --- MAIN LAYOUT ---

export default function RootLayout({ children }: { children: React.ReactNode }) {  
  return (  
    <html lang="en">  
      <body className="antialiased bg-white text-black">  
        <Navigation />  
        <main className="min-h-screen pt-20">{children}</main>  
        <footer className="py-10 text-center border-t border-gray-50">  
          <p className="text-[10px] uppercase tracking-widest text-gray-400">© 2026 NexVoyage Collective</p>  
        </footer>  
      </body>  
    </html>  
  )  
}

export const metadata = { title: 'NexVoyage Collective', description: 'Quiet Luxury Travel' }  
