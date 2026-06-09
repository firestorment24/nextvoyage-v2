import Link from 'next/link'

export default function Navigation() {  
return (  
  <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-10 mix-blend-difference">  
    <Link href="/" className="group flex flex-col">  
      <span className="text-lg font-light tracking-[0.3em] uppercase leading-none">NexVoyage</span>  
      <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 group-hover:opacity-100 transition-opacity">Collective</span>  
    </Link>

    <div className="hidden md:flex items-center gap-12">  
      {['Sanctuaries', 'Journal', 'Concierge'].map((item) => (  
        <Link   
          key={item}   
          href={`/${item.toLowerCase()}`}   
          className="text-[10px] tracking-[0.4em] uppercase opacity-50 hover:opacity-100 transition-all duration-500"  
        >  
          {item}  
        </Link>  
      ))}  
    </div>

    <div className="flex items-center gap-6">  
      <Link href="/concierge" className="text-[10px] tracking-[0.4em] uppercase bg-white text-black px-6 py-3 hover:bg-transparent hover:text-white border border-white transition-all duration-700">  
        Inquire  
      </Link>  
    </div>  
  </nav>  
)  
}  
