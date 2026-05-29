"use client"

import React, { useState, useEffect } from 'react'

const SANCTUARIES = [  
  "Alpine Retreat", "Island Fort", "Desert Oasis",   
  "Jungle Hideaway", "Coastal Villa", "Manor House",   
  "Sky Penthouse", "Arctic Lodge", "Safari Camp"  
]

export function GlobalSearch() {  
  const [query, setQuery] = useState('')  
  const [results, setResults] = useState<string[]>([])

  useEffect(() => {  
    if (query.length > 0) {  
      setResults(SANCTUARIES.filter(s => s.toLowerCase().includes(query.toLowerCase())))  
    } else {  
      setResults([])  
    }  
  }, [query])

  return (  
    <div className="relative">  
      <input  
        type="text"  
        placeholder="Search..."  
        value={query}  
        onChange={(e) => setQuery(e.target.value)}  
        className="bg-transparent border-b border-gray-200 py-1 text-[10px] uppercase tracking-widest focus:ring-0 focus:border-black w-32"  
      />  
      {results.length > 0 && (  
        <div className="absolute top-full right-0 w-48 bg-white shadow-xl mt-2 border border-gray-50 z-50">  
          {results.map(name => (  
            <div key={name} className="p-3 text-[10px] uppercase tracking-widest hover:bg-gray-50 cursor-pointer">  
              {name}  
            </div>  
          ))}  
        </div>  
      )}  
    </div>  
  )  
}  
