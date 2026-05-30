import './globals.css'  
 import { Navigation } from './Navigation' 
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
