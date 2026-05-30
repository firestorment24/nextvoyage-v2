import Link from 'next/link';

export default function Footer() {  
  const currentYear = new Date().getFullYear();

  return (  
    <footer className="w-full bg-white border-t border-neutral-100 px-6 py-12 md:py-20">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">  
          
        {/* Branding & Copyright */}  
        <div className="space-y-4">  
          <p className="text-[11px] uppercase tracking-[0.3em] font-medium text-neutral-900">  
            NexVoyage Collective  
          </p>  
          <p className="text-[10px] text-neutral-400 tracking-wider">  
            © {currentYear} — All Rights Reserved.  
          </p>  
        </div>

        {/* Legal Navigation */}  
        <nav className="flex flex-wrap gap-x-8 gap-y-4">  
          <Link   
            href="/legal/privacy"   
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors duration-300"  
          >  
            Privacy  
          </Link>  
          <Link   
            href="/legal/terms"   
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors duration-300"  
          >  
            Terms  
          </Link>  
          <Link   
            href="/legal/safety"   
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors duration-300"  
          >  
            Safety  
          </Link>  
          <Link   
            href="/legal/consent"   
            className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 hover:text-black transition-colors duration-300"  
          >  
            Consent  
          </Link>  
        </nav>

        {/* Concierge Shortcut */}  
        <div>  
          <Link   
            href="/concierge"   
            className="text-[10px] uppercase tracking-[0.2em] px-6 py-3 border border-neutral-200 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 transition-all duration-500"  
          >  
            Private Concierge  
          </Link>  
        </div>

      </div>  
    </footer>  
  );  
}  
