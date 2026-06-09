import Link from 'next/link'

export default function Navigation() {  
return (  
<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-10 mix-blend-difference">  
  <div className="flex items-center gap-12">  
    <Link href="/" className="text-xl font-serif tracking-tighter text-white">  
      NexVoyage <span className="italic opacity-50 text-sm ml-1 tracking-widest uppercase font-sans font-light">Collective</span>  
    </Link>  
      
    <div className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] text-white/60">  
      <Link href="/sanctuaries" className="hover:text-white transition-colors">The Collection</Link>  
      <Link href="/journal" className="hover:text-white transition-colors">Journal</Link>  
    </div>  
  </div>

  <div className="flex items-center gap-8">  
    <Link   
      href="/concierge"   
      className="text-[10px] uppercase tracking-[0.3em] text-white border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition-all"  
    >  
      Inquiry  
    </Link>  
  </div>  
</nav>  
)  
}  
