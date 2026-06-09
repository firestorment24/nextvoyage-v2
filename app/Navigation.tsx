'use client'  
import Link from 'next/link'

export default function Navigation() {  
  return (  
    <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-6 mix-blend-difference text-white">  
      <Link href="/" className="text-xl font-serif tracking-tighter hover:opacity-70 transition-opacity">  
        NexVoyage Collective  
      </Link>  
      <div className="flex gap-12 text-xs uppercase tracking-[0.2em] font-light">  
        <Link href="/sanctuaries" className="hover:line-through transition-all">The Atlas</Link>  
        <Link href="/journal" className="hover:line-through transition-all">Intelligence</Link>  
        <Link href="/concierge" className="hover:line-through transition-all">Inquiry</Link>  
      </div>  
    </nav>  
  )  
}  
