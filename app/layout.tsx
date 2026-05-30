import './globals.css'  
import { Inter } from 'next/font/google'  
import Navigation from './Navigation'  
import Footer from './Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {  
  title: 'NexVoyage Collective | Luxury Travel Redefined',  
  description: 'Bespoke travel experiences for the high net worth traveler.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className={inter.className}>  
        <Navigation />  
        <main>{children}</main>  
        <Footer />  
      </body>  
    </html>  
  )  
} 
