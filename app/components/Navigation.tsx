"use client"

import { Search, Menu } from 'lucide-react'  
import { useState } from 'react'  
import { GlobalSearch } from './GlobalSearch'

export const Navigation = () => {  
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (  
    <>  
      <nav className="fixed top-0 left-0 w-full p-8 flex justify-between items-center z-50 mix-blend-difference">  
        <div className="text-white text-sm font-light tracking-[0.4em] uppercase">  
          NexVoyage <span className="opacity-50">Collective</span>  
        </div>  
          
        <div className="flex items-center gap-8">  
          <button   
            onClick={() => setIsSearchOpen(true)}  
            className="text-white hover:opacity-50 transition-opacity flex items-center gap-2 group"  
          >  
            <span className="text-[10px] tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">CMD+K</span>  
            <Search size={18} strokeWidth={1.5} />  
          </button>  
          <button className="text-white hover:opacity-50 transition-opacity">  
            <Menu size={20} strokeWidth={1.5} />  
          </button>  
        </div>  
      </nav>

      <GlobalSearch   
        isOpenOverride={isSearchOpen}   
        setIsOpenOverride={setIsSearchOpen}   
      />  
    </>  
  )  
}  
