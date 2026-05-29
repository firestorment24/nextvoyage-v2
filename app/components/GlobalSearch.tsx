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
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {  
    if (query.length > 0) {  
      const filtered = SANCTUARIES.filter(s =>   
        s.toLowerCase().includes(query.toLowerCase())  
      )  
      setResults(filtered)  
    } else {  
      setResults([])  
    }  
  }, [query])

  return (  
    <div className="relative group">  
      <input  
        type="text"  
        placeholder="Find a Sanctuary..."  
        value={query}  
        onFocus={() => setIsFocused(true)}  
        onChange={(e) => setQuery(e.target.value)}  
        className="bg-transparent border-b border-gray-200 px-0 py-1 text-[10px] uppercase tracking-widest focus:ring-0 focus:border-black w-40 transition-all placeholder:text-gray-300"  
      />  
      {results.length > 0 && isFocused && (  
        <div className="absolute top-full right-0 w-64 bg-white shadow-2xl mt-4 p-2 border border-gray-50 z-[100]">  
          <p className="text-[9px] uppercase tracking-widest text-gray-400 p-2 border-b border-gray-50">Matching Sanctuaries</p>  
          {results.map(name => (  
            <div key={name} className="p-3 text-xs font-serif hover:bg-gray-50 cursor-pointer transition-colors" onClick={() => {  
              setQuery(name);  
              setIsFocused(false);  
            }}>  
              {name}  
            </div>  
          ))}  
        </div>  
      )}  
    </div>  
  )  
}  
