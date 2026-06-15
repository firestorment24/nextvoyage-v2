'use client'

import React, { useState } from 'react'  
import Link from 'next/link'  
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [  
    { name: 'Lobby', path: '/', subtitle: 'Return to start' },  
    { name: 'Archive', path: '/archive', subtitle: 'The collection' },  
    { name: 'Perspective', path: '/perspective', subtitle: 'Our philosophy' },  
    { name: 'Journal', path: '/journal', subtitle: 'Recent stories' },  
    { name: 'Invitation', path: '/invitation', subtitle: 'Private access' },  
  ]

  return (  
    <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-transparent">  
      <Link href="/" className="text-[#d4af37] font-serif text-2xl tracking-tighter hover:opacity-80 transition-opacity">  
        NexVoyage  
      </Link>

      <button   
        onClick={() => setIsOpen(!isOpen)}  
        className="text-[#d4af37] font-mono text-sm tracking-widest uppercase hover:opacity-70 transition-all"  
      >  
        [ {isOpen ? 'Close' : 'Concierge'} ]  
      </button>

      <AnimatePresence>  
        {isOpen && (  
          <motion.div   
            initial={{ opacity: 0, y: -20 }}  
            animate={{ opacity: 1, y: 0 }}  
            exit={{ opacity: 0, y: -20 }}  
            className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center gap-8 z-[-1]"  
          >  
            {navItems.map((item) => (  
              <Link   
                key={item.path}  
                href={item.path}  
                onClick={() => setIsOpen(false)}  
                className="group flex flex-col items-center"  
              >  
                <span className="text-[#d4af37] text-4xl font-serif tracking-tight group-hover:italic transition-all">  
                  {item.name}  
                </span>  
                <span className="text-[#d4af37]/50 font-mono text-[10px] uppercase tracking-[0.2em] mt-1">  
                  {item.subtitle}  
                </span>  
              </Link>  
            ))}  
          </motion.div>  
        )}  
      </AnimatePresence>  
    </nav>  
  )  
}  
