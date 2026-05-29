import { Navigation } from '@/components/Navigation'

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
