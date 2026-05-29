import './globals.css'  
import { Inter } from 'next/font/google'  
import { Navigation } from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury Travel',  
  description: 'Bespoke sanctuaries for high net-worth travelers.',  
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
