"use client"

import React, { useState } from 'react'  
import Link from 'next/link'  
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {  
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [  
    { number: '01', name: 'Lobby', subtitle: 'The Entrance', href: '/' },  
    { number: '02', name: 'Archive', subtitle: 'The Collection', href: '/archive' },  
    { number: '03', name: 'Perspective', subtitle: 'The Intelligence', href: '/perspective' },  
    { number: '04', name: 'Journal', subtitle: 'The Daily', href: '/journal' },  
    { number: '05', name: 'Invitation', subtitle: 'The Request', href: '/invitation' },  
  ]

  const toggleMenu = () => setIsOpen(!isOpen)

  return (  
    <>  
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">  
        <Link href="/" className="text-white tracking-[0.3em] font-light text-sm uppercase">  
          NexVoyage Collective  
        </Link>  
        <button   
          onClick={toggleMenu}  
          className="text-[#A69F88] tracking-[0.2em] font-medium text-xs uppercase hover:opacity-70 transition-opacity"  
        >  
          {isOpen ? '[ Close ]' : '[ Concierge ]'}  
        </button>  
      </nav>

      <AnimatePresence>  
        {isOpen && (  
          <motion.div   
            initial={{ opacity: 0 }}  
            animate={{ opacity: 1 }}  
            exit={{ opacity: 0 }}  
            transition={{ duration: 0.8, ease: "easeInOut" }}  
            className="fixed inset-0 z-[40] bg-black flex items-center justify-center overflow-hidden"  
          >  
            {/* Cinematic Background */}  
            <div   
              className="absolute inset-0 opacity-20 grayscale brightness-50"  
              style={{   
                backgroundImage: `url('https://cdn.marblism.com/5gKSV_IRXVD.webp')`,  
                backgroundSize: 'cover',  
                backgroundPosition: 'center'  
              }}  
            />  
              
            <div className="relative z-10 w-full max-w-5xl px-12">  
              <div className="grid grid-cols-1 md:grid-cols-5 gap-12">  
                {navItems.map((item) => (  
                  <motion.div  
                    key={item.name}  
                    initial={{ y: 20, opacity: 0 }}  
                    animate={{ y: 0, opacity: 1 }}  
                    transition={{ delay: 0.2 + parseInt(item.number) * 0.1 }}  
                  >  
                    <Link   
                      href={item.href}   
                      onClick={() => setIsOpen(false)}  
                      className="group block"  
                    >  
                      <span className="text-[#A69F88] text-[10px] block mb-2 font-mono tracking-tighter">  
                        {item.number}  
                      </span>  
                      <h2 className="text-white text-3xl font-light tracking-widest uppercase group-hover:text-[#A69F88] transition-colors duration-500">  
                        {item.name}  
                      </h2>  
                      <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] mt-2">  
                        {item.subtitle}  
                      </p>  
                    </Link>  
                  </motion.div>  
                ))}  
              </div>

              <div className="absolute bottom-[-150px] left-12">  
                <p className="text-white/20 text-[10px] uppercase tracking-[0.4em]">  
                  Curating the Unreachable — 2026  
                </p>  
              </div>  
            </div>  
          </motion.div>  
        )}  
      </AnimatePresence>  
    </>  
  )  
}  
