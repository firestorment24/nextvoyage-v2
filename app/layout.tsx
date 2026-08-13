import './globals.css';  
import type { Metadata } from 'next';  
import Navigation from '@/components/Navigation';  
import Footer from '@/components/Footer';  
import DiscoveryCallCTA from '@/components/DiscoveryCallCTA';

export const metadata: Metadata = {  
metadataBase: new URL('https://nexvoyagecollective.com'),  
title: {  
  default: 'NexVoyage Collective | Private Travel Office',  
  template: '%s | NexVoyage Collective',  
},  
description:  
  'A private travel office for discerning travelers — curated private properties, unlisted estate access, and seamless journeys, managed end to end.',  
keywords: [  
  'private travel office',  
  'luxury travel',  
  'bespoke journeys',  
  'private estates',  
  'NexVoyage Collective',  
],  
openGraph: {  
  title: 'NexVoyage Collective | Private Travel Office',  
  description:  
    'A private travel office for discerning travelers — curated private properties, unlisted estate access, and seamless journeys, managed end to end.',  
  type: 'website',  
  locale: 'en_US',  
  url: 'https://nexvoyagecollective.com',  
  siteName: 'NexVoyage Collective',  
},  
twitter: {  
  card: 'summary_large_image',  
  title: 'NexVoyage Collective | Private Travel Office',  
  description:  
    'A private travel office for discerning travelers — curated private properties, unlisted estate access, and seamless journeys.',  
},  
robots: {  
  index: true,  
  follow: true,  
},  
};

export default function RootLayout({  
children,  
}: {  
children: React.ReactNode;  
}) {  
return (  
  <html lang="en">  
    <body className="bg-[#0A0A0A] font-sans antialiased">  
      <Navigation />  
      {children}  
      <Footer />  
      <DiscoveryCallCTA />  
    </body>  
  </html>  
);  
}  
