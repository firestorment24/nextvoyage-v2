import Link from 'next/link'

export default function Footer() {  
  return (  
    <footer className="bg-black text-white py-12 px-6 border-t border-white/10">  
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">  
        <div className="text-sm tracking-widest font-light opacity-50">  
          © 2026 NEXVOYAGE COLLECTIVE  
        </div>  
          
        <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-light">  
          <Link href="/privacy" className="hover:opacity-100 opacity-60 transition-opacity">  
            Privacy Policy  
          </Link>  
          <Link href="/terms" className="hover:opacity-100 opacity-60 transition-opacity">  
            Terms & Conditions  
          </Link>  
        </div>

        <div className="text-sm tracking-widest font-light opacity-50">  
          CURATING THE UNREACHABLE  
        </div>  
      </div>  
    </footer>  
  )  
}  
