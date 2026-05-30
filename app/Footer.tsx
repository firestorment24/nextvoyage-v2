import Link from 'next/link';

export default function Footer() {  
  const currentYear = new Date().getFullYear();

  return (  
    <footer className="w-full border-t border-zinc-100 bg-white py-12 mt-20">  
      <div className="max-w-7xl mx-auto px-6">  
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">  
          {/* Copyright & Branding */}  
          <div className="text-sm font-light text-zinc-400 tracking-tight">  
            © {currentYear} NexVoyage Collective. All rights reserved.  
          </div>  
            
          {/* Legal Links */}  
          <nav className="flex items-center space-x-10">  
            <Link   
              href="/privacy-policy"   
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-black transition-colors"  
            >  
              Privacy Policy  
            </Link>  
            <Link   
              href="/terms-and-conditions"   
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 hover:text-black transition-colors"  
            >  
              Terms and Conditions  
            </Link>  
          </nav>  
        </div>  
      </div>  
    </footer>  
  );  
}  
