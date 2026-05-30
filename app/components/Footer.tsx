import Link from 'next/link'

export default function Footer() {  
  const currentYear = new Date().getFullYear()

  return (  
    <footer className="bg-neutral-900 text-neutral-400 py-20 px-6 border-t border-neutral-800">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">  
        <div className="space-y-6">  
          <h2 className="text-white text-lg tracking-[0.3em] uppercase font-light">NexVoyage Collective</h2>  
          <p className="text-sm leading-relaxed max-w-xs font-light italic">Architecture of Silence.</p>  
        </div>

        <div className="space-y-6">  
          <h3 className="text-white text-xs tracking-[0.2em] uppercase font-medium">Explore</h3>  
          <ul className="space-y-4 text-sm font-light">  
            <li><Link href="/#sanctuaries" className="hover:text-white transition-colors">Sanctuaries</Link></li>  
            <li><Link href="/concierge" className="hover:text-white transition-colors">Concierge</Link></li>  
          </ul>  
        </div>

        <div className="space-y-6">  
          <h3 className="text-white text-xs tracking-[0.2em] uppercase font-medium">Guardian Layer</h3>  
          <ul className="space-y-4 text-sm font-light">  
            {/* These slugs must match the LEGAL_DOCS keys below */}  
            <li><Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>  
            <li><Link href="/legal/terms-and-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link></li>  
          </ul>   
        </div>  
      </div>  
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-800 flex justify-between items-center text-[10px] tracking-widest uppercase font-light">  
        <p>© {currentYear} NexVoyage Collective</p>  
      </div>  
    </footer>  
  )  
}  
