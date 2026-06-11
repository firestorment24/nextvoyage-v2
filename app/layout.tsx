import './globals.css'  
import { Inter, Cormorant_Garamond } from 'next/font/google'  
import Navigation from '@/components/Navigation'  
import Footer from '@/components/Footer'

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-sans',  
})

const cormorant = Cormorant_Garamond({  
  subsets: ['latin'],  
  weight: ['300', '400', '500', '600', '700'],  
  style: ['normal', 'italic'],  
  variable: '--font-serif',  
})

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
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>  
      <body className="bg-[#FCFAF7] text-[#1C1C1C] antialiased font-sans">  
        <Navigation />  
        <main>{children}</main>  
        <Footer />  
      </body>  
    </html>  
  )  
}  
