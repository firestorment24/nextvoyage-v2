import React from 'react'

interface HeroProps {  
  title: string  
  subtitle: string  
}

export default function Hero({ title, subtitle }: HeroProps) {  
  return (  
    <div className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white">  
      <div className="relative z-10 text-center px-4 max-w-4xl">  
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-4 uppercase">  
          {title}  
        </h1>  
        <p className="text-lg md:text-xl font-light opacity-60 tracking-[0.2em] uppercase">  
          {subtitle}  
        </p>  
      </div>  
    </div>  
  )  
}  
