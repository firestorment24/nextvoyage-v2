import { Cormorant_Garamond, Inter } from 'next/font/google'  
import './globals.css'

const cormorant = Cormorant_Garamond({   
  subsets: ['latin'],  
  variable: '--font-serif',  
  weight: ['300', '400', '500', '600']  
})

const inter = Inter({   
  subsets: ['latin'],  
  variable: '--font-sans'  
})

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>  
      <body className="font-sans bg-[#F9F7F2] text-[#1A1A1A] antialiased">  
        {children}  
      </body>  
    </html>  
  )  
}  
