import './globals.css'    
import { Navigation } from './Navigation' 

export const metadata = {    
  title: 'NexVoyage Collective',  
  description: 'Bespoke travel for high net worth individuals',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-black text-white">  
        <Navigation />  
        <main>{children}</main>  
      </body>  
    </html>  
  )  
}  
