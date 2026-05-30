import Link from 'next/link'

export default function Footer() {  
  const currentYear = new Date().getFullYear()

  return (  
    <footer className="border-t border-stone-200 bg-white py-12 px-6 lg:px-12">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">  
        <div>  
          <h2 className="text-xl font-light tracking-widest text-stone-900 uppercase mb-2">  
            NexVoyage Collective  
          </h2>  
          <p className="text-stone-500 text-sm font-light max-w-xs">  
            Curating the unreachable for the world's most discerning travelers.  
          </p>  
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-xs uppercase tracking-widest text-stone-600">  
          <Link href="/concierge" className="hover:text-stone-900 transition-colors">  
            Concierge  
          </Link>  
          <Link href="/privacy" className="hover:text-stone-900 transition-colors">  
            Privacy  
          </Link>  
          <Link href="/terms" className="hover:text-stone-900 transition-colors">  
            Terms  
          </Link>  
        </nav>  
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-stone-100 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-stone-400">  
        <p>&copy; {currentYear} NexVoyage Collective. All Rights Reserved.</p>  
        <p className="mt-2 md:mt-0">Private Membership Only</p>  
      </div>  
    </footer>  
  )  
}  
