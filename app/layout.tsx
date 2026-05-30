import Link from 'next/link'

export default function Footer() {  
  return (  
    <footer className="py-10 px-6 border-t border-white/10 bg-black text-white/50 text-xs tracking-widest uppercase">  
      <div className="max-row flex flex-col md:flex-row justify-between items-center gap-6">  
        <div className="flex gap-8">  
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>  
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>  
        </div>  
        <div>© 2026 NEXVOYAGE COLLECTIVE</div>  
      </div>  
    </footer>  
  )  
}  
 
 
