import { Inter } from 'next/font/google'  
import { Navigation } from './Navigation' // Fixed named import  
import './globals.css'

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
      <body className={`${inter.className} bg-black text-white antialiased`}>  
        <Navigation />  
        <main>{children}</main>  
        <footer className="p-8 text-center text-xs text-zinc-500 uppercase tracking-widest">  
          © 2026 NexVoyage Collective. All inquiries strictly confidential.  
        </footer>  
      </body>  
    </html>  
  )  
}  
