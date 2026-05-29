import './globals.css'  
import { Navigation } from '../components/Navigation'

export const metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury Travel',  
  description: 'Bespoke sanctuaries for high networth travelers.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="antialiased bg-white text-black">  
        <Navigation />  
        <main className="min-h-screen pt-20">  
          {children}  
        </main>  
        <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 lg:px-8">  
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">  
            <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">  
              © 2026 NexVoyage Collective  
            </p>  
            <div className="flex gap-8">  
              <a href="/legal/privacy" className="text-[9px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Privacy</a>  
              <a href="/legal/terms" className="text-[9px] uppercase tracking-widest text-gray-400 hover:text-black transition-colors">Terms</a>  
            </div>  
          </div>  
        </footer>  
      </body>  
    </html>  
  )  
}  
