import Link from 'next/link'

export default function Navigation() {  
  return (  
    <nav className="fixed top-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference">  
      <Link href="/" className="text-white text-lg tracking-[0.4em] uppercase font-light">  
        NexVoyage  
      </Link>  
      <div className="flex gap-12">  
        <Link href="/#sanctuaries" className="text-white text-[10px] tracking-widest uppercase hover:opacity-60 transition-opacity">  
          Sanctuaries  
        </Link>  
        <Link href="/concierge" className="text-white text-[10px] tracking-widest uppercase hover:opacity-60 transition-opacity">  
          Concierge  
        </Link>  
      </div>  
    </nav>  
  )  
}  
