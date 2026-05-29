import './globals.css'  
import { Navigation } from './Navigation' // Import from the same folder

export default function RootLayout({  
children,  
}: {  
children: React.ReactNode  
}) {  
return (  
  <html lang="en">  
    <body className="antialiased bg-white text-black">  
      <Navigation />  
      <main className="min-h-screen pt-20">  
        {children}  
      </main>  
    </body>  
  </html>  
)  
}

export const metadata = {  
title: 'NexVoyage Collective',  
description: 'Quiet Luxury Travel',  
}  
