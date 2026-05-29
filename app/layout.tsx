import './globals.css'  
import { Navigation } from '../components/Navigation'

export const metadata = {  
  title: 'NexVoyage Collective | Quiet Luxury Travel',  
  description: 'Bespoke sanctuaries for high networth travelers.',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="antialiased">  
        <Navigation />  
        <main className="pt-20">  
          {children}  
        </main>  
      </body>  
    </html>  
  )  
}  
