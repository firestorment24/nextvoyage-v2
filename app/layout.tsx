import './globals.css'  
import Navigation from './Navigation' // No curly braces, and no ".." needed now!

export const metadata = {  
  title: 'NexVoyage Collective',  
  description: 'The website engine for NexVoyage Collective',  
}

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body className="bg-black">  
        <Navigation />  
        {children}  
      </body>  
    </html>  
  )  
}  
