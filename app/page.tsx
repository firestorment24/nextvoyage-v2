import React from 'react';  
import Link from 'next/link';  
import Navigation from '@/components/Navigation';  
import { SANCTUARIES_DATA } from '@/lib/data/sanctuaries';
'use client'

export default function HomePage() {  
  // We'll take the first 9 properties for the "Elite Ledger" 3x3 grid  
  const featuredProperties = SANCTUARIES_DATA.slice(0, 9); 
import React from 'react'        
import Link from 'next/link'

  return (  
    <main className="min-h-screen bg-[#0a0a0a] text-white selection:bg-[#D4AF37] selection:text-black">  
      {/* Nuclear CSS Overrides for Brass & Shadow Aesthetic */}  
      <style dangerouslySetInnerHTML={{ __html: `  
        h1 { color: #D4AF37 !important; font-weight: 300; }  
        h2 { color: #ffffff !important; }  
        .property-card:hover .property-image { filter: grayscale(0%); }  
        .property-image { filter: grayscale(100%); transition: filter 0.6s cubic-bezier(0.4, 0, 0.2, 1); }  
      `}} />
export default function HomePage() {        
const properties = [      
{ id: 'aman-new-york', name: 'Aman New York', loc: 'Manhattan, USA', img: 'https://www.aman.com/sites/default/files/2022-08/Correct_Aman%20New%20York_Landscape.jpg' },      
{ id: 'habitas-alula', name: 'Habitas AlUla', loc: 'Ashar Valley, Saudi Arabia', img: 'https://www.ourhabitas.com/wp-content/uploads/2021/12/Habitas_Al-Ula_2021_01_000008.jpg' },      
{ id: '7132-hotel', name: '7132 Hotel', loc: 'Vals, Switzerland', img: 'https://i0.wp.com/sidewalkhustle.com/wp-content/uploads/2026/03/web_20230116-357a8874_final-2023-julien-l-balmer-all-rights-reserved.jpg.webp' },      
{ id: 'passalacqua', name: 'Passalacqua', loc: 'Lake Como, Italy', img: 'https://bamo.com/wp-content/uploads/2025/04/bamo-passalacqua-hotel-luxury-design-09-e1759344642447.jpg' },      
{ id: 'bulgari-tokyo', name: 'Bulgari Hotel', loc: 'Tokyo, Japan', img: 'https://www.bulgarihotels.com/.imaging/bhr-960-jpg/dam/TOKYO-HOTEL/THE-HOTEL/DESTINATION/bulgari-hotel-tokyo-floor-terrace.jpg/jcr%3Acontent' },      
{ id: 'capella-ubud', name: 'Capella Ubud', loc: 'Bali, Indonesia', img: 'https://capellahotels.com/assets/img/site_images/ubud/ubud-home01.jpg' },      
{ id: 'amangiri', name: 'Amangiri', loc: 'Canyon Point, USA', img: 'https://www.aman.com/sites/default/files/2021-02/210204_AmanHero_Landscape_Amangiri.jpg' },      
{ id: 'maybourne-riviera', name: 'The Maybourne Riviera', loc: 'Roquebrune-Cap-Martin, France', img: 'https://library.maybourne.com/transform/aa5bed1a-fc77-49f7-a3b5-7f9625871f68/MBR-AZUR-SUITE-01-jpg?format=avif&quality=80&io=transform%3Afill%2Cwidth%3A1260%2Cheight%3A840&resolution=high' },      
{ id: 'aman-kyoto', name: 'Aman Kyoto', loc: 'Kyoto, Japan', img: 'https://www.aman.com/sites/default/files/2021-02/Aman-Kyoto_Homepage_1.jpg' },      
{ id: 'six-senses-southern-dunes', name: 'Six Senses Southern Dunes', loc: 'Red Sea, Saudi Arabia', img: 'https://archtene.com/wp-content/uploads/2026/03/ss5.jpg' },      
{ id: 'one-only-aesthesis', name: 'One&Only Aesthesis', loc: 'Athens, Greece', img: 'https://assets.kerzner.com/api/public/content/8761678806934ea9a633770485289849?v=7f8a1ab2&t=w2880' },      
{ id: 'singita-kwitonda', name: 'Singita Kwitonda Lodge', loc: 'Volcanoes National Park, Rwanda', img: 'https://images.ctfassets.net/wds1hqrprqxb/4xlmzPUDcL43cdOmzVGWb8/85ab1d40cc609879aa8b8da6ab1237de/SVNP_LODGE_Kwitonda_Lodge_Lounge_Ross_Couper_1.jpg?w=1920&h=1080&fl=progressive&q=90&fm=jpg' }      
];

      <Navigation />
return (        
<main className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">    

      {/* Hero Section */}  
      <section className="pt-32 pb-20 px-6 text-center">  
        <h1 className="text-5xl md:text-7xl mb-6 tracking-tighter uppercase italic">  
          The Elite Ledger  
        </h1>  
        <p className="text-zinc-500 max-w-2xl mx-auto uppercase tracking-widest text-xs">  
          A curated collection of the world's most clandestine sanctuaries.  
        </p>  
      </section>
{/* NUCLEAR CSS OVERRIDE: Brand Palette Enforcement */}    
<style dangerouslySetInnerHTML={{ __html: `    
  h1, h2, h3, h4, h5, h6, span, p {     
    background-color: transparent !important;     
    background: transparent !important;    
    box-shadow: none !important;    
  }  
  h1 { color: #D4AF37 !important; } /* Brass Gold */  
  h2, h3, h4, h5, h6, span, p { color: #FFFFFF !important; } /* White */  
  .text-gold { color: #D4AF37 !important; } /* Updated Gold Utility */    
`}} />    
        
{/* Hero Section */}        
<section className="relative h-screen w-full flex items-center justify-center overflow-hidden">        
  <div         
    className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"        
    style={{         
      backgroundImage: `url('https://cdn.marblism.com/qFTkeALRTbV.webp')`,        
      filter: 'brightness(0.45)'        
    }}        
  />        
  <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#0a0a0a]/40 to-[#0a0a0a]" />

      {/* 3x3 Elite Ledger Grid */}  
      <section className="max-w-7xl mx-auto px-6 pb-32">  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800/30 border border-zinc-800/30">  
          {featuredProperties.map((property) => (  
            <Link   
              key={property.id}   
              href={`/archive/${property.id}`}  
              className="property-card group relative bg-[#0a0a0a] p-8 border border-zinc-800/30 transition-all duration-500 hover:border-[#D4AF37]/50"  
            >  
              <div className="aspect-[4/5] overflow-hidden mb-8 bg-zinc-900">  
                <img   
                  src={property.image}   
                  alt={property.name}  
                  className="property-image w-full h-full object-cover"  
                />  
              </div>  
                
              <div className="flex justify-between items-start mb-2">  
                <span className="text-[10px] tracking-[0.2em] text-[#D4AF37] uppercase">  
                  {property.id}  
                </span>  
                <span className="text-[10px] tracking-[0.2em] text-zinc-600 uppercase">  
                  {property.loc}  
                </span>  
              </div>
  <div className="relative z-20 text-center px-6 max-w-5xl animate-in fade-in duration-1000">        
    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-[0.2em] uppercase mb-6 drop-shadow-2xl">        
      The Art of Discerning Travel        
    </h1>        
    <p className="text-lg md:text-xl font-light tracking-widest uppercase max-w-3xl mx-auto opacity-80">        
      Private sanctuaries and bespoke journeys for the world's most selective travelers.        
    </p>        
  </div>        
</section>

              <h3 className="text-xl font-light tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300">  
                {property.name}  
              </h3>  
                
              <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">  
                <span className="text-[10px] tracking-widest text-zinc-500 uppercase italic">  
                  View Dossier  
                </span>  
                <div className="h-px w-12 bg-[#D4AF37]"></div>  
              </div>  
            </Link>  
          ))}  
        </div>  
      </section>
{/* Signature Service Bar */}        
<section className="py-12 border-y border-[#D4AF37]/10 bg-[#0d0d0d]">        
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">        
    <div>        
      <p className="text-sm tracking-widest font-light opacity-50">24/7 GLOBAL CONCIERGE</p>        
    </div>        
    <div className="border-x border-[#D4AF37]/10">        
      <p className="text-sm tracking-widest font-light opacity-50">OFF-MARKET PROPERTIES</p>        
    </div>        
    <div>        
      <p className="text-sm tracking-widest font-light opacity-50">TAILORED ITINERARIES</p>        
    </div>        
  </div>        
</section>

      {/* Footer */}  
      <footer className="border-t border-zinc-900 py-12 px-6 text-center">  
        <p className="text-zinc-600 text-[10px] tracking-[0.3em] uppercase">  
          NexVoyage Collective © 2026 — All Rights Reserved  
        </p>  
      </footer>  
    </main>  
  );  
{/* Featured Properties Section */}        
<section className="py-24 px-6 bg-[#0a0a0a]">        
  <div className="max-w-7xl mx-auto">        
    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">        
      <div>        
        <span className="text-gold tracking-[0.4em] uppercase text-xs mb-4 block italic">Curated Collection</span>        
        <h2 className="text-4xl font-serif uppercase tracking-tighter">Featured Properties</h2>        
      </div>        
      <Link href="/archive" className="text-gold text-xs tracking-[0.3em] uppercase border-b border-[#D4AF37]/30 pb-1 hover:border-[#D4AF37] transition-all">        
        View Entire Ledger        
      </Link>        
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">        
      {properties.map((prop) => (        
        <Link key={prop.id} href={`/sanctuaries/${prop.id}`} className="group block">        
          <div className="relative aspect-[4/5] overflow-hidden bg-zinc-900 mb-6">        
            {/* IMAGE: COLOR BY DEFAULT -> GRAYSCALE ON HOVER */}    
            <img         
              src={prop.img}         
              alt={prop.name}        
              className="object-cover w-full h-full grayscale-0 group-hover:grayscale transition-all duration-700 scale-100 group-hover:scale-110 opacity-100 group-hover:opacity-80"        
            />        
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />        
          </div>        
          <h3 className="text-xl font-serif tracking-tight mb-1">{prop.name}</h3>        
          <p className="text-xs tracking-[0.2em] opacity-40 uppercase">{prop.loc}</p>        
        </Link>        
      ))}        
    </div>        
  </div>        
</section>

{/* Perspective Preview Section */}        
<section className="py-24 bg-[#0d0d0d] relative">        
  <div className="max-w-4xl mx-auto text-center px-6">        
    <div className="w-px h-24 bg-[#D4AF37]/30 mx-auto mb-12" />        
    <span className="text-gold tracking-[0.5em] uppercase text-xs mb-6 block">Editorial Perspective</span>        
    <h2 className="text-3xl md:text-5xl font-serif italic mb-8">The ROI of Reset</h2>        
    <p className="font-light leading-relaxed mb-12 max-w-2xl mx-auto opacity-60">        
      Explore our curated insights on high-density travel, quiet luxury, and the intellectual pursuit of the unreachable.        
    </p>        
    <Link href="/perspective" className="inline-block px-12 py-4 border border-[#D4AF37]/20 text-gold text-xs tracking-[0.3em] uppercase hover:bg-[#D4AF37] hover:text-black transition-all">        
      Read the Journal        
    </Link>        
  </div>        
</section>

</main>        
)        
}  
