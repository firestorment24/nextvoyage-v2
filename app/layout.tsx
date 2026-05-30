import type { Metadata } from 'next'  
import { Inter } from 'next/font/google'  
import './globals.css'  
import Navigation from './Navigation'  
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {  
  title: 'NexVoyage Collective',  
  description: 'Quiet Luxury Travel Sanctuaries.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en" className="scroll-smooth">  
      <body className={`${inter.className} bg-white antialiased`}>  
        <Navigation />  
        <main className="min-h-screen">  
          {children}  
        </main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
