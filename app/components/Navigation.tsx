"use client"

import { Search } from 'lucide-react'  
import { useState } from 'react'  
import { GlobalSearch } from './GlobalSearch'

export const Navigation = () => {  
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (  
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 mix-blend-difference text-white">  
      <div className="text-xl font-light tracking-widest uppercase">NexVoyage</div>  
      <button   
        onClick={() => setIsSearchOpen(true)}  
        className="hover:opacity-50 transition-opacity"  
      >  
        <Search size={20} />  
      </button>  
      <GlobalSearch isOpenOverride={isSearchOpen} setIsOpenOverride={setIsSearchOpen} />  
    </nav>  
  )  
}  
