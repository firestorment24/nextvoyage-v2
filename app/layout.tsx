// app/layout.tsx  
import './globals.css'  
import { Inter } from 'next/font/google'  
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {  
  title: 'NexVoyage Collective | The ROI of Reset',  
  description: 'Bespoke travel sanctuaries and elite concierge services for high-net-worth travelers.',  
}

// Internal component - No "export default" here!  
function GlobalNavbar() {  
  return (  
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-100">  
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
        <Link href="/" className="text-xl font-light tracking-[0.2em] hover:opacity-70 transition-opacity text-black">  
          NEXVOYAGE COLLECTIVE  
        </Link>  
          
        <div className="flex gap-12 text-[10px] tracking-[0.3em] font-medium text-zinc-500">  
          <Link href="/archive" className="hover:text-black transition-colors uppercase">  
            The Archive  
          </Link>  
          <Link href="/perspective" className="hover:text-black transition-colors uppercase">  
            The Perspective  
          </Link>  
          <Link href="/reserve" className="hover:text-black transition-colors uppercase">  
            The Reserve  
          </Link>  
        </div>  
      </div>  
    </nav>  
  )  
}

// This is the ONLY export default in the file  
export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className={inter.className}>  
        <GlobalNavbar />  
        <main className="pt-20">  
          {children}  
        </main>  
          
        <footer className="py-20 border-t border-zinc-100 mt-20">  
          <div className="max-w-7xl mx-auto px-6 text-[10px] tracking-[0.2em] text-zinc-400 flex justify-between uppercase">  
            <p>© 2026 NexVoyage Collective</p>  
            <div className="flex gap-8">  
              <Link href="/privacy" className="hover:text-black">Privacy</Link>  
              <Link href="/terms" className="hover:text-black">Terms</Link>  
            </div>  
          </div>  
        </footer>  
      </body>  
    </html>  
  )  
}  
