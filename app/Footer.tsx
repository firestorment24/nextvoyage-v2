import Link from 'next/link'

export default function Footer() {  
  const currentYear = new Date().getFullYear()

  return (  
    <footer className="bg-neutral-950 text-neutral-500 py-24 px-6 border-t border-neutral-900">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">  
        <div className="space-y-4">  
          <h3 className="text-white text-xs tracking-widest uppercase font-medium">Collective</h3>  
          <p className="text-sm font-light leading-relaxed">Curating silence for the discerning few.</p>  
        </div>

        <div className="space-y-4">  
          <h3 className="text-white text-xs tracking-widest uppercase font-medium">Explore</h3>  
          <ul className="space-y-2 text-xs tracking-wide">  
            <li><Link href="/#sanctuaries" className="hover:text-white transition-colors">Sanctuaries</Link></li>  
            <li><Link href="/concierge" className="hover:text-white transition-colors">Concierge</Link></li>  
          </ul>  
        </div>

        <div className="space-y-4">  
          <h3 className="text-white text-xs tracking-widest uppercase font-medium">Legal</h3>  
          <ul className="space-y-2 text-xs tracking-wide">  
            <li><Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>  
            <li><Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>  
          </ul>  
        </div>  
      </div>  
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-900">  
        <p className="text-[10px] tracking-[0.3em] uppercase">© {currentYear} NexVoyage Collective</p>  
      </div>  
    </footer>  
  )  
}  
