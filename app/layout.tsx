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
        <main className="min-h-screen">  
          {children}  
        </main>  
        <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 lg:px-8">  
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">  
            <div>  
              <p className="text-sm font-serif mb-4">NexVoyage Collective</p>  
              <p className="text-xs text-gray-400 max-w-xs leading-relaxed">  
                Curating quiet luxury for the modern traveler.  
              </p>  
            </div>  
            <div className="flex flex-col gap-3">  
              <a href="/legal/privacy" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black">Privacy Policy</a>  
              <a href="/legal/terms" className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-black">Terms & Conditions</a>  
            </div>  
          </div>  
        </footer>  
      </body>  
    </html>  
  )  
}  
