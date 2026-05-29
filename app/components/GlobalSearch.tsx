"use client"

import { useEffect, useState } from 'react'  
import { Search, X, FileText, MapPin } from 'lucide-react'

const SANCTUARIES = [  
  { id: 1, name: 'Metropolitan Sanctuary', desc: 'Urban fortress with deep-sleep tech.' },  
  { id: 2, name: 'Floating Sanctuary', desc: 'Secure superyacht charters.' },  
  { id: 3, name: 'Island Sanctuary', desc: 'Private atoll total seclusion.' },  
  { id: 4, name: 'Alpine Sanctuary', desc: 'Heli-access mountain retreats.' },  
  { id: 5, name: 'Stadium Sanctuary', desc: 'Direct suite-to-field logistics.' },  
  { id: 6, name: 'Cinematic Sanctuary', desc: 'Total privacy for production hubs.' },  
  { id: 7, name: 'Soulful Sanctuary', desc: 'Wellness and restoration anchors.' },  
  { id: 8, name: 'Education Sanctuary', desc: 'Enrichment and family heritage hubs.' },  
  { id: 9, name: 'Mobile Sanctuary', desc: 'Armored ground and air transport.' }  
]

const LEGAL_DOCS = [  
  { name: 'Privacy Policy', href: '/privacy' },  
  { name: 'Terms & Conditions', href: '/terms' },  
  { name: 'Impact & Safety', href: '/safety' }  
]

interface GlobalSearchProps {  
  isOpenOverride?: boolean  
  setIsOpenOverride?: (open: boolean) => void  
}

export function GlobalSearch({ isOpenOverride, setIsOpenOverride }: GlobalSearchProps) {  
  const [isOpen, setIsOpen] = useState(false)  
  const [query, setQuery] = useState('')

  const active = isOpenOverride ?? isOpen  
  const setActive = setIsOpenOverride ?? setIsOpen

  useEffect(() => {  
    const down = (e: KeyboardEvent) => {  
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {  
        e.preventDefault()  
        setActive(!active)  
      }  
    }  
    document.addEventListener('keydown', down)  
    return () => document.removeEventListener('keydown', down)  
  }, [active, setActive])

  if (!active) return null

  const filteredSanctuaries = SANCTUARIES.filter(s =>   
    s.name.toLowerCase().includes(query.toLowerCase())  
  )

  return (  
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] bg-black/80 backdrop-blur-sm p-4">  
      <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">  
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3">  
          <Search className="text-zinc-500" size={20} />  
          <input   
            autoFocus  
            placeholder="Search Sanctuaries or Legal..."   
            className="bg-transparent flex-1 outline-none text-white text-lg"  
            value={query}  
            onChange={(e) => setQuery(e.target.value)}  
          />  
          <button onClick={() => setActive(false)}><X className="text-zinc-500 hover:text-white" size={20} /></button>  
        </div>  
          
        <div className="max-h-[60vh] overflow-y-auto p-2">  
          {filteredSanctuaries.length > 0 && (  
            <div className="mb-4">  
              <h3 className="text-xs uppercase tracking-widest text-zinc-500 p-2">The 9 Sanctuaries</h3>  
              {filteredSanctuaries.map(s => (  
                <button key={s.id} className="w-full text-left p-3 hover:bg-zinc-800 rounded-lg flex items-center gap-3 group">  
                  <MapPin size={18} className="text-zinc-600 group-hover:text-white" />  
                  <div>  
                    <div className="text-white font-medium">{s.name}</div>  
                    <div className="text-zinc-500 text-sm">{s.desc}</div>  
                  </div>  
                </button>  
              ))}  
            </div>  
          )}

          <div>  
            <h3 className="text-xs uppercase tracking-widest text-zinc-500 p-2">Legal & Governance</h3>  
            {LEGAL_DOCS.map(doc => (  
              <a key={doc.name} href={doc.href} className="w-full text-left p-3 hover:bg-zinc-800 rounded-lg flex items-center gap-3 group">  
                <FileText size={18} className="text-zinc-600 group-hover:text-white" />  
                <span className="text-white font-medium">{doc.name}</span>  
              </a>  
            ))}  
          </div>  
        </div>  
          
        <div className="p-3 bg-zinc-950 border-t border-zinc-900 flex justify-between items-center">  
          <span className="text-[10px] text-zinc-600">COMMAND PALETTE ACTIVE</span>  
          <span className="text-[10px] text-zinc-600">ESC TO CLOSE</span>  
        </div>  
      </div>  
    </div>  
  )  
}  
