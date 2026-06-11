import './globals.css'  
import { Inter } from 'next/font/google'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {  
  title: 'NexVoyage Collective | Curating the Unreachable',  
  description: 'Private travel architecture for high-net-worth individuals.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className={`${inter.className} bg-[#FCFAF7] text-[#1C1C1C] antialiased`}>  
        <Navigation />  
        <main>{children}</main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
