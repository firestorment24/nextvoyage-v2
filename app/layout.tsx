import type { Metadata } from 'next'  
import { Inter } from 'next/font/google'  
import './globals.css'  
import Navigation from './components/Navigation'  
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury Travel',  
  description: 'Private sanctuaries and curated experiences for the modern nomad.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en" className="scroll-smooth">  
      <body className={`${inter.className} bg-white antialiased`}>  
        {/* Global Navigation - appears on all pages */}  
        <Navigation />

        {/* Main Content Area */}  
        <main className="min-h-screen">  
          {children}  
        </main>

        {/* Global Footer - appears on all pages */}  
        <Footer />  
      </body>  
    </html>  
  )  
}  
