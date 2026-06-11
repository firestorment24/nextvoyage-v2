import './globals.css';  
import { Playfair_Display, Inter } from 'next/font/google';  
import Footer from '@/components/Footer';

const playfair = Playfair_Display({   
  subsets: ['latin'],   
  variable: '--font-playfair',  
  style: ['italic', 'normal']  
});

const inter = Inter({   
  subsets: ['latin'],   
  variable: '--font-inter'   
});

export const metadata = {  
  title: 'NexVoyage Collective | The New Standard of Travel',  
  description: 'High-stakes sanctuaries for high-net-worth travelers.',  
};

export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode;  
}) {  
  return (  
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>  
      <body className="bg-[#0A0A0A] font-sans antialiased text-white selection:bg-[#A68966]/30">  
        <main>{children}</main>  
        <Footer />  
      </body>  
    </html>  
  );  
}  
