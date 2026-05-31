'use client'  
import React, { useEffect, useState } from 'react'

export default function Cursor() {  
  const [position, setPosition] = useState({ x: 0, y: 0 })  
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {  
    const handleMouseMove = (e: MouseEvent) => {  
      setPosition({ x: e.clientX, y: e.clientY })  
        
      const target = e.target as HTMLElement  
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer')  
    }

    window.addEventListener('mousemove', handleMouseMove)  
    return () => window.removeEventListener('mousemove', handleMouseMove)  
  }, [])

  return (  
    <div   
      className={`hidden md:block fixed pointer-events-none z-[9999] transition-transform duration-300 ease-out rounded-full mix-blend-difference border border-zinc-400  
        ${isPointer ? 'w-12 h-12 -ml-6 -mt-6 bg-white' : 'w-4 h-4 -ml-2 -mt-2 bg-transparent'}`}  
      style={{  
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,  
      }}  
    />  
  )  
}  
