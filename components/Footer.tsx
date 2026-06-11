import Link from 'next/link';

export default function Footer() {  
  return (  
    <footer className="bg-white py-20 px-8 border-t border-neutral-100">  
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">  
          
        {/* Collection Column */}  
        <div className="space-y-6">  
          <h4 className="font-medium tracking-widest uppercase text-neutral-400 text-xs">Collection</h4>  
          <ul className="space-y-4">  
            <li>  
              <Link href="/sanctuaries" className="hover:text-[#C5A059] transition-colors">  
                The Sanctuaries  
              </Link>  
            </li>  
            <li>  
              <Link href="/journal" className="hover:text-[#C5A059] transition-colors">  
                Journal  
              </Link>  
            </li>  
            <li>  
              <Link href="/perspective" className="hover:text-[#C5A059] transition-colors">  
                Perspective  
              </Link>  
            </li>  
          </ul>  
        </div>

        {/* Connect Column */}  
        <div className="space-y-6">  
          <h4 className="font-medium tracking-widest uppercase text-neutral-400 text-xs">Connect</h4>  
          <ul className="space-y-4">  
            <li>  
              <Link href="/concierge" className="text-[#C5A059] font-medium hover:opacity-80 transition-opacity">  
                The Concierge  
              </Link>  
            </li>  
            <li>  
              <a href="https://instagram.com/nexvoyage" target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A059] transition-colors">  
                Instagram  
              </a>  
            </li>  
          </ul>  
        </div>

        {/* Legal Column */}  
        <div className="space-y-6">  
          <h4 className="font-medium tracking-widest uppercase text-neutral-400 text-xs">Legal</h4>  
          <ul className="space-y-4 text-neutral-500">  
            <li>  
              <Link href="/privacy" className="hover:text-black transition-colors">  
                Privacy Policy  
              </Link>  
            </li>  
            <li>  
              <Link href="/terms" className="hover:text-black transition-colors">  
                Terms of Service  
              </Link>  
            </li>  
          </ul>  
        </div>

      </div>  
        
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-neutral-50 flex justify-between items-center text-[10px] uppercase tracking-[0.2em] text-neutral-400">  
        <p>© 2026 NexVoyage Collective</p>  
        <p>Private & Confidential</p>  
      </div>  
    </footer>  
  );  
}  
