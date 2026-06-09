import Link from 'next/link'

export default function Footer() {  
const currentYear = new Date().getFullYear()

return (  
<footer className="bg-black text-white px-8 py-24 border-t border-white/10">  
  <div className="max-w-7xl mx-auto">  
    <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">  
        
      {/* Brand Identity */}  
      <div className="md:col-span-2 space-y-8">  
        <div className="flex flex-col">  
          <span className="text-3xl font-light tracking-[0.3em] uppercase leading-none">NexVoyage</span>  
          <span className="text-xs tracking-[0.6em] uppercase opacity-40 mt-2">Collective</span>  
        </div>  
        <p className="text-sm font-light opacity-40 max-w-xs leading-relaxed">  
          Architecting sanctuaries for the global soul. Curated with obsessive attention to the quiet luxury of time.  
        </p>  
      </div>

      {/* Navigation */}  
      <div className="flex flex-col gap-4">  
        <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-4">Explore</span>  
        {['Sanctuaries', 'Journal', 'Concierge', 'About'].map((item) => (  
          <Link   
            key={item}   
            href={`/${item.toLowerCase()}`}   
            className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity"  
          >  
            {item}  
          </Link>  
        ))}  
      </div>

      {/* Connection & Legal */}  
      <div className="flex flex-col gap-4">  
        <span className="text-[10px] tracking-[0.4em] uppercase opacity-30 mb-4">Connect</span>  
        <a href="mailto:concierge@nexvoyage.com" className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity">  
          Email  
        </a>  
        <a href="https://instagram.com" className="text-[11px] tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-opacity">  
          Instagram  
        </a>  
        <div className="pt-8 flex flex-col gap-4">  
          <Link href="/privacy" className="text-[9px] tracking-[0.2em] uppercase opacity-30 hover:opacity-60 transition-opacity">  
            Privacy Policy  
          </Link>  
          <Link href="/terms" className="text-[9px] tracking-[0.2em] uppercase opacity-30 hover:opacity-60 transition-opacity">  
            Terms of Service  
          </Link>  
        </div>  
      </div>  
    </div>

    {/* Bottom Bar */}  
    <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">  
      <span className="text-[9px] tracking-[0.5em] uppercase opacity-20">  
        © {currentYear} NexVoyage Collective. All Rights Reserved.  
      </p>  
      <span className="text-[9px] tracking-[0.5em] uppercase opacity-20 italic font-serif">  
        The New Standard of Travel  
      </span>  
    </div>  
  </div>  
</footer>  
)  
}  
