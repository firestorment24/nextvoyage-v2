import './globals.css'  
import { Navigation } from '../components/Navigation'

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="antialiased">  
        <Navigation />  
        <main className="pt-20">{children}</main>  
      </body>  
    </html>  
  )  
}

export const metadata = {  
  title: 'NexVoyage Collective',  
  description: 'Quiet Luxury Travel',  
}  
