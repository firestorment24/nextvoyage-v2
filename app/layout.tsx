// app/layout.tsx  
import './globals.css'  
import { Inter, Cormorant_Garamond } from 'next/font/google' // Added Cormorant  
import Link from 'next/link'

// Sans for UI elements  
const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-inter',  
})

// Serif for headlines and body copy  
const cormorant = Cormorant_Garamond({  
  subsets: ['latin'],  
  weight: ['300', '400', '500'],  
  variable: '--font-cormorant',  
})

export const metadata = {  
  title: 'NexVoyage Collective | The ROI of Reset',  
  description: 'Bespoke travel sanctuaries and elite concierge services for high-net-worth travelers.',  
}

function Navbar() {  
  return (  
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-zinc-100">  
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">  
        {/* Brand is Serif */}  
        <Link href="/" className={`${cormorant.className} text-2xl font-light tracking-widest hover:opacity-70 transition-opacity text-black uppercase`}>  
          NexVoyage Collective  
        </Link>  
          
        {/* Nav links are clean Sans */}  
        <div className={`${inter.className} flex gap-12 text-[10px] tracking-[0.3em] font-medium text-zinc-500 uppercase`}>  
          <Link href="/archive" className="hover:text-black transition-colors">  
            The Archive  
          </Link>  
          <Link href="/perspective" className="hover:text-black transition-colors">  
            The Perspective  
          </Link>  
          <Link href="/reserve" className="hover:text-black transition-colors">  
            The Reserve  
          </Link>  
        </div>  
      </div>  
    </nav>  
  )  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>  
      <body className={`${cormorant.className} bg-white text-black antialiased`}>  
        <Navbar />  
        <main className="pt-20 min-h-screen">  
          {children}  
        </main>  
          
        <footer className={`${inter.className} py-20 border-t border-zinc-100 mt-20`}>  
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
