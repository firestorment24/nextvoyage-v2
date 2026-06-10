import { Playfair_Display, Inter } from 'next/font/google'  
import './globals.css'

const playfair = Playfair_Display({   
  subsets: ['latin'],  
  variable: '--font-serif',  
  weight: ['400', '500', '600', '700']  
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>  
      <body className="font-sans bg-[#FCFAF7] text-[#1C1C1C] antialiased">  
        {children}  
      </body>  
    </html>  
  )  
}  
