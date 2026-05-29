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
    if (query.length > 1) {  
      const filtered = SANCTUARIES.filter(s =>   
        s.toLowerCase().includes(query.toLowerCase())  
      )  
      setResults(filtered)  
    } else {  
      setResults([])  
    }  
  }, [query])

  return (  
    <div className="relative">  
      <input  
        type="text"  
        placeholder="Find a Sanctuary..."  
        value={query}  
        onChange={(e) => setQuery(e.target.value)}  
        className="bg-gray-50 border-none px-4 py-2 text-xs uppercase tracking-widest focus:ring-1 focus:ring-black w-48 transition-all"  
      />  
      {results.length > 0 && (  
        <div className="absolute top-full right-0 w-64 bg-white shadow-xl mt-2 p-4 border border-gray-100 z-50">  
          {results.map(name => (  
            <div key={name} className="py-2 text-sm hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-none">  
              {name}  
            </div>  
          ))}  
        </div>  
      )}  
    </div>  
  )  
}  
