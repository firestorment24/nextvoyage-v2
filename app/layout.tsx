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
        <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 lg:px-8 text-center">  
          <p className="text-[10px] uppercase tracking-widest text-gray-400">  
            © 2026 NexVoyage Collective. All Rights Reserved.  
          </p>  
        </footer>  
      </body>  
    </html>  
  )  
}  
