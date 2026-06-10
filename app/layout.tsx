import { Inter } from 'next/font/google'  
import Navigation from './Navigation'  
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {  
  title: 'NexVoyage Collective | Luxury Sanctuary Group',  
  description: 'Bespoke travel and security-focused property management for high-net-worth individuals.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className={`${inter.className} bg-black text-white antialiased`}>  
        <Navigation />  
        <main>{children}</main>  
      </body>  
    </html>  
  )  
}  
