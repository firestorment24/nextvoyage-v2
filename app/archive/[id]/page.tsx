import React from 'react'  
import Image from 'next/image'  
import Link from 'next/link'  
import { notFound } from 'next/navigation'  
// Syncing this one too  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries'

interface PageProps {  
  params: { id: string }  
}

export default function ArchiveDetailPage({ params }: PageProps) {  
  // Logic to find the item whether data is an array or object  
  const sanctuary = Array.isArray(SANCTUARIES_DATA)  
    ? SANCTUARIES_DATA.find(s => s.id === params.id)  
    : (SANCTUARIES_DATA as any)[params.id]

  if (!sanctuary) {  
    notFound()  
  }

  return (  
    <main className="min-h-screen bg-[#000000] flex flex-col md:flex-row">  
      <div className="relative w-full md:w-1/2 h-[60vh] md:h-screen sticky top-0 overflow-hidden">  
        <Image  
          src={sanctuary.heroImage || sanctuary.image}  
          alt={sanctuary.name}  
          fill  
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out"  
          priority  
        />  
        <Link href="/archive" className="absolute top-12 left-12 text-[#D4AF37] uppercase tracking-[0.3em] text-xs">  
          ← Index  
        </Link>  
      </div>

      <div className="w-full md:w-1/2 px-8 py-24 md:px-24 md:py-32 flex flex-col justify-center">  
        <div className="max-w-xl">  
          <span className="text-[#D4AF37]/60 uppercase tracking-[0.4em] text-[10px] mb-4 block">  
            {sanctuary.location} / {sanctuary.tag}  
          </span>  
          <h1 className="text-[#D4AF37] text-4xl md:text-6xl font-light tracking-tight mb-8 leading-tight">  
            {sanctuary.name}  
          </h1>  
          <p className="text-[#D4AF37]/90 leading-relaxed font-light text-lg mb-12">  
            {sanctuary.philosophy}  
          </p>  
          {/* Technical Specs would go here */}  
          <div className="border-t border-[#D4AF37]/20 pt-8">  
             <p className="text-[#D4AF37] uppercase tracking-widest text-[10px]">Atmosphere: {sanctuary.atmosphere}</p>  
          </div>  
        </div>  
      </div>  
    </main>  
  )  
}  
