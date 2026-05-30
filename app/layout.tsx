import './globals.css'  
import type { Metadata } from 'next'  
import { Inter } from 'next/font/google'  
import Footer from './Footer' // 1. Add this import at the top

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury',  
  description: 'The Guardian Layer for High Networth Travelers',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className={inter.className}>  
        <main min-h-screen>  
          {children}  
        </main>  
          
        <Footer /> {/* 2. Add this right here before the closing body tag */}  
      </body>  
    </html>  
  )  
}  
