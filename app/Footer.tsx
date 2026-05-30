import Link from 'next/link'

export default function Footer() {  
  const currentYear = new Date().getFullYear()

  return (  
    <footer className="border-t border-stone-200 bg-white py-16 px-6 lg:px-12">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">  
        <div className="space-y-4">  
          <h2 className="text-xl font-light tracking-[0.3em] text-stone-900 uppercase">  
            NexVoyage Collective  
          </h2>  
          <p className="text-stone-500 text-sm font-light max-w-xs leading-relaxed">  
            Engineering sanctuaries for the world's most discerning travelers.   
            Access to the unreachable, by invitation only.  
          </p>  
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-8">  
          <div className="flex flex-col gap-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium">Navigation</span>  
            <nav className="flex flex-col gap-3 text-xs uppercase tracking-widest text-stone-600">  
              <Link href="/" className="hover:text-stone-900 transition-colors">Home</Link>  
              <Link href="/concierge" className="hover:text-stone-900 transition-colors">Concierge</Link>  
            </nav>  
          </div>  
            
          <div className="flex flex-col gap-4">  
            <span className="text-[10px] uppercase tracking-[0.2em] text-stone-400 font-medium">Legal</span>  
            <nav className="flex flex-col gap-3 text-xs uppercase tracking-widest text-stone-600">  
              <Link href="/privacy" className="hover:text-stone-900 transition-colors">Privacy</Link>  
              <Link href="/terms" className="hover:text-stone-900 transition-colors">Terms</Link>  
            </nav>  
          </div>  
        </div>  
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-400">  
        <p>&copy; {currentYear} NexVoyage Collective. All Rights Reserved.</p>  
        <p className="mt-4 md:mt-0 italic">Private Membership Only</p>  
      </div>  
    </footer>  
  )  
}  
